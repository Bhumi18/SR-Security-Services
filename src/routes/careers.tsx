import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, GraduationCap, HeartHandshake, MapPin } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { company, images, jobs } from "@/data/site";

const title = "Careers | Security Guard, Supervisor & Housekeeping Jobs | SR Security Services";
const description =
  "Join SR Security Services & Facility Management. Openings for security guards, supervisors, housekeeping staff, bouncers, office staff, HR and recruiters across India. Timely salary, PF, ESI and training provided.";

export const Route = createFileRoute("/careers")({
  component: Careers,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/careers" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
});

function Careers() {
  return (
    <>
      <PageHero
        crumb="Careers"
        eyebrow="Join Our Team"
        title="Build a stable career with a company that pays on time"
        description="We employ over 2,500 professionals across India. Salary on the 7th of every month, full PF and ESI, uniform and training provided, and a clear path from guard to supervisor to operations."
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <img
            src={images.galleryTraining}
            alt="Security guard training and drill session conducted by SR Security Services"
            loading="lazy"
            width={1200}
            height={900}
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Work With Us"
              title="Fair employment is the foundation of good security"
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: HeartHandshake,
                  t: "On-time salary",
                  d: "Credited by the 7th of every month, with a digital payslip.",
                },
                {
                  icon: GraduationCap,
                  t: "Paid training",
                  d: "Induction and refresher training at our own centres.",
                },
                {
                  icon: Briefcase,
                  t: "Career growth",
                  d: "Internal promotions to supervisor and operations roles.",
                },
                {
                  icon: MapPin,
                  t: "Postings near home",
                  d: "We try to place you at sites close to your residence.",
                },
              ].map((b) => (
                <div key={b.t}>
                  <b.icon className="size-5 text-accent" aria-hidden="true" />
                  <p className="mt-3 font-display text-sm font-semibold text-primary">{b.t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Current Openings"
          title="Roles we are hiring for right now"
          description="Walk in to our Noida office with your documents, or call our HR desk to apply over the phone."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <div key={job.role} className="card-premium flex flex-col p-7">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <h3 className="min-w-0 font-display text-lg font-semibold text-primary">
                  {job.role}
                </h3>
                <span className="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {job.type}
                </span>
              </div>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="size-3.5 text-accent" aria-hidden="true" />
                {job.location}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {job.detail}
              </p>
              <Button asChild variant="hero" size="default" className="mt-6 self-start">
                <a href={`mailto:${company.email}?subject=Application for ${job.role}`}>Apply Now</a>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="How to Apply"
            title="Three simple steps"
            description="Carry your Aadhaar card, two passport photographs, an address proof and any previous experience letter."
          />
          <ol className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            {[
              { s: "01", t: "Send your details", d: "Email or WhatsApp your name, role and city." },
              { s: "02", t: "Interview & verification", d: "Short interview, document and police verification." },
              { s: "03", t: "Training & posting", d: "Induction training, then posting at a nearby site." },
            ].map((step) => (
              <li key={step.s} className="card-premium p-6">
                <span className="font-display text-2xl font-bold text-accent">{step.s}</span>
                <p className="mt-2 font-display text-sm font-semibold text-primary">{step.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="lg">
              <a href={`mailto:${company.email}?subject=Job Application`}>Email HR</a>
            </Button>
            <Button asChild variant="subtle" size="lg">
              <a href={company.whatsapp} target="_blank" rel="noreferrer noopener">
                WhatsApp HR
              </a>
            </Button>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Hiring for your own site instead?"
        text="If you are an employer looking for trained security or facility staff, request a quotation and our operations team will get in touch."
      />
    </>
  );
}
