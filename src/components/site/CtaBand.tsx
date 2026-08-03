import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/data/site";

export function CtaBand({
  title = "Need trained security or facility staff at your site?",
  text = "Share your requirement and our operations team will revert with a site assessment and a transparent, compliance-backed quotation within 24 hours.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="navy-panel relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 size-96 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="container-page relative flex flex-col items-start gap-8 py-14 md:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">Get Started</p>
          <h2 className="mt-3 text-2xl leading-tight font-bold text-primary-foreground md:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70 md:text-base">
            {text}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild variant="gold" size="lg">
            <Link to="/quote">Request Free Quote</Link>
          </Button>
          <Button asChild variant="onNavy" size="lg">
            <a href={company.phoneHref}>
              <Phone className="size-4" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
