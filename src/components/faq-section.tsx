import { faq } from "@/constants/landing";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-header-border bg-background py-14 sm:py-16"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 text-center sm:mb-10">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-contest-accent uppercase">
            {faq.eyebrow}
          </p>
          <h2
            id="faq-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-balance text-sprint-zinc-50 sm:text-3xl"
          >
            {faq.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-prose text-sm leading-relaxed text-sprint-zinc-400 sm:text-base">
            {faq.intro}
          </p>
        </header>

        <dl className="space-y-3">
          {faq.items.map((item) => (
            <div
              key={item.question}
              className="rounded-xl border border-header-border bg-faq-card px-4 py-4 sm:px-5 sm:py-5"
            >
              <dt className="text-sm font-semibold text-sprint-zinc-50 sm:text-base">
                {item.question}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-sprint-zinc-400 sm:text-[0.9375rem]">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
