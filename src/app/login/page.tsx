'use strict';

import type { Metadata } from 'next';

import { AuthForm, AuthSplitLayout } from '@/components';
import { loginContent, loginForm } from '@/constants/auth';

export const metadata: Metadata = {
  title: 'Login | fastras',
  description:
    'Sign in to fastras to resume your personalized fitness and nutrition programs, track your progress, and stay on target.',
};

const LoginPage = () => (
  <AuthSplitLayout content={loginContent}>
    <AuthForm config={loginForm} />
  </AuthSplitLayout>
);

export default LoginPage;
