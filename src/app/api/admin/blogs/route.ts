
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { withAuth } from '@/lib/auth';

async function postHandler(req: NextRequest, user: { id: string }) {
  try {
    const { title, content, slug, published } = await req.json();

    if (!title || !content || !slug) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const blog = await db.blog.create({
      data: {
        title,
        content,
        slug,
        published: published ?? false,
        authorId: user.id,
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}

async function getHandler(req: NextRequest) {
  try {
    const blogs = await db.blog.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export const POST = withAuth(postHandler, ['ADMIN']);
export const GET = withAuth(getHandler, ['ADMIN']);

