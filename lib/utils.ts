export const getBasePath = () => {
  return '/ccoi-asia-2026';
};

export const getImagePath = (src: string) => {
  const basePath = getBasePath();
  if (src.startsWith('http')) return src;
  // Ensure src starts with /
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  return `${basePath}${normalizedSrc}`;
};
