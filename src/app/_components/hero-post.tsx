import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="mb-20 md:mb-28">
        <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
          {title}
        </h3>
        <div className="mb-2 text-xl font-semibold">
          {author.name}
        </div>
        <div className="mb-4 text-lg text-gray-600 dark:text-gray-400">
          September 2025
        </div>
      </div>
    </section>
  );
}
