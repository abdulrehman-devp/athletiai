"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Workouts", href: "/workouts" },
    { name: "Nutrition", href: "/nutrition" },
    { name: "Progress", href: "/progress" },
  ];

  const buttonStyles =
    "relative transition-all duration-300 shadow-md py-1.5 px-5 bg-black rounded-full flex items-center justify-center gap-1.5 text-white text-sm font-semibold hover:scale-105 hover:shadow-xl hover:bg-white hover:text-black group ring-offset-2 ring-black focus:ring-2 outline-none";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo section with divider */}
          <div className="flex items-center space-x-6 pr-2 border-r border-gray-200/80 absolute left-6">
            <Link
              href="/"
              className="flex items-center transform transition-transform hover:scale-105"
            >
              <Image
                src="/images/icon.png"
                alt="Athleti"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop navigation - centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition-all duration-200 relative group outline-none"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Get Started button */}
          <div className="hidden md:flex items-center pl-6 absolute right-6">
            <Link href="/signup" className={buttonStyles}>
              <GetStartedButton />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-200"
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transform transition-all duration-300 ease-out ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
          } shadow-lg`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-black block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 hover:bg-gray-100/80"
            >
              {link.name}
            </Link>
          ))}
          <div className="px-2 pt-2">
            <Link href="/signup" className={buttonStyles + " w-full"}>
              <GetStartedButton />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
