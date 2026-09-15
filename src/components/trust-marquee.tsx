import {
  Bot,
  Building2,
  CircuitBoard,
  Cloud,
  Cpu,
  Database,
  Globe,
  Hexagon,
  Layers,
  type LucideIcon,
  Monitor,
  Network,
  Printer,
  Radio,
  Server,
  Smartphone,
  Wallet,
} from "lucide-react";
import { marquee } from "@/constants/landing";
import type {
  MarqueeCompany,
  MarqueeIcon,
} from "@/interfaces/landingpageinterface";

const iconMap: Record<MarqueeIcon, LucideIcon> = {
  globe: Globe,
  building2: Building2,
  cpu: Cpu,
  cloud: Cloud,
  network: Network,
  server: Server,
  smartphone: Smartphone,
  wallet: Wallet,
  radio: Radio,
  circuitBoard: CircuitBoard,
  hexagon: Hexagon,
  layers: Layers,
  monitor: Monitor,
  database: Database,
  bot: Bot,
  printer: Printer,
};

/** Repeat logos so one loop half is always wider than the viewport. */
function fillTrack(items: MarqueeCompany[], copies = 4): MarqueeCompany[] {
  return Array.from({ length: copies }, () => items).flat();
}

function MarqueeSegment({
  items,
  markedHidden = false,
}: {
  items: MarqueeCompany[];
  markedHidden?: boolean;
}) {
  return (
    <div
      className="trust-marquee-segment flex shrink-0"
      aria-hidden={markedHidden || undefined}
    >
      {items.map((company, index) => {
        const Icon = iconMap[company.icon];
        return (
          <div
            key={`${company.name}-${index}`}
            className="flex shrink-0 items-center justify-center px-8 sm:px-10"
          >
            <Icon
              aria-hidden
              className="size-7 text-marquee-logo sm:size-8"
              strokeWidth={1.5}
            />
            {!markedHidden ? (
              <span className="sr-only">{company.name}</span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function MarqueeTrack({
  items,
  reverse = false,
}: {
  items: MarqueeCompany[];
  reverse?: boolean;
}) {
  const loopItems = fillTrack(items);

  return (
    <div
      className={`flex w-max ${
        reverse ? "trust-marquee-track-reverse" : "trust-marquee-track"
      }`}
    >
      <MarqueeSegment items={loopItems} />
      <MarqueeSegment items={loopItems} markedHidden />
    </div>
  );
}

export function TrustMarquee() {
  return (
    <section
      className="relative border-b border-header-border bg-background"
      aria-label={marquee.title}
    >
      <p className="px-4 pt-8 text-center text-[11px] font-medium tracking-[0.18em] text-marquee-muted uppercase sm:pt-10 sm:text-xs">
        {marquee.title}
      </p>
      <div className="trust-marquee-zone group/trust relative mt-6 w-full overflow-hidden pb-8 sm:mt-8 sm:pb-12">
        <div className="trust-marquee-mask flex w-full flex-col gap-6 sm:gap-12">
          <MarqueeTrack items={marquee.rowOne} reverse />
          <MarqueeTrack items={marquee.rowTwo} />
        </div>
      </div>
    </section>
  );
}
