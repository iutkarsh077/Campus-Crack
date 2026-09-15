import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type SiteButtonVariant = "primary" | "ghost";
export type SiteButtonSize = "compact" | "md" | "lg" | "block";

type SharedProps = {
  children: ReactNode;
  variant?: SiteButtonVariant;
  size?: SiteButtonSize;
  showArrow?: boolean;
  className?: string;
};

type LinkButtonProps = SharedProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

export type SiteButtonProps = LinkButtonProps | NativeButtonProps;

const baseClass =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variantClass: Record<SiteButtonVariant, string> = {
  primary:
    "hero-cta-primary bg-nav-login text-white hover:opacity-90 focus-visible:outline-nav-login",
  ghost:
    "border border-white/35 bg-transparent text-white hover:bg-white/10 focus-visible:outline-white",
};

const sizeClass: Record<SiteButtonSize, string> = {
  compact: "px-5 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base",
  block: "w-full px-6 py-3 text-base",
};

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function SiteButton(props: SiteButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    showArrow = false,
    className,
    ...rest
  } = props;

  const classes = cx(
    baseClass,
    variantClass[variant],
    sizeClass[size],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow ? (
        <ArrowRight
          aria-hidden
          className={cx(
            "hero-cta-arrow shrink-0",
            size === "lg" ? "size-4 sm:size-5" : "size-4",
          )}
          strokeWidth={2}
        />
      ) : null}
    </>
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkRest } = rest;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {content}
      </Link>
    );
  }

  const buttonRest = rest as NativeButtonProps;
  return (
    <button type={buttonRest.type ?? "button"} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
