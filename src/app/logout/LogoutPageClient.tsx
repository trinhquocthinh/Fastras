'use client';

import type { Route } from 'next';
import Link from 'next/link';

import { AuthCardLayout } from '@/components';
import { logoutContent } from '@/constants/auth';
import { useAuth } from '@/hooks';
import type { AuthCardContent } from '@/types';

const logoutCardContent: AuthCardContent = {
  id: logoutContent.id,
  title: logoutContent.title,
  description: logoutContent.description,
  primaryActionLabel: logoutContent.confirmLabel,
};

const LogoutPageClient = () => {
  const { logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <AuthCardLayout content={logoutCardContent}>
      <div className="auth-card__actions">
        <button
          className="btn btn-primary"
          onClick={handleLogout}
          disabled={loading}
        >
          {loading ? 'Logging out...' : logoutContent.confirmLabel}
        </button>
        <Link
          className="btn btn-secondary"
          href={logoutContent.cancelAction.href as Route}
        >
          {logoutContent.cancelAction.label}
        </Link>
      </div>
    </AuthCardLayout>
  );
};

export default LogoutPageClient;
