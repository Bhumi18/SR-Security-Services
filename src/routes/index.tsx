import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { TypewriterText } from "@/components/site/TypewriterText";
import { CtaBand } from "@/components/site/CtaBand";
import { GujaratMap } from "@/components/site/GujaratMap";
import { Icon } from "@/components/site/Icon";
import { LicensesBand } from "@/components/site/LicensesBand";
import { OurClients } from "@/components/site/OurClients";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Section, SectionHeading } from "@/components/site/Section";
import { WorkProcessSection } from "@/components/site/WorkProcessSection";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { WhyChooseUsCarousel } from "@/components/site/WhyChooseUsCarousel";
import { Button } from "@/components/ui/button";
import {
  company,
  images,
  industries,
  workProcess,
} from "@/data/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: `${company.name} | Security & Facility Management in Gujarat` },
      {
        name: "description",
        content:
          "PSARA licensed, UDYAM (MSME) registered and AMC certified security guards, event management, housekeeping, bouncers and contract labour across Ahmedabad, Gandhinagar, Kheda, Mehsana and Sabarkantha.",
      },
    ],
  }),
});

function Home() {
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

  const contactDetails = [
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
      {/* Hero */}
      <section id="hero" className="relative isolate overflow-hidden bg-gradient-to-br from-[#0B1F3A] via-[#08162A] to-[#0E4DB8] scroll-mt-20 lg:scroll-mt-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_15%_50%,rgba(61,165,255,0.2),transparent)]"
        />
        <div className="container-page pt-8 pb-16 md:pt-10 md:pb-24 lg:pt-12 lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 xl:gap-16">
            <div className="min-w-0">
              <p className="fade-up inline-flex items-center gap-2 rounded-full border border-[#3DA5FF]/30 bg-[#3DA5FF]/10 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-[#3DA5FF] uppercase" style={{ animationDelay: "100ms" }}>
                <ShieldCheck className="size-3.5 text-[#3DA5FF]" aria-hidden="true" />
                PSARA Licensed · UDYAM Registered · AMC Certified
              </p>
              <h1 className="fade-up mt-6 text-3xl leading-[1.15] font-bold text-primary-foreground sm:text-4xl md:text-5xl xl:text-6xl" style={{ animationDelay: "200ms" }}>
                Trusted Security &<br />
                <span className="inline-block max-w-full min-h-[1.15em] whitespace-nowrap text-[#3DA5FF] overflow-hidden align-bottom">
                  <TypewriterText
                    words={[
                      "Facility Management",
                      "Security Guarding",
                      "Event Management",
                      "Bouncer Services",
                      "Contract Manpower",
                    ]}
                  />
                </span>
                <br />
                in Gujarat
              </h1>
              <p className="fade-up mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg" style={{ animationDelay: "350ms" }}>
                Providing professional security guards, event management, housekeeping, bouncer
                services, and contract manpower across 5 key districts in Gujarat:{" "}
                {[
                  { id: "ahmedabad", name: "Ahmedabad" },
                  { id: "gandhinagar", name: "Gandhinagar" },
                  { id: "kheda", name: "Kheda" },
                  { id: "mehsana", name: "Mehsana" },
                  { id: "sabarkantha", name: "Sabarkantha" },
                ].map((d, i, arr) => (
                  <span key={d.id}>
                    <span
                      onMouseEnter={() => setHoveredDistrict(d.id)}
                      onMouseLeave={() => setHoveredDistrict(null)}
                      className={`cursor-pointer border-b border-dotted pb-px transition-all duration-300 ${hoveredDistrict === d.id
                        ? "text-[#3DA5FF] border-[#3DA5FF]"
                        : "border-primary-foreground/30 hover:text-[#3DA5FF] hover:border-[#3DA5FF]"
                        }`}
                    >
                      {d.name}
                    </span>
                    {i < arr.length - 1 ? (i === arr.length - 2 ? ", and " : ", ") : "."}
                  </span>
                ))}
              </p>
              <p className="fade-up mt-4 font-display text-sm font-medium text-[#3DA5FF] md:text-base" style={{ animationDelay: "450ms" }}>
                {company.tagline}
              </p>
              <div className="fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "550ms" }}>
                <Button asChild variant="gold" size="xl">
                  <a href="#contact">
                    Request Free Quote
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="onNavy" size="xl">
                  <a href={company.phoneHref}>
                    <Phone className="size-4" />
                    Call Now
                  </a>
                </Button>
              </div>
              <ul className="fade-up mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-primary-foreground/75" style={{ animationDelay: "650ms" }}>
                {["Background Verified Staff", "5 Gujarat Districts Covered", "24x7 Control Room"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 shrink-0 text-accent" aria-hidden="true" />
                      {t}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Right – Interactive Gujarat Map */}
            <div className="fade-up hidden min-w-0 w-full lg:block" style={{ animationDelay: "200ms" }}>
              <GujaratMap
                hoveredDistrict={hoveredDistrict}
                onHoverDistrict={setHoveredDistrict}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" className="scroll-mt-20 lg:scroll-mt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <img
              src={images.aboutTeam}
              alt="SR Security Services supervisor briefing security guards and housekeeping staff"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="card-premium absolute -right-3 -bottom-6 hidden w-52 p-5 sm:block lg:-right-8">
              <p className="font-display text-3xl font-bold text-primary">15+</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Years protecting Gujarat businesses & facilities
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="About the Company"
              title="Fifteen years of disciplined, compliant and dependable service"
              description="SR Security Services Pvt. Ltd. was founded on a simple principle — security is a discipline, not a headcount. We build every deployment around verified people, written procedures and accountable supervision."
            />
            <ul className="mt-8 space-y-4">
              {[
                {
                  t: "Experience & Integrity",
                  d: "Over 1,000 completed projects across 20 industries, delivered without compromise on ethics or statutory compliance.",
                },
                {
                  t: "Background Verified Workforce",
                  d: "Police verification, Aadhaar KYC, address and reference checks completed before any person is posted.",
                },
                {
                  t: "Well-Trained Personnel",
                  d: "Induction and refresher training in access control, fire safety, first aid, emergency response and etiquette.",
                },
                {
                  t: "Industry Compliance",
                  d: "PSARA, UDYAM (MSME), AMC, PF, ESI, GST and labour law compliance with monthly documentation shared with every client.",
                },
              ].map((item) => (
                <li key={item.t} className="flex gap-4">
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="font-display text-sm font-semibold text-primary">{item.t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="lg" className="mt-9">
              <a href="#services">
                Explore Our Services
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section tone="surface" id="services" className="scroll-mt-20 lg:scroll-mt-24">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete security and facility solutions under one contract"
          description="From a single night guard to a multi-city facility workforce, every service is delivered with the same standards of verification, training and supervision."
        />
        <ServiceGrid />
        <div className="mt-12 text-center">
          <Button asChild variant="hero" size="lg">
            <a href="#contact">
              Request Service Quote
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </Section>

      {/* Industries */}
      <Section id="industries" className="scroll-mt-20 lg:scroll-mt-24">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Sector-specific deployment, not one-size-fits-all guarding"
          description="Each industry carries a different risk profile. Our site orders, checks and reporting formats are designed for the sector you operate in."
        />

        {/* Single line horizontal marquee */}
        <div className="relative mt-10 overflow-hidden py-3">
          <div className="marquee-track gap-4 hover:[animation-play-state:paused]">
            {[...industries, ...industries].map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="group flex shrink-0 items-center gap-3 rounded-full border border-[#D9DEE8] bg-white px-4 py-2.5 shadow-xs transition-all duration-300 hover:border-[#0E4DB8] hover:bg-[#EEF2F7] hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="grid size-7 place-items-center rounded-full bg-[#0E4DB8] text-white transition-all duration-300 group-hover:bg-[#3DA5FF] group-hover:scale-110 shadow-xs">
                  <Icon name={item.icon} className="size-3.5 text-white" />
                </span>
                <span className="font-display text-sm font-semibold text-[#1F2937] transition-colors group-hover:text-[#0E4DB8] whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Left and Right Gradient Fades */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background via-background/80 to-transparent z-10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background via-background/80 to-transparent z-10"
          />
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="surface" id="why-choose-us" className="scroll-mt-20 lg:scroll-mt-24">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Fourteen reasons clients stay with us for years"
          description="We compete on reliability and compliance, not on the lowest quotation."
        />
        <WhyChooseUsCarousel />
      </Section>

      {/* Licenses & Compliance Band */}
      <Section id="licenses" className="scroll-mt-20 lg:scroll-mt-24">
        <SectionHeading
          eyebrow="Official Certifications & Registrations"
          title="Government licensed, registered & fully statutory compliant"
          description="We operate with 100% legal, municipal and statutory transparency. License copies and registration certificates are provided during onboarding."
        />
        <LicensesBand />
      </Section>

      {/* Work process */}
      <WorkProcessSection />





      {/* Our Clients */}
      <Section tone="surface" id="clients" className="scroll-mt-20 lg:scroll-mt-24">
        <SectionHeading
          eyebrow="Our Clients"
          title="Trusted by industry leaders across sectors"
          description="We are proud to partner with prestigious organisations that trust us to protect their people, premises and events."
        />
        <OurClients />
      </Section>

      <CtaBand />

      {/* Contact & Enquiry */}
      <Section tone="surface" id="contact" className="scroll-mt-20 lg:scroll-mt-24">
        <SectionHeading
          eyebrow="Contact & Enquiry"
          title="Talk to our operations desk today"
          description="Whether you need two guards for a warehouse or a 200-person facility workforce across four cities, we will respond with a clear plan and a compliant quotation."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="Reach Us" title="Contact information" />
            <ul className="mt-8 space-y-6">
              {contactDetails.map((d) => (
                <li key={d.label} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#0E4DB8] text-white shadow-sm">
                    <d.icon className="size-5 text-white" aria-hidden="true" />
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
            <h2 className="font-display text-xl font-semibold text-primary">
              Send us an enquiry / Get a Quote
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fields marked * are required. We reply within 24 working hours.
            </p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
