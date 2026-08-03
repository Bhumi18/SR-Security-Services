import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { Icon } from "@/components/site/Icon";
import { serviceGroups } from "@/data/site";

const title = "Security, Housekeeping & Manpower Services | SR Security Services India";
const description =
  "Explore our complete service range: security guard services, industrial and corporate security, event management, bouncers, housekeeping, and skilled or unskilled contract manpower across India.";

export const Route = createFileRoute("/services/")({
  component: Services,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Our Services"
        title="One accountable partner for security, facility and manpower needs"
        description="Six service divisions, over ninety specific offerings, and a single point of contact for contracts, compliance and escalation — anywhere in India."
      />

      <Section>
        <SectionHeading
          eyebrow="Service Divisions"
          title="Choose a division to see the full scope"
          description="Every division follows the same operating discipline: verified personnel, written procedures, trained supervisors and monthly reporting."
        />
        <ServiceGrid />
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Full Service List"
          title="Everything we deliver, listed in detail"
          description="Not sure which category fits your requirement? Send us the brief and we will structure it for you."
        />
        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {serviceGroups.map((group) => (
            <div key={group.slug} className="card-premium p-7">
              <div className="flex min-w-0 items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft">
                  <Icon name={group.icon} className="size-5 text-accent-foreground" />
                </span>
                <h3 className="min-w-0 font-display text-lg font-semibold text-primary">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-charcoal"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Tell us what you need — we will design the deployment." />
    </>
  );
}
