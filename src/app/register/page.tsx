import type { Metadata } from 'next';

import { AuthForm, AuthSplitLayout } from '@/components';
import { registerContent, registerForm } from '@/constants/auth';

export const metadata: Metadata = {
  title: 'Create Account | fastras',
  description:
    'Join fastras to unlock expert-guided fitness, nutrition, and wellness courses with personalized programs and community support.',
};

const RegisterPage = () => (
  <AuthSplitLayout content={registerContent}>
    <AuthForm config={registerForm} />
  </AuthSplitLayout>
);

export default RegisterPage;
