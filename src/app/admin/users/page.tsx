
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import AdminUserList from '@/components/AdminUserList';

export default function AdminUsersPage() {
  return (
    <AdminLayout>
      <AdminUserList />
    </AdminLayout>
  );
}
