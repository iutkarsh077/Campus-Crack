import { Trophy } from "lucide-react";
import type { MonthlyContest } from "@/interfaces/landingpageinterface";

export function MonthlyContestCard({ contest }: { contest: MonthlyContest }) {
  return (
    <div className="contest-frame">
      <div className="bg-contest-inner">
        <div className="contest-top-rule h-px w-full" aria-hidden />

        <div className="border-b border-header-border px-5 py-7 sm:px-8 sm:py-8 lg:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sprint-zinc-500">
            {contest.eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-sprint-zinc-50 sm:text-[1.65rem]">
            {contest.heading}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sprint-zinc-400 sm:text-[15px]">
            {contest.subcopy}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <div className="relative flex flex-col justify-center border-b border-header-border px-5 py-8 sm:px-8 sm:py-10 lg:min-h-0 lg:border-r lg:border-b-0 lg:border-header-border lg:px-8 lg:py-10 xl:px-10">
            <div
              className="contest-panel-wash pointer-events-none absolute inset-0"
              aria-hidden
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2.5 rounded-none border border-contest-accent-border bg-contest-accent-soft px-3 py-1.5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-contest-accent" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-contest-badge-text">
                  {contest.statusLabel}
                </span>
              </div>

              <p className="mt-5 font-mono text-[1.05rem] font-bold leading-[1.35] tracking-[-0.02em] text-sprint-zinc-50 sm:text-xl">
                {contest.challengeTitleLines[0]}
                <br />
                {contest.challengeTitleLines[1]}
                <br />
                {contest.challengeTitleLines[2]}
              </p>

              <div className="mt-5 space-y-2 border-t border-header-border/80 pt-5">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-sprint-zinc-500 sm:text-xs">
                  {contest.seriesWindowLabel}
                </p>
                <p className="font-mono text-xs font-medium leading-relaxed text-sprint-zinc-400 tabular-nums sm:text-sm">
                  {contest.seriesWindowValue}
                </p>
                <p className="font-mono text-[11px] text-sprint-zinc-600 sm:text-xs">
                  {contest.seriesNote}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-7 px-5 py-8 sm:px-8 sm:py-10 lg:px-8 lg:py-10 xl:px-10">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-sprint-zinc-500">
                <Trophy
                  aria-hidden
                  className="size-3.5 text-contest-accent-strong"
                  strokeWidth={2}
                />
                {contest.bountiesLabel}
              </div>
              <ul className="mt-3 space-y-2.5">
                {contest.bounties.map((bounty) => (
                  <li
                    key={bounty}
                    className="flex gap-3 text-[13px] leading-snug text-sprint-zinc-300 sm:text-sm"
                  >
                    <span
                      className="mt-[0.4rem] h-1 w-1 shrink-0 bg-contest-accent-strong"
                      aria-hidden
                    />
                    {bounty}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sprint-zinc-500">
                {contest.leaderboardLabel}
              </p>
              <div className="mt-3 overflow-hidden border border-contest-leaderboard-border bg-contest-leaderboard-bg font-mono text-xs sm:text-sm">
                <div className="grid grid-cols-[2.5rem_1fr_4.5rem] gap-2 border-b border-header-border bg-contest-leaderboard-header px-3 py-2.5 text-[10px] font-semibold tracking-wider text-sprint-zinc-500 uppercase sm:text-[11px]">
                  <span>{contest.leaderboardColumns.rank}</span>
                  <span>{contest.leaderboardColumns.participant}</span>
                  <span className="text-right">
                    {contest.leaderboardColumns.points}
                  </span>
                </div>
                {contest.leaderboard.map((row) => (
                  <div
                    key={row.rank}
                    className="grid grid-cols-[2.5rem_1fr_4.5rem] items-center gap-2 border-b border-header-border/80 px-3 py-2.5 last:border-b-0"
                  >
                    <span className="text-sprint-zinc-500 tabular-nums">
                      {row.rank}
                    </span>
                    <span className="truncate text-sprint-zinc-400">
                      {row.participant}
                    </span>
                    <span className="text-right font-semibold text-sprint-zinc-100 tabular-nums">
                      {row.points}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
