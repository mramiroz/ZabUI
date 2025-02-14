"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    if (typeof window !== "undefined") {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
    }

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div className='fixed w-full h-full bg-black overflow-hidden -z-50'>
      <motion.div
        className="absolute w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-80"></div>
      </motion.div>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 bg-gray-600 rounded-full blur-3xl opacity-60"
          initial={{ x: Math.random() * dimensions.width, y: Math.random() * dimensions.height, scale: 0.5, opacity: 0 }}
          animate={{
            x: [Math.random() * dimensions.width, Math.random() * dimensions.width],
            y: [Math.random() * dimensions.height, Math.random() * dimensions.height],
            scale: [0.5, 1, 0.5],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: Math.random() * 6 + 4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;