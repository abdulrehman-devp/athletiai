import { Geist } from "next/font/google";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Athleti AI - Use AI to do you workouts",
  description: "by Athleti AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${spaceGrotesk.variable} ${outfit.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
