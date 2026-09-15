import { Sparkles } from "lucide-react";
import Link from "next/link";
import { promo } from "@/constants/landing";

export function PromoBanner() {
  return (
    <div
      role="region"
      aria-label="Promotion"
      className="relative flex w-full items-center justify-center gap-2 overflow-hidden border-b border-promo-border/90 bg-linear-to-r from-promo-from via-promo-via to-promo-from py-2 pl-3 pr-3 font-sans sm:gap-3 sm:py-2.5 sm:px-4"
    >
      <span aria-hidden className="promo-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3" />
      <Sparkles
        aria-hidden
        className="size-4 shrink-0 text-promo-gold"
        strokeWidth={1.75}
      />
      <p className="relative z-1 text-center text-[12px] leading-5 text-promo-text sm:text-[13px]">
        <span className="font-semibold text-promo-gold">{promo.prefix}</span>
        <span className="text-promo-muted"> — </span>
        <span>{promo.message}</span>{" "}
        <Link
          href={promo.href}
          className="font-medium text-promo-cta underline decoration-promo-cta/70 underline-offset-[3px] transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-promo-cta"
        >
          {promo.ctaLabel}
        </Link>
      </p>
    </div>
  );
}
