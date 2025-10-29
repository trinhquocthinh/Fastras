declare const process: {
  env: Record<string, string | undefined>;
};

import type { Metadata } from 'next';

import { siteName } from '@/constants/layout';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fastras.example.com';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Fitness & Nutrition Coaching`,
    template: `%s | ${siteName}`,
  },
  description:
    'Elevate your fitness lifestyle with fastras — expert-led training programs, nutrition courses, and resources for a balanced, healthy life.',
  applicationName: siteName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteName} | Fitness & Nutrition Coaching`,
    description:
      'Discover comprehensive fitness and nutrition coaching from seasoned instructors with over 25 years of experience.',
    url: siteUrl,
    siteName,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Fitness & Nutrition Coaching`,
    description:
      'Personalised fitness and nutrition programs, courses, and expert advice to help you thrive.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
    apple: `${basePath}/favicon.svg`,
  },
};
