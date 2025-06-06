"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black" />

      {/* Mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/mesh-gradient.png')] bg-cover bg-center mix-blend-overlay" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.div variants={fadeIn} className="space-y-4">
              <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-purple-500/10 text-purple-400 ring-1 ring-inset ring-purple-500/20">
                Powered by Advanced AI
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white">
                Your Personal AI
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400">
                  Fitness Coach
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0"
            >
              Experience the future of fitness with AI-driven personalized
              workouts, real-time form analysis, and adaptive training plans
              that evolve with you.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
              >
                Start Free Trial
                <svg
                  className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-300 rounded-full hover:text-white transition-all duration-300 ring-1 ring-gray-700 hover:ring-purple-500/50 hover:bg-purple-500/10"
              >
                Watch Demo
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-black"
                  >
                    <div className="h-full w-full rounded-full bg-gradient-to-br from-purple-400 to-blue-400 opacity-75" />
                  </div>
                ))}
              </div>
              <p className="text-gray-400">
                Join <span className="font-semibold text-white">1,000+</span>{" "}
                active members
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Hero image/animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:ml-12"
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-xl overflow-hidden">
              <div
                className={`absolute inset-0 ${shimmer} relative overflow-hidden`}
              >
                {" "}
                <Image
                  src="/images/hero-fitness.jpg"
                  alt="AI Fitness Training"
                  fill
                  className="object-cover rounded-xl filter brightness-90"
                  priority
                />
              </div>

              {/* Stats card */}
              <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-xl p-4 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-purple-400"
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
                    <p className="text-sm font-medium text-gray-400">
                      Progress Rate
                    </p>
                    <p className="text-xl font-bold text-purple-400">+64%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
