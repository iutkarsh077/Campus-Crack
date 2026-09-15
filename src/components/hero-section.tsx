import Image from "next/image";
import { SiteButton } from "@/components/site-button";
import { hero } from "@/constants/landing";

export function HeroSection() {
  return (
    <section
      className="relative isolate flex min-h-[min(100svh,52rem)] flex-col justify-center overflow-hidden border-b border-header-border sm:min-h-[max(36rem,calc(100svh-5.75rem))]"
      aria-labelledby="hero-heading"
    >
      <Image
        src={hero.imageSrc}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[70%_18%] sm:object-[78%_12%] lg:object-[82%_10%] xl:object-[85%_23%]"
      />
      <div
        aria-hidden
        className="hero-fade-x-mobile pointer-events-none absolute inset-0 -z-10 sm:hidden"
      />
      <div
        aria-hidden
        className="hero-fade-x pointer-events-none absolute inset-0 -z-10 hidden sm:block"
      />
      <div
        aria-hidden
        className="hero-fade-y pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-2/5 sm:hidden"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-12 sm:min-h-[max(36rem,calc(100svh-5.75rem))] sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-xl border-l-2 border-nav-login pl-4 sm:max-w-2xl sm:pl-5">
          <h1
            id="hero-heading"
            className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {hero.title}
          </h1>
          <p className="mt-5 text-base text-hero-muted sm:mt-6 sm:text-lg">
            {hero.leadBefore}
            <span className="font-semibold text-white">{hero.leadEmphasis}</span>
            {hero.leadAfter}
          </p>
          <p className="mt-3 text-base text-hero-muted sm:text-lg">
            {hero.subline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            {hero.ctas.map((cta) => (
              <SiteButton
                key={cta.href}
                href={cta.href}
                variant={cta.variant === "primary" ? "primary" : "ghost"}
                size="lg"
                showArrow
              >
                {cta.label}
              </SiteButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
