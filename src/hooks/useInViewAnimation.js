import { useEffect, useRef, useState } from "react";

export const useInViewAnimation = (options = {}) => {
  const { threshold = 0.1, triggerOnce = true, rootMargin = "0px" } = options;

  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);

          if (triggerOnce) {
            observer.unobserve(currentRef);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, isInView };
};
