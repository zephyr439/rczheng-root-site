"use client";

import { useEffect, useRef, useState } from "react";
import Container from "./container";
import CoverImage from "./cover-image";
import { ExpandableSection } from "./expandable-section";
import { ThemeSwitcher } from "./theme-switcher";

interface HeroSectionProps {
  isLandscape?: boolean;
  projects?: Array<{ name: string; url: string }>;
}

export function HeroSection({ isLandscape = false, projects = [] }: HeroSectionProps) {
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportHeight, setViewportHeight] = useState(0);

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

  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  if (isLandscape) {
    return (
      <>
        <div
          style={{
            marginTop: `${(viewportHeight - (containerRef.current?.offsetHeight || 0)) / 2}px`
          }}
        >
          <div ref={containerRef}>
            <Container>
              <div className="sticky top-0 pt-4 pb-4 bg-white dark:bg-slate-900 z-20 flex items-center justify-between">
                <h1 className="text-5xl lg:text-8xl font-bold tracking-tighter leading-tight text-left">
                  R.Z's Home.
                </h1>
                <ThemeSwitcher />
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
          style={{
            height: scrolled ? '0px' : `${(viewportHeight - (containerRef.current?.offsetHeight || 0)) / 2}px`,
            transition: 'height 1s ease-in-out',
            overflow: 'hidden'
          }}
        />
      </>
    );
  }

  return (
    <>
      <div
        style={{
          marginTop: `${(viewportHeight - (containerRef.current?.offsetHeight || 0)) / 2}px`
        }}
      >
        <div ref={containerRef}>
          <Container>
            <div className="sticky top-0 pt-8 pb-4 bg-white dark:bg-slate-900 z-20 flex items-center justify-between">
              <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter leading-tight text-left">
                R.Z's Home.
              </h1>
              <ThemeSwitcher />
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
            <div className="mb-6 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">I'm Ruichen Zheng,</h2>
              <div className="text-xl md:text-2xl leading-relaxed text-gray-800 dark:text-gray-200 space-y-4">
                <p>a Dartmouth '26 Math & CS student,</p>
                <p>working on AI, ML, and Web stuff half of my time.</p>
              </div>
            </div>
            <div className="mb-4">
              <a
                href="/cv.pdf"
                className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here is my CV →
              </a>
            </div>
            <ExpandableSection title="Current Projects" items={projects} />
          </Container>
        </div>
      </div>
      <div
        style={{
          height: scrolled ? '0px' : `${(viewportHeight - (containerRef.current?.offsetHeight || 0)) / 2}px`,
          transition: 'height 1s ease-in-out',
          overflow: 'hidden'
        }}
      />
    </>
  );
}
