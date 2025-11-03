import type { ReactNode } from 'react';

type RegisterLayoutProps = {
  children: ReactNode;
};

// Auth pages don't need header/footer, so we just render children
const RegisterLayout = ({ children }: RegisterLayoutProps) => (
  <main>{children}</main>
);

export default RegisterLayout;
