import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, ShieldCheck, X, Mail, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company, nav } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden navy-panel border-b border-primary-foreground/10 lg:block">
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <p className="flex items-center gap-2 text-primary-foreground/80">
            <ShieldCheck className="size-3.5 text-accent" aria-hidden="true" />
            <span>PSARA Licensed · ISO Certified · PAN India Deployment</span>
          </p>
          <div className="flex items-center gap-6 text-primary-foreground/80">
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-accent" aria-hidden="true" /> 24x7 Control Room
            </span>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <Mail className="size-3.5 text-accent" aria-hidden="true" /> {company.email}
            </a>
            <a
              href={company.phoneHref}
              className="flex items-center gap-1.5 font-semibold transition-colors hover:text-accent"
            >
              <Phone className="size-3.5 text-accent" aria-hidden="true" /> {company.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-border bg-background/95 backdrop-blur transition-shadow",
          scrolled && "shadow-[0_10px_30px_-24px_oklch(0.245_0.055_258/0.5)]",
        )}
      >
        <div className="container-page grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:h-20">
          <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid size-11 shrink-0 place-items-center rounded-xl navy-panel">
              <ShieldCheck className="size-6 text-accent" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-base leading-tight font-bold text-primary sm:text-lg">
                SR Security Services
              </span>
              <span className="block truncate text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
                & Facility Management
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:text-accent data-[status=active]:text-primary data-[status=active]:underline data-[status=active]:decoration-accent data-[status=active]:decoration-2 data-[status=active]:underline-offset-8"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="hero" size="default" className="ml-3">
              <Link to="/quote">Get Quote</Link>
            </Button>
          </nav>

          <div className="flex items-center gap-2 xl:hidden">
            <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
              <Link to="/quote">Get Quote</Link>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-11 shrink-0 place-items-center rounded-xl border border-border text-primary transition-colors hover:border-accent hover:text-accent"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[calc(4.5rem+0.5rem)] bottom-0 z-40 overflow-y-auto border-t border-border bg-background px-5 pt-4 pb-24 xl:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 font-display text-base font-semibold text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/quote" onClick={() => setOpen(false)}>
                Request Free Quote
              </Link>
            </Button>
            <Button asChild variant="subtle" size="lg">
              <a href={company.phoneHref}>Call {company.phone}</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
