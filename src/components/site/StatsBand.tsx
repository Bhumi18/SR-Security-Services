import { stats } from "@/data/site";

export function StatsBand() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="card-premium flex flex-col items-center px-4 py-7 text-center"
        >
          <span className="font-display text-2xl leading-none font-bold text-primary md:text-3xl">
            {s.value}
          </span>
          <span className="mt-1.5 block h-0.5 w-6 rounded-full bg-accent" aria-hidden="true" />
          <span className="mt-3 text-xs leading-snug font-medium text-muted-foreground">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
