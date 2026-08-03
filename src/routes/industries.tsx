import { createFileRoute } from "@tanstack/react-router";
import { Building2, CheckCircle2 } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { images, industries } from "@/data/site";

const title = "Industries We Serve | Security & Facility Services | SR Security Services";
const description =
  "We provide security guards, housekeeping and contract manpower to manufacturing plants, warehouses, hospitals, hotels, schools, banks, malls, IT parks, societies, construction sites and events across India.";

export const Route = createFileRoute("/industries")({
  component: Industries,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
});

const focus = [
  {
    image: "galleryIndustrial" as const,
    title: "Manufacturing & Industrial",
    text: "Gate control, material gate passes, weighbridge supervision, contractor labour control and shift handover discipline that directly reduce pilferage.",
  },
  {
    image: "galleryCorporate" as const,
    title: "Corporate & IT Campuses",
    text: "Front-desk grooming, visitor management systems, access-card control, parking discipline and after-hours patrolling for multi-tenant offices.",
  },
  {
    image: "galleryHousekeeping" as const,
    title: "Healthcare & Hospitality",
    text: "Attendant control, OPD queue management, infection-aware housekeeping protocols and calm handling of emergency situations.",
  },
];

function Industries() {
  return (
    <>
      <PageHero
        crumb="Industries"
        eyebrow="Industries We Serve"
        title="Twenty sectors, each with a deployment plan built for its risks"
        description="A pharmaceutical plant, a shopping mall and a residential society need very different security postures. We write site orders for your sector, not from a template."
      />

      <Section>
        <SectionHeading
          eyebrow="Sectors"
          title="Where our teams work every day"
          description="Multi-location clients get consolidated billing, a single relationship manager and standardised reporting across every city."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((item) => (
            <div
              key={item}
              className="card-premium flex items-center gap-3 px-5 py-5"
            >
              <Building2 className="size-5 shrink-0 text-accent" aria-hidden="true" />
              <span className="font-display text-sm font-semibold text-primary">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Sector Focus"
          title="How our approach changes by industry"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {focus.map((f) => (
            <article key={f.title} className="card-premium overflow-hidden">
              <img
                src={images[f.image]}
                alt={f.title}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-16/10 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-base font-semibold text-primary">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="What Stays Constant"
            title="Whatever your sector, these commitments never change"
            description="Sector expertise is only useful when the fundamentals are already in place."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Written, site-specific order book",
              "Verified and inducted personnel only",
              "Trained supervisors with visit reports",
              "Statutory wage and PF/ESI compliance",
              "Monthly MIS and incident summary",
              "Defined escalation matrix",
              "Replacement within 24–72 hours",
              "Quarterly service review meeting",
            ].map((t) => (
              <li key={t} className="flex gap-2.5 text-sm text-charcoal">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand title="Operating in one of these sectors? Let's talk." />
    </>
  );
}
