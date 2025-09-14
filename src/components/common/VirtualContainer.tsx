
import React, { 
  useState, 
  useEffect, 
  useRef, 
  useMemo, 
  useCallback,
  memo 
} from 'react';

interface VirtualContainerProps<T> {
  items: T[];
  itemHeight: number | ((index: number) => number);
  containerHeight: number;
  renderItem: (item: T, index: number, isVisible: boolean) => React.ReactNode;
  overscan?: number;
  className?: string;
  onScroll?: (scrollTop: number) => void;
}

function VirtualContainer<T>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  overscan = 3,
  className = '',
  onScroll
}: VirtualContainerProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollElementRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const getItemHeight = useCallback((index: number) => 
    typeof itemHeight === 'function' ? itemHeight(index) : itemHeight
  , [itemHeight]);

  const { visibleRange, totalHeight, offsetY } = useMemo(() => {
    let accumulatedHeight = 0;
    let startIndex = 0;
    let endIndex = 0;

    // Find start index
    for (let i = 0; i < items.length; i++) {
      const height = getItemHeight(i);
      if (accumulatedHeight + height > scrollTop) {
        startIndex = Math.max(0, i - overscan);
        break;
      }
      accumulatedHeight += height;
    }

    // Find end index
    let visibleHeight = 0;
    for (let i = startIndex; i < items.length; i++) {
      const height = getItemHeight(i);
      visibleHeight += height;
      if (visibleHeight >= containerHeight) {
        endIndex = Math.min(items.length - 1, i + overscan);
        break;
      }
    }

    // Calculate total height and offset
    const totalHeight = items.reduce((acc, _, index) => acc + getItemHeight(index), 0);
    let offsetY = 0;
    for (let i = 0; i < startIndex; i++) {
      offsetY += getItemHeight(i);
    }

    return {
      visibleRange: { start: startIndex, end: endIndex },
      totalHeight,
      offsetY
    };
  }, [scrollTop, containerHeight, items.length, overscan, getItemHeight]);

  const visibleItems = useMemo(() => 
    items.slice(visibleRange.start, visibleRange.end + 1)
  , [items, visibleRange]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const newScrollTop = e.currentTarget.scrollTop;
    setScrollTop(newScrollTop);
    onScroll?.(newScrollTop);

    // Debounce scroll end detection
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      // Trigger any scroll end logic here
    }, 100);
  }, [onScroll]);

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <div
      ref={scrollElementRef}
      className={className}
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item, index) => {
            const actualIndex = visibleRange.start + index;
            const isVisible = actualIndex >= visibleRange.start && actualIndex <= visibleRange.end;
            
            return (
              <div 
                key={actualIndex}
                style={{ height: getItemHeight(actualIndex) }}
              >
                {renderItem(item, actualIndex, isVisible)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default memo(VirtualContainer) as typeof VirtualContainer;
