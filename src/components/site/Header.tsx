import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Clock, Mail, Menu, Phone, ShieldCheck, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company, images, nav } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [expandedMobileGroup, setExpandedMobileGroup] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

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

  // Track active section on scroll
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionIds = nav
      .flatMap((item) => [
        item.sectionId,
        ...(item.children?.map((c) => c.sectionId) || []),
      ])
      .filter(Boolean) as string[];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        if (!id) continue;
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash scrolling on page mount or route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, [location.hash, location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    setOpen(false);
    if (!sectionId) return;

    if (location.pathname === "/" || location.pathname === "") {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${sectionId}`);
      }
    } else {
      e.preventDefault();
      navigate({ to: "/", hash: sectionId }).then(() => {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      });
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden navy-panel border-b border-primary-foreground/10 lg:block">
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <p className="flex items-center gap-2 text-primary-foreground/80">
            <ShieldCheck className="size-3.5 text-accent" aria-hidden="true" />
            <span>PSARA Licensed · UDYAM Registered · AMC Certified</span>
          </p>
          <div className="flex items-center gap-6 text-primary-foreground/80">
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-accent" aria-hidden="true" /> 24x7 Control Room
            </span>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-1.5"
            >
              <Mail className="size-3.5 text-accent" aria-hidden="true" /> {company.email}
            </a>
            <a
              href={company.phoneHref}
              className="flex items-center gap-1.5 font-semibold"
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
          <a
            href="/#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex min-w-0 items-center gap-3"
          >
            <img
              src={images.logo}
              alt="SR Security Services Logo"
              className="h-11 w-auto shrink-0 object-contain mix-blend-multiply"
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-base font-bold tracking-tight text-primary sm:text-lg lg:text-xl">
                SR Security Services
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {nav.map((item) => {
              const isActive =
                (item.sectionId && activeSection === item.sectionId) ||
                item.children?.some((c) => c.sectionId && activeSection === c.sectionId);

              if (item.children) {
                return (
                  <div key={item.label} className="group relative">
                    <a
                      href={item.to}
                      onClick={(e) => handleNavClick(e, item.sectionId)}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors hover:text-[#3DA5FF] whitespace-nowrap lg:px-3 lg:text-sm cursor-pointer",
                        isActive
                          ? "text-[#0E4DB8] font-bold underline decoration-[#0E4DB8] decoration-2 underline-offset-8"
                          : "text-[#1F2937]",
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="size-3.5 text-muted-foreground transition-transform duration-200 group-hover:rotate-180" />
                    </a>

                    {/* Dropdown Menu */}
                    <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 z-50">
                      <div className="w-56 rounded-2xl border border-[#D9DEE8] bg-white p-2 shadow-xl backdrop-blur-lg">
                        {item.children.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.to}
                            onClick={(e) => {
                              if (sub.sectionId) {
                                handleNavClick(e, sub.sectionId);
                              } else {
                                setOpen(false);
                              }
                            }}
                            className="flex items-center rounded-xl px-3 py-2 text-xs font-medium text-[#1F2937] transition-colors hover:bg-[#EBF5FF] hover:text-[#0E4DB8]"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.to}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className={cn(
                    "rounded-md px-2 py-1.5 text-xs font-medium transition-colors hover:text-[#3DA5FF] whitespace-nowrap lg:px-3 lg:text-sm",
                    isActive
                      ? "text-[#0E4DB8] font-bold underline decoration-[#0E4DB8] decoration-2 underline-offset-8"
                      : "text-[#1F2937]",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <Button asChild variant="hero" size="sm" className="ml-1 lg:ml-2">
              <a href="/#contact" onClick={(e) => handleNavClick(e, "contact")}>
                Get Quote
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
              <a href="/#contact" onClick={(e) => handleNavClick(e, "contact")}>
                Get Quote
              </a>
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

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-x-0 top-[calc(4.5rem+0.5rem)] bottom-0 z-40 overflow-y-auto border-t border-border bg-background px-5 pt-4 pb-24 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {nav.map((item) => {
              const isActive =
                (item.sectionId && activeSection === item.sectionId) ||
                item.children?.some((c) => c.sectionId && activeSection === c.sectionId);

              if (item.children) {
                const isExpanded = expandedMobileGroup === item.label;
                return (
                  <div key={item.label} className="border-b border-border py-2">
                    <div className="flex items-center justify-between py-1.5">
                      <a
                        href={item.to}
                        onClick={(e) => handleNavClick(e, item.sectionId)}
                        className={cn(
                          "font-display text-base font-semibold transition-colors",
                          isActive ? "text-accent" : "text-primary",
                        )}
                      >
                        {item.label}
                      </a>
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedMobileGroup(isExpanded ? null : item.label)
                        }
                        className="p-1 text-primary"
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown
                          className={cn(
                            "size-5 transition-transform duration-200",
                            isExpanded && "rotate-180 text-accent",
                          )}
                        />
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="mt-1 flex flex-col gap-2 pl-4 border-l-2 border-accent/40 py-2">
                        {item.children.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.to}
                            onClick={(e) => {
                              if (sub.sectionId) {
                                handleNavClick(e, sub.sectionId);
                              } else {
                                setOpen(false);
                              }
                            }}
                            className="py-1 text-sm font-medium text-muted-foreground hover:text-accent"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.to}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className={cn(
                    "border-b border-border py-3.5 font-display text-base font-semibold transition-colors",
                    isActive ? "text-accent" : "text-primary",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="/#contact" onClick={(e) => handleNavClick(e, "contact")}>
                Request Free Quote
              </a>
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
