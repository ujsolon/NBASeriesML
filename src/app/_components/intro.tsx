import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Crunch Time Predictions: NBA Game 7s Analyzed
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Explore how ML models forecast outcomes when everything is on the line.
      </h4>
    </section>
  );
}
