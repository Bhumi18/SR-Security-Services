import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumb: string;
}) {
  return (
    <section className="navy-panel relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="container-page relative pt-8 pb-14 md:pt-10 md:pb-20">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-primary-foreground/60"
        >
          <Link to="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <ChevronRight className="size-3.5" aria-hidden="true" />
          <span className="text-accent">{crumb}</span>
        </nav>
        <p className="eyebrow mt-6">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-3xl leading-[1.12] font-bold text-primary-foreground md:text-5xl">
          {title}
        </h1>
        <span className="gold-rule mt-6" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
