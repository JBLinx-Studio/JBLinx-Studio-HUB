import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const useScrollAnimation = (options?: { once?: boolean; amount?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    amount: options?.amount ?? 0.15,
  });

  return { ref, isInView };
};
