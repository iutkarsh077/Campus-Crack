import { infraStrip } from "@/constants/landing";

export function InfraStripSection() {
  return (
    <section
      className="infra-section-bg border-y border-header-border"
      aria-labelledby="scalability-strip-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <header className="mx-auto max-w-4xl text-center">
          <h2
            id="scalability-strip-heading"
            className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-balance text-sprint-zinc-50 sm:text-3xl lg:text-[1.75rem] lg:leading-snug"
          >
            {infraStrip.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-pretty text-sprint-zinc-400 sm:text-base">
            {infraStrip.lead}
          </p>
        </header>

        <div
          className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-10 sm:mt-14 sm:grid-cols-3 sm:gap-8 lg:mt-16 lg:gap-12"
          role="presentation"
        >
          {infraStrip.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <p className="font-mono text-xl font-bold tracking-tight text-sprint-zinc-50 sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[13px] font-medium text-sprint-zinc-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-[11px] font-medium leading-relaxed text-sprint-zinc-500 sm:mt-14 sm:text-xs">
          {infraStrip.footnote}
        </p>
      </div>
    </section>
  );
}
