import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const repoName =
  process.env.GITHUB_REPOSITORY?.split('/')[1] || 'fastras-website';
const isDeploy = process.env.NODE_ENV === 'production';
const isNetlify = process.env.NETLIFY === 'true';
const publicBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (isDeploy && !isNetlify ? `/${repoName}` : '');

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: publicBasePath || undefined,
  assetPrefix: publicBasePath || undefined,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error'],
          }
        : false,
  },
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
  },
  productionBrowserSourceMaps: true,
  experimental: {
    typedRoutes: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default bundleAnalyzer(nextConfig);
