"use client";

import { useEffect, useRef, useState } from "react";
import Container from "./container";
import CoverImage from "./cover-image";

interface HeroSectionProps {
  isLandscape?: boolean;
}

export function HeroSection({ isLandscape = false }: HeroSectionProps) {
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLandscape) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className={`flex-grow transition-all duration-1000 ${scrolled ? "flex-grow-0" : ""}`} />
        <Container>
          <div className="sticky top-0 pt-4 pb-4 bg-white dark:bg-slate-900 z-20">
            <h1 className="text-5xl lg:text-8xl font-bold tracking-tighter leading-tight text-left">
              R.Z's Home.
            </h1>
          </div>
          <div className="mb-2 lg:mb-4 max-h-[55vh] overflow-hidden">
            <CoverImage
              title="R. Zheng's Personal Website"
              src="/assets/blog/dynamic-routing/cover.jpg"
            />
          </div>
          <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 text-left">
            Hanksville, UT. Sept 2025
          </p>
        </Container>
        <div
          className={`transition-all duration-1000 ${
            scrolled ? "h-0" : "flex-grow"
          }`}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className={`flex-grow transition-all duration-1000 ${scrolled ? "flex-grow-0" : ""}`} />
      <Container>
        <div className="sticky top-0 pt-8 pb-4 bg-white dark:bg-slate-900 z-20">
          <h1 className="text-7xl sm:text-8xl font-bold tracking-tighter leading-tight text-left">
            R.Z's<br />Home.
          </h1>
        </div>
        <div className="mb-6 max-h-[30vh] overflow-hidden">
          <CoverImage
            title="R. Zheng's Personal Website"
            src="/assets/blog/dynamic-routing/cover.jpg"
          />
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400 text-left">
          Hanksville, UT. Sept 2025
        </p>
      </Container>
      <div
        className={`transition-all duration-1000 ${
          scrolled ? "h-0" : "flex-grow"
        }`}
      />
    </div>
  );
}
