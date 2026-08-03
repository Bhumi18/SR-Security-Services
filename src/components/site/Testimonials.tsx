import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { testimonials } from "@/data/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const active = testimonials[index]!;

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <div className="mt-14">
      <div className="card-premium mx-auto max-w-3xl p-8 md:p-12">
        <Quote className="size-9 text-accent" aria-hidden="true" />
        <blockquote className="mt-6 font-display text-lg leading-relaxed text-primary md:text-xl">
          “{active.quote}”
        </blockquote>
        <div className="mt-8 flex items-center gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-full navy-panel font-display text-sm font-semibold text-accent">
            {active.initials}
          </span>
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-semibold text-primary">
              {active.name}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {active.designation}, {active.org}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="grid size-10 place-items-center rounded-full border border-border text-primary transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={i === index}
              className={
                i === index
                  ? "h-2 w-7 rounded-full bg-accent transition-all"
                  : "h-2 w-2 rounded-full bg-border transition-all hover:bg-accent/50"
              }
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="grid size-10 place-items-center rounded-full border border-border text-primary transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
