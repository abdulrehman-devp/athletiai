"use client";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20 px-6 py-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-sm px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}{" "}
            <div className="flex items-center group">
              <div className="flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                <Image
                  src="/images/icon.png"
                  alt="AthletiAI Logo"
                  width={40}
                  height={40}
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {["Features", "Pricing", "About", "Contact"].map(
                (item, index) => (
                  <a
                    key={item}
                    href="#"
                    className="px-3 py-1.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 text-sm font-medium font-montserrat relative group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                    <span className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-5"></span>
                  </a>
                )
              )}
            </nav>
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button
                    variant="ghost"
                    className="text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-300 rounded-lg px-3 py-1.5 h-auto font-montserrat"
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="bg-black hover:bg-green-900 text-white px-4 py-1.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group h-auto font-montserrat">
                    Get Started
                    <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8 rounded-lg",
                    },
                  }}
                />
              </SignedIn>
            </div>
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-1.5 hover:bg-green-50 rounded-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 pt-3 border-t border-gray-100">
              <nav className="flex flex-col space-y-1.5">
                {["Features", "Pricing", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 text-sm font-medium font-montserrat"
                  >
                    {item}
                  </a>
                ))}
                <div className="flex flex-col space-y-1.5 pt-1.5">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <Button
                        variant="ghost"
                        className="justify-start px-3 py-2 hover:bg-green-50 rounded-lg h-auto font-montserrat w-full"
                      >
                        Sign In
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button className="bg-black hover:bg-green-900 text-white px-3 py-2 rounded-lg h-auto font-montserrat w-full">
                        Get Started
                      </Button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <div className="px-3 py-2">
                      <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                          elements: {
                            avatarBox: "w-8 h-8 rounded-lg",
                          },
                        }}
                      />
                    </div>
                  </SignedIn>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
