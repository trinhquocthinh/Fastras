import type { Metadata } from 'next';

import { AuthCardLayout, AuthForm } from '@/components';
import { forgotPasswordContent, forgotPasswordForm } from '@/constants/auth';

export const metadata: Metadata = {
  title: 'Forgot Password | fastras',
  description:
    'Reset your fastras password and regain access to your personalized training and wellness programs.',
};

const ForgotPasswordPage = () => (
  <AuthCardLayout content={forgotPasswordContent}>
    <AuthForm config={forgotPasswordForm} />
  </AuthCardLayout>
);

export default ForgotPasswordPage;
