import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ShieldCheck, Clock, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { company, industries, nav, serviceGroups } from "@/data/site";

export function Footer() {
  return (
    <footer className="navy-panel">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10">
              <ShieldCheck className="size-6 text-accent" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-lg font-bold text-primary-foreground">
                SR Security Services
              </span>
              <span className="block text-[0.68rem] tracking-[0.14em] text-primary-foreground/60 uppercase">
                & Facility Management
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
            {company.name} is a PSARA-licensed, ISO-certified security and facility management
            company delivering trained guarding, event security, housekeeping and compliant
            manpower solutions across India since 2010.
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

          <h3 className="mt-8 font-display text-sm font-semibold tracking-[0.12em] text-primary-foreground uppercase">
            Newsletter
          </h3>
          <span className="gold-rule mt-3" />
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              e.currentTarget.reset();
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <Input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              className="h-11 border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/45"
            />
            <Button type="submit" variant="gold" size="icon" className="h-11 w-11 shrink-0">
              <ArrowRight className="size-4" />
              <span className="sr-only">Subscribe</span>
            </Button>
          </form>
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
