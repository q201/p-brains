
'use client';

import React, { useEffect, useState } from 'react';

async function fetchStats() {
  const res = await fetch('/api/admin/stats');
  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.error || 'Failed to fetch stats');
  }
  return res.json();
}

interface Stats {
  userCount: number;
  blogCount: number;
  commentCount: number;
  categoryCount: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadStats() {
      try {
        const data = await fetchStats();
        setStats(data);
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

    loadStats();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {loading && <p>Loading stats...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {stats && (
        <div>
          <p>Total Users: {stats.userCount}</p>
          <p>Total Blogs: {stats.blogCount}</p>
          <p>Total Comments: {stats.commentCount}</p>
          <p>Total Categories: {stats.categoryCount}</p>
        </div>
      )}
    </div>
  );
}
