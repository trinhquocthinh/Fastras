import type { Metadata } from 'next';

import LoginPageClient from './LoginPageClient';

export const metadata: Metadata = {
  title: 'Login | fastras',
  description:
    'Sign in to fastras to resume your personalized fitness and nutrition programs, track your progress, and stay on target.',
};

const LoginPage = () => <LoginPageClient />;

export default LoginPage;
