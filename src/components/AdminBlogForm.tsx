
'use client';

import React, { useState } from 'react';

export default function AdminBlogForm() {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, slug, content, published }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to create blog');
      }

      setSuccess('Blog created successfully!');
      setTitle('');
      setSlug('');
      setContent('');
      setPublished(false);
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
          Slug:
          <input
            type="text"
            value={slug}
            onChange={e => setSlug(e.target.value)}
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
        {loading ? 'Creating...' : 'Create Blog'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
}
