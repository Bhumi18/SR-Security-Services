import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ShieldCheck, Clock } from "lucide-react";

import { company, images, industries, nav, serviceGroups } from "@/data/site";

export function Footer() {
  return (
    <footer className="navy-panel">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-md">
              <img
                src={images.logo}
                alt="SR Security Services Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-primary-foreground sm:text-xl">
              SR Security Services
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
            {company.name} is a PSARA-licensed, UDYAM-registered (MSME) and AMC-certified security & facility management firm delivering trained guarding, event security, housekeeping and compliant manpower solutions across 5 key districts in Gujarat: Ahmedabad, Gandhinagar, Kheda, Mehsana, and Sabarkantha.
          </p>
          <p className="mt-5 font-display text-sm font-medium text-accent">{company.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {company.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-primary-foreground/20 px-3.5 py-1.5 text-xs text-primary-foreground/75 transition-colors hover:border-accent hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-2">
          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.12em] text-primary-foreground uppercase">
              Quick Links
            </h3>
            <span className="gold-rule mt-3" />
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.sectionId}>
                  <a
                    href={item.to}
                    className="text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/#contact" className="text-accent transition-colors hover:underline">
                  Get a Free Quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.12em] text-primary-foreground uppercase">
              Services
            </h3>
            <span className="gold-rule mt-3" />
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceGroups.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-sm font-semibold tracking-[0.12em] text-primary-foreground uppercase">
              Industries
            </h3>
            <span className="gold-rule mt-3" />
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              {industries.slice(0, 10).join(" · ")}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.12em] text-primary-foreground uppercase">
            Contact
          </h3>
          <span className="gold-rule mt-3" />
          <ul className="mt-4 space-y-4 text-sm text-primary-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {company.address.line1}
                <br />
                {company.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={company.phoneHref} className="transition-colors hover:text-accent">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="transition-colors hover:text-accent">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{company.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name} All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="transition-colors hover:text-accent">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="transition-colors hover:text-accent">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
