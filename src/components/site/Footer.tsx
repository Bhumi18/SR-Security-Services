import { Link } from "@tanstack/react-router";
import { company, images, serviceGroups } from "@/data/site";

export function Footer() {
  return (
    <footer className="navy-panel">
      <div className="container-page grid gap-10 py-12 md:grid-cols-12 lg:gap-12 lg:py-16">
        {/* Column 1: Company Profile & Certifications */}
        <div className="md:col-span-6 lg:col-span-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-md">
              <img
                src={images.logo}
                alt="SR Security Services Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-display text-base font-bold tracking-tight text-primary-foreground sm:text-xl">
              SR Security Services
            </span>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-primary-foreground/75 sm:text-sm">
            {company.name} is a PSARA-licensed, UDYAM-registered (MSME) and AMC-certified security & facility management firm delivering trained guarding, event security, housekeeping and compliant manpower solutions across 5 key districts in Gujarat.
          </p>
          <p className="mt-3 font-display text-xs font-semibold text-[#3DA5FF] sm:text-sm">{company.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {company.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-primary-foreground/20 px-3 py-1 text-[11px] text-primary-foreground/80 transition-colors hover:border-[#3DA5FF] hover:text-[#3DA5FF]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* 2-Column Mobile Links & Services Grid */}
        <div className="grid grid-cols-2 gap-6 pt-4 border-t border-primary-foreground/10 md:col-span-6 lg:col-span-7 md:grid-cols-2 md:border-0 md:pt-0">
          {/* Quick Links Column */}
          <div>
            <h3 className="font-display text-xs font-semibold tracking-[0.12em] text-primary-foreground uppercase sm:text-sm">
              Quick Links
            </h3>
            <span className="gold-rule mt-2" />
            <ul className="mt-3.5 space-y-2 text-xs sm:text-sm">
              <li>
                <a href="/#hero" className="text-primary-foreground/75 transition-colors hover:text-[#3DA5FF]">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="text-primary-foreground/75 transition-colors hover:text-[#3DA5FF]">
                  Company Overview
                </a>
              </li>
              <li>
                <a href="/#why-choose-us" className="text-primary-foreground/75 transition-colors hover:text-[#3DA5FF]">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="/#licenses" className="text-primary-foreground/75 transition-colors hover:text-[#3DA5FF]">
                  Licenses & Certs
                </a>
              </li>
              <li>
                <a href="/#process" className="text-primary-foreground/75 transition-colors hover:text-[#3DA5FF]">
                  Work Process
                </a>
              </li>
              <li>
                <a href="/#industries" className="text-primary-foreground/75 transition-colors hover:text-[#3DA5FF]">
                  Industries We Serve
                </a>
              </li>
              <li>
                <a href="/#gallery" className="text-primary-foreground/75 transition-colors hover:text-[#3DA5FF]">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="/#clients" className="text-primary-foreground/75 transition-colors hover:text-[#3DA5FF]">
                  Our Clients
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-[#3DA5FF] font-semibold transition-colors hover:underline">
                  Free Quote →
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display text-xs font-semibold tracking-[0.12em] text-primary-foreground uppercase sm:text-sm">
              Our Services
            </h3>
            <span className="gold-rule mt-2" />
            <ul className="mt-3.5 space-y-2 text-xs sm:text-sm">
              {serviceGroups.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-primary-foreground/75 transition-colors hover:text-[#3DA5FF]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
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
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
