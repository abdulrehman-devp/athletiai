"use client";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect } from "react";

const GetStartedButton = () => (
  <span className="flex items-center gap-1.5">
    Get Started
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      />
    </svg>
  </span>
);

// Background circle component
const GradientCircle = ({ size, color, className }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className={`absolute rounded-full blur-xl ${className}`}
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle at center, ${color} 0%, ${color}55 40%, transparent 70%)`,
    }}
  />
);

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Mouse parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations for mouse movement
  const rotateXSpring = useSpring(0, { stiffness: 100, damping: 30 });
  const rotateYSpring = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Convert mouse position to rotation values
      const rotateX = ((clientY - innerHeight / 2) / innerHeight) * 10;
      const rotateY = ((clientX - innerWidth / 2) / innerWidth) * 10;

      rotateXSpring.set(rotateX);
      rotateYSpring.set(-rotateY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotateXSpring, rotateYSpring]);

  // Transform values for the image container
  const scrollRotateX = useTransform(scrollYProgress, [0, 0.5], [25, 0]);
  const scrollTranslateZ = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  return (
    <div className="relative min-h-screen bg-[#fafafa] overflow-hidden">
      {/* Background gradient circles */}
      <GradientCircle
        size="200px"
        color="rgba(168,85,247)"
        className="top-20 right-[20%]"
      />
      <GradientCircle
        size="160px"
        color="rgba(59,130,246,0.2)"
        className="top-40 left-[15%]"
      />
      <GradientCircle
        size="240px"
        color="rgba(168,85,247,0.15)"
        className="bottom-40 right-[30%]"
      />
      <GradientCircle
        size="180px"
        color="rgba(59,130,246,0.25)"
        className="bottom-20 left-[25%]"
      />
      <GradientCircle
        size="220px"
        color="rgba(168,85,247,0.2)"
        className="top-[45%] left-[10%]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <motion.div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/5 text-sm font-medium text-black/70">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                AI-Powered Fitness Platform
              </span>
            </motion.div>

            {/* Header without floating animation */}
            <h1 className="font-space-grotesk text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight">
              <div className="mb-2 flex flex-wrap justify-center gap-x-3">
                Transform Your Fitness with
              </div>
              <div className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 text-transparent bg-clip-text">
                  Intelligent AI
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1.5 via-fuchsia-500 bg-black  w-full rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </div>
            </h1>

            <p className="font-outfit text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of fitness with personalized AI coaching.
            </p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/signup"
                className="relative transition-all duration-300 shadow-md py-1.5 px-4 bg-black rounded-full inline-flex items-center justify-center gap-1.5 text-white text-sm font-semibold border-[2px] border-white hover:scale-105 hover:bg-white hover:text-black group overflow-hidden"
              >
                <GetStartedButton />
              </Link>
            </motion.div>
          </motion.div>

          {/* Dashboard Preview with enhanced 3D tilt effect and mouse parallax */}
          <motion.div
            ref={targetRef}
            style={{
              rotateX: scrollRotateX,
              translateZ: scrollTranslateZ,
              opacity,
              rotateY: rotateYSpring,
              transformPerspective: "2000px",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
            initial={{ rotateX: 25, translateZ: -100, opacity: 0 }}
            animate={{ rotateX: 25, translateZ: -100, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 30,
            }}
            className="relative mt-20 will-change-transform"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl border border-black/5">
              <Image
                src="/images/hero-fitness.jpg"
                alt="AI Fitness Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl"
                priority
              />

              {/* Stats cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-black/5"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Progress Rate
                    </p>
                    <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      +64%
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
