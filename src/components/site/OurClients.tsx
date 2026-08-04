import { ExternalLink } from "lucide-react";
import clientICSI from "@/assets/client-icsi.png";
import clientWTC from "@/assets/client-wtc.png";

const clientData = [
  {
    logo: clientICSI,
    name: "The Institute of Company Secretaries of India",
    shortName: "ICSI",
    description:
      "Statutory body under an Act of Parliament (Under the jurisdiction of Ministry of Corporate Affairs, Govt of India).",
    tag: "Government Body",
    url: "https://www.icsi.edu/home/",
    displayUrl: "icsi.edu",
  },
  {
    logo: clientWTC,
    name: "World Travel Collective",
    shortName: "WTC",
    description:
      "A Conclave Connect venture co-founded by Nirral Patel, connecting travel experiences and global hospitality.",
    tag: "Travel & Hospitality",
    url: "https://wtcevent.com/",
    displayUrl: "wtcevent.com",
  },
];

export function OurClients() {
  return (
    <div className="mt-14">
      {/* Decorative top line */}
      <div className="mx-auto mb-12 flex items-center justify-center gap-4">
        <span className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-accent/40" />
        <span className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-accent/70">
          Trusted Partners
        </span>
        <span className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-accent/40" />
      </div>

      {/* Client showcase grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {clientData.map((client) => (
          <article
            key={client.shortName}
            className="client-showcase group relative flex flex-col"
          >
            {/* Animated gradient border glow */}
            <div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.715 0.128 87 / 0.3), oklch(0.245 0.055 258 / 0.2), oklch(0.715 0.128 87 / 0.3))",
              }}
              aria-hidden="true"
            />

            {/* Card inner */}
            <div className="relative flex flex-1 flex-col items-center rounded-3xl border border-border/60 bg-white p-8 transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_8px_40px_-12px_oklch(0.715_0.128_87_/_0.2)] md:p-10">
              {/* Industry tag badge */}
              <span className="absolute top-5 right-5 inline-flex items-center rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-[10px] font-bold tracking-[0.12em] uppercase text-accent-foreground">
                {client.tag}
              </span>

              {/* Logo container linked to website */}
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-36 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-surface via-white to-surface px-6 md:h-44"
                title={`Visit ${client.name} official website`}
              >
                {/* Subtle grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, oklch(0.245 0.055 258) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                  aria-hidden="true"
                />
                <img
                  src={client.logo}
                  alt={`${client.name} official logo`}
                  className="relative z-10 max-h-28 w-auto max-w-[240px] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </a>

              {/* Accent divider */}
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-accent/40" />
                <span className="size-1.5 rounded-full bg-accent" />
                <span className="h-px w-8 bg-accent/40" />
              </div>

              {/* Client details */}
              <h3 className="mt-5 text-center font-display text-lg font-bold tracking-tight text-primary md:text-xl">
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {client.name}
                </a>
              </h3>
              <p className="mt-3 max-w-sm text-center text-sm leading-relaxed text-muted-foreground flex-1">
                {client.description}
              </p>

              {/* Site Link button */}
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-primary transition-all duration-300 hover:border-accent hover:bg-accent-soft hover:text-accent-foreground"
              >
                <span>Visit {client.displayUrl}</span>
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom accent */}
      <div className="mx-auto mt-12 flex max-w-lg items-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="rounded-full navy-panel px-4 py-1.5 text-[10px] font-bold tracking-[0.18em] uppercase text-primary-foreground">
          And Growing
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
}
