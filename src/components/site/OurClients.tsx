import { useState, useRef } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import clientICSI from "@/assets/client-icsi.png";
import clientWTC from "@/assets/client-wtc.png";
import clientVallabhSadan from "@/assets/client-vallabh-sadan.png";
import clientShivalikLakeview from "@/assets/client-shivalik-lakeview.png";
import clientClothLookFashions from "@/assets/client-cloth-look-fashions.png";

interface ClientItem {
  logo: string;
  name: string;
  shortName: string;
  description: string;
  tag: string;
  url: string;
  displayUrl: string;
}

const clientData: ClientItem[] = [
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
  {
    logo: clientVallabhSadan,
    name: "Shree Vallabh Sadan Haveli",
    shortName: "SVS Haveli",
    description:
      "Prominent Pushtimarg Haveli & Hindu temple trust, supported by SR Security for premise protection, event security and crowd management.",
    tag: "Religious & Cultural Trust",
    url: "https://www.google.com/maps/search/?api=1&query=Shree+Vallabh+Sadan+Haveli+Ahmedabad",
    displayUrl: "Google Maps Location",
  },
  {
    logo: clientShivalikLakeview,
    name: "Shivalik Lakeview",
    shortName: "Shivalik Lakeview",
    description:
      "Premier residential building society featuring modern luxury villas, protected by SR Security round-the-clock guards and access control.",
    tag: "Residential Society",
    url: "https://www.google.com/maps/search/?api=1&query=Shivalik+Lakeview+Bopal+Ahmedabad",
    displayUrl: "Google Maps Location",
  },
  {
    logo: clientClothLookFashions,
    name: "Cloth Look Fashions International Magazine",
    shortName: "Cloth Look Fashions",
    description:
      "Leading International Fashion & Lifestyle Media Platform co-founded by Altaf Sheikh, covering fashion shows, lifestyle, brands & global publications.",
    tag: "Fashion & Media",
    url: "https://www.clothlookfashion.com",
    displayUrl: "clothlookfashion.com",
  },
];

export function OurClients() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstChild = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstChild?.clientWidth || 280;
    const index = Math.round(container.scrollLeft / (cardWidth + 16));
    setActiveIndex(Math.min(Math.max(index, 0), clientData.length - 1));
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstChild = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstChild?.clientWidth || 280;
    container.scrollTo({
      left: index * (cardWidth + 16),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const renderCard = (client: ClientItem) => (
    <article
      key={client.shortName}
      className="client-showcase group relative flex h-full w-full flex-col"
    >
      {/* Animated gradient border glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.715 0.128 87 / 0.3), oklch(0.245 0.055 258 / 0.2), oklch(0.715 0.128 87 / 0.3))",
        }}
        aria-hidden="true"
      />

      {/* Card inner */}
      <div className="relative flex flex-1 flex-col items-center rounded-2xl border border-border/60 bg-white p-5 transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_8px_30px_-10px_oklch(0.715_0.128_87_/_0.2)] md:p-6">
        {/* Industry tag badge */}
        <span className="absolute top-3 right-3 z-20 inline-flex items-center rounded-full border border-[#0E4DB8]/30 bg-[#0E4DB8]/10 px-2.5 py-0.5 text-[9px] font-bold tracking-[0.1em] uppercase text-[#0E4DB8] shadow-xs">
          {client.tag}
        </span>

        {/* Logo container linked to website */}
        <a
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-28 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-surface via-white to-surface px-4 md:h-32"
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
            className="relative z-10 max-h-20 w-auto max-w-[180px] object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        {/* Accent divider */}
        <div className="mt-4 flex items-center gap-2">
          <span className="h-px w-6 bg-accent/40" />
          <span className="size-1 rounded-full bg-accent" />
          <span className="h-px w-6 bg-accent/40" />
        </div>

        {/* Client details */}
        <h3 className="mt-3 text-center font-display text-base font-bold tracking-tight text-primary md:text-lg">
          <a
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            {client.name}
          </a>
        </h3>
        <p className="mt-2 text-center text-xs leading-relaxed text-muted-foreground flex-1">
          {client.description}
        </p>

        {/* Site Link button */}
        <a
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#0E4DB8] px-3.5 py-1.5 text-[11px] font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#3DA5FF] hover:shadow-md hover:scale-105"
        >
          <span>Visit {client.displayUrl}</span>
          <ExternalLink className="size-3" />
        </a>
      </div>
    </article>
  );

  return (
    <div className="mt-14">
      {/* Decorative top line */}
      <div className="mx-auto mb-10 flex items-center justify-center gap-4">
        <span className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-accent/40" />
        <span className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-accent/70">
          Trusted Partners
        </span>
        <span className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-accent/40" />
      </div>

      {/* Mobile Horizontal Carousel View (sm:hidden) */}
      <div className="block sm:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-4 no-scrollbar scroll-smooth"
        >
          {clientData.map((client) => (
            <div
              key={client.shortName}
              className="w-[85vw] max-w-[320px] shrink-0 snap-center flex flex-col"
            >
              {renderCard(client)}
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicators & Controls */}
        <div className="mt-4 flex items-center justify-between px-4">
          <button
            onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="flex size-8 items-center justify-center rounded-full border border-border/80 bg-white text-charcoal shadow-xs transition-all disabled:opacity-30"
            aria-label="Previous client"
          >
            <ChevronLeft className="size-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-1.5">
            {clientData.map((client, idx) => (
              <button
                key={client.shortName}
                onClick={() => scrollToCard(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-6 bg-[#0E4DB8]"
                    : "w-2 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to client ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollToCard(Math.min(clientData.length - 1, activeIndex + 1))}
            disabled={activeIndex === clientData.length - 1}
            className="flex size-8 items-center justify-center rounded-full border border-border/80 bg-white text-charcoal shadow-xs transition-all disabled:opacity-30"
            aria-label="Next client"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Tablet & Desktop Symmetrical 3 + 2 Grid (hidden on mobile, flex on sm+) */}
      <div className="hidden sm:flex mx-auto max-w-6xl flex-wrap justify-center gap-6">
        {clientData.map((client) => (
          <div
            key={client.shortName}
            className="flex w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-col"
          >
            {renderCard(client)}
          </div>
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
