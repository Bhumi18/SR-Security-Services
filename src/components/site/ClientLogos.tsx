import { Building2 } from "lucide-react";

import { clients } from "@/data/site";

export function ClientLogos() {
  const row = [...clients, ...clients];

  return (
    <div className="relative mt-12 overflow-hidden" aria-label="Clients we serve">
      <div className="marquee-track gap-4">
        {row.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex h-20 w-56 shrink-0 items-center justify-center gap-3 rounded-2xl border border-border bg-card px-5"
          >
            <Building2 className="size-5 shrink-0 text-accent" aria-hidden="true" />
            <span className="font-display text-sm font-semibold text-charcoal">{name}</span>
          </div>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent"
      />
    </div>
  );
}
