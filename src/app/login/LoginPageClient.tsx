'use client';

import { AuthForm, AuthSplitLayout } from '@/components';
import { loginContent, loginForm } from '@/constants/auth';
import { useAuth } from '@/hooks';

const LoginPageClient = () => {
  const { login } = useAuth();

  const handleLogin = async (data: Record<string, string>) => {
    await login({
      email: data.email,
      password: data.password,
      remember: data.remember === 'true',
    });
  };

  return (
    <AuthSplitLayout content={loginContent}>
      <AuthForm config={loginForm} onSubmit={handleLogin} />
    </AuthSplitLayout>
  );
};

export default LoginPageClient;
