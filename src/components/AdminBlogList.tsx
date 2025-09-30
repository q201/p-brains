
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

async function fetchAdminBlogs() {
  const res = await fetch('/api/admin/blogs');
  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.error || 'Failed to fetch blogs');
  }
  return res.json();
}

async function deleteBlog(blogId: string) {
  const res = await fetch(`/api/admin/blogs/${blogId}`, { method: 'DELETE' });
  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.error || 'Failed to delete blog');
  }
}

export default function AdminBlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await fetchAdminBlogs();
        setPosts(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, []);

  const handleDeleteBlog = async (blogId: string) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await deleteBlog(blogId);
        setPosts(posts.filter(post => post.id !== blogId));
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    }
  };

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!posts || posts.length === 0) return <p>No blogs found.</p>;

  return (
    <div>
      <Link href="/admin/blogs/new">
        <button>Create New Blog</button>
      </Link>
      <table border={1} cellPadding={8} cellSpacing={0} style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Published</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.slug}</td>
              <td>{post.published ? 'Yes' : 'No'}</td>
              <td>{new Date(post.createdAt).toLocaleString()}</td>
              <td>{new Date(post.updatedAt).toLocaleString()}</td>
              <td>
                <Link href={`/admin/blogs/edit/${post.slug}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDeleteBlog(post.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
