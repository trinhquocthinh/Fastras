declare const process: {
  env: Record<string, string | undefined>;
};

import type { ImageLoaderProps } from 'next/image';

/**
 * Custom image loader that respects the configured basePath while working for static exports.
 */
const imageLoader = ({ src }: ImageLoaderProps): string => {
  if (!src) {
    return '';
  }

  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;

  return `${basePath}${normalizedSrc}`.replace(/\/+/, '/');
};

export default imageLoader;
