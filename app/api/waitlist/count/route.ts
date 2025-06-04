import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const count = await prisma.waitlist.count();
    return Response.json({ count });
  } catch (error) {
    console.error('Error fetching waitlist count:', error);
    return Response.json({ error: 'Failed to fetch count' }, { status: 500 });
  }
}