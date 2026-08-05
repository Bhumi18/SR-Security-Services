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
                    className="card-premium flex flex-col justify-between p-6 transition-all duration-300 hover:border-accent/60 hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent-foreground">
                          <Icon name={item.icon} className="size-5" />
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent-soft px-2.5 py-0.5 text-[10px] font-bold text-accent-foreground">
                          <ShieldCheck className="size-3 text-accent" />
                          SR Advantage
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-base font-bold text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs">
                      <span className="font-semibold text-primary">Verified Standard</span>
                      <span className="font-mono text-[11px] text-muted-foreground">
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
              className={`size-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentPage === idx
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
