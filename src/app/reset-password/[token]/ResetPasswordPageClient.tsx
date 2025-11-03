'use client';

import { AuthCardLayout, AuthForm } from '@/components';
import { resetPasswordContent, resetPasswordForm } from '@/constants/auth';
import { useAuth } from '@/hooks';

type ResetPasswordPageClientProps = {
  token: string;
};

const getTokenSuffix = (token: string) => token.slice(-6);

const ResetPasswordPageClient = ({ token }: ResetPasswordPageClientProps) => {
  const { resetPassword } = useAuth();
  const tokenSuffix = getTokenSuffix(token);

  const handleResetPassword = async (data: Record<string, string>) => {
    await resetPassword({
      token,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
  };

  return (
    <AuthCardLayout content={resetPasswordContent}>
      <AuthForm config={resetPasswordForm} onSubmit={handleResetPassword} />
      <p className="auth-card__token-hint">
        Secure reset reference ending with <strong>{tokenSuffix}</strong>
      </p>
    </AuthCardLayout>
  );
};

export default ResetPasswordPageClient;
