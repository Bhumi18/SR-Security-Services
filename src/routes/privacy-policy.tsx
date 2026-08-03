import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { company } from "@/data/site";

const title = "Privacy Policy | SR Security Services & Facility Management";
const description =
  "How SR Security Services & Facility Management Pvt. Ltd. collects, uses, stores and protects the information you share through this website.";

export const Route = createFileRoute("/privacy-policy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

const sections = [
  {
    h: "Information we collect",
    p: "We collect only the details you choose to submit through our enquiry or quotation forms — typically your name, organisation, phone number, email address, site location and requirement description.",
  },
  {
    h: "How we use your information",
    p: "Your information is used solely to respond to your enquiry, prepare a quotation, process a job application or send updates you have requested. We do not sell, rent or trade your details to third parties.",
  },
  {
    h: "Sharing and disclosure",
    p: "Details may be shared internally with our operations, HR or compliance teams to service your request, and with statutory authorities where disclosure is required by law.",
  },
  {
    h: "Data retention",
    p: "Enquiry records are retained for as long as needed to service the relationship and to meet legal or accounting obligations, after which they are securely deleted.",
  },
  {
    h: "Security measures",
    p: "We apply reasonable administrative and technical safeguards to protect submitted information against unauthorised access, alteration or disclosure.",
  },
  {
    h: "Cookies and analytics",
    p: "This website may use essential cookies and aggregated analytics to understand traffic patterns and improve performance. No personally identifiable browsing profile is built.",
  },
  {
    h: "Your rights",
    p: "You may request access to, correction of, or deletion of the personal information you have shared with us by writing to our email address below.",
  },
  {
    h: "Changes to this policy",
    p: "This policy may be updated from time to time. The revised version will always be available on this page.",
  },
];

function Privacy() {
  return (
    <>
      <PageHero
        crumb="Privacy Policy"
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy explains what information this website collects and how it is handled by our team."
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
          <div>
            <h2 className="font-display text-lg font-semibold text-primary">Contact</h2>
            <span className="gold-rule mt-3" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              For any privacy-related query, write to{" "}
              <a href={`mailto:${company.email}`} className="font-medium text-primary underline">
                {company.email}
              </a>{" "}
              or call {company.phone}. Registered office: {company.address.line1},{" "}
              {company.address.line2}.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
