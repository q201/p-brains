'use client';

import React, { useEffect, useState } from 'react';

// Define a type for the user for better type safety.
interface User {
  id: string;
  email: string;
  name?: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

async function fetchAdminUsers() {
  const res = await fetch('/api/admin/users');
  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.error || 'Failed to fetch users');
  }
  return res.json();
}

async function updateUserRole(userId: string, role: string) {
  const res = await fetch(`/api/admin/users/${userId}`,
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ role }),
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.error || 'Failed to update user role');
  }
  return res.json();
}

async function deleteUser(userId: string) {
  const res = await fetch(`/api/admin/users/${userId}`, { method: 'DELETE' });
  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.error || 'Failed to delete user');
  }
}

export default function AdminUserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string>('');

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await fetchAdminUsers();
        setUsers(data);
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

    loadUsers();
  }, []);

  const handleEditClick = (user: User) => {
    setEditingUserId(user.id);
    setSelectedRole(user.role);
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
    setSelectedRole('');
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  const handleUpdateRole = async (userId: string) => {
    try {
      await updateUserRole(userId, selectedRole);
      setUsers(users.map(user => (user.id === userId ? { ...user, role: selectedRole } : user)));
      handleCancelEdit();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId);
        setUsers(users.filter(user => user.id !== userId));
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    }
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!users || users.length === 0) return <p>No users found.</p>;

  return (
    <table border={1} cellPadding={8} cellSpacing={0} style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Name</th>
          <th>Role</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.name || '-'}</td>
            <td>
              {editingUserId === user.id ? (
                <select value={selectedRole} onChange={handleRoleChange}>
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
              ) : (
                user.role
              )}
            </td>
            <td>{new Date(user.createdAt).toLocaleString()}</td>
            <td>{new Date(user.updatedAt).toLocaleString()}</td>
            <td>
              {editingUserId === user.id ? (
                <>
                  <button onClick={() => handleUpdateRole(user.id)}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEditClick(user)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
