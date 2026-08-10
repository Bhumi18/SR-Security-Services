import { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Grid,
  Layers,
  Maximize2,
  Play,
  Pause,
  X,
  Sparkles,
  Camera,
} from "lucide-react";
import { Section } from "@/components/site/Section";

import i1 from "@/assets/images/i1.jpeg";
import i2 from "@/assets/images/i2.jpeg";
import i3 from "@/assets/images/i3.jpeg";
import i4 from "@/assets/images/i4.jpeg";
import i5 from "@/assets/images/i5.jpeg";
import i6 from "@/assets/images/i6.jpeg";
import i7 from "@/assets/images/i7.jpeg";
import i8 from "@/assets/images/i8.jpeg";
import i9 from "@/assets/images/i9.jpeg";

export type PhotoItem = {
  id: string;
  src: string;
};

export const photos: PhotoItem[] = [
  { id: "p1", src: i1 },
  { id: "p2", src: i2 },
  { id: "p3", src: i3 },
  { id: "p4", src: i4 },
  { id: "p5", src: i5 },
  { id: "p6", src: i6 },
  { id: "p7", src: i7 },
  { id: "p8", src: i8 },
  { id: "p9", src: i9 },
];

export function OnSiteGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"spotlight" | "grid">("spotlight");
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const showcaseContainerRef = useRef<HTMLDivElement | null>(null);
  const lightboxContainerRef = useRef<HTMLDivElement | null>(null);
  const showcaseRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lightboxRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Smooth scroll ONLY the side thumbnail container on slide change without scrolling the main window page
  useEffect(() => {
    if (viewMode === "spotlight" && showcaseContainerRef.current && showcaseRefs.current[selectedIndex]) {
      const container = showcaseContainerRef.current;
      const target = showcaseRefs.current[selectedIndex];
      if (container && target) {
        const containerRect = container.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const isVertical = window.innerWidth >= 1024; // lg breakpoint

        if (isVertical) {
          const relativeTop = targetRect.top - containerRect.top + container.scrollTop;
          const scrollTo = relativeTop - container.clientHeight / 2 + target.clientHeight / 2;
          container.scrollTo({
            top: Math.max(0, scrollTo),
            behavior: "smooth",
          });
        } else {
          const relativeLeft = targetRect.left - containerRect.left + container.scrollLeft;
          const scrollTo = relativeLeft - container.clientWidth / 2 + target.clientWidth / 2;
          container.scrollTo({
            left: Math.max(0, scrollTo),
            behavior: "smooth",
          });
        }
      }
    }
  }, [selectedIndex, viewMode]);

  useEffect(() => {
    if (lightboxOpen && lightboxContainerRef.current && lightboxRefs.current[selectedIndex]) {
      const container = lightboxContainerRef.current;
      const target = lightboxRefs.current[selectedIndex];
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
  }, [selectedIndex, lightboxOpen]);

  // Auto-advance spotlight when autoplay is active and container is not hovered
  useEffect(() => {
    if (!isPlaying || isHovered || lightboxOpen || photos.length <= 1) return;

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % photos.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, lightboxOpen]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % photos.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "Escape") setLightboxOpen(false);
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, handleNext, handlePrev]);

  // Prevent page scroll when Lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const currentPhoto = photos[selectedIndex] || photos[0];

  return (
    <Section tone="surface" id="gallery" className="scroll-mt-20 lg:scroll-mt-24 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0E4DB8]/20 bg-[#0E4DB8]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#0E4DB8]">
            <Sparkles className="size-3.5 text-[#0E4DB8]" />
            Photo Gallery
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl lg:text-4xl">
            SR Security Services in Action
          </h2>
        </div>

        {/* View Switcher Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full border border-border/80 bg-white p-1.5 shadow-sm">
            <button
              onClick={() => setViewMode("spotlight")}
              title="Showcase Theater View"
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                viewMode === "spotlight"
                  ? "bg-[#0E4DB8] text-white shadow-xs"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <Layers className="size-3.5" />
              <span className="hidden sm:inline">Showcase</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              title="Masonry Grid View"
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                viewMode === "grid"
                  ? "bg-[#0E4DB8] text-white shadow-xs"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <Grid className="size-3.5" />
              <span className="hidden sm:inline">Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* SHOWCASE THEATER VIEW */}
      {viewMode === "spotlight" && currentPhoto && (
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] items-stretch">
          {/* Main Stage Display Card */}
          <div
            className="group relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl transition-all duration-500 hover:border-[#0E4DB8]/50 hover:shadow-[0_20px_50px_rgba(14,77,184,0.25)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Ambient Blurred Background (Ensures edge colors match without cropping) */}
            <img
              key={`blur-${currentPhoto.id}`}
              src={currentPhoto.src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 size-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none transition-opacity duration-700 animate-pulse"
            />

            {/* Main Stage Uncropped Image with smooth scale transition */}
            <img
              key={currentPhoto.id}
              src={currentPhoto.src}
              alt="SR Security Services Operational Visual"
              className="relative z-10 size-full object-contain p-2 sm:p-4 transition-transform duration-700 ease-out group-hover:scale-[1.02] drop-shadow-2xl animate-gallery-scale"
            />

            {/* Gradient Overlay for Top Control Bar contrast */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none z-10" />

            {/* Top Bar Floating Controls */}
            <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1 text-xs font-mono font-bold text-white backdrop-blur-md">
                  <Camera className="size-3.5 text-[#3DA5FF]" />
                  {selectedIndex + 1} / {photos.length}
                </div>

                {isPlaying ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3DA5FF]/30 bg-[#3DA5FF]/10 px-3 py-1 text-[11px] font-semibold text-[#3DA5FF] backdrop-blur-md">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full rounded-full bg-[#3DA5FF] opacity-75 animate-ping" />
                      <span className="relative inline-flex size-2 rounded-full bg-[#3DA5FF]" />
                    </span>
                    {isHovered ? "PAUSED (HOVER)" : "AUTOPLAY"}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/60 px-3 py-1 text-[11px] font-semibold text-amber-400 backdrop-blur-md">
                    <span className="size-2 rounded-full bg-amber-400" />
                    PAUSED
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying((prev) => !prev);
                  }}
                  className="grid size-9 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-105"
                  title={isPlaying ? "Pause Autoplay" : "Play Autoplay"}
                >
                  {isPlaying ? <Pause className="size-4 text-emerald-400" /> : <Play className="size-4 text-amber-400" />}
                </button>
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="grid size-9 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:bg-[#0E4DB8] hover:scale-105"
                  title="Expand Photo"
                >
                  <Maximize2 className="size-4" />
                </button>
              </div>
            </div>

            {/* Navigation Arrows with scale hover */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 grid size-11 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#0E4DB8] hover:scale-115 hover:shadow-lg hover:shadow-[#0E4DB8]/40"
              title="Previous Photo"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 grid size-11 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#0E4DB8] hover:scale-115 hover:shadow-lg hover:shadow-[#0E4DB8]/40"
              title="Next Photo"
            >
              <ChevronRight className="size-6" />
            </button>

            {/* Autoplay Animated Progress Line at Bottom */}
            {isPlaying && !isHovered && (
              <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10 z-20 overflow-hidden">
                <div
                  key={selectedIndex}
                  className="h-full bg-gradient-to-r from-[#0E4DB8] via-[#3DA5FF] to-blue-400 animate-progress-fill"
                />
              </div>
            )}
          </div>

          {/* Side Thumbnail Filmstrip Rail */}
          <div
            ref={showcaseContainerRef}
            className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[500px] p-3 scroll-py-4 scrollbar-none scroll-smooth"
          >
            {photos.map((photo, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={photo.id}
                  ref={(el) => {
                    showcaseRefs.current[index] = el;
                  }}
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                  className={`group relative flex shrink-0 items-center overflow-hidden rounded-2xl p-1.5 transition-all duration-300 ${
                    isSelected
                      ? "border-2 border-[#0E4DB8] bg-white shadow-xl ring-2 ring-[#0E4DB8]/40 shadow-[0_8px_25px_rgba(14,77,184,0.25)] scale-[1.02]"
                      : "border border-border/80 bg-white/90 hover:bg-white hover:border-[#3DA5FF] hover:shadow-md hover:-translate-y-0.5 shadow-xs"
                  } w-40 lg:w-full`}
                >
                  {/* Glass Shine Sweep Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-30" />

                  {/* Thumbnail Image Container (100% Sharp & Unblurred) */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-950">
                    <img
                      src={photo.src}
                      alt="Thumbnail visual"
                      className={`size-full object-contain p-0.5 transition-all duration-500 ease-out ${
                        isSelected
                          ? "scale-105"
                          : "opacity-85 group-hover:opacity-100 group-hover:scale-110"
                      }`}
                    />

                    {/* Corner Index Number Badge */}
                    <div
                      className={`absolute bottom-1 right-1 z-20 rounded-md px-1.5 py-0.5 text-[10px] font-mono font-bold transition-all ${
                        isSelected
                          ? "bg-[#0E4DB8] text-white shadow-md shadow-[#0E4DB8]/50"
                          : "bg-black/60 text-white/80 backdrop-blur-md group-hover:bg-black/80 group-hover:text-white"
                      }`}
                    >
                      0{index + 1}
                    </div>

                    {/* Active Pulsing Indicator Badge */}
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 z-20 grid size-6 place-items-center rounded-full bg-[#0E4DB8] text-white shadow-md shadow-[#0E4DB8]/50 animate-in zoom-in-50 duration-300">
                        <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* MASONRY GRID VIEW */}
      {viewMode === "grid" && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => {
                setSelectedIndex(index);
                setLightboxOpen(true);
              }}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-slate-950 shadow-xs transition-all duration-500 hover:-translate-y-2 hover:border-[#0E4DB8] hover:shadow-[0_15px_35px_rgba(14,77,184,0.2)] hover:ring-2 hover:ring-[#0E4DB8]/20"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {/* Ambient Blurred Background */}
                <img
                  src={photo.src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 size-full object-cover blur-xl opacity-35 scale-110 pointer-events-none transition-transform duration-700 group-hover:scale-125"
                />

                {/* Uncropped Photo */}
                <img
                  src={photo.src}
                  alt="Gallery visual"
                  loading="lazy"
                  className="relative z-10 size-full object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-md"
                />

                {/* Hover Expand Trigger */}
                <div className="absolute top-3 right-3 z-20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <span className="grid size-9 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md group-hover:bg-[#0E4DB8] group-hover:shadow-lg group-hover:shadow-[#0E4DB8]/40">
                    <Expand className="size-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxOpen && currentPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-300">
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 z-50 grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/25 hover:scale-110"
          >
            <X className="size-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous Photo"
            className="absolute left-4 sm:left-6 z-50 grid size-12 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:bg-[#0E4DB8] hover:scale-110 hover:shadow-lg hover:shadow-[#0E4DB8]/50"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next Photo"
            className="absolute right-4 sm:right-6 z-50 grid size-12 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:bg-[#0E4DB8] hover:scale-110 hover:shadow-lg hover:shadow-[#0E4DB8]/50"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Photo Display Container */}
          <div className="relative flex flex-col items-center justify-center max-w-5xl max-h-[85vh] w-full animate-gallery-scale">
            <img
              key={`lightbox-${currentPhoto.id}`}
              src={currentPhoto.src}
              alt="SR Security Services Fullscreen Visual"
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10 animate-gallery-scale"
            />

            {/* Minimalist Index Indicator */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/80 px-4 py-1.5 text-xs font-mono font-bold text-white/90 backdrop-blur-md shadow-2xl">
              <span>{selectedIndex + 1}</span>
              <span className="text-white/40">/</span>
              <span>{photos.length}</span>
            </div>

            {/* Interactive Thumbnail Selector Strip */}
            <div
              ref={lightboxContainerRef}
              className="mt-4 flex gap-2 overflow-x-auto max-w-full p-1 scrollbar-none scroll-smooth"
            >
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  ref={(el) => {
                    lightboxRefs.current[index] = el;
                  }}
                  onClick={() => setSelectedIndex(index)}
                  className={`relative aspect-video w-14 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                    index === selectedIndex
                      ? "border-[#0E4DB8] scale-110 ring-2 ring-white/50 opacity-100 shadow-md shadow-[#0E4DB8]/40"
                      : "border-transparent opacity-50 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  <img src={photo.src} alt="Thumbnail visual" className="size-full object-contain bg-slate-950 p-0.5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

