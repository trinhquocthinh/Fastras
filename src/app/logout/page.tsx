import type { Metadata, Route } from 'next';
import Link from 'next/link';

import { AuthCardLayout } from '@/components';
import { logoutContent } from '@/constants/auth';
import type { AuthCardContent } from '@/types';

export const metadata: Metadata = {
  title: 'Logout | fastras',
  description:
    'Sign out of fastras safely. You can return anytime to continue your fitness and nutrition journey.',
};

const logoutCardContent: AuthCardContent = {
  id: logoutContent.id,
  title: logoutContent.title,
  description: logoutContent.description,
  primaryActionLabel: logoutContent.confirmLabel,
};

const LogoutPage = () => (
  <AuthCardLayout content={logoutCardContent}>
    <div className="auth-card__actions">
      <Link
        className="btn btn-primary"
        href={logoutContent.confirmHref as Route}
      >
        {logoutContent.confirmLabel}
      </Link>
      <Link
        className="btn btn-secondary"
        href={logoutContent.cancelAction.href as Route}
      >
        {logoutContent.cancelAction.label}
      </Link>
    </div>
  </AuthCardLayout>
);

export default LogoutPage;
