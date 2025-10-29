import type { ReactNode } from 'react';
import { Montserrat, Playfair_Display } from 'next/font/google';

import { Layout } from '@/components';
import { metadata as siteMetadata } from '@/config/seo';

import '../styles/globals.scss';

export const metadata = siteMetadata;

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--ff-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--ff-playfair',
  display: 'swap',
});

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body className={`${montserrat.variable} ${playfair.variable}`} id="top">
      <Layout>{children}</Layout>
    </body>
  </html>
);

export default RootLayout;
