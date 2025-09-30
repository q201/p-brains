
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { withAuth } from '@/lib/auth';

async function handler(req: Request) {
  try {
    const userCount = await db.user.count();
    const blogCount = await db.blog.count();

    return NextResponse.json({ userCount, blogCount });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}

export const GET = withAuth(handler, ['admin']);
