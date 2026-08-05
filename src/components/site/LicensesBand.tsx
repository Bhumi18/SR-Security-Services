import { useState } from "react";
import {
  Building2,
  ExternalLink,
  FileCheck,
  FileText,
  Maximize2,
  ShieldCheck,
  X,
} from "lucide-react";

import psaraPdf from "@/assets/PSARA.pdf";
import udyamPdf from "@/assets/UDYAM.pdf";
import amcPdf from "@/assets/AMC.pdf";

export const licenses = [
  {
    id: "psara",
    icon: ShieldCheck,
    title: "PSARA Licensed",
    subtitle: "Private Security Agencies (Regulation) Act",
    description:
      "Government-issued PSARA license for private security operations, patrolling and guarding across state jurisdictions.",
    tag: "Govt Security License",
    pdf: psaraPdf,
  },
  {
    id: "udyam",
    icon: FileCheck,
    title: "UDYAM Registered",
    subtitle: "Ministry of MSME, Government of India",
    description:
      "Official UDYAM registration certificate under the Ministry of Micro, Small and Medium Enterprises, Govt of India.",
    tag: "MSME / Govt of India",
    pdf: udyamPdf,
  },
  {
    id: "amc",
    icon: Building2,
    title: "AMC Registration",
    subtitle: "Ahmedabad Municipal Corporation",
    description:
      "Official AMC registration certificate for commercial municipal operations and establishment compliance.",
    tag: "Municipal Authority",
    pdf: amcPdf,
  },
];

export function LicensesBand() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeModalPdf, setActiveModalPdf] = useState<{
    title: string;
    pdf: string;
  } | null>(null);

  return (
    <div className="mt-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {licenses.map((item) => {
          const IconComponent = item.icon;
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:border-accent/60 hover:shadow-lift hover:-translate-y-1"
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

              {/* Action bar: Hover indicator / Expand */}
              <div className="mt-6 flex items-center justify-between gap-2 border-t border-border/60 pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-colors group-hover:underline">
                  <FileText className="size-3.5" />
                  Hover to Preview PDF
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalPdf({ title: item.title, pdf: item.pdf })}
                  className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                >
                  <Maximize2 className="size-3" />
                  Full View
                </button>
              </div>

              {/* Hover Pop-up Component with PDF Preview */}
              {isHovered && (
                <div className="pointer-events-auto absolute inset-0 z-30 flex flex-col justify-between rounded-2xl border-2 border-accent bg-[#0B1F3A] p-4 text-white shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
                  {/* Pop-up Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-accent/20 text-accent">
                        <FileText className="size-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-bold text-accent">{item.title}</p>
                        <p className="truncate text-[10px] text-white/70">Verified Certificate Document</p>
                      </div>
                    </div>
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1 rounded-md bg-accent px-2 py-1 text-[11px] font-bold text-accent-foreground transition-all hover:bg-accent/90"
                      title="Open full PDF in new tab"
                    >
                      <span>Open PDF</span>
                      <ExternalLink className="size-3" />
                    </a>
                  </div>

                  {/* PDF Embedded View */}
                  <div className="relative my-2.5 flex-1 overflow-hidden rounded-xl border border-white/15 bg-white">
                    <iframe
                      src={`${item.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      title={`${item.title} PDF Document`}
                      className="h-full w-full border-0"
                    />
                  </div>

                  {/* Pop-up Footer */}
                  <div className="flex items-center justify-between text-[11px] text-white/80 pt-1">
                    <span className="flex items-center gap-1 text-accent font-medium">
                      <ShieldCheck className="size-3.5" /> Official Copy
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveModalPdf({ title: item.title, pdf: item.pdf })}
                      className="inline-flex items-center gap-1 font-semibold text-white hover:text-accent underline decoration-accent cursor-pointer"
                    >
                      Expand Document
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Fullscreen PDF Modal Viewer */}
      {activeModalPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative flex h-[88vh] w-full max-w-4xl flex-col rounded-2xl border border-accent/40 bg-[#0B1F3A] p-4 text-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 text-accent" />
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{activeModalPdf.title}</h3>
                  <p className="text-xs text-white/70">Official Compliance & License Certificate PDF</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activeModalPdf.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  <ExternalLink className="size-3.5" />
                  Open in New Tab
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalPdf(null)}
                  className="grid size-9 place-items-center rounded-lg border border-white/10 text-white/80 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Modal PDF Viewer Body */}
            <div className="mt-3 flex-1 overflow-hidden rounded-xl bg-white">
              <iframe
                src={`${activeModalPdf.pdf}#view=FitH`}
                title={`${activeModalPdf.title} Full PDF`}
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
