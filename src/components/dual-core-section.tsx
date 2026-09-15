import Image from "next/image";
import { SiteButton } from "@/components/site-button";
import { dualCore } from "@/constants/landing";
import type { DualPillar } from "@/interfaces/landingpageinterface";

function PillarColumn({
  pillar,
  showDivider,
}: {
  pillar: DualPillar;
  showDivider: boolean;
}) {
  return (
    <article
      className={`px-4 py-10 sm:px-6 lg:px-10 lg:py-4 xl:px-12 ${
        showDivider
          ? "border-t border-header-border lg:border-t-0 lg:border-l"
          : ""
      }`}
    >
      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-dual-muted sm:text-[11px]">
        {pillar.indexLabel}
      </p>

      <div className="mt-4 overflow-hidden rounded-xl border border-white/5">
        <Image
          src={pillar.imageSrc}
          alt={pillar.imageAlt}
          width={pillar.imageWidth}
          height={pillar.imageHeight}
          className="h-auto w-full object-cover"
        />
      </div>

      <p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-dual-muted sm:text-[11px]">
        {pillar.caption}
      </p>

      <h3 className="mt-5 text-xl font-semibold text-white sm:text-2xl">
        {pillar.title}{" "}
        <span className="font-normal text-dual-muted">({pillar.suffix})</span>
      </h3>

      <p className="mt-2 text-base font-semibold text-white sm:text-lg">
        {pillar.subtitle}
      </p>
      <p className="mt-2 text-sm text-dual-muted">{pillar.blurb}</p>

      <div className="mt-6 border-t border-header-border pt-6">
        <ul className="flex flex-col gap-5 sm:gap-6">
          {pillar.features.map((feature) => (
            <li
              key={feature.title}
              className="border-l border-white/20 pl-4 text-sm leading-relaxed sm:text-[15px]"
            >
              <span className="font-semibold text-white">{feature.title}:</span>{" "}
              <span className="text-dual-muted">{feature.description}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t border-header-border pt-6">
        <SiteButton
          href={pillar.cta.href}
          variant={pillar.cta.variant === "primary" ? "primary" : "ghost"}
          size="md"
          showArrow={pillar.cta.variant === "ghost"}
        >
          {pillar.cta.label}
        </SiteButton>
      </div>
    </article>
  );
}

export function DualCoreSection() {
  return (
    <section
      id="ecosystem"
      className="scroll-mt-24 border-b border-header-border bg-background pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24"
      aria-labelledby="dual-core-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-4">
            <span
              aria-hidden
              className="h-px w-10 bg-header-border sm:w-14"
            />
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-dual-muted sm:text-xs">
              {dualCore.eyebrow}
            </p>
            <span
              aria-hidden
              className="h-px w-10 bg-header-border sm:w-14"
            />
          </div>

          <h2
            id="dual-core-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {dualCore.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-dual-muted sm:text-base">
            {dualCore.subcopy}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-7xl sm:mt-16 lg:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {dualCore.pillars.map((pillar, index) => (
            <PillarColumn
              key={pillar.indexLabel}
              pillar={pillar}
              showDivider={index > 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
