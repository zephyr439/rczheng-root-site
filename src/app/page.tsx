import Container from "@/app/_components/container";
import { ExpandableSection } from "@/app/_components/expandable-section";
import CoverImage from "@/app/_components/cover-image";

export default function Index() {
  const currentProjects = [
    { name: "HCI Redesign Project", url: "/hci/redesign" },
    { name: "Zephyr Luxury Travel", url: "/travel" },
    { name: "Universal Matching Game", url: "https://universalmatching.com/" },
  ];

  return (
    <main>
      {/* First Screen - Landscape/Wide: Header + Image only */}
      <section className="min-h-screen hidden landscape:flex flex-col justify-center py-4">
        <Container>
          <div className="flex-col flex items-center justify-center mb-4 lg:mb-8">
            <h1 className="text-5xl lg:text-8xl font-bold tracking-tighter leading-tight text-center mb-4 lg:mb-12">
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
      </section>

      {/* First Screen - Portrait/Narrow: Header + Image + Intro */}
      <section className="min-h-screen landscape:hidden flex flex-col justify-center py-6">
        <Container>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter leading-tight text-center mb-4 sm:mb-6">
            R.Z's Home.
          </h1>
          <div className="mb-2 max-h-[35vh] overflow-hidden">
            <CoverImage
              title="R. Zheng's Personal Website"
              src="/assets/blog/dynamic-routing/cover.jpg"
            />
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 text-center mb-4 sm:mb-6">
            Hanksville, UT. Sept 2025
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            <strong>I'm Ruichen Zheng</strong>, a Math & CS student at Dartmouth who spends half the time training models and the other half exploring the world. Currently interested in ML, AI for education, and web development.
          </p>
        </Container>
      </section>

      <Container>
        {/* Introduction - Landscape only (portrait has it in first screen) */}
        <section className="mb-16 md:mb-20 hidden landscape:block">
          <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 dark:text-gray-200">
            <strong>I'm Ruichen Zheng</strong>, a Math & CS student at Dartmouth who spends half the time training models and the other half exploring the world. Currently interested in ML, AI for education, and web development.
          </p>
        </section>

        {/* The Academic Half */}
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

        {/* The Adventure Half */}
        <section className="mb-20 md:mb-28">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            The Adventure Half
          </h2>
          <div className="text-xl md:text-2xl leading-relaxed text-gray-800 dark:text-gray-200 mb-6 space-y-2">
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
    </main>
  );
}
