import type { Metadata } from 'next';

import { AuthCardLayout, AuthForm } from '@/components';
import { resetPasswordContent, resetPasswordForm } from '@/constants/auth';

export const metadata: Metadata = {
  title: 'Reset Password | fastras',
  description:
    'Create a new fastras password to continue learning with confidence across fitness, nutrition, and wellness courses.',
};

export const dynamicParams = false;

export function generateStaticParams() {
  // Generate a placeholder token for static export
  // In production, this route should use query params or SSR
  return [{ token: 'placeholder' }];
}

type ResetPasswordPageProps = {
  params: {
    token: string;
  };
};

const getTokenSuffix = (token: string) => token.slice(-6);

const ResetPasswordPage = ({ params }: ResetPasswordPageProps) => {
  const tokenSuffix = getTokenSuffix(params.token);

  return (
    <AuthCardLayout content={resetPasswordContent}>
      <AuthForm config={resetPasswordForm} />
      <p className="auth-card__token-hint">
        Secure reset reference ending with <strong>{tokenSuffix}</strong>
      </p>
    </AuthCardLayout>
  );
};

export default ResetPasswordPage;
