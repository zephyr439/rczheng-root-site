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
      <Container>
        {/* Header */}
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 md:mt-16 mb-8 md:mb-12">
          <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            R.Z's Home.
          </h1>
        </section>

        {/* Cover Image - Completes First Screen on Desktop, Part of First Screen on Mobile */}
        <section className="mb-6 md:mb-16 md:min-h-[60vh] flex flex-col justify-center">
          <div className="mb-2 md:mb-4">
            <CoverImage
              title="R. Zheng's Personal Website"
              src="/assets/blog/dynamic-routing/cover.jpg"
            />
          </div>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center md:text-left mb-8 md:mb-0">
            Hanksville, UT. Sept 2025
          </p>
        </section>

        {/* Introduction - Part of First Screen on Mobile */}
        <section className="mb-16 md:mb-20">
          <p className="text-lg md:text-2xl leading-relaxed text-gray-800 dark:text-gray-200 mb-4 md:mb-6">
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
