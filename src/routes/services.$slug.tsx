import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { Section, SectionHeading } from "@/components/site/Section";
import { Icon } from "@/components/site/Icon";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { images, serviceGroups, workProcess, type ServiceGroup } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceGroups.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const service = loaderData?.service;
    const title = service
      ? `${service.title} in India | SR Security Services & Facility Management`
      : "Service | SR Security Services";
    const description = service?.summary ?? "Professional security and facility services in India.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: service
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                name: service.title,
                description: service.summary,
                areaServed: "IN",
                provider: {
                  "@type": "Organization",
                  name: "SR Security Services & Facility Management Pvt. Ltd.",
                },
              }),
            },
          ]
        : [],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: ServiceGroup };
  const others = serviceGroups.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        crumb={service.title}
        eyebrow="Service Detail"
        title={service.title}
        description={service.summary}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Overview"
              title={`How we deliver ${service.title.toLowerCase()}`}
              description={service.intro}
            />
            <h3 className="mt-12 font-display text-lg font-semibold text-primary">
              What this division covers
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-charcoal">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-lg font-semibold text-primary">
              Our deployment process
            </h3>
            <ol className="mt-6 space-y-4">
              {workProcess.map((step) => (
                <li key={step.step} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft font-display text-xs font-bold text-accent-foreground">
                    {step.step}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-primary">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="space-y-7">
            <img
              src={images[service.image]}
              alt={service.title}
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="card-premium p-7">
              <span className="grid size-12 place-items-center rounded-xl navy-panel">
                <Icon name={service.icon} className="size-5 text-accent" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-primary">
                Request a quotation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Share your site details and shift requirement. We revert within 24 working hours
                with a compliant, itemised quote.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-6 w-full">
                <Link to="/quote">Get Free Quote</Link>
              </Button>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-7">
              <h3 className="font-display text-base font-semibold text-primary">Other services</h3>
              <ul className="mt-4 space-y-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: o.slug }}
                      className="group flex items-center justify-between gap-3 text-sm font-medium text-charcoal transition-colors hover:text-accent"
                    >
                      {o.title}
                      <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand title={`Looking for reliable ${service.title.toLowerCase()}?`} />
    </>
  );
}
