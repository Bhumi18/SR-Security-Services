import { useEffect, useState } from "react";
import {
  Building2,
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
  const [isScreenCaptured, setIsScreenCaptured] = useState(false);

  // Anti-screenshot & key combo protection (Win+Shift+S, PrtScn, Cmd+Shift+3/4/5, Ctrl+P, Ctrl+S, DevTools)
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

    // Shield document when focus is lost (Snipping Tool, Win+Shift+S, Mobile App Switcher)
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
    <div className="mt-12 select-none" style={{ WebkitTouchCallout: "none" }}>
      {/* Hide PDF during print dialog */}
      <style>{`
        @media print {
          iframe, .pdf-protected-area {
            display: none !important;
            visibility: hidden !important;
          }
        }
      `}</style>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {licenses.map((item) => {
          const IconComponent = item.icon;
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#0E4DB8]/30 bg-gradient-to-br from-[#0B1F3A] via-[#091B33] to-[#061426] p-6 text-white shadow-xl transition-all duration-500 hover:border-[#3DA5FF]/80 hover:shadow-[0_20px_50px_-15px_rgba(61,165,255,0.35)] hover:-translate-y-2"
            >
              {/* Background ambient glow effect */}
              <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-[#3DA5FF]/10 blur-2xl transition-all duration-500 group-hover:bg-[#3DA5FF]/20" />

              {/* Top Row: Icon + Official Verification Tag */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-[#3DA5FF] to-[#0E4DB8] text-white shadow-lg shadow-[#0E4DB8]/40 border border-white/20 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="size-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 shadow-xs">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{item.tag}</span>
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#3DA5FF]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#3DA5FF]/90">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-300/80">
                  {item.description}
                </p>
              </div>

              {/* Action bar: Hover indicator / Expand */}
              <div className="relative z-10 mt-6 flex items-center justify-between gap-2 border-t border-white/10 pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 transition-colors group-hover:text-[#3DA5FF]">
                  <FileText className="size-3.5 text-[#3DA5FF]" />
                  <span>Hover to Preview PDF</span>
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalPdf({ title: item.title, pdf: item.pdf })}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#3DA5FF]/40 bg-[#3DA5FF]/15 px-3 py-1.5 text-xs font-bold text-[#3DA5FF] backdrop-blur-md transition-all duration-300 hover:bg-[#3DA5FF] hover:text-[#0B1F3A] hover:border-[#3DA5FF] hover:shadow-md cursor-pointer"
                >
                  <Maximize2 className="size-3" />
                  <span>Expand Document</span>
                </button>
              </div>

              {/* Hover Pop-up Component with Pre-loaded Protected PDF Preview */}
              <div
                onContextMenu={(e) => e.preventDefault()}
                className={cn(
                  "pdf-protected-area absolute inset-0 flex flex-col justify-between select-none rounded-3xl border-2 border-[#3DA5FF] bg-[#0B1F3A] p-4 text-white shadow-2xl backdrop-blur-md transition-all duration-300",
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

                {/* PDF Embedded View with watermark and anti-capture screen shield */}
                <div className="relative my-2.5 flex-1 overflow-hidden rounded-xl border border-white/15 bg-[#071324]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#071324] text-xs text-[#3DA5FF]">
                    <FileText className="size-6 animate-pulse text-[#3DA5FF]" />
                    <span className="text-[11px] font-medium text-white/70">Loading Certificate...</span>
                  </div>

                  <iframe
                    src={`${item.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    title={`${item.title} PDF Document`}
                    className={cn(
                      "relative z-10 h-full w-full border-0 bg-white transition-all duration-300",
                      isScreenCaptured && "blur-xl opacity-10",
                    )}
                  />

                  {/* Watermark Security Guard Overlay */}
                  <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-around overflow-hidden p-3 opacity-25 select-none">
                    <div className="flex justify-between -rotate-12 font-mono text-[10px] font-bold tracking-widest text-[#3DA5FF] uppercase">
                      <span>SR SECURITY</span>
                      <span>CONFIDENTIAL</span>
                    </div>
                    <div className="flex justify-around rotate-12 font-mono text-[10px] font-bold tracking-widest text-[#3DA5FF] uppercase">
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
                  <span className="flex items-center gap-1 text-[#3DA5FF] font-semibold">
                    <ShieldCheck className="size-3.5" /> Official Copy
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveModalPdf({ title: item.title, pdf: item.pdf })}
                    className="inline-flex items-center gap-1 font-semibold text-white hover:text-[#3DA5FF] underline decoration-[#3DA5FF] cursor-pointer"
                  >
                    Expand Document
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Protected PDF Modal Viewer */}
      {activeModalPdf && (
        <div
          onContextMenu={(e) => e.preventDefault()}
          className="pdf-protected-area fixed inset-0 z-50 flex items-center justify-center select-none bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="relative flex h-[88vh] w-full max-w-4xl flex-col rounded-2xl border border-[#3DA5FF]/40 bg-[#0B1F3A] p-4 text-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 text-[#3DA5FF]" />
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{activeModalPdf.title}</h3>
                  <p className="text-xs text-white/70">Official Compliance & License Certificate (Read-Only)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#3DA5FF]/40 bg-[#3DA5FF]/15 px-3 py-1.5 text-xs font-semibold text-[#3DA5FF]">
                  <Lock className="size-3.5" />
                  Protected View
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalPdf(null)}
                  className="grid size-9 place-items-center rounded-lg border border-white/10 text-white/80 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Modal PDF Viewer Body with Watermark and Capture Shield */}
            <div className="relative mt-3 flex-1 overflow-hidden rounded-xl bg-white">
              <iframe
                src={`${activeModalPdf.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                title={`${activeModalPdf.title} Full PDF`}
                className={cn(
                  "relative z-10 h-full w-full border-0 transition-all duration-300",
                  isScreenCaptured && "blur-xl opacity-10",
                )}
              />

              {/* Watermark Security Guard Repeating Grid */}
              <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-around overflow-hidden p-6 opacity-25 select-none">
                {Array.from({ length: 8 }).map((_, idx) => (
                  <div key={idx} className="flex justify-around">
                    <span className="rotate-[-22deg] font-display text-xs font-extrabold tracking-widest text-[#0B1F3A] uppercase">
                      SR SECURITY SERVICES & FACILITY MANAGEMENT · PROTECTED COMPLIANCE COPY · DO NOT COPY
                    </span>
                  </div>
                ))}
              </div>

              {/* Screen Capture Warning Overlay */}
              {isScreenCaptured && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 bg-[#0B1F3A]/95 p-6 text-center">
                  <ShieldAlert className="size-10 text-amber-400" />
                  <h4 className="font-display text-lg font-bold text-amber-400">Screen Capture Restricted</h4>
                  <p className="max-w-md text-xs leading-relaxed text-white/80">
                    Official license certificates are protected under company security compliance. Screenshots, printing, and file downloads are restricted.
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
