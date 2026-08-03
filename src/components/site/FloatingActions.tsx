import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUp, FileText, Phone, MessageCircle } from "lucide-react";

import { company } from "@/data/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-2.5 sm:right-6 sm:bottom-6">
      <a
        href={company.whatsapp}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with us on WhatsApp"
        className="group grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-lift)] transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
      </a>
      <a
        href={company.phoneHref}
        aria-label={`Call ${company.phone}`}
        className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-lift)] transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <Phone className="size-5" aria-hidden="true" />
      </a>
      <a
        href="/#contact"
        aria-label="Get a free quote"
        className="grid size-12 place-items-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-105"
      >
        <FileText className="size-5" aria-hidden="true" />
      </a>
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid size-12 place-items-center rounded-full border border-border bg-background text-primary shadow-[var(--shadow-card)] transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowUp className="size-5" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
