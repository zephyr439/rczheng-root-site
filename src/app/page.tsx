import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import CoverImage from "@/app/_components/cover-image";

export default function Index() {
  return (
    <main>
      <Container>
        <Intro />
        <section>
          <div className="mb-8 md:mb-16">
            <CoverImage
              title="Personal Website Coming Soon"
              src="/assets/blog/dynamic-routing/cover.jpg"
            />
          </div>
          <div className="mb-20 md:mb-28">
            <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
              Personal Website Coming Soon
            </h3>
            <div className="mb-2 text-xl font-semibold">
              Ruichen Zheng
            </div>
            <div className="mb-4 text-lg text-gray-600 dark:text-gray-400">
              September 2025
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
