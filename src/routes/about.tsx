import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, HeartHandshake, BadgeCheck } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { StatsBand } from "@/components/site/StatsBand";
import { certifications, images } from "@/data/site";

const title = "About SR Security Services & Facility Management | 15+ Years in India";
const description =
  "Learn about SR Security Services & Facility Management Pvt. Ltd. — our experience, mission, vision, core values, background-verified workforce, training standards and industry compliance.";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const pillars = [
  {
    icon: Compass,
    title: "Our Mission",
    text: "To deliver security and facility services that our clients never have to worry about — through verified people, documented processes and accountable supervision at every site we serve.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be recognised as India's most dependable security and facility management partner, known equally for operational discipline and for the fair treatment of our workforce.",
  },
  {
    icon: HeartHandshake,
    title: "Core Values",
    text: "Integrity before revenue. Compliance without shortcuts. Respect for every person we employ. Transparency in pricing. Ownership of every incident on our watch.",
  },
];

function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="Who We Are"
        title="A security company built on discipline, verification and accountability"
        description="Since 2010 we have protected factories, hospitals, corporate campuses, malls, societies and public events across India — with a workforce that is screened, trained and supervised, never simply supplied."
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Fifteen years of protecting people, premises and reputations"
            />
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                SR Security Services & Facility Management Pvt. Ltd. began with a small guarding team in
                Noida and a conviction that most security failures are process failures, not
                manpower failures. That belief still shapes how we operate today across more than
                500 client sites.
              </p>
              <p>
                Every posting starts with a physical site survey and a written site order book. Every
                person deployed is police-verified and inducted before their first shift. Every
                contract is supported by supervisor visits, attendance reconciliation and a monthly
                MIS report — so you always know exactly what you are paying for.
              </p>
              <p>
                Our facility management and manpower divisions were added on client request, and are
                held to the same standard: trained staff, defined schedules, statutory compliance
                and audited quality scores.
              </p>
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                "Experienced leadership from armed forces and police backgrounds",
                "In-house training centres with structured curriculum",
                "100% background verification before deployment",
                "Full PF, ESI and minimum-wage compliance",
              ].map((t) => (
                <p key={t} className="flex gap-3 text-sm text-charcoal">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  {t}
                </p>
              ))}
            </div>
          </div>
          <img
            src={images.aboutTeam}
            alt="SR Security Services staff attending a shift briefing session"
            loading="lazy"
            width={1408}
            height={1008}
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
          />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Mission · Vision · Values"
          title="What guides every decision we take"
        />
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="card-premium p-8">
              <span className="grid size-12 place-items-center rounded-xl navy-panel">
                <p.icon className="size-5 text-accent" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-primary">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="By the Numbers" title="Scale that comes with accountability" />
        <div className="mt-14">
          <StatsBand />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Compliance"
          title="Licensed, registered and audit-ready"
          description="Our documentation is shared upfront — you should never have to ask twice for a compliance certificate."
        />
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

      <CtaBand title="Want to know how we would secure your site?" />
    </>
  );
}
