'use client';

import { useState } from 'react';

import { AuthCardLayout, AuthForm } from '@/components';
import { forgotPasswordContent, forgotPasswordForm } from '@/constants/auth';
import { useAuth } from '@/hooks';

const ForgotPasswordPageClient = () => {
  const { forgotPassword } = useAuth();
  const [message, setMessage] = useState<string | null>(null);

  const handleForgotPassword = async (data: Record<string, string>) => {
    const result = await forgotPassword({ email: data.email });
    setMessage(result);
  };

  return (
    <AuthCardLayout content={forgotPasswordContent}>
      {message ? (
        <div
          style={{
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: '#efe',
            color: '#3c3',
            border: '1px solid #cfc',
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          {message}
        </div>
      ) : (
        <AuthForm config={forgotPasswordForm} onSubmit={handleForgotPassword} />
      )}
    </AuthCardLayout>
  );
};

export default ForgotPasswordPageClient;
