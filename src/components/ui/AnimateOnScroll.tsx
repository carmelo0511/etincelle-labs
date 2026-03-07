"use client";

import { motion, useInView } from "framer-motion";
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

  const Component = as ? (motion as unknown as Record<string, typeof motion.div>)[as as string] ?? motion.div : motion.div;

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
}
