
import { useEffect, useRef, useCallback } from 'react';

interface UseOptimizedAnimationOptions {
  fps?: number;
  autoStart?: boolean;
  dependencies?: any[];
}

export const useOptimizedAnimation = (
  callback: (deltaTime: number, timestamp: number) => void,
  options: UseOptimizedAnimationOptions = {}
) => {
  const { fps = 60, autoStart = true, dependencies = [] } = options;
  const frameRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const fpsInterval = 1000 / fps;
  const callbackRef = useRef(callback);
  const isRunningRef = useRef(false);

  callbackRef.current = callback;

  const animate = useCallback((timestamp: number) => {
    if (!isRunningRef.current) return;

    const deltaTime = timestamp - lastTimeRef.current;

    if (deltaTime >= fpsInterval) {
      lastTimeRef.current = timestamp - (deltaTime % fpsInterval);
      callbackRef.current(deltaTime, timestamp);
    }

    frameRef.current = requestAnimationFrame(animate);
  }, [fpsInterval]);

  const start = useCallback(() => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;
    lastTimeRef.current = performance.now();
    frameRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const stop = useCallback(() => {
    isRunningRef.current = false;
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = undefined;
    }
  }, []);

  const toggle = useCallback(() => {
    if (isRunningRef.current) {
      stop();
    } else {
      start();
    }
  }, [start, stop]);

  useEffect(() => {
    if (autoStart) {
      start();
    }

    return () => {
      stop();
    };
  }, dependencies);

  return { start, stop, toggle, isRunning: isRunningRef.current };
};
