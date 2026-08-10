import { Link } from "@tanstack/react-router";

import { company, images, industries, serviceGroups } from "@/data/site";

export function Footer() {
  return (
    <footer className="navy-panel">
      <div className="container-page grid gap-10 py-16 md:grid-cols-12 lg:gap-12 lg:py-20">
        {/* Column 1: Company Profile & Certifications */}
        <div className="md:col-span-6 lg:col-span-5">
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
          <p className="mt-5 font-display text-sm font-medium text-[#3DA5FF]">{company.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {company.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-primary-foreground/20 px-3.5 py-1.5 text-xs text-primary-foreground/75 transition-colors hover:border-[#3DA5FF] hover:text-[#3DA5FF]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-3 lg:col-span-3">
          <h3 className="font-display text-sm font-semibold tracking-[0.12em] text-primary-foreground uppercase">
            Quick Links
          </h3>
          <span className="gold-rule mt-3" />
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="/#hero" className="text-primary-foreground/70 transition-colors hover:text-[#3DA5FF]">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="text-primary-foreground/70 transition-colors hover:text-[#3DA5FF]">
                Company Overview
              </a>
            </li>
            <li>
              <a href="/#why-choose-us" className="text-primary-foreground/70 transition-colors hover:text-[#3DA5FF]">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="/#licenses" className="text-primary-foreground/70 transition-colors hover:text-[#3DA5FF]">
                Licenses & Certifications
              </a>
            </li>
            <li>
              <a href="/#process" className="text-primary-foreground/70 transition-colors hover:text-[#3DA5FF]">
                Our Work Process
              </a>
            </li>
            <li>
              <a href="/#gallery" className="text-primary-foreground/70 transition-colors hover:text-[#3DA5FF]">
                Photo Gallery
              </a>
            </li>
            <li>
              <a href="/#clients" className="text-primary-foreground/70 transition-colors hover:text-[#3DA5FF]">
                Our Clients
              </a>
            </li>
            <li>
              <a href="/#contact" className="text-[#3DA5FF] font-semibold transition-colors hover:underline">
                Contact & Free Quote
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Core Services & Sectors */}
        <div className="md:col-span-3 lg:col-span-4">
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
                  className="text-primary-foreground/70 transition-colors hover:text-[#3DA5FF]"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 font-display text-sm font-semibold tracking-[0.12em] text-primary-foreground uppercase">
            Industries Served
          </h3>
          <span className="gold-rule mt-3" />
          <p className="mt-4 text-xs leading-relaxed text-primary-foreground/70">
            {industries.slice(0, 10).map((item) => item.name).join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name} All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="text-primary-foreground/80 transition-colors hover:text-[#3DA5FF]">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-primary-foreground/80 transition-colors hover:text-[#3DA5FF]">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="text-primary-foreground/80 transition-colors hover:text-[#3DA5FF]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
