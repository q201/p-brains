
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { withAuth } from '@/lib/auth';

async function postHandler(req: NextRequest, user: { id: string }) {
  try {
    const { title, content, slug, published } = await req.json();

    if (!title || !content || !slug) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const post = await db.post.create({
      data: {
        title,
        content,
        slug,
        published: published ?? false,
        authorId: user.id,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}

async function getHandler(req: NextRequest) {
  try {
    const posts = await db.post.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export const POST = withAuth(postHandler, ['ADMIN']);
export const GET = withAuth(getHandler, ['ADMIN']);

