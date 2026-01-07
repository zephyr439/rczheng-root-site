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
      <div className="flex flex-col">
        <div className="min-h-screen flex flex-col justify-center">
          <div ref={containerRef}>
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
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 text-left mb-0">
                Hanksville, UT. Sept 2025
              </p>
            </Container>
          </div>
        </div>
        <div
          className="transition-all duration-1000 ease-in-out min-h-screen"
          style={{ flex: scrolled ? '0 0 0' : '1 1 0' }}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="min-h-screen flex flex-col justify-center">
        <div ref={containerRef}>
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
            <p className="text-base text-gray-600 dark:text-gray-400 text-left mb-8">
              Hanksville, UT. Sept 2025
            </p>
            <p className="text-2xl leading-relaxed text-gray-800 dark:text-gray-200 mb-0">
              <strong>I'm Ruichen Zheng</strong>, a Math & CS student at Dartmouth who spends half the time training models and the other half exploring the world. Currently interested in ML, AI for Education, and Web Development.
            </p>
          </Container>
        </div>
      </div>
      <div
        className="transition-all duration-1000 ease-in-out min-h-screen"
        style={{ flex: scrolled ? '0 0 0' : '1 1 0' }}
      />
    </div>
  );
}
