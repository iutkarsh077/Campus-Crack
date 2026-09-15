"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { Building2, GraduationCap, MessageCircle, X } from "lucide-react";
import { rubyChat } from "@/constants/landing";

const optionClass =
  "flex items-center gap-2.5 rounded-xl border border-header-border bg-footer-surface px-3.5 py-3 text-left text-[13px] text-sprint-zinc-200 transition hover:border-contest-accent/40 hover:bg-ruby-option-hover";

export function RubyChatbot() {
  const panelId = useId();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const ui = (
    <div className="pointer-events-none fixed right-0 bottom-0 z-[9500] flex flex-col items-end gap-3 p-4 pt-0 pr-[max(1rem,env(safe-area-inset-right))] pb-[max(1rem,env(safe-area-inset-bottom))] pl-6 sm:p-6 sm:pr-[max(1.5rem,env(safe-area-inset-right))] sm:pb-[max(1.25rem,env(safe-area-inset-bottom))]">
      {open ? (
        <div
          id={panelId}
          className="ruby-panel-enter ruby-panel-shadow pointer-events-auto flex w-[min(100vw-2rem,22rem)] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-header-border bg-background"
          role="dialog"
          aria-modal="false"
          aria-labelledby={`${panelId}-title`}
        >
          <div className="flex items-center justify-between gap-2 border-b border-header-border bg-linear-to-r from-ruby-header-from to-background px-4 py-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <span
                className="ruby-avatar-ring flex size-9 shrink-0 items-center justify-center rounded-full bg-contest-accent text-[13px] font-bold text-white"
                aria-hidden
              >
                {rubyChat.avatarLetter}
              </span>
              <div className="min-w-0">
                <p
                  id={`${panelId}-title`}
                  className="truncate text-[15px] font-semibold text-white"
                >
                  {rubyChat.title}
                </p>
                <p className="truncate text-[11px] text-sprint-zinc-400">
                  {rubyChat.subtitle}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex size-9 shrink-0 items-center justify-center rounded-lg text-sprint-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label={rubyChat.closeAriaLabel}
            >
              <X className="size-4" strokeWidth={1.75} />
            </button>
          </div>

          <div className="flex max-h-[min(52dvh,320px)] flex-col gap-3 overflow-y-auto overscroll-contain px-4 py-4">
            <div className="flex justify-start">
              <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-header-border bg-footer-surface px-3.5 py-2.5 text-[13px] leading-relaxed text-sprint-zinc-200 sm:text-[14px]">
                {rubyChat.welcome}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button type="button" className={optionClass}>
                <Building2 className="size-4 shrink-0 text-footer-email" />
                {rubyChat.institutionOption}
              </button>
              <button type="button" className={optionClass}>
                <GraduationCap className="size-4 shrink-0 text-footer-email" />
                {rubyChat.studentOption}
              </button>
            </div>
          </div>

          <p className="border-t border-header-border px-4 py-3 text-center text-[10px] text-sprint-zinc-600">
            {rubyChat.chooseHint}
          </p>
        </div>
      ) : null}

      <button
        type="button"
        id={`${panelId}-launcher`}
        className={`ruby-fab-glow pointer-events-auto flex size-14 cursor-pointer items-center justify-center rounded-full bg-contest-accent text-white transition-[transform,box-shadow] duration-200 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-contest-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:size-[3.75rem] ${
          open ? "ring-2 ring-footer-email/50" : ""
        }`}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={open ? rubyChat.closeAriaLabel : rubyChat.openAriaLabel}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <X className="size-6" strokeWidth={1.75} />
        ) : (
          <MessageCircle className="size-7" strokeWidth={1.75} />
        )}
      </button>
    </div>
  );

  return createPortal(ui, document.body);
}
