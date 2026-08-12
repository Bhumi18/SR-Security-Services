import { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import { Icon } from "@/components/site/Icon";
import { whyChooseUs } from "@/data/site";
import { cn } from "@/lib/utils";

export function WhyChooseUsCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Mouse & Touch Dragging State
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Reset to first page on responsive breakpoint change
  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerPage]);

  const totalPages = Math.ceil(whyChooseUs.length / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) =>
    whyChooseUs.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage),
  );

  // Auto-slide every 4.5 seconds (pauses during hover & drag)
  useEffect(() => {
    if (isPaused || isDragging || totalPages <= 1) return;

    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    }, 4500);

    return () => clearInterval(timer);
  }, [totalPages, isPaused, isDragging]);

  // Drag Gesture Handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
    setIsPaused(true);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // If dragged more than 40px left -> next page; right -> previous page
    if (dragOffset < -40) {
      setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    } else if (dragOffset > 40) {
      setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    }

    setDragOffset(0);
    setIsPaused(false);
  };

  return (
    <div className="mt-12">
      {/* Page-based Grid Slider Track (Supports Click & Drag / Touch Swipe) */}
      <div
        className="overflow-hidden py-3 px-1 select-none"
        onMouseEnter={() => !isDragging && setIsPaused(true)}
        onMouseLeave={() => {
          if (isDragging) handleDragEnd();
          setIsPaused(false);
        }}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onTouchStart={(e) => {
          const touch = e.touches[0];
          if (touch) handleDragStart(touch.clientX);
        }}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          if (touch) handleDragMove(touch.clientX);
        }}
        onTouchEnd={handleDragEnd}
      >
        <div
          className={cn(
            "flex w-full gap-6 cursor-pointer",
            isDragging
              ? "transition-none"
              : "transition-transform duration-700 ease-in-out",
          )}
          style={{
            transform: `translateX(calc(-${currentPage * 100}% - ${currentPage * 24}px + ${dragOffset}px))`,
          }}
        >
          {pages.map((pageItems, pageIdx) => (
            <div
              key={pageIdx}
              className="grid w-full shrink-0 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {pageItems.map((item, itemIdx) => {
                const globalIndex = pageIdx * itemsPerPage + itemIdx;
                return (
                  <div
                    key={`${item.title}-${itemIdx}`}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 border-t-4 border-t-[#0E4DB8] bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#0E4DB8] hover:shadow-xl hover:-translate-y-1.5"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-[#0E4DB8] to-[#0B1F3A] text-white shadow-md shadow-[#0E4DB8]/20 transition-transform duration-300 group-hover:scale-110">
                          <Icon name={item.icon} className="size-5 text-white" />
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#0E4DB8]/20 bg-[#0E4DB8]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0E4DB8]">
                          <ShieldCheck className="size-3 text-[#0E4DB8]" />
                          <span>SR Advantage</span>
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-base font-bold text-primary transition-colors group-hover:text-[#0E4DB8]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {item.text}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-3.5 text-xs">
                      <span className="text-[11px] font-semibold text-primary/80">Verified Standard</span>
                      <span className="rounded-md bg-[#0E4DB8]/10 px-2 py-0.5 font-mono text-[11px] font-bold text-[#0E4DB8]">
                        {String(globalIndex + 1).padStart(2, "0")} / {whyChooseUs.length}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Centered Dot Indicators Below */}
      <div className="mt-8 flex items-center justify-center border-t border-border/60 pt-6">
        <div className="flex items-center gap-2.5">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentPage(idx)}
              className={`size-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentPage === idx
                  ? "w-8 bg-accent"
                  : "bg-border hover:bg-muted-foreground"
                }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
