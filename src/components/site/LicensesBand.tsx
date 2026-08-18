import { useEffect, useState } from "react";
import {
  Building2,
  ExternalLink,
  FileCheck,
  FileText,
  Lock,
  Maximize2,
  ShieldAlert,
  ShieldCheck,
  X,
} from "lucide-react";

import psaraPdf from "@/assets/PSARA.pdf";
import udyamPdf from "@/assets/UDYAM.pdf";
import amcPdf from "@/assets/AMC.pdf";
import { cn } from "@/lib/utils";

export const licenses = [
  {
    id: "psara",
    icon: ShieldCheck,
    title: "PSARA Licensed",
    subtitle: "Private Security Agencies (Regulation) Act",
    description:
      "Government-issued PSARA license for private security operations, patrolling and guarding across state jurisdictions.",
    tag: "PSARA License",
    pdf: psaraPdf,
  },
  {
    id: "udyam",
    icon: FileCheck,
    title: "UDYAM Registered",
    subtitle: "Ministry of MSME, Government of India",
    description:
      "Official UDYAM registration certificate under the Ministry of Micro, Small and Medium Enterprises, Govt of India.",
    tag: "MSME Registered",
    pdf: udyamPdf,
  },
  {
    id: "amc",
    icon: Building2,
    title: "AMC Registration",
    subtitle: "Ahmedabad Municipal Corporation",
    description:
      "Official AMC registration certificate for commercial municipal operations and establishment compliance.",
    tag: "AMC Municipal",
    pdf: amcPdf,
  },
];

export function LicensesBand() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeModalPdf, setActiveModalPdf] = useState<{
    title: string;
    pdf: string;
  } | null>(null);
  const [isScreenCaptured, setIsScreenCaptured] = useState(false);

  // Anti-screenshot & key combo protection
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const isWinShiftS = (e.metaKey || e.ctrlKey) && e.shiftKey && (key === "s" || e.code === "KeyS");
      const isMacScreenshot = e.metaKey && e.shiftKey && ["3", "4", "5"].includes(e.key);
      const isPrtScn = e.key === "PrintScreen" || e.code === "PrintScreen" || key === "printscreen";
      const isPrint = (e.ctrlKey || e.metaKey) && key === "p";
      const isSave = (e.ctrlKey || e.metaKey) && key === "s";
      const isDevTools =
        e.key === "F12" ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (key === "i" || key === "j"));

      if (isWinShiftS || isMacScreenshot || isPrtScn || isPrint || isSave || isDevTools) {
        e.preventDefault();
        e.stopPropagation();
        setIsScreenCaptured(true);
        navigator.clipboard?.writeText("");
        setTimeout(() => setIsScreenCaptured(false), 3500);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (e.key === "PrintScreen" || e.code === "PrintScreen" || key === "printscreen") {
        navigator.clipboard?.writeText("");
      }
    };

    const handleBlur = () => {
      if (activeModalPdf || hoveredId) {
        setIsScreenCaptured(true);
      }
    };
    const handleFocus = () => setIsScreenCaptured(false);
    const handleVisibility = () => {
      if (document.hidden) setIsScreenCaptured(true);
      else setIsScreenCaptured(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [activeModalPdf, hoveredId]);

  return (
    <div className="relative overflow-hidden bg-transparent py-2 text-primary" id="compliance">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0E4DB8]/5 via-transparent to-transparent" />

      {/* Hide PDF during print dialog */}
      <style>{`
        @media print {
          iframe, object, .pdf-protected-area {
            display: none !important;
            visibility: hidden !important;
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl">
        {/* Licenses Grid */}
        <div className="mt-4 grid gap-4 sm:gap-5 lg:gap-6 md:grid-cols-3">
          {licenses.map((item) => {
            const IconComponent = item.icon;
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#0E4DB8]/30 bg-gradient-to-br from-[#0B1F3A] via-[#091B33] to-[#061426] p-4.5 sm:p-5 lg:p-6 text-white transition-all duration-500 hover:border-[#3DA5FF]/80 hover:shadow-[0_20px_50px_-15px_rgba(61,165,255,0.35)] hover:-translate-y-2"
              >
                {/* Background glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-[#3DA5FF]/10 blur-2xl transition-all duration-500 group-hover:bg-[#3DA5FF]/20 group-hover:scale-125" />

                {/* Content Top */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-2.5 sm:gap-3">
                    <div className="grid size-10.5 sm:size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#3DA5FF] to-[#0E4DB8] text-white shadow-lg shadow-[#0E4DB8]/40 border border-white/20 transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="size-5.5 sm:size-6 text-white" aria-hidden="true" />
                    </div>
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[8.5px] sm:text-[9px] xl:text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 shadow-xs whitespace-nowrap shrink-0">
                      <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <span>{item.tag}</span>
                    </span>
                  </div>

                  <h3 className="mt-4 sm:mt-5 font-display text-base sm:text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#3DA5FF]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] sm:text-xs font-semibold text-[#3DA5FF]/90">
                    {item.subtitle}
                  </p>
                  <p className="mt-2.5 sm:mt-3 text-xs leading-relaxed text-slate-300/80">
                    {item.description}
                  </p>
                </div>

                {/* Action bar: Hover indicator / Expand */}
                <div className="relative z-10 mt-5 sm:mt-6 flex items-center justify-between gap-1.5 sm:gap-2 border-t border-white/10 pt-3.5 sm:pt-4">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] xl:text-xs font-medium text-slate-300 transition-colors group-hover:text-[#3DA5FF] whitespace-nowrap min-w-0">
                    <FileText className="size-3.5 text-[#3DA5FF] shrink-0" />
                    <span className="truncate">
                      <span className="xl:hidden">Preview PDF</span>
                      <span className="hidden xl:inline">Hover to Preview PDF</span>
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveModalPdf({ title: item.title, pdf: item.pdf })}
                    className="inline-flex items-center gap-1 sm:gap-1.5 rounded-xl border border-[#3DA5FF]/40 bg-[#3DA5FF]/15 px-2 py-1.5 sm:px-2.5 xl:px-3 text-[10px] sm:text-[11px] xl:text-xs font-bold text-[#3DA5FF] backdrop-blur-md transition-all duration-300 hover:bg-[#3DA5FF] hover:text-[#0B1F3A] hover:border-[#3DA5FF] hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Maximize2 className="size-3 shrink-0" />
                    <span>
                      <span className="xl:hidden">Expand</span>
                      <span className="hidden xl:inline">Expand Document</span>
                    </span>
                  </button>
                </div>

                {/* Hover Pop-up Component with Pre-loaded Protected PDF Preview (Desktop Only) */}
                <div
                  onContextMenu={(e) => e.preventDefault()}
                  className={cn(
                    "pdf-protected-area absolute inset-0 hidden md:flex flex-col justify-between select-none rounded-3xl border-2 border-[#3DA5FF] bg-[#0B1F3A] p-4 text-white shadow-2xl backdrop-blur-md transition-all duration-300",
                    isHovered
                      ? "opacity-100 scale-100 pointer-events-auto z-30"
                      : "opacity-0 scale-95 pointer-events-none -z-10",
                  )}
                >
                  {/* Pop-up Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#3DA5FF]/20 text-[#3DA5FF]">
                        <FileText className="size-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-bold text-[#3DA5FF]">{item.title}</p>
                        <p className="truncate text-[10px] text-white/70">Verified Certificate Document</p>
                      </div>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-md border border-[#3DA5FF]/40 bg-[#3DA5FF]/15 px-2 py-1 text-[10px] font-bold text-[#3DA5FF]">
                      <Lock className="size-3" />
                      <span>Protected</span>
                    </span>
                  </div>

                  {/* Responsive PDF Embedded View */}
                  <div className="relative my-2.5 flex-1 overflow-hidden rounded-xl border border-white/15 bg-white">
                    <object
                      data={`${item.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      type="application/pdf"
                      className={cn(
                        "relative z-10 h-full w-full border-0 bg-white transition-all duration-300",
                        isScreenCaptured && "blur-xl opacity-10",
                      )}
                    >
                      <iframe
                        src={`${item.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                        title={`${item.title} PDF Document`}
                        className="h-full w-full border-0 bg-white"
                      />
                    </object>

                    {/* Watermark Overlay */}
                    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-around overflow-hidden p-3 opacity-20 select-none">
                      <div className="flex justify-between -rotate-12 font-mono text-[10px] font-bold tracking-widest text-[#0B1F3A] uppercase">
                        <span>SR SECURITY</span>
                        <span>CONFIDENTIAL</span>
                      </div>
                      <div className="flex justify-around rotate-12 font-mono text-[10px] font-bold tracking-widest text-[#0B1F3A] uppercase">
                        <span>DO NOT COPY</span>
                        <span>VERIFIED COPY</span>
                      </div>
                    </div>

                    {/* Anti-Screen Capture Shield Overlay */}
                    {isScreenCaptured && (
                      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-black/90 p-4 text-center backdrop-blur-lg">
                        <ShieldAlert className="size-8 text-amber-400 animate-bounce" />
                        <p className="text-xs font-bold text-amber-400">Screen Capture Restricted</p>
                        <p className="text-[10px] text-white/70">
                          Screenshots & saving are restricted for compliance.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Pop-up Footer */}
                  <div className="flex items-center justify-between text-[11px] text-white/80 pt-1">
                    <span className="flex items-center gap-1 text-[#3DA5FF] font-semibold whitespace-nowrap shrink-0">
                      <ShieldCheck className="size-3.5 shrink-0" />
                      <span>Official Copy</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveModalPdf({ title: item.title, pdf: item.pdf })}
                      className="inline-flex items-center gap-1 font-semibold text-white hover:text-[#3DA5FF] underline decoration-[#3DA5FF] cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>
                        <span className="sm:hidden">Expand</span>
                        <span className="hidden sm:inline">Expand Document</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Protected PDF Modal Viewer */}
      {activeModalPdf && (
        <div
          onContextMenu={(e) => e.preventDefault()}
          className="pdf-protected-area fixed inset-0 z-50 flex items-center justify-center select-none bg-black/85 p-3 sm:p-5 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="relative flex h-[90vh] w-full max-w-4xl flex-col rounded-3xl border border-[#3DA5FF]/40 bg-[#0B1F3A] p-3.5 sm:p-5 text-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-2 sm:gap-4 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                <ShieldCheck className="size-5 sm:size-6 text-[#3DA5FF] shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-sm sm:text-lg font-bold text-white leading-tight">{activeModalPdf.title}</h3>
                  <p className="text-[10px] sm:text-xs text-white/70 leading-tight">
                    <span className="sm:hidden">Official Certificate</span>
                    <span className="hidden sm:inline">Official Compliance & License Certificate (Read-Only)</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-emerald-400 whitespace-nowrap">
                  <Lock className="size-3 sm:size-3.5" />
                  <span>Protected<span className="hidden sm:inline"> View</span></span>
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalPdf(null)}
                  className="grid size-8 sm:size-9 place-items-center rounded-lg border border-white/10 text-white/80 transition-colors hover:bg-white/10 hover:text-white cursor-pointer shrink-0"
                  title="Close Certificate"
                >
                  <X className="size-4 sm:size-5" />
                </button>
              </div>
            </div>

            {/* Modal PDF Viewer Body: Responsive Object / Iframe / Direct View Fallback */}
            <div className="relative mt-3 flex-1 overflow-hidden rounded-2xl bg-white p-0 flex flex-col items-center justify-center">
              <object
                data={`${activeModalPdf.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                type="application/pdf"
                className={cn(
                  "relative z-10 h-full w-full border-0 bg-white transition-all duration-300",
                  isScreenCaptured && "blur-xl opacity-10",
                )}
              >
                <iframe
                  src={`${activeModalPdf.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title={`${activeModalPdf.title} Full PDF`}
                  className="h-full w-full border-0 bg-white"
                >
                  <div className="flex flex-col items-center justify-center p-6 text-center bg-[#071324] text-white h-full w-full gap-3">
                    <FileText className="size-10 text-[#3DA5FF]" />
                    <p className="text-sm font-semibold text-white">View Official PDF Certificate</p>
                    <a
                      href={activeModalPdf.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#3DA5FF] px-4 py-2 text-xs font-bold text-[#0B1F3A] shadow-md transition-transform active:scale-95"
                    >
                      <ExternalLink className="size-4" />
                      <span>Open Certificate PDF</span>
                    </a>
                  </div>
                </iframe>
              </object>

              {/* Watermark Security Guard Overlay */}
              <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-around overflow-hidden p-6 opacity-20 select-none">
                {Array.from({ length: 8 }).map((_, idx) => (
                  <div key={idx} className="flex justify-around">
                    <span className="rotate-[-22deg] font-display text-[10px] sm:text-xs font-extrabold tracking-widest text-[#0B1F3A] uppercase">
                      SR SECURITY SERVICES & FACILITY MANAGEMENT · PROTECTED COMPLIANCE COPY · DO NOT COPY
                    </span>
                  </div>
                ))}
              </div>

              {/* Screen Capture Warning Overlay */}
              {isScreenCaptured && (
                <div className="absolute inset-0 z-40 flex flex-col items-center justify-center gap-3 bg-black/95 p-6 text-center backdrop-blur-lg">
                  <ShieldAlert className="size-10 text-amber-400 animate-bounce" />
                  <h4 className="font-display text-lg font-bold text-amber-400">Screen Capture Restricted</h4>
                  <p className="max-w-md text-xs leading-relaxed text-white/80">
                    Official license certificates are protected under company security compliance. Screenshots & saving are restricted.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
