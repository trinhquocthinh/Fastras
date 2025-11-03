import type { ReactNode } from 'react';

type LoginLayoutProps = {
  children: ReactNode;
};

// Auth pages don't need header/footer, so we just render children
const LoginLayout = ({ children }: LoginLayoutProps) => <main>{children}</main>;

export default LoginLayout;
