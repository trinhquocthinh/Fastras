import type { ReactNode } from 'react';

type ForgotPasswordLayoutProps = {
  children: ReactNode;
};

// Auth pages don't need header/footer, so we just render children
const ForgotPasswordLayout = ({ children }: ForgotPasswordLayoutProps) => (
  <main>{children}</main>
);

export default ForgotPasswordLayout;
