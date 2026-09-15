"use client";

import { useId, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navPrimary, navSecondary } from "@/constants/landing";
import { LoginButton } from "@/components/login-button";

type SiteHeaderProps = {
  children: React.ReactNode;
};

const linkClass =
  "text-sm text-nav-link transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-login";

const mobileLinkClass =
  "block py-2.5 text-[16px] text-nav-link transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-login";

export function SiteHeader({ children }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return (
    <header className="sticky top-0 z-50 flex w-full flex-col border-b border-header-border bg-background/80 pt-[env(safe-area-inset-top,0px)] backdrop-blur-xl backdrop-saturate-150">
      {children}
      <div className="relative flex h-14 w-full items-center justify-between px-4 sm:h-16 sm:px-6 lg:grid lg:grid-cols-3 lg:px-12 xl:px-16 2xl:px-28">
        <Link
          href="/"
          className="shrink-0 justify-self-start rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav-login"
          aria-label="Crack The Campus home"
        >
          <Image
            src="/assets/images/logo.webp"
            alt="Crack The Campus"
            width={148}
            height={36}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>
        <nav
          className="hidden items-center justify-center lg:flex"
          aria-label="Primary"
        >
          <ul className="flex items-center gap-7">
            {navPrimary.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav
          className="hidden items-center justify-end gap-6 lg:flex"
          aria-label="Account"
        >
          <span aria-hidden className="h-5 w-px shrink-0 bg-header-border" />
          {navSecondary.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
          <LoginButton variant="compact" />
        </nav>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center justify-self-end rounded-xl border border-header-border bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav-login lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="size-5" strokeWidth={1.75} />
          ) : (
            <Menu className="size-5" strokeWidth={1.75} />
          )}
        </button>
      </div>
      <nav
        id={menuId}
        className={`flex-col gap-4 px-5 pb-5 pt-1 lg:hidden ${
          open ? "flex" : "hidden"
        }`}
        aria-label="Mobile"
      >
        <ul className="flex flex-col">
          {[...navPrimary, ...navSecondary].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={mobileLinkClass}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <LoginButton variant="block" onNavigate={() => setOpen(false)} />
      </nav>
    </header>
  );
}
