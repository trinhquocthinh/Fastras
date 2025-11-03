import type { Metadata } from 'next';

import ForgotPasswordPageClient from './ForgotPasswordPageClient';

export const metadata: Metadata = {
  title: 'Forgot Password | fastras',
  description:
    'Reset your fastras password and regain access to your personalized training and wellness programs.',
};

const ForgotPasswordPage = () => <ForgotPasswordPageClient />;

export default ForgotPasswordPage;
