import { useState, useEffect, useCallback } from 'react';

interface UseCarouselOptions {
  totalSlides: number;
  autoPlayInterval?: number;
  autoPlay?: boolean;
}

interface UseCarouselReturn {
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  isPlaying: boolean;
  toggleAutoPlay: () => void;
}

export function useCarousel({
  totalSlides,
  autoPlayInterval = 5000,
  autoPlay = true,
}: UseCarouselOptions): UseCarouselReturn {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, nextSlide]);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    isPlaying,
    toggleAutoPlay,
  };
}
