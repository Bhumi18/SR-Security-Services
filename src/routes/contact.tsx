import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { FaqAccordion } from "@/components/site/FaqAccordion";
import { PageHero } from "@/components/site/PageHero";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Section, SectionHeading } from "@/components/site/Section";
import { company } from "@/data/site";

const title = "Contact SR Security Services & Facility Management | Noida, PAN India";
const description =
  "Contact our operations desk for security guards, housekeeping or contract manpower. Call, WhatsApp or email us, or send your requirement through the enquiry form. 24x7 control room.";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const details = [
    {
      icon: MapPin,
      label: "Registered Office",
      value: `${company.address.line1}, ${company.address.line2}`,
      href: undefined,
    },
    { icon: Phone, label: "Phone", value: company.phone, href: company.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: company.phone, href: company.whatsapp },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: Clock, label: "Working Hours", value: company.hours, href: undefined },
  ];

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact Us"
        title="Talk to our operations desk today"
        description="Whether you need two guards for a warehouse or a 200-person facility workforce across four cities, we will respond with a clear plan and a compliant quotation."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="Reach Us" title="Contact information" />
            <ul className="mt-8 space-y-6">
              {details.map((d) => (
                <li key={d.label} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft">
                    <d.icon className="size-5 text-accent-foreground" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel={d.href.startsWith("http") ? "noreferrer noopener" : undefined}
                        className="mt-1 block text-sm leading-relaxed font-medium text-primary transition-colors hover:text-accent"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm leading-relaxed font-medium text-primary">
                        {d.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="SR Security Services & Facility Management office location on Google Maps"
                src={company.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
            </div>
          </div>

          <div className="card-premium p-7 md:p-9">
            <h2 className="font-display text-xl font-semibold text-primary">Send us an enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fields marked * are required. We reply within 24 working hours.
            </p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Eighteen answers covering deployment, verification, pricing, compliance and service quality."
        />
        <FaqAccordion />
      </Section>
    </>
  );
}
