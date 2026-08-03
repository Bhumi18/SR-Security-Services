import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { serviceOptions } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[0-9\s-]{10,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  service: z.string().trim().min(1, "Please select a service"),
  location: z.string().trim().min(2, "Please enter your site location").max(120),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please review the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Enquiry received", {
        description: "Our operations team will contact you within 24 working hours.",
      });
    }, 700);
  };

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p className="mt-1.5 text-xs text-destructive" role="alert">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <Label htmlFor="qf-name">Full Name *</Label>
        <Input id="qf-name" name="name" className="mt-2 h-11" placeholder="e.g. Rahul Verma" />
        {err("name")}
      </div>
      <div>
        <Label htmlFor="qf-company">Company / Organisation</Label>
        <Input
          id="qf-company"
          name="company"
          className="mt-2 h-11"
          placeholder="e.g. Meridian Technologies"
        />
        {err("company")}
      </div>
      <div>
        <Label htmlFor="qf-phone">Phone / WhatsApp *</Label>
        <Input
          id="qf-phone"
          name="phone"
          type="tel"
          className="mt-2 h-11"
          placeholder="+91 98000 00000"
        />
        {err("phone")}
      </div>
      <div>
        <Label htmlFor="qf-email">Email *</Label>
        <Input
          id="qf-email"
          name="email"
          type="email"
          className="mt-2 h-11"
          placeholder="name@company.com"
        />
        {err("email")}
      </div>
      <div>
        <Label htmlFor="qf-service">Service Required *</Label>
        <select
          id="qf-service"
          name="service"
          defaultValue=""
          className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {err("service")}
      </div>
      <div>
        <Label htmlFor="qf-location">Site Location *</Label>
        <Input
          id="qf-location"
          name="location"
          className="mt-2 h-11"
          placeholder="City / Area, State"
        />
        {err("location")}
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="qf-message">Requirement Details</Label>
        <Textarea
          id="qf-message"
          name="message"
          rows={compact ? 3 : 5}
          className="mt-2"
          placeholder="Number of guards or staff, shift timings, site type, start date…"
        />
        {err("message")}
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" variant="hero" size="lg" disabled={submitting} className="w-full">
          <Send className="size-4" />
          {submitting ? "Sending…" : "Submit Enquiry"}
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          Your details stay confidential and are used only to respond to this enquiry.
        </p>
      </div>
    </form>
  );
}
