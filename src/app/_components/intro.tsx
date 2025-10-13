import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        R.Z's<br />Blog.
      </h1>
      <div className="text-center md:text-left text-lg mt-5 md:pl-8">
        <h4 className="mb-2">
          For HCI projects,{" "}
          <a
            href="/hci/redesign"
            className="underline hover:text-blue-600 duration-200 transition-colors"
          >
            visit here
          </a>
          .
        </h4>
        <h4 className="mb-2">
          For Engs 4 Lab 1,{" "}
          <a
            href="/engs4/lab1"
            className="underline hover:text-blue-600 duration-200 transition-colors"
          >
            visit here
          </a>
          .
        </h4>
        <h4>
          For Engs 4 Lab 2,{" "}
          <a
            href="/travel"
            className="underline hover:text-blue-600 duration-200 transition-colors"
          >
            visit here
          </a>
          .
        </h4>
      </div>
    </section>
  );
}
