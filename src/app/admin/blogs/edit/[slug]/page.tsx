
'use client';

import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import AdminEditBlogForm from '@/components/AdminEditBlogForm';

export default function EditBlogPage({ params }: { params: { slug: string } }) {
  return (
    <AdminLayout>
      <AdminEditBlogForm slug={params.slug} />
    </AdminLayout>
  );
}
