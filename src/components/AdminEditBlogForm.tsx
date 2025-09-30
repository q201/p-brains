
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
}

async function fetchBlog(slug: string) {
  const res = await fetch(`/api/blogs/${slug}`);
  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.error || 'Failed to fetch blog');
  }
  return res.json();
}

async function updateBlog(id: string, data: any) {
  const res = await fetch(`/api/admin/blogs/${id}`,
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.error || 'Failed to update blog');
  }
  return res.json();
}

export default function AdminEditBlogForm({ slug }: { slug: string }) {
  const [post, setPost] = useState<Post | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function loadBlog() {
      try {
        const data = await fetchBlog(slug);
        setPost(data);
        setTitle(data.title);
        setContent(data.content);
        setPublished(data.published);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    }

    loadBlog();
  }, [slug]);

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if (!post) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await updateBlog(post.id, { title, content, published });
      setSuccess('Blog updated successfully!');
      router.push('/admin/blogs');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }

  if (!post) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Content:
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            required
            rows={6}
            style={{ width: '100%' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Published:
          <input
            type="checkbox"
            checked={published}
            onChange={e => setPublished(e.target.checked)}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Updating...' : 'Update Blog'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
}
