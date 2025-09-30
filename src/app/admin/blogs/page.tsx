
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import AdminBlogList from '@/components/AdminBlogList';

export default function AdminBlogsPage() {
  return (
    <AdminLayout>
      <AdminBlogList />
    </AdminLayout>
  );
}
