import type { ReactNode } from 'react';

type LogoutLayoutProps = {
  children: ReactNode;
};

// Auth pages don't need header/footer, so we just render children
const LogoutLayout = ({ children }: LogoutLayoutProps) => (
  <main>{children}</main>
);

export default LogoutLayout;
