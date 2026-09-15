import { MonthlyContestCard } from "@/components/monthly-contest-card";
import { monthlySprint } from "@/constants/landing";

export function MonthlySprintSection() {
  return (
    <section
      id="explore"
      className="relative scroll-mt-24 border-b border-header-border bg-background"
      aria-labelledby="monthly-performance-heading"
    >
      <div className="sprint-section-wash pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-sprint-zinc-500 uppercase">
            {monthlySprint.eyebrow}
          </p>
          <div
            className="sprint-eyebrow-rule mx-auto mt-4 h-px w-12"
            aria-hidden
          />
          <h2
            id="monthly-performance-heading"
            className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-balance text-sprint-zinc-50 sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]"
          >
            {monthlySprint.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-pretty text-sprint-zinc-400 sm:text-base">
            {monthlySprint.lead}
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center sm:mt-14">
          <p className="text-lg font-semibold text-sprint-zinc-100 sm:text-xl">
            {monthlySprint.secondaryHeading}
          </p>
          <p className="text-sm leading-relaxed text-sprint-zinc-400 sm:text-base">
            {monthlySprint.secondaryLead}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
          <h3 className="text-center text-[11px] font-semibold tracking-[0.18em] text-sprint-zinc-500 uppercase">
            {monthlySprint.rewardsLabel}
          </h3>
          <ul className="mt-5 space-y-4 border-t border-header-border pt-8">
            {monthlySprint.rewards.map((reward) => (
              <li
                key={reward.title}
                className="border-l-2 border-contest-accent-mid pl-4 text-left"
              >
                <p className="text-sm font-semibold text-sprint-zinc-200">
                  {reward.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-sprint-zinc-500">
                  {reward.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div
          id="contest"
          className="mx-auto mt-14 max-w-5xl scroll-mt-24 sm:mt-16 lg:mt-20"
        >
          <MonthlyContestCard contest={monthlySprint.contest} />
        </div>
      </div>
    </section>
  );
}
