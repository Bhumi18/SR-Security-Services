import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, CheckCircle2, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

import { Icon } from "@/components/site/Icon";
import { images, serviceGroups } from "@/data/site";

export function ServiceGrid() {
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const pillContainerRef = useRef<HTMLDivElement | null>(null);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [featuredService, ...gridServices] = serviceGroups;
  const currentMobileService = serviceGroups[activeMobileIndex] || serviceGroups[0];

  // Auto-scroll active category pill into center view when activeMobileIndex changes
  useEffect(() => {
    if (pillContainerRef.current && pillRefs.current[activeMobileIndex]) {
      const container = pillContainerRef.current;
      const target = pillRefs.current[activeMobileIndex];
      if (container && target) {
        const containerRect = container.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const relativeLeft = targetRect.left - containerRect.left + container.scrollLeft;
        const scrollTo = relativeLeft - container.clientWidth / 2 + target.clientWidth / 2;

        container.scrollTo({
          left: Math.max(0, scrollTo),
          behavior: "smooth",
        });
      }
    }
  }, [activeMobileIndex]);

  if (!currentMobileService) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (touch) setTouchStartX(touch.clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touch = e.changedTouches[0];
    if (!touch) return;
    const touchEndX = touch.clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 40) {
      // Swipe Left -> Next Service
      setActiveMobileIndex((prev) => (prev + 1) % serviceGroups.length);
    } else if (diff < -40) {
      // Swipe Right -> Previous Service
      setActiveMobileIndex((prev) => (prev - 1 + serviceGroups.length) % serviceGroups.length);
    }
    setTouchStartX(null);
  };

  return (
    <div className="mt-8 sm:mt-12">
      {/* ========================================================================= */}
      {/* 📱 MOBILE EXCLUSIVE: Interactive Touch Showcase Deck & Category Tab Pills */}
      {/* ========================================================================= */}
      <div className="sm:hidden flex flex-col gap-5">
        {/* Horizontal Category Pill Selector Bar */}
        <div
          ref={pillContainerRef}
          className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-none scroll-smooth"
        >
          {serviceGroups.map((s, idx) => {
            const isActive = idx === activeMobileIndex;
            return (
              <button
                key={s.slug}
                ref={(el) => {
                  pillRefs.current[idx] = el;
                }}
                onClick={() => setActiveMobileIndex(idx)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#0E4DB8] text-white shadow-md shadow-[#0E4DB8]/30 scale-102"
                    : "bg-white text-primary border border-border/80 hover:border-[#3DA5FF]"
                }`}
              >
                <Icon name={s.icon} className={`size-3.5 ${isActive ? "text-white" : "text-[#0E4DB8]"}`} />
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Mobile Showcase Card (Supports Touch Swipe Left/Right) */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="card-premium relative overflow-hidden border border-border/80 bg-white p-5 shadow-lg transition-all duration-500 animate-in fade-in zoom-in-95"
          key={currentMobileService.slug}
        >
          {/* Framed Header Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/40 shadow-xs">
            <img
              src={images[currentMobileService.image]}
              alt={`${currentMobileService.title} by SR Security Services`}
              className="size-full object-cover"
            />
            {/* Top Gradient Overlay for High Contrast */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/75 via-black/30 to-transparent pointer-events-none" />
            <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-full border border-[#3DA5FF]/40 bg-[#0B1F3A]/95 px-3 py-1 text-[10px] font-bold text-[#3DA5FF] shadow-lg backdrop-blur-md">
              <ShieldCheck className="size-3.5 text-[#3DA5FF]" />
              <span>DIVISION 0{activeMobileIndex + 1}</span>
            </span>
          </div>

          {/* Title & Badge Header */}
          <div className="mt-4 flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-[#0E4DB8] text-white shadow-xs">
              <Icon name={currentMobileService.icon} className="size-4" />
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-[#0E4DB8]/30 bg-[#0E4DB8]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase text-[#0E4DB8]">
              <BadgeCheck className="size-3" />
              Verified Division
            </span>
          </div>

          <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-primary">
            {currentMobileService.title}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {currentMobileService.summary}
          </p>

          {/* Feature Highlights Grid */}
          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border/60 pt-3">
            {currentMobileService.items.slice(0, 4).map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-[11px] font-semibold text-primary/90">
                <CheckCircle2 className="size-3 shrink-0 text-[#0E4DB8]" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>

          {/* Card Footer Navigation & Action Button */}
          <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setActiveMobileIndex((prev) => (prev - 1 + serviceGroups.length) % serviceGroups.length)}
                className="grid size-8 place-items-center rounded-full border border-border bg-surface text-primary transition hover:bg-[#0E4DB8] hover:text-white"
                title="Previous Service"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => setActiveMobileIndex((prev) => (prev + 1) % serviceGroups.length)}
                className="grid size-8 place-items-center rounded-full border border-border bg-surface text-primary transition hover:bg-[#0E4DB8] hover:text-white"
                title="Next Service"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>

            <Link
              to="/services/$slug"
              params={{ slug: currentMobileService.slug }}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#0E4DB8] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#3DA5FF]"
            >
              <span>Explore</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Dots & Swipe Hint */}
        <div className="flex items-center justify-between px-1 text-[11px] text-muted-foreground">
          <span className="font-mono text-[10px]">0{activeMobileIndex + 1} / 0{serviceGroups.length}</span>
          <div className="flex items-center gap-1.5">
            {serviceGroups.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMobileIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeMobileIndex ? "w-6 bg-[#0E4DB8]" : "w-1.5 bg-border"
                }`}
                aria-label={`Go to service ${idx + 1}`}
              />
            ))}
          </div>
          <span className="italic text-[10px]">Swipe cards →</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 💻 DESKTOP & TABLET VIEW: Featured Primary Card + 4-Column Service Grid */}
      {/* ========================================================================= */}
      <div className="hidden sm:flex flex-col gap-8">
        {/* 1. Primary Featured Card: Security Services */}
        {featuredService && (
          <article className="card-premium group overflow-hidden border border-border/60 bg-white p-6 sm:p-8 md:p-9 transition-all duration-500 hover:border-accent/40">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left: Clean Framed Image Column */}
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-border/40 shadow-sm lg:col-span-6 lg:aspect-auto lg:h-[320px]">
                <img
                  src={images[featuredService.image]}
                  alt={`${featuredService.title} by SR Security Services`}
                  loading="lazy"
                  width={1200}
                  height={750}
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Top Gradient Overlay for High Contrast */}
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/75 via-black/30 to-transparent pointer-events-none z-10" />
                <span className="absolute top-3.5 left-3.5 z-20 inline-flex items-center gap-1.5 rounded-full border border-[#3DA5FF]/40 bg-[#0B1F3A]/95 px-3.5 py-1.5 text-xs font-bold tracking-wide text-[#3DA5FF] shadow-lg backdrop-blur-md">
                  <ShieldCheck className="size-4 text-[#3DA5FF]" />
                  <span>PRIMARY GUARDIAN DIVISION</span>
                </span>
              </div>

              {/* Right: Crisp Content Column */}
              <div className="flex flex-col justify-between lg:col-span-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-[#0E4DB8] text-white shadow-xs">
                      <Icon name={featuredService.icon} className="size-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#0E4DB8]/30 bg-[#0E4DB8]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0E4DB8]">
                      <BadgeCheck className="size-3 text-[#0E4DB8]" />
                      Core Service
                    </span>
                  </div>

                  <h3 className="mt-3.5 font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                    {featuredService.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {featuredService.summary}
                  </p>

                  {/* Sub-item capability highlights */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {featuredService.items.slice(0, 4).map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs font-semibold text-primary/90"
                      >
                        <CheckCircle2 className="size-3.5 shrink-0 text-[#0E4DB8]" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border/60">
                  <Link
                    to="/services/$slug"
                    params={{ slug: featuredService.slug }}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#0E4DB8] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#3DA5FF] hover:shadow-[0_8px_20px_-4px_rgba(61,165,255,0.4)] hover:scale-102"
                  >
                    <span>Explore Security Deployments</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* 2. Uniform Grid of 4 Core Services */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gridServices.map((service) => (
            <article
              key={service.slug}
              className="card-premium group flex flex-col justify-between overflow-hidden border border-border/60 p-4.5 transition-all duration-300 hover:border-accent/40 h-full"
            >
              <div className="flex flex-col flex-1">
                {/* Compact Thumbnail Image */}
                <div className="relative h-36 w-full shrink-0 overflow-hidden rounded-xl border border-border/40 shadow-xs">
                  <img
                    src={images[service.image]}
                    alt={`${service.title} by SR Security Services`}
                    loading="lazy"
                    width={600}
                    height={400}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Top Gradient Overlay for High Contrast */}
                  <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/75 via-black/30 to-transparent pointer-events-none z-10" />
                  <span className="absolute top-2.5 left-2.5 z-20 inline-flex size-8.5 items-center justify-center rounded-xl border border-[#3DA5FF]/40 bg-[#0B1F3A]/95 text-[#3DA5FF] shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0E4DB8] group-hover:text-white group-hover:border-white/40">
                    <Icon name={service.icon} className="size-4.5" />
                  </span>
                </div>

                {/* Title Block */}
                <div className="mt-3.5 min-h-[2.5rem] flex items-center">
                  <h3 className="font-display text-base font-bold tracking-tight text-primary leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Summary Description */}
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2 min-h-[2.25rem]">
                  {service.summary}
                </p>

                {/* Key Item Tags */}
                <div className="mt-3 flex flex-wrap items-center gap-1.5 h-[2.5rem] overflow-hidden content-start">
                  {service.items.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-[#D9DEE8] bg-surface px-2 py-0.5 text-[10px] font-medium text-[#1F2937] leading-none"
                    >
                      {item}
                    </span>
                  ))}
                  {service.items.length > 3 && (
                    <span className="rounded-md border border-[#0E4DB8]/20 bg-[#0E4DB8]/10 px-1.5 py-0.5 text-[10px] font-bold text-[#0E4DB8] leading-none">
                      +{service.items.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Direct Link Footer */}
              <div className="mt-4 pt-3 border-t border-border/60 shrink-0">
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary transition-colors hover:text-accent"
                >
                  <span>View Details</span>
                  <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

