import { useState, useEffect, useRef, ReactNode } from "react";

interface LazyWhenVisibleProps {
  children: ReactNode;
  fallback?: ReactNode;
  /** How far before the element enters the viewport to trigger loading (px) */
  rootMargin?: string;
}

/**
 * Defers rendering of children until the container is near the viewport.
 * Pairs with React.lazy() to delay both chunk loading and rendering.
 */
const LazyWhenVisible = ({ children, fallback = null, rootMargin = "200px" }: LazyWhenVisibleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  if (isVisible) return <>{children}</>;

  return <div ref={ref}>{fallback}</div>;
};

export default LazyWhenVisible;
