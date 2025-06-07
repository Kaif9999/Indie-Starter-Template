import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { Webhook } from "standardwebhooks";

const prisma = new PrismaClient();
const webhook = new Webhook(process.env.DODO_WEBHOOK_SECRET!);


const PRO_MONTHLY_PRODUCT_ID = "pdt_monthly_plan_id"; // Replace with actual monthly plan ID
const PRO_YEARLY_PRODUCT_ID = "yearly_plan_id"; // Replace with actual yearly plan ID

export async function POST(req: Request) {
  try {
    const headersList = await headers();
    const rawBody = await req.text();

    // Get webhook headers according to Dodo's specification
    const webhookHeaders = {
      "webhook-id": headersList.get("webhook-id") || "",
      "webhook-signature": headersList.get("webhook-signature") || "",
      "webhook-timestamp": headersList.get("webhook-timestamp") || "",
    };

    // Verify the webhook using standardwebhooks
    try {
      await webhook.verify(rawBody, webhookHeaders);
    } catch (error) {
      console.error("Webhook verification failed:", error);
      return NextResponse.json({ error: "Invalid webhook signature" }, { status: 401 });
    }

    const payload = JSON.parse(rawBody);
    
    console.log("Webhook received:", {
      type: payload.type,
      customer: payload.data?.customer?.email,
      subscription: payload.data?.subscription_id,
      product: payload.data?.product_id,
    });

    switch (payload.type) {
      case "payment.succeeded":
        return handlePaymentSuccess(payload);
      case "subscription.active":
        return handleSubscriptionActive(payload);
      case "subscription.cancelled":
        return handleSubscriptionCancelled(payload);
      case "subscription.expired":
        return handleSubscriptionExpired(payload);
      default:
        console.log("Unhandled webhook type:", payload.type);
        return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Error processing webhook" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

async function handlePaymentSuccess(payload: any) {
  try {
    const userEmail = payload.data.customer.email;
    const productId = payload.data.product_id;
    
    if (!userEmail) {
      console.error("No customer email found in payload");
      return NextResponse.json({ error: "No customer email" }, { status: 400 });
    }

    console.log("Processing payment success:", { 
      email: userEmail, 
      productId,
      isMonthly: productId === PRO_MONTHLY_PRODUCT_ID,
      isYearly: productId === PRO_YEARLY_PRODUCT_ID
    });

    // Find user by email
    let user = await prisma.user.findUnique({
      where: { email: userEmail }
    });

    if (!user) {
      // Create new user if doesn't exist
      user = await prisma.user.create({
        data: {
          id: `dodo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          email: userEmail,
          name: userEmail.split('@')[0],
          emailVerified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      });
      console.log(`✅ Created new user: ${userEmail}`);
    }

    // Handle different product types
    if (productId === PRO_MONTHLY_PRODUCT_ID) {
      // Lifetime subscription - grant immediate access
      await prisma.user.update({
        where: { id: user.id },
        data: {
          updatedAt: new Date(),
          // Add custom fields if you have them
          // hasLifetimeAccess: true,
          // subscriptionType: 'LIFETIME'
        }
      });

      console.log(`✅ Lifetime access granted for user: ${userEmail} with product ID: ${productId}`);
    } else if (productId === PRO_MONTHLY_PRODUCT_ID || productId === PRO_YEARLY_PRODUCT_ID) {
      // Pro subscriptions (monthly/yearly) - will be handled in subscription.active
      await prisma.user.update({
        where: { id: user.id },
        data: {
          updatedAt: new Date(),
        }
      });

      console.log(`✅ Pro payment successful for user: ${userEmail} with product ID: ${productId}`);
    } else {
      console.log(`⚠️ Unknown product ID: ${productId} for user: ${userEmail}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error handling payment success:", error);
    return NextResponse.json(
      { error: "Failed to process payment success" },
      { status: 500 }
    );
  }
}

async function handleSubscriptionActive(payload: any) {
  try {
    const userEmail = payload.data.customer.email;
    const productId = payload.data.product_id;
    const subscriptionId = payload.data.subscription_id;
    
    console.log("Processing subscription activation:", {
      email: userEmail,
      productId,
      subscriptionId,
      isMonthly: productId === PRO_MONTHLY_PRODUCT_ID,
      isYearly: productId === PRO_YEARLY_PRODUCT_ID
    });

    // Skip processing for lifetime subscriptions as they're handled in payment success
    if (productId === PRO_YEARLY_PRODUCT_ID) {
      return NextResponse.json({ success: true });
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: userEmail }
    });

    if (!user) {
      console.error(`User not found for email: ${userEmail}`);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update user with subscription info
    await prisma.user.update({
      where: { id: user.id },
      data: {
        updatedAt: new Date(),
        // Store subscription metadata if needed
        // subscriptionId: subscriptionId,
        // productId: productId,
        // subscriptionType: productId === PRO_YEARLY_PRODUCT_ID ? 'PRO_YEARLY' : 'PRO_MONTHLY'
      }
    });

    const planType = productId === PRO_YEARLY_PRODUCT_ID ? "Yearly" : "Monthly";
    console.log(`✅ ${planType} Pro subscription activated for user: ${userEmail} with product ID: ${productId}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error handling subscription active:", error);
    return NextResponse.json(
      { error: "Failed to process subscription active" },
      { status: 500 }
    );
  }
}

async function handleSubscriptionCancelled(payload: any) {
  try {
    const subscriptionId = payload.data.subscription_id;
    const userEmail = payload.data.customer?.email;
    
    console.log("Processing subscription cancellation:", { 
      subscriptionId,
      email: userEmail 
    });

    // Find user by email
    let user;
    if (userEmail) {
      user = await prisma.user.findUnique({
        where: { email: userEmail }
      });
    }

    if (!user) {
      console.error(`User not found for subscription: ${subscriptionId}`);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update user subscription status
    await prisma.user.update({
      where: { id: user.id },
      data: {
        updatedAt: new Date(),
        // Mark subscription as cancelled if you have such fields
        // subscriptionStatus: 'cancelled',
        // subscriptionId: null
      }
    });

    console.log(`❌ Subscription cancelled for user: ${user.email}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error handling subscription cancellation:", error);
    return NextResponse.json(
      { error: "Failed to process subscription cancellation" },
      { status: 500 }
    );
  }
}

async function handleSubscriptionExpired(payload: any) {
  try {
    const subscriptionId = payload.data.subscription_id;
    const userEmail = payload.data.customer?.email;
    
    console.log("Processing subscription expiration:", { 
      subscriptionId,
      email: userEmail 
    });

    // Find user by email
    let user;
    if (userEmail) {
      user = await prisma.user.findUnique({
        where: { email: userEmail }
      });
    }

    if (!user) {
      console.error(`User not found for subscription: ${subscriptionId}`);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update user to revoke access
    await prisma.user.update({
      where: { id: user.id },
      data: {
        updatedAt: new Date(),
        // Mark subscription as expired
        // subscriptionStatus: 'expired',
        // subscriptionId: null
      }
    });

    console.log(`❌ Subscription expired for user: ${user.email}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error handling subscription expiration:", error);
    return NextResponse.json(
      { error: "Failed to process subscription expiration" },
      { status: 500 }
    );
  }
}