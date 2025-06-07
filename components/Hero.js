"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Target, Zap } from "lucide-react";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const stats = [
    {
      label: "Calories Burned",
      value: "2,847",
      color: "from-green-500 to-green-400",
      icon: "🔥",
    },
    {
      label: "Steps Today",
      value: "12,450",
      color: "from-green-600 to-green-500",
      icon: "👟",
    },
    {
      label: "Active Minutes",
      value: "87",
      color: "from-green-400 to-green-300",
      icon: "⏱️",
    },
    {
      label: "Heart Rate",
      value: "72",
      color: "from-green-700 to-green-600",
      icon: "❤️",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/40 to-gray-50/30 overflow-hidden relative">
      {/* Animated background elements */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)`,
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-gray-200/30 to-green-100/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-br from-gray-200/30 to-green-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Content */}
      <main className="relative z-10 px-6">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center pt-16 pb-20">
            {/* Animated Badge */}
            <div
              className={`transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="inline-flex items-center bg-gray-100 border border-gray-200 text-gray-700 px-6 py-2 rounded-full text-sm font-medium font-montserrat -mb-6 hover:shadow-sm transition-all duration-300 group relative -top-10">
                <Zap className="w-4 h-4 mr-2 text-green-500 group-hover:animate-pulse" />
                <span>AI-Powered Fitness Revolution</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Animated Headline */}
            <div
              className={`transition-all duration-1200 delay-200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight max-w-6xl mx-auto mb-8">
                <span className="block text-gray-900 font-light tracking-tight font-playfair">
                  Transform your
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black font-bold tracking-tight animate-gradient font-playfair">
                  Fitness Journey
                </span>
              </h1>
            </div>

            {/* Animated Subtitle */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light font-montserrat">
                Experience intelligent progress tracking and AI-driven insights
                that adapt to your unique fitness goals.
              </p>
            </div>

            {/* Animated CTA Buttons */}
            <div
              className={`transition-all duration-1000 delay-600 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {" "}
              {/* <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-black/90 hover:-translate-y-1 transition-all duration-300"
                >
                  <SignedIn>Go to Dashboard</SignedIn>
                  <SignedOut>Get Started</SignedOut>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div> */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                {" "}
                <Button
                  size="lg"
                  className="bg-black hover:bg-green-900 text-white px-10 py-6 text-lg font-medium rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 font-montserrat"
                >
                  <SignedIn>
                    <a href="/dashboard">Go to Dashboard</a>
                  </SignedIn>
                  <SignedOut>Get Started</SignedOut>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-200 text-gray-700 hover:bg-green-50 hover:border-green-200 px-10 py-6 text-lg font-medium rounded-xl transition-all duration-300 group hover:scale-105 backdrop-blur-sm font-montserrat"
                >
                  <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div
              className={`transition-all duration-1200 delay-800 ${
                isLoaded
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <div className="relative max-w-5xl mx-auto">
                {/* Enhanced floating background elements */}
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-green-200/30 to-gray-100/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -right-12 w-32 h-32 bg-gradient-to-br from-gray-200/30 to-green-100/20 rounded-full blur-2xl animate-pulse delay-700"></div>
                <div className="absolute -bottom-8 right-8 w-48 h-48 bg-gradient-to-br from-gray-100/30 to-green-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                {/* Main Image Container */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 mx-4 hover:shadow-3xl transition-all duration-500 overflow-visible group">
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-0"></div>

                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/images/hero-fitness.jpg"
                      alt="Fitness Transformation"
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-2xl"
                      priority
                    />
                  </div>

                  {/* Stats Card */}
                  <div className="absolute -bottom-6 left-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4 hidden lg:block hover:scale-105 transition-all duration-300 hover:shadow-2xl z-30">
                    <div className="text-center font-montserrat relative">
                      <div className="text-3xl font-bold text-gray-900 mb-1 relative">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 animate-gradient">
                          10K+
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mb-2">
                        Active Members
                      </div>
                      <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* AI-Powered Card */}
                  <div className="absolute top-8 -right-6 bg-black/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 p-4 hidden lg:block hover:scale-105 transition-all duration-300 hover:shadow-2xl z-30">
                    <div className="text-center font-montserrat">
                      <div className="text-white text-sm font-medium mb-1">
                        AI-Powered
                      </div>
                      <div className="text-xs text-gray-400">
                        Smart Training
                      </div>
                      <div className="mt-2 flex justify-center">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:feature:bg-white/20 transition-colors duration-300">
                          <Zap className="w-4 h-4 text-green-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
