/**
 * Image utility helpers for optimized loading and error handling
 */

/**
 * Normalize image path for consistent loading across environments
 * @param src - Image source path
 * @returns Normalized path starting with /
 */
export const normalizeImagePath = (src: string | undefined): string => {
  if (!src) return '';
  
  // If it's already a full URL, return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // Ensure path starts with /
  return src.startsWith('/') ? src : `/${src}`;
};

/**
 * Preload critical images for better performance
 * @param imagePaths - Array of image paths to preload
 */
export const preloadImages = (imagePaths: string[]): void => {
  imagePaths.forEach((path) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = normalizeImagePath(path);
    document.head.appendChild(link);
  });
};

/**
 * Check if image exists and is loadable
 * @param src - Image source path
 * @returns Promise that resolves to true if image loads successfully
 */
export const checkImageExists = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = normalizeImagePath(src);
  });
};

/**
 * Get optimized image URL with optional transformations
 * @param src - Original image source
 * @param options - Optional transformation options
 * @returns Optimized image URL
 */
export const getOptimizedImageUrl = (
  src: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
  }
): string => {
  const normalizedSrc = normalizeImagePath(src);
  
  // For external URLs (like Unsplash), append query params
  if (normalizedSrc.includes('unsplash.com')) {
    const params = new URLSearchParams();
    if (options?.width) params.set('w', options.width.toString());
    if (options?.quality) params.set('q', options.quality.toString());
    return `${normalizedSrc}&${params.toString()}`;
  }
  
  // For local images, return as-is (could be extended with image optimization service)
  return normalizedSrc;
};

/**
 * Generate srcset for responsive images
 * @param src - Base image source
 * @param sizes - Array of widths for responsive images
 * @returns srcset string
 */
export const generateSrcSet = (src: string, sizes: number[] = [640, 768, 1024, 1280, 1920]): string => {
  if (src.includes('unsplash.com')) {
    return sizes.map(size => `${src}&w=${size} ${size}w`).join(', ');
  }
  return '';
};
