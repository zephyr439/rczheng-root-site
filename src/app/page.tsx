import Container from "@/app/_components/container";
import { ExpandableSection } from "@/app/_components/expandable-section";

export default function Index() {
  const courseProjects = [
    { name: "HCI Redesign", url: "/hci/redesign" },
    { name: "Engs 4 Lab 1", url: "/engs4/lab1" },
    { name: "Engs 4 Lab 2", url: "/travel" },
  ];

  const currentProjects = [
    { name: "Universal Matching Game", url: "https://universalmatching.com/" },
  ];

  return (
    <main>
      <Container>
        {/* Introduction */}
        <section className="mt-16 mb-16 md:mb-20">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-800 dark:text-gray-200 mb-6">
            <strong>I'm Ruichen Zheng</strong>, a Math & CS student at Dartmouth who spends half the time training models and the other half exploring the world. Currently interested in ML, AI for education, and web development.
          </p>
          <div className="mt-4">
            <a
              href="/cv.pdf"
              className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Here is my CV →
            </a>
          </div>
        </section>

        {/* The Academic Half */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            The Academic Half
          </h2>

          <ExpandableSection title="Course Projects" items={courseProjects} />
          <ExpandableSection title="Current Projects" items={currentProjects} />
        </section>

        {/* The Adventure Half */}
        <section className="mb-20 md:mb-28">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            The Adventure Half
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-800 dark:text-gray-200 mb-6">
            The other half? From African savannas to Arctic fjords, from rainforest streams to glacial peaks. <strong>60+ countries, 30+ national parks</strong>, and countless stories captured through my lens. The journey continues.
          </p>
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
