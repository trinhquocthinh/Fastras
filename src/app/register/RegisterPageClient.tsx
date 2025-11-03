'use client';

import { AuthForm, AuthSplitLayout } from '@/components';
import { registerContent, registerForm } from '@/constants/auth';
import { useAuth } from '@/hooks';

const RegisterPageClient = () => {
  const { register } = useAuth();

  const handleRegister = async (data: Record<string, string>) => {
    await register({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
  };

  return (
    <AuthSplitLayout content={registerContent}>
      <AuthForm config={registerForm} onSubmit={handleRegister} />
    </AuthSplitLayout>
  );
};

export default RegisterPageClient;
