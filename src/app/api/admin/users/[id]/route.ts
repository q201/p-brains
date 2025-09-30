
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { withAuth } from '@/lib/auth';

async function handler(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (req.method === 'PUT') {
    try {
      const { role } = await req.json();
      const user = await db.user.update({
        where: { id },
        data: { role },
      });
      return NextResponse.json(user);
    } catch (error) {
      console.error('Error updating user role:', error);
      return NextResponse.json({ error: 'Failed to update user role' }, { status: 500 });
    }
  } else if (req.method === 'DELETE') {
    try {
      await db.user.delete({ where: { id } });
      return new Response(null, { status: 204 });
    } catch (error) {
      console.error('Error deleting user:', error);
      return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: `Method ${req.method} Not Allowed` }, { status: 405 });
  }
}

export const PUT = withAuth(handler, ['admin']);
export const DELETE = withAuth(handler, ['admin']);
