import {
  Award,
  BadgeCheck,
  Briefcase,
  CalendarCheck,
  ClipboardCheck,
  Fingerprint,
  GraduationCap,
  Headset,
  IndianRupee,
  MonitorCheck,
  Radio,
  Settings2,
  Shirt,
  ShieldCheck,
  Siren,
  Sparkles,
  Timer,
  UserCheck,
  Users,
  Users2,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Award,
  BadgeCheck,
  Briefcase,
  CalendarCheck,
  ClipboardCheck,
  Fingerprint,
  GraduationCap,
  Headset,
  IndianRupee,
  MonitorCheck,
  Radio,
  Settings2,
  Shirt,
  ShieldCheck,
  Siren,
  Sparkles,
  Timer,
  UserCheck,
  Users,
  Users2,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? ShieldCheck;
  return <Cmp className={className} aria-hidden="true" />;
}
