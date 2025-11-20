import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export const FadeInSection = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 40,
  className = "",
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { ref, isInView } = useInViewAnimation({
    threshold,
    triggerOnce,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
