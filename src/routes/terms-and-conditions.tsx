import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { company } from "@/data/site";

const title = "Terms & Conditions | SR Security Services & Facility Management";
const description =
  "Terms governing the use of the SR Security Services & Facility Management Pvt. Ltd. website and the basis on which enquiries, quotations and service engagements are handled.";

export const Route = createFileRoute("/terms-and-conditions")({
  component: Terms,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms-and-conditions" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
});

const sections = [
  {
    h: "Use of this website",
    p: "The content on this website is provided for general information about our services. By using the site you agree not to misuse it, attempt unauthorised access, or reproduce its content for commercial purposes without written permission.",
  },
  {
    h: "Enquiries and quotations",
    p: "Submitting an enquiry does not create a contract. Quotations are indicative until confirmed in writing after a site assessment, and remain valid for thirty days unless stated otherwise.",
  },
  {
    h: "Service engagement",
    p: "All service engagements are governed by a separate signed agreement covering scope, deployment strength, shift pattern, pricing, statutory compliance, notice period and liability.",
  },
  {
    h: "Pricing and statutory components",
    p: "Quoted rates are based on applicable minimum wages and statutory contributions prevailing at the time of quotation. Revisions notified by government authorities will be passed through with prior written intimation.",
  },
  {
    h: "Intellectual property",
    p: "All text, layout, graphics and photographs on this website are the property of the company or are used with permission, and may not be copied without consent.",
  },
  {
    h: "Limitation of liability",
    p: "We are not liable for indirect or consequential loss arising from use of this website. Service-related liability is limited strictly to the terms of the signed service agreement.",
  },
  {
    h: "Governing law",
    p: "These terms are governed by the laws of India, with jurisdiction of the courts at Ahmedabad, Gujarat.",
  },
];

function Terms() {
  return (
    <>
      <PageHero
        crumb="Terms & Conditions"
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Please read these terms before using this website or engaging our services."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-lg font-semibold text-primary">{s.h}</h2>
              <span className="gold-rule mt-3" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {s.p}
              </p>
            </div>
          ))}
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Questions about these terms? Write to{" "}
            <a href={`mailto:${company.email}`} className="font-medium text-primary underline">
              {company.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
