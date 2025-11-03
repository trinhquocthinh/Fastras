import type { Metadata } from 'next';

import ResetPasswordPageClient from './ResetPasswordPageClient';

export const metadata: Metadata = {
  title: 'Reset Password | fastras',
  description:
    'Create a new fastras password to continue learning with confidence across fitness, nutrition, and wellness courses.',
};

type ResetPasswordPageProps = {
  params: {
    token: string;
  };
};

const ResetPasswordPage = ({ params }: ResetPasswordPageProps) => (
  <ResetPasswordPageClient token={params.token} />
);

export default ResetPasswordPage;
