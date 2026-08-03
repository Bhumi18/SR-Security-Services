import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";

export function FaqAccordion({ limit }: { limit?: number }) {
  const list = limit ? faqs.slice(0, limit) : faqs;

  return (
    <Accordion type="single" collapsible className="mx-auto mt-12 max-w-3xl">
      {list.map((item, i) => (
        <AccordionItem
          key={item.q}
          value={`faq-${i}`}
          className="mb-3 rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-card)] last:mb-0"
        >
          <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-primary hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
