import { Building2, FileCheck, ShieldCheck } from "lucide-react";

export const licenses = [
  {
    id: "psara",
    icon: ShieldCheck,
    title: "PSARA Licensed",
    subtitle: "Private Security Agencies (Regulation) Act",
    description:
      "Government-issued PSARA license for private security operations, patrolling and guarding across state jurisdictions.",
    tag: "Govt Security License",
  },
  {
    id: "udyam",
    icon: FileCheck,
    title: "UDYAM Registered",
    subtitle: "Ministry of MSME, Government of India",
    description:
      "Official UDYAM registration certificate under the Ministry of Micro, Small and Medium Enterprises, Govt of India.",
    tag: "MSME / Govt of India",
  },
  {
    id: "amc",
    icon: Building2,
    title: "AMC Registration",
    subtitle: "Ahmedabad Municipal Corporation",
    description:
      "Official AMC registration certificate for commercial municipal operations and establishment compliance.",
    tag: "Municipal Authority",
  },
];

export function LicensesBand() {
  return (
    <div className="mt-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {licenses.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:border-accent/50 hover:shadow-lift hover:-translate-y-1"
            >
              {/* Top Row: Icon + Tag */}
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="grid size-12 place-items-center rounded-xl navy-panel text-accent transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="size-6" aria-hidden="true" />
                  </div>
                  <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent-soft px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase text-accent-foreground">
                    {item.tag}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="mt-5 font-display text-lg font-bold text-primary transition-colors group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-accent/90">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>

              {/* Bottom Gold Accent Bar */}
              <div className="mt-6 flex items-center gap-2">
                <span className="h-1 w-8 rounded-full bg-accent transition-all duration-300 group-hover:w-16" />
                <span className="h-1 flex-1 rounded-full bg-border/60" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
