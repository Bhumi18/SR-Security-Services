import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "navy";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-y",
        tone === "surface" && "bg-surface",
        tone === "navy" && "navy-panel",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  onNavy = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  onNavy?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={cn(
          "mt-3 text-3xl leading-[1.15] font-bold md:text-4xl",
          onNavy ? "text-primary-foreground" : "text-primary",
        )}
      >
        {title}
      </h2>
      <span className={cn("gold-rule mt-5", align === "center" && "mx-auto")} />
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            onNavy ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
