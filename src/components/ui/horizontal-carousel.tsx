
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HorizontalCarouselProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  showArrows?: boolean;
  autoScroll?: boolean;
  scrollSpeed?: number;
}

export const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({
  children,
  className,
  itemClassName = "min-w-full",
  showArrows = true,
  autoScroll = false,
  scrollSpeed = 2000
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(autoScroll);

  // Convert children to array if it's not already
  const childrenArray = React.Children.toArray(children);

  const checkScrollability = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    checkScrollability();
    const current = scrollRef.current;
    if (current) {
      current.addEventListener('scroll', checkScrollability, { passive: true });
      return () => current.removeEventListener('scroll', checkScrollability);
    }
  }, [children, checkScrollability]);

  // Auto scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || !scrollRef.current) return;

    const interval = setInterval(() => {
      if (scrollRef.current && !isDragging) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft >= scrollWidth - clientWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, scrollSpeed);

    return () => clearInterval(interval);
  }, [isAutoScrolling, isDragging, scrollSpeed]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    
    // Prevent text selection
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(autoScroll), 1000); // Resume auto scroll after 1 second
  }, [autoScroll]);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(autoScroll), 500);
  }, [autoScroll]);

  // Touch events for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(autoScroll), 1000);
  }, [autoScroll]);

  return (
    <div className={cn("relative group w-full", className)}>
      {/* Left Arrow */}
      {showArrows && canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-slate-800/95 hover:bg-slate-700 border border-slate-600 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg backdrop-blur-sm"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      
      {/* Right Arrow */}
      {showArrows && canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-slate-800/95 hover:bg-slate-700 border border-slate-600 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg backdrop-blur-sm"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className={cn(
          "flex overflow-x-auto overflow-y-hidden scrollbar-hide select-none",
          isDragging ? "cursor-grabbing" : "cursor-grab"
        )}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className={cn("flex-shrink-0 scroll-snap-align-start", itemClassName)}
            style={{ scrollSnapAlign: 'start' }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Scroll Indicators */}
      {childrenArray.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {childrenArray.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  const scrollAmount = scrollRef.current.clientWidth * index;
                  scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                }
              }}
              className="w-2 h-2 rounded-full bg-slate-600 hover:bg-slate-400 transition-colors duration-200"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
