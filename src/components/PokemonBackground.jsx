import React from "react";
import { motion } from "framer-motion";

const PokemonBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Static Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2332] via-[#2d4a7c] via-[#5b7bb4] to-[#87CEEB]" />

      {/* Static Stars - Only CSS */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 40}%`,
              opacity: 0.4 + Math.random() * 0.6,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Static Sun */}
      <div
        className="absolute top-[15%] right-[15%] w-24 h-24 rounded-full bg-gradient-radial from-yellow-200 to-yellow-400 opacity-90"
        style={{
          boxShadow: "0 0 60px rgba(255, 230, 109, 0.8)",
        }}
      />

      {/* Static Clouds - CSS Only */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`cloud-${i}`}
            className="absolute animate-float-slow"
            style={{
              left: `${i * 20}%`,
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 2}s`,
            }}
          >
            <svg width={150} height={60} viewBox="0 0 200 100" fill="none">
              <ellipse
                cx="50"
                cy="60"
                rx="40"
                ry="30"
                fill="rgba(255, 255, 255, 0.7)"
              />
              <ellipse
                cx="90"
                cy="50"
                rx="50"
                ry="35"
                fill="rgba(255, 255, 255, 0.8)"
              />
              <ellipse
                cx="130"
                cy="60"
                rx="45"
                ry="32"
                fill="rgba(255, 255, 255, 0.7)"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Static Mountains - SVG */}
      <svg
        className="absolute bottom-0 w-full h-[50vh]"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 400 L300 250 L600 350 L900 200 L1200 300 L1440 250 L1440 600 L0 600 Z"
          fill="rgba(75, 85, 135, 0.4)"
        />
        <path
          d="M0 450 L400 300 L800 380 L1200 320 L1440 380 L1440 600 L0 600 Z"
          fill="rgba(90, 110, 160, 0.6)"
        />
      </svg>

      {/* Static Hills with Grass */}
      <svg
        className="absolute bottom-0 w-full h-[40vh]"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 200 Q360 150 720 180 Q1080 140 1440 160 L1440 400 L0 400 Z"
          fill="#2d5016"
        />
        <path
          d="M0 250 Q360 200 720 230 Q1080 190 1440 210 L1440 400 L0 400 Z"
          fill="#3d6e1f"
        />
        <path
          d="M0 300 Q360 260 720 290 Q1080 250 1440 270 L1440 400 L0 400 Z"
          fill="#4a8c2a"
        />
        <path
          d="M0 350 Q360 320 720 340 Q1080 310 1440 330 L1440 400 L0 400 Z"
          fill="#5ba632"
        />
      </svg>

      {/* Minimal Animated Elements - Only 3 Birds */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`bird-${i}`}
          className="absolute"
          style={{ top: `${20 + i * 15}%` }}
          animate={{ x: [-100, 1540] }}
          transition={{
            duration: 40 + i * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            width="30"
            height="20"
            viewBox="0 0 30 20"
            fill="rgba(0, 0, 0, 0.2)"
          >
            <path d="M15 10 L8 6 L5 10 L8 8 L15 10 L22 8 L25 10 L22 6 Z" />
          </svg>
        </motion.div>
      ))}

      {/* Bottom Gradient for Depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default PokemonBackground;
