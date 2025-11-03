import type { ReactNode } from 'react';

import { Layout } from '@/components';

type MainLayoutProps = {
  children: ReactNode;
};

// Main pages (non-auth) include header, footer, and all layout features
const MainLayout = ({ children }: MainLayoutProps) => (
  <Layout>{children}</Layout>
);

export default MainLayout;
