import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { PrismaClient } from '@prisma/client';

const resend = new Resend(process.env.RESEND_API_KEY);
const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    // Check if email already exists
    const existingEntry = await prisma.waitlist.findUnique({
      where: { email }
    });

    if (existingEntry) {
      return Response.json({ error: 'Email already registered' }, { status: 400 });
    }

    // Add to waitlist
    await prisma.waitlist.create({
      data: { email }
    });

    // Get total count
    const totalCount = await prisma.waitlist.count();

    // Send welcome email
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to our waitlist!',
      react: EmailTemplate({ firstName: email.split('@')[0] }),
    });

    if (error) {
      console.error('Email sending failed:', error);
      // Don't fail the request if email fails, user is still added to waitlist
    }

    return Response.json({ 
      message: 'Successfully added to waitlist',
      totalCount 
    });

  } catch (error) {
    console.error('Waitlist error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}