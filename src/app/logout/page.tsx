import type { Metadata } from 'next';

import LogoutPageClient from './LogoutPageClient';

export const metadata: Metadata = {
  title: 'Logout | fastras',
  description:
    'Sign out of fastras safely. You can return anytime to continue your fitness and nutrition journey.',
};

const LogoutPage = () => <LogoutPageClient />;

export default LogoutPage;
