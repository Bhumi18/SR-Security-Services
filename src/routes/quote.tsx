import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, Phone, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { certifications, company, stats } from "@/data/site";

const title = "Get a Free Security & Manpower Quote | SR Security Services India";
const description =
  "Request a free, no-obligation quotation for security guards, event security, bouncers, housekeeping or contract manpower. Site assessment included, response within 24 working hours.";

export const Route = createFileRoute("/quote")({
  component: Quote,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/quote" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
});

function Quote() {
  return (
    <>
      <PageHero
        crumb="Get Quote"
        eyebrow="Free Quotation"
        title="Request a free quote and site assessment"
        description="Tell us about your premises and requirement. Our operations team will visit or call, assess the risk, and send an itemised, statutory-compliant proposal — at no cost and with no obligation."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="card-premium p-7 md:p-10">
            <h2 className="font-display text-xl font-semibold text-primary">
              Share your requirement
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fields marked * are required. Your details remain confidential.
            </p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>

          <aside className="space-y-7">
            <div className="navy-panel rounded-3xl p-7">
              <ShieldCheck className="size-7 text-accent" aria-hidden="true" />
              <h2 className="mt-5 font-display text-lg font-semibold text-primary-foreground">
                What you get in the proposal
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
                {[
                  "Written risk and vulnerability assessment",
                  "Recommended deployment chart by shift",
                  "Transparent cost breakup with statutory components",
                  "Supervision and reporting plan",
                  "Deployment timeline commitment",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-premium p-7">
              <h2 className="font-display text-base font-semibold text-primary">
                Prefer to speak directly?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Our operations desk is available Monday to Saturday, and our control room runs 24x7
                for urgent deployments.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href={company.phoneHref}>
                    <Phone className="size-4" />
                    {company.phone}
                  </a>
                </Button>
                <Button asChild variant="subtle" size="lg">
                  <a href={company.whatsapp} target="_blank" rel="noreferrer noopener">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
              <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="size-3.5 text-accent" aria-hidden="true" />
                {company.hours}
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-7">
              <h2 className="font-display text-base font-semibold text-primary">
                Why clients trust us
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {stats.slice(0, 4).map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-xl font-bold text-primary">{s.value}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                {certifications.join(" · ")}
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
