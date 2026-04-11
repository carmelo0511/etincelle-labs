"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ElementType } from "react";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  as,
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  const Component = as ? (motion as unknown as Record<string, typeof motion.div>)[as as string] ?? motion.div : motion.div;

  if (prefersReduced) {
    return <Component ref={ref} className={className}>{children}</Component>;
  }

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
}
