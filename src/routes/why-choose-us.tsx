import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Icon } from "@/components/site/Icon";
import { Testimonials } from "@/components/site/Testimonials";
import { certifications, whyChooseUs, workProcess } from "@/data/site";
import { BadgeCheck } from "lucide-react";

const title = "Why Choose SR Security Services | PSARA Licensed Security Company in India";
const description =
  "PSARA compliant, background-verified staff, quick deployment, 24x7 support, supervisor visits, technology-enabled monitoring and transparent pricing — 14 reasons clients choose SR Security Services.";

export const Route = createFileRoute("/why-choose-us")({
  component: WhyChooseUs,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/why-choose-us" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
});

function WhyChooseUs() {
  return (
    <>
      <PageHero
        crumb="Why Choose Us"
        eyebrow="Our Advantage"
        title="Why 500+ organisations trust us with their premises"
        description="We are not the cheapest agency in the market, and we say that openly. What we offer instead is compliance you can audit, people you can rely on and supervision you can verify."
      />

      <Section>
        <SectionHeading
          eyebrow="Fourteen Reasons"
          title="The standards that make the difference on site"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="card-premium p-6">
              <span className="grid size-12 place-items-center rounded-xl bg-accent-soft">
                <Icon name={item.icon} className="size-5 text-accent-foreground" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          onNavy
          eyebrow="Our Work Process"
          title="A six-step process from enquiry to continuous monitoring"
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workProcess.map((step) => (
            <li
              key={step.step}
              className="rounded-2xl border border-primary-foreground/12 bg-primary-foreground/5 p-6"
            >
              <span className="font-display text-3xl font-bold text-accent/70">{step.step}</span>
              <h3 className="mt-3 font-display text-base font-semibold text-primary-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading eyebrow="Certifications" title="Documented compliance, always available" />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {certifications.map((c) => (
            <div
              key={c}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-5 shadow-[var(--shadow-card)]"
            >
              <BadgeCheck className="size-5 shrink-0 text-accent" aria-hidden="true" />
              <span className="font-display text-sm font-semibold text-primary">{c}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Client Voices" title="Judge us by what our clients say" />
        <Testimonials />
      </Section>

      <CtaBand title="Compare us against your current agency." />
    </>
  );
}
