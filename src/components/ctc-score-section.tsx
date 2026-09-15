import { Equal, Plus } from "lucide-react";
import Image from "next/image";
import { ctcScore } from "@/constants/landing";
import type { ScoreBadge } from "@/interfaces/landingpageinterface";

function ConnectorIcon({ icon }: { icon: "plus" | "equal" }) {
  const Icon = icon === "plus" ? Plus : Equal;
  return (
    <div className="score-connector-ring flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sprint-zinc-400">
      <span className="flex size-full items-center justify-center [&_svg]:stroke-[1]">
        <Icon aria-hidden className="size-3.5" strokeWidth={1.25} />
      </span>
    </div>
  );
}

function ConnectorPlusMobile() {
  return (
    <>
      <div className="score-connector-line h-6 w-px shrink-0 sm:hidden" aria-hidden />
      <ConnectorIcon icon="plus" />
      <div className="score-connector-line h-6 w-px shrink-0 sm:hidden" aria-hidden />
    </>
  );
}

function ConnectorPlusDesktop() {
  return (
    <div className="flex min-w-[4rem] max-w-[7rem] flex-1 items-center">
      <div className="score-connector-line h-px min-w-[0.75rem] flex-1" aria-hidden />
      <ConnectorIcon icon="plus" />
      <div className="score-connector-line h-px min-w-[0.75rem] flex-1" aria-hidden />
    </div>
  );
}

function ConnectorEqual() {
  return (
    <div className="flex w-full max-w-md items-center justify-center gap-3 px-4 sm:max-w-2xl">
      <div
        className="score-connector-line h-px min-w-[2rem] flex-1"
        aria-hidden
      />
      <ConnectorIcon icon="equal" />
      <div
        className="score-connector-line h-px min-w-[2rem] flex-1"
        aria-hidden
      />
    </div>
  );
}

function BadgeTile({
  imageSrc,
  imageAlt,
  sizeClass,
  variant,
  paddingClass,
  sizes,
}: {
  imageSrc: string;
  imageAlt: string;
  sizeClass: string;
  variant: "input" | "result";
  paddingClass: string;
  sizes: string;
}) {
  const outerRadius =
    variant === "input" ? "rounded-2xl" : "rounded-[1.35rem]";
  const innerRadius =
    variant === "input" ? "rounded-[15px]" : "rounded-[1.2rem]";

  const tile = (
    <div
      className={`score-badge-shell relative isolate ${outerRadius} ${
        variant === "result" ? "w-full" : sizeClass
      }`}
    >
      <div
        className={`score-badge-inner relative overflow-hidden ${innerRadius}`}
      >
        <div
          className={`score-badge-sheen pointer-events-none absolute inset-0 opacity-90 ${innerRadius}`}
          aria-hidden
        />
        <div className={`score-badge-rim relative ${innerRadius}`}>
          <div className="relative aspect-square w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes={sizes}
              className={`object-contain ${paddingClass}`}
            />
          </div>
        </div>
      </div>
    </div>
  );

  if (variant === "result") {
    return (
      <div className={`score-result-glow relative ${sizeClass}`}>{tile}</div>
    );
  }

  return tile;
}

function InputPillar({
  badge,
  tileSizeClass,
}: {
  badge: ScoreBadge;
  tileSizeClass: string;
}) {
  return (
    <div className="flex w-full max-w-[11rem] flex-col items-center text-center sm:max-w-[12rem]">
      <BadgeTile
        imageSrc={badge.imageSrc}
        imageAlt={badge.imageAlt}
        sizeClass={tileSizeClass}
        variant="input"
        paddingClass="p-2.5"
        sizes="96px"
      />
      <p className="mt-4 text-sm font-semibold tracking-[-0.02em] text-sprint-zinc-200">
        {badge.title}
      </p>
      <p className="mt-1.5 text-[11px] leading-relaxed text-sprint-zinc-500 sm:text-xs">
        {badge.description}
      </p>
    </div>
  );
}

export function CtcScoreSection() {
  const [skills, practice, software] = ctcScore.inputs;

  return (
    <section
      id="ctc-score"
      className="relative overflow-hidden border-b border-score-section-border bg-background"
      aria-labelledby="ctc-score-heading"
    >
      <div className="score-section-wash pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-sprint-zinc-500 uppercase">
            {ctcScore.eyebrow}
          </p>
          <h2
            id="ctc-score-heading"
            className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-balance text-sprint-zinc-50 sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]"
          >
            {ctcScore.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-pretty text-sprint-zinc-400 sm:text-base">
            {ctcScore.lead}
          </p>
        </header>

        <div
          className="mx-auto mt-14 max-w-5xl sm:mt-16 lg:mt-20"
          role="img"
          aria-label={ctcScore.infographicLabel}
        >
          <div className="flex flex-col items-center gap-4 sm:gap-5">
            <div className="flex w-full flex-col items-center sm:hidden">
              <InputPillar badge={skills} tileSizeClass="w-[5rem]" />
              <ConnectorPlusMobile />
              <InputPillar badge={practice} tileSizeClass="w-[5rem]" />
              <ConnectorPlusMobile />
              <InputPillar badge={software} tileSizeClass="w-[5rem]" />
            </div>

            <div className="hidden w-full min-w-0 justify-center sm:flex">
              <div className="flex max-w-full flex-nowrap items-center justify-center gap-x-1 overflow-x-auto pb-1 md:gap-x-2">
                <InputPillar
                  badge={skills}
                  tileSizeClass="w-[6rem] shrink-0"
                />
                <ConnectorPlusDesktop />
                <InputPillar
                  badge={practice}
                  tileSizeClass="w-[6rem] shrink-0"
                />
                <ConnectorPlusDesktop />
                <InputPillar
                  badge={software}
                  tileSizeClass="w-[6rem] shrink-0"
                />
              </div>
            </div>

            <ConnectorEqual />

            <div className="flex w-full flex-col items-center px-2 pt-2">
              <BadgeTile
                imageSrc={ctcScore.result.imageSrc}
                imageAlt={ctcScore.result.imageAlt}
                sizeClass="w-[6rem] sm:w-[7.2rem]"
                variant="result"
                paddingClass="p-3 sm:p-3.5"
                sizes="(max-width:640px) 96px, 120px"
              />
              <p className="mt-6 text-lg font-semibold tracking-[-0.02em] text-sprint-zinc-100 sm:text-xl">
                {ctcScore.result.title}
              </p>
              <p className="mt-2 font-mono text-base font-bold tracking-[-0.05em] text-sprint-zinc-200 tabular-nums sm:text-lg">
                {ctcScore.result.range}
              </p>
              <p className="mt-6 max-w-lg text-center text-xs leading-relaxed text-sprint-zinc-500 sm:text-sm">
                <span className="text-sprint-zinc-400">
                  {ctcScore.footerBefore}
                </span>{" "}
                <span className="text-sprint-zinc-500">{ctcScore.footerMid}</span>{" "}
                {ctcScore.footerJoin}{" "}
                <span className="font-medium text-sprint-zinc-400">
                  {ctcScore.footerEmphasis}
                </span>{" "}
                {ctcScore.footerAfter}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
