/**
 * Performance monitoring utilities
 */

/**
 * Monitor image loading performance
 */
export const monitorImagePerformance = () => {
  if (typeof window === 'undefined' || !window.PerformanceObserver) {
    return;
  }

  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      // Type guard for PerformanceResourceTiming
      if (entry.entryType === 'resource') {
        const resourceEntry = entry as PerformanceResourceTiming;
        if (resourceEntry.initiatorType === 'img') {
          const duration = resourceEntry.duration;
          const size = resourceEntry.transferSize;
          
          // Log slow loading images (>500ms)
          if (duration > 500) {
            console.warn(
              `Slow image loading detected:`,
              resourceEntry.name,
              `\nDuration: ${duration.toFixed(2)}ms`,
              size ? `\nSize: ${(size / 1024).toFixed(2)}KB` : ''
            );
          }
        }
      }
    });
  });

  observer.observe({ entryTypes: ['resource'] });

  return () => observer.disconnect();
};

/**
 * Calculate Largest Contentful Paint (LCP)
 */
export const monitorLCP = () => {
  if (typeof window === 'undefined' || !window.PerformanceObserver) {
    return;
  }

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1] as PerformanceEntry;
    
    // LCP should be under 2.5s for good performance
    const lcpTime = lastEntry.startTime;
    if (lcpTime > 2500) {
      console.warn(`LCP is slow: ${lcpTime.toFixed(2)}ms (target: <2500ms)`);
    } else {
      console.log(`LCP: ${lcpTime.toFixed(2)}ms ✓`);
    }
  });

  observer.observe({ entryTypes: ['largest-contentful-paint'] });

  return () => observer.disconnect();
};

/**
 * Track Core Web Vitals
 */
export const trackWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Track FCP (First Contentful Paint)
  const fcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      console.log(`FCP: ${entry.startTime.toFixed(2)}ms`);
    });
  });

  try {
    fcpObserver.observe({ entryTypes: ['paint'] });
  } catch (e) {
    console.warn('Performance API not supported');
  }

  // Monitor LCP
  monitorLCP();

  // Monitor image loading
  monitorImagePerformance();
};
