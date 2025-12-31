import React, { useState, useEffect } from "react";
import "./MemoriesGallery.css";

const MemoriesGallery = ({ images = [], title, subtitle }) => {
  const [page, setPage] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [page]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage(page + newDirection);
  };

  return (
    <div className="memories-gallery-wrapper">
      {/* Title */}
      <div className="memories-header">
        <h2 className="memories-title">{title}</h2>
        <p className="memories-subtitle">{subtitle}</p>
      </div>

      {/* Stack Container */}
      <div className="stack-wrapper">
        <div className="stack-card-main">
          <img
            src={images[imageIndex].src}
            alt={images[imageIndex].alt}
            className="stack-main-image"
          />
          <div className="stack-gradient" />
          <div className="stack-caption">
            <h3>{images[imageIndex].alt}</h3>
            <p>
              {imageIndex + 1} / {images.length}
            </p>
          </div>
        </div>

        {/* Background Cards */}
        <div className="stack-background">
          {[1, 2, 3].map((offset) => {
            const bgIndex = wrap(0, images.length, page + offset);
            return (
              <div
                key={`bg-${offset}`}
                className="stack-bg-card"
                style={{
                  zIndex: 10 - offset,
                  transform: `scale(${1 - offset * 0.05}) translateY(${
                    offset * 15
                  }px)`,
                  opacity: 1 - offset * 0.25,
                }}
              >
                <img
                  src={images[bgIndex].src}
                  alt={images[bgIndex].alt}
                  style={{
                    filter: "grayscale(100%) brightness(0.5)",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="stack-nav stack-nav-prev" onClick={() => paginate(-1)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              d="M15 18l-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="stack-nav stack-nav-next" onClick={() => paginate(1)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              d="M9 18l6-6-6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="stack-progress">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`progress-dot ${idx === imageIndex ? "active" : ""}`}
            onClick={() => setPage(idx)}
          />
        ))}
      </div>
    </div>
  );
};

// Utility functions
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default MemoriesGallery;
