import type { ReactNode } from 'react';

type ResetPasswordLayoutProps = {
  children: ReactNode;
};

// Auth pages don't need header/footer, so we just render children
const ResetPasswordLayout = ({ children }: ResetPasswordLayoutProps) => (
  <main>{children}</main>
);

export default ResetPasswordLayout;
