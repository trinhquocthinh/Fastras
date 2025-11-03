import type { Metadata } from 'next';

import RegisterPageClient from './RegisterPageClient';

export const metadata: Metadata = {
  title: 'Create Account | fastras',
  description:
    'Join fastras to unlock expert-guided fitness, nutrition, and wellness courses with personalized programs and community support.',
};

const RegisterPage = () => <RegisterPageClient />;

export default RegisterPage;
