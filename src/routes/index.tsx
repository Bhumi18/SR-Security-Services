import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { ClientLogos } from "@/components/site/ClientLogos";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { Icon } from "@/components/site/Icon";
import { Section, SectionHeading } from "@/components/site/Section";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { StatsBand } from "@/components/site/StatsBand";
import { Testimonials } from "@/components/site/Testimonials";
import { Button } from "@/components/ui/button";
import {
  certifications,
  company,
  faqs,
  images,
  industries,
  posts,
  whyChooseUs,
  workProcess,
} from "@/data/site";

const title = "India's Trusted Security & Facility Management Company | SR Security Services";
const description =
  "SR Security Services & Facility Management Pvt. Ltd. provides PSARA-licensed security guards, event security, bouncers, housekeeping and skilled manpower across India. 15+ years, 500+ clients, 2500+ trained professionals.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: images.heroSecurity, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.slice(0, 10).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={images.heroSecurity}
          alt="Uniformed security guards of SR Security Services standing outside a corporate office building"
          width={1920}
          height={1088}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-10 size-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,oklch(0.2_0.05_258/0.95)_0%,oklch(0.2_0.05_258/0.82)_46%,oklch(0.2_0.05_258/0.45)_100%)]"
        />
        <div className="container-page py-20 md:py-32 lg:py-40">
          <div className="fade-up max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
              <ShieldCheck className="size-3.5" aria-hidden="true" />
              PSARA Licensed · ISO Certified
            </p>
            <h1 className="mt-6 text-4xl leading-[1.08] font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              India's Trusted Security & Facility Management Company
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              Providing professional security guards, event management, housekeeping, bouncer
              services, and skilled & unskilled manpower across India.
            </p>
            <p className="mt-4 font-display text-sm font-medium text-accent md:text-base">
              {company.tagline}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="xl">
                <Link to="/quote">
                  Request Free Quote
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <a href={company.phoneHref}>
                  <Phone className="size-4" />
                  Call Now
                </a>
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-primary-foreground/75">
              {["Background Verified Staff", "24x7 Control Room", "Deployment in 24–48 Hours"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-accent" aria-hidden="true" />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="bg-surface py-14 md:py-16">
        <div className="container-page">
          <StatsBand />
        </div>
      </section>

      {/* About */}
      <Section>
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
                Years of protecting Indian businesses
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="About the Company"
              title="Fifteen years of disciplined, compliant and dependable service"
              description="SR Security Services & Facility Management Pvt. Ltd. was founded on a simple principle — security is a discipline, not a headcount. We build every deployment around verified people, written procedures and accountable supervision."
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
                  d: "PSARA, ISO, PF, ESI, GST and labour law compliance with monthly documentation shared with every client.",
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
              <Link to="/about">
                More About Us
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section tone="surface" id="services">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete security and facility solutions under one contract"
          description="From a single night guard to a multi-city facility workforce, every service is delivered with the same standards of verification, training and supervision."
        />
        <ServiceGrid />
        <div className="mt-12 text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/services">
              Explore All Services
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Industries */}
      <Section>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Sector-specific deployment, not one-size-fits-all guarding"
          description="Each industry carries a different risk profile. Our site orders, checks and reporting formats are designed for the sector you operate in."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border bg-card px-4 py-4 text-center text-sm font-medium text-charcoal transition-colors hover:border-accent hover:text-primary"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Fourteen reasons clients stay with us for years"
          description="We compete on reliability and compliance, not on the lowest quotation."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.slice(0, 9).map((item) => (
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
        <div className="mt-12 text-center">
          <Button asChild variant="subtle" size="lg">
            <Link to="/why-choose-us">
              See All Advantages
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Work process */}
      <Section tone="navy">
        <SectionHeading
          onNavy
          eyebrow="Our Work Process"
          title="A structured six-step onboarding, every single time"
          description="No guesswork and no ad-hoc deployment. This is exactly how we move from your first call to a monitored, audited posting."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workProcess.map((step) => (
            <li
              key={step.step}
              className="rounded-2xl border border-primary-foreground/12 bg-primary-foreground/5 p-6 transition-colors hover:border-accent/50"
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

      {/* Certifications */}
      <Section>
        <SectionHeading
          eyebrow="Certifications & Compliance"
          title="Fully licensed, registered and statutorily compliant"
          description="Documentation is available for verification at the proposal stage and refreshed for you every month."
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

      {/* Testimonials + logos */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="What our clients say about working with us"
        />
        <Testimonials />
        <div className="mt-20">
          <p className="text-center text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Trusted by 500+ organisations across India
          </p>
          <ClientLogos />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to the questions clients ask us most"
          description="Still unsure about something? Call our operations desk and we will walk you through it."
        />
        <FaqAccordion limit={8} />
        <div className="mt-10 text-center">
          <Button asChild variant="subtle" size="lg">
            <Link to="/contact">
              View All FAQs & Contact Us
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
