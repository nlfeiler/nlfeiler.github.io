
"use client";

import { useEffect, useState } from "react";

const deadline = new Date(2026, 9, 30, 23, 59, 59).getTime();

function getRemaining() {
  const difference = Math.max(0, deadline - Date.now());

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
    expired: difference === 0,
  };
}

export default function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getRemaining> | null>(
    null
  );

  useEffect(() => {
    const update = () => setTime(getRemaining());
    update();

    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  if (!time) {
    return (
      <div className="h-24 animate-pulse rounded-xl bg-white/5" />
    );
  }

  if (time.expired) {
    return (
      <p className="text-center text-orange-300">
        Registration for this recruitment period has closed.
      </p>
    );
  }

  const units = [
    { label: "DAYS", value: time.days },
    { label: "HOURS", value: time.hours },
    { label: "MINUTES", value: time.minutes },
    { label: "SECONDS", value: time.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="rounded-xl border border-white/10 bg-white/[0.04] px-1 py-4 text-center sm:py-6"
        >
          <div className="font-mono text-2xl font-bold tracking-tight text-orange-300 sm:text-4xl">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="mt-2 text-[9px] tracking-[0.18em] text-slate-400 sm:text-xs">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
