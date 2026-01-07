import Container from "@/app/_components/container";
import { ExpandableSection } from "@/app/_components/expandable-section";
import { HeroSection } from "@/app/_components/hero-section";

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
        <HeroSection isLandscape={true} />

        {/* Content appears after scrolling */}
        <Container>
          <section className="mt-16 md:mt-20 mb-16 md:mb-20">
            <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 dark:text-gray-200 mb-6">
              <strong>I'm Ruichen Zheng</strong>, a Math & CS student at Dartmouth who spends half the time training models and the other half exploring the world. Currently interested in ML, AI for Education, and Web Development.
            </p>
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
              More About Me ...
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

          {/* Contact Section */}
          <section className="mb-20 md:mb-28 border-t border-gray-200 dark:border-gray-700 pt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Contact
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8">
              <a
                href="mailto:zrc439@outlook.com"
                className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/rc-zheng/"
                className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2026 Ruichen Zheng
            </p>
          </section>
        </Container>
      </div>

      {/* Portrait Layout */}
      <div className="landscape:hidden">
        <HeroSection isLandscape={false} projects={currentProjects} />

        {/* Content appears after scrolling */}
        <Container>
          <section className="mt-16 md:mt-20 mb-20 md:mb-28">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              More About Me ...
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

          {/* Contact Section */}
          <section className="mb-20 md:mb-28 border-t border-gray-200 dark:border-gray-700 pt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Contact
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8">
              <a
                href="mailto:zrc439@outlook.com"
                className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/rc-zheng/"
                className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2026 Ruichen Zheng
            </p>
          </section>
        </Container>
      </div>
    </main>
  );
}
