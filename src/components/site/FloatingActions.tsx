import { useEffect, useState } from "react";
import { ArrowUp, FileText, MessageCircle, Phone } from "lucide-react";

import { company } from "@/data/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setShowTop(currentScrollY > 250);

      // Detect scroll direction (threshold 6px)
      if (Math.abs(currentScrollY - lastScrollY) > 6) {
        setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > 150);
        lastScrollY = currentScrollY;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const actionButtons = [
    {
      id: "whatsapp",
      label: "Chat on WhatsApp",
      href: company.whatsapp,
      target: "_blank",
      rel: "noreferrer noopener",
      icon: MessageCircle,
      bg: "bg-[#25D366] text-white hover:bg-[#20ba5a]",
      glow: "shadow-[0_4px_20px_rgba(37,211,102,0.4)]",
      pulse: true,
    },
    {
      id: "phone",
      label: "Call Operations",
      href: company.phoneHref,
      target: "_self",
      rel: "",
      icon: Phone,
      bg: "bg-primary text-primary-foreground hover:bg-primary-light",
      glow: "shadow-[var(--shadow-lift)]",
      pulse: false,
    },
    {
      id: "quote",
      label: "Get Quick Quote",
      href: "/#contact",
      target: "_self",
      rel: "",
      icon: FileText,
      bg: "bg-accent text-accent-foreground hover:bg-accent/90",
      glow: "shadow-[0_4px_20px_oklch(0.715_0.128_87_/_0.4)]",
      pulse: false,
    },
  ];

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {/* 3 Action Buttons: Pop OUT on Scroll UP / Pop IN on Scroll DOWN */}
      <div className="flex flex-col items-end gap-3">
        {actionButtons.map((btn, index) => {
          const IconComponent = btn.icon;
          return (
            <div
              key={btn.id}
              className={`group relative flex items-center justify-end transition-all duration-400 ${isScrollingDown
                  ? "pointer-events-none scale-0 opacity-0 translate-y-6"
                  : "scale-100 opacity-100 translate-y-0"
                }`}
              style={{
                transitionTimingFunction: isScrollingDown
                  ? "cubic-bezier(0.4, 0, 1, 1)"
                  : "cubic-bezier(0.34, 1.56, 0.64, 1)",
                transitionDelay: isScrollingDown
                  ? `${(actionButtons.length - 1 - index) * 40}ms`
                  : `${index * 50}ms`,
              }}
            >
              {/* Slide-out Label Tooltip */}
              <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-xl bg-primary/95 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 translate-x-3">
                {btn.label}
              </span>

              {/* Ambient Pulse Ring for WhatsApp */}
              {btn.pulse && (
                <span className="absolute inset-0 size-12 animate-ping rounded-full bg-[#25D366]/40 duration-1000" />
              )}

              {/* Button Link */}
              <a
                href={btn.href}
                target={btn.target}
                rel={btn.rel}
                aria-label={btn.label}
                className={`relative flex size-12 items-center justify-center rounded-full ${btn.bg} ${btn.glow} transition-all duration-300 ease-out hover:scale-110 active:scale-95`}
              >
                <IconComponent className="size-5 transition-transform duration-300 group-hover:rotate-6" />
              </a>
            </div>
          );
        })}
      </div>

      {/* Static Back-to-Top Arrow Button (NO Animations) */}
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="flex size-12 items-center justify-center rounded-full border border-border/80 bg-background text-primary shadow-[var(--shadow-lift)] transition-colors duration-200 hover:border-accent hover:bg-accent-soft hover:text-accent active:scale-95 cursor-pointer"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </div>
  );
}
