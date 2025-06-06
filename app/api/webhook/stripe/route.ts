import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { PrismaClient } from '@prisma/client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const body = await req.text();
        const signature = (await headers()).get('stripe-signature');

        if (!signature) {
            console.error('No Stripe signature found');
            return NextResponse.json({ error: 'No signature' }, { status: 400 });
        }

        let data;
        let eventType;
        let event;

        // verify Stripe event is legit
        try {
            event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
        } catch (err: any) {
            console.error(`Webhook signature verification failed. ${err.message}`);
            return NextResponse.json({ error: err.message }, { status: 400 });
        }

        data = event.data;
        eventType = event.type;

        try {
            switch (eventType) {
                case 'checkout.session.completed': {
                    // First payment is successful and a subscription is created
                    let user;
                    const session = await stripe.checkout.sessions.retrieve(
                        (data.object as Stripe.Checkout.Session).id,
                        {
                            expand: ['line_items']
                        }
                    );
                    
                    const customerId = session?.customer as string;
                    const customer = await stripe.customers.retrieve(customerId) as Stripe.Customer;
                    const priceId = session?.line_items?.data[0]?.price?.id;

                    if (customer.email) {
                        // Check if user already exists
                        user = await prisma.user.findUnique({
                            where: { email: customer.email }
                        });

                        if (!user) {
                            // Create new user if doesn't exist
                            user = await prisma.user.create({
                                data: {
                                    id: customerId, // Using Stripe customer ID as user ID
                                    email: customer.email,
                                    name: customer.name || customer.email.split('@')[0],
                                    emailVerified: true, // Assuming email is verified through Stripe
                                    createdAt: new Date(),
                                    updatedAt: new Date(),
                                }
                            });
                        }

                        // Update user with subscription data
                        await prisma.user.update({
                            where: { id: user.id },
                            data: {
                                updatedAt: new Date(),
                                // Add custom fields for subscription if you want to extend the schema
                            }
                        });

                        console.log(`✅ User ${customer.email} granted access with price ID: ${priceId}`);

                        // TODO: Send welcome email to user
                        // await sendWelcomeEmail(customer.email, user.name);

                    } else {
                        console.error('No customer email found');
                        throw new Error('No customer email found');
                    }

                    break;
                }

                case 'customer.subscription.deleted': {
                    // ❌ Revoke access to the product
                    const subscription = await stripe.subscriptions.retrieve(
                        (data.object as Stripe.Subscription).id
                    );
                    
                    const customerId = subscription.customer as string;
                    
                    // Find user by customer ID (which we used as user ID)
                    const user = await prisma.user.findUnique({
                        where: { id: customerId }
                    });

                    if (user) {
                        // Update user to revoke access
                        await prisma.user.update({
                            where: { id: user.id },
                            data: {
                                updatedAt: new Date(),
                                // You might want to add a hasAccess field to track subscription status
                                // hasAccess: false
                            }
                        });

                        console.log(`❌ Access revoked for user: ${user.email}`);

                        // TODO: Send cancellation email
                        // await sendCancellationEmail(user.email, user.name);
                    }

                    break;
                }

                case 'invoice.payment_succeeded': {
                    // Handle recurring payment success
                    const invoice = data.object as Stripe.Invoice;
                    const customerId = invoice.customer as string;

                    const user = await prisma.user.findUnique({
                        where: { id: customerId }
                    });

                    if (user) {
                        await prisma.user.update({
                            where: { id: user.id },
                            data: {
                                updatedAt: new Date(),
                                // Update subscription status if needed
                            }
                        });

                        console.log(`💰 Payment successful for user: ${user.email}`);
                    }

                    break;
                }

                case 'invoice.payment_failed': {
                    // Handle failed payment
                    const invoice = data.object as Stripe.Invoice;
                    const customerId = invoice.customer as string;

                    const user = await prisma.user.findUnique({
                        where: { id: customerId }
                    });

                    if (user) {
                        console.log(`❗ Payment failed for user: ${user.email}`);
                        
                        // TODO: Send payment failed email
                        // await sendPaymentFailedEmail(user.email, user.name);
                    }

                    break;
                }

                default:
                    console.log(`Unhandled event type: ${eventType}`);
            }
        } catch (e: any) {
            console.error(
                'Stripe webhook error: ' + e.message + ' | EVENT TYPE: ' + eventType
            );
            return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
        }

        return NextResponse.json({ received: true });

    } catch (error: any) {
        console.error('Webhook error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}