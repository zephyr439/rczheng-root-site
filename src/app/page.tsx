import Container from "@/app/_components/container";
import { ExpandableSection } from "@/app/_components/expandable-section";
import CoverImage from "@/app/_components/cover-image";
import { ScrollReveal } from "@/app/_components/scroll-reveal";

export default function Index() {
  const currentProjects = [
    { name: "HCI Redesign Project", url: "/hci/redesign" },
    { name: "Zephyr Luxury Travel", url: "/travel" },
    { name: "Universal Matching Game", url: "https://universalmatching.com/" },
  ];

  return (
    <main className="bg-white dark:bg-slate-900">
      {/* Landscape Layout */}
      <div className="hidden landscape:block">
        {/* First Screen - Title scrolls up and sticks */}
        <div className="h-screen flex flex-col justify-center">
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
        </div>

        {/* Content appears after scrolling */}
        <Container>
          <section className="mb-16 md:mb-20">
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 dark:text-gray-200">
              <strong>I'm Ruichen Zheng</strong>, a Math & CS student at Dartmouth who spends half the time training models and the other half exploring the world. Currently interested in ML, AI for Education, and Web Development.
            </p>
          </section>

          <section className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Academic Half
            </h2>
            <div className="mb-4">
              <a
                href="/cv.pdf"
                className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here is my CV →
              </a>
            </div>
            <ExpandableSection title="Current Projects" items={currentProjects} />
          </section>

          <section className="mb-20 md:mb-28">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Adventure Half
            </h2>
            <div className="text-xl md:text-2xl leading-relaxed text-gray-800 dark:text-gray-200 mb-6 space-y-4">
              <p>The other half?</p>
              <p>From African savannas to Arctic fjords, from rainforest streams to glacial peaks.</p>
              <p><strong>60+ countries, 30+ national parks</strong>, and countless stories captured through my lens.</p>
              <p>The journey continues.</p>
            </div>
            <div className="mt-4">
              <a
                href="/journeys"
                className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
              >
                View my travel portfolio →
              </a>
            </div>
          </section>
        </Container>
      </div>

      {/* Portrait Layout */}
      <div className="landscape:hidden">
        {/* First Screen - Title scrolls up and sticks */}
        <div className="h-screen flex flex-col justify-center">
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
            <p className="text-2xl leading-relaxed text-gray-800 dark:text-gray-200">
              <strong>I'm Ruichen Zheng</strong>, a Math & CS student at Dartmouth who spends half the time training models and the other half exploring the world. Currently interested in ML, AI for Education, and Web Development.
            </p>
          </Container>
        </div>

        {/* Content appears after scrolling */}
        <Container>
          <section className="pt-8 mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Academic Half
            </h2>
            <div className="mb-4">
              <a
                href="/cv.pdf"
                className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here is my CV →
              </a>
            </div>
            <ExpandableSection title="Current Projects" items={currentProjects} />
          </section>

          <section className="mb-20 md:mb-28">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Adventure Half
            </h2>
            <div className="text-xl md:text-2xl leading-relaxed text-gray-800 dark:text-gray-200 mb-6 space-y-4">
              <p>The other half?</p>
              <p>From African savannas to Arctic fjords, from rainforest streams to glacial peaks.</p>
              <p><strong>60+ countries, 30+ national parks</strong>, and countless stories captured through my lens.</p>
              <p>The journey continues.</p>
            </div>
            <div className="mt-4">
              <a
                href="/journeys"
                className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
              >
                View my travel portfolio →
              </a>
            </div>
          </section>
        </Container>
      </div>
    </main>
  );
}
