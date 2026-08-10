import { useEffect, useRef, useState } from "react";
import { Section, SectionHeading } from "@/components/site/Section";
import { workProcess } from "@/data/site";
import { cn } from "@/lib/utils";

export function WorkProcessSection() {
  const cardsRef = useRef<HTMLOListElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section tone="navy" id="process" className="scroll-mt-20 lg:scroll-mt-24 overflow-hidden">
      <SectionHeading
        onNavy
        eyebrow="Our Work Process"
        title="A structured six-step onboarding, every single time"
        description="No guesswork and no ad-hoc deployment. This is exactly how we move from your first call to a monitored, audited posting."
      />
      <ol ref={cardsRef} className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workProcess.map((step, idx) => (
          <li
            key={step.step}
            className={cn(
              "group rounded-2xl border border-primary-foreground/12 bg-primary-foreground/5 p-6 shadow-sm hover:shadow-md hover:border-accent/60 hover:bg-primary-foreground/10 hover:-translate-y-2",
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-16 scale-90 pointer-events-none"
            )}
            style={{
              transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: isVisible ? `${idx * 160}ms` : "0ms",
            }}
          >
            <span className="inline-block font-display text-3xl font-bold text-accent/80 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent">
              {step.step}
            </span>
            <h3 className="mt-3 font-display text-base font-semibold text-primary-foreground transition-colors duration-200 group-hover:text-accent">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
