import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Icon } from "@/components/site/Icon";
import { images, serviceGroups } from "@/data/site";

export function ServiceGrid() {
  return (
    <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {serviceGroups.map((service) => (
        <article key={service.slug} className="card-premium group flex flex-col overflow-hidden">
          <div className="relative aspect-16/10 overflow-hidden">
            <img
              src={images[service.image]}
              alt={`${service.title} by SR Security Services & Facility Management`}
              loading="lazy"
              width={1200}
              height={750}
              className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute top-4 left-4 grid size-11 place-items-center rounded-xl bg-background/95 text-primary shadow-[var(--shadow-card)]">
              <Icon name={service.icon} className="size-5 text-accent" />
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-display text-lg leading-snug font-semibold text-primary">
              {service.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {service.summary}
            </p>
            <p className="mt-4 text-xs text-charcoal/70">
              {service.items.slice(0, 3).join(" · ")} + {service.items.length - 3} more
            </p>
            <Link
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
            >
              Learn More
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
