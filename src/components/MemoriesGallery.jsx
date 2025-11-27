import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * MemoriesGallery Component - Auto-sliding with smooth animations
 * Main image changes every 5 seconds
 * Thumbnails are black & white, main image is colorful
 */

const MemoriesGallery = ({
  images = [],
  title = "Genesis 4 Memories",
  subtitle = "Relive the epic moments from our last adventure",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const thumbnailRef = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll thumbnail track to center active image
  useEffect(() => {
    if (thumbnailRef.current) {
      const thumbnailWidth = 200; // 192px width + 24px gap
      const scrollPosition =
        currentIndex * thumbnailWidth -
        thumbnailRef.current.offsetWidth / 2 +
        thumbnailWidth / 2;

      thumbnailRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  // Manual navigation
  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Slide variants for smooth animation
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -45 : 45,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <div className="relative w-full min-h-screen py-20 overflow-hidden">
      {/* Title Section */}
      <motion.div
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-4"
          style={{
            fontFamily: "'Londrina Solid', sans-serif",
            background:
              "linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {title}
        </h2>
        <p
          className="text-lg sm:text-xl lg:text-2xl"
          style={{ fontFamily: "'Livvic', sans-serif", color: "#87c4ea" }}
        >
          {subtitle}
        </p>
      </motion.div>

      {/* Main Image Slider - ADJUSTED SIZE */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div
          className="relative w-full rounded-3xl overflow-hidden"
          style={{
            height: "clamp(400px, 60vh, 700px)", // Responsive height
            perspective: "2000px",
            transformStyle: "preserve-3d",
          }}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Main colorful image */}
              <img
                src={images[currentIndex]?.src}
                alt={images[currentIndex]?.alt}
                className="w-full h-full object-cover"
                style={{
                  filter: "brightness(1.1) contrast(1.05) saturate(1.2)",
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  boxShadow: `
                    0 20px 60px rgba(0, 0, 0, 0.5),
                    0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                    0 0 50px rgba(255, 215, 0, 0.2)
                  `,
                }}
              />

              {/* Image caption */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/90 to-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p
                      className="text-white text-xl sm:text-2xl font-bold mb-1"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      {images[currentIndex]?.alt}
                    </p>
                    <p
                      className="text-blue-300 text-sm"
                      style={{ fontFamily: "'Livvic', sans-serif" }}
                    >
                      Photo {currentIndex + 1} of {images.length}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="flex gap-2">
                    {images.map((_, idx) => (
                      <motion.div
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-500 ${
                          idx === currentIndex
                            ? "bg-yellow-400 w-8"
                            : "bg-white/30 w-1"
                        }`}
                        animate={{
                          width: idx === currentIndex ? 32 : 4,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 backdrop-blur-md hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center group"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-black transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 backdrop-blur-md hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center group"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-black transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Thumbnail Strip - Black & White with auto-scroll */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Glass background */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: "rgba(10, 14, 39, 0.5)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        />

        {/* Scrollable thumbnail container */}
        <div
          ref={thumbnailRef}
          className="relative overflow-x-auto overflow-y-hidden py-8 px-6 hide-scrollbar scroll-smooth"
        >
          <div className="flex gap-6 min-w-max">
            {images.map((image, i) => (
              <motion.div
                key={i}
                onClick={() => goToSlide(i)}
                className={`relative flex-shrink-0 w-48 h-32 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  i === currentIndex
                    ? "ring-4 ring-yellow-400 shadow-2xl shadow-yellow-400/50"
                    : "ring-2 ring-transparent hover:ring-white/30"
                }`}
                animate={{
                  scale: i === currentIndex ? 1.1 : 1,
                  y: i === currentIndex ? -8 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: i === currentIndex ? 1.1 : 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Thumbnail image - Black & White */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500"
                  style={{
                    filter:
                      i === currentIndex
                        ? "grayscale(0) brightness(1.1)"
                        : "grayscale(1) brightness(0.7)",
                  }}
                  loading="lazy"
                />

                {/* Active indicator */}
                {i === currentIndex && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-yellow-400/30 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Hover overlay for non-active */}
                {i !== currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-400/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                )}

                {/* Number badge */}
                <div
                  className={`absolute top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-yellow-400 text-black scale-110"
                      : "bg-black/50 text-white backdrop-blur-sm"
                  }`}
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gradient fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0e27] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0e27] to-transparent pointer-events-none" />
      </motion.div>

      {/* Custom scrollbar hiding */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MemoriesGallery;
