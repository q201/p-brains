
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { withAuth } from '@/lib/auth';

async function handler(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (req.method === 'PUT') {
    try {
      const { title, content, published } = await req.json();
      const post = await db.post.update({
        where: { id },
        data: { title, content, published },
      });
      return NextResponse.json(post);
    } catch (error) {
      console.error('Error updating post:', error);
      return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
    }
  } else if (req.method === 'DELETE') {
    try {
      await db.post.delete({ where: { id } });
      return new Response(null, { status: 204 });
    } catch (error) {
      console.error('Error deleting post:', error);
      return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: `Method ${req.method} Not Allowed` }, { status: 405 });
  }
}

export const PUT = withAuth(handler, ['ADMIN']);
export const DELETE = withAuth(handler, ['ADMIN']);
