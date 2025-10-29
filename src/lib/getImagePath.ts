declare const process: {
  env: Record<string, string | undefined>;
};

/**
 * Helper function to get the correct image path for deployments with a custom basePath.
 */
export const getImagePath = (src: string): string => {
  if (!src) {
    return '';
  }

  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanedSrc = src.startsWith('/') ? src : `/${src}`;

  return `${basePath}${cleanedSrc}`.replace(/\/+/, '/');
};
