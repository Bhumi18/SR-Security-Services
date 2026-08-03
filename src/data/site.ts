import heroSecurity from "@/assets/hero-security.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import galleryIndustrial from "@/assets/gallery-industrial.jpg";
import galleryHousekeeping from "@/assets/gallery-housekeeping.jpg";
import galleryEvents from "@/assets/gallery-events.jpg";
import galleryCommand from "@/assets/gallery-command.jpg";
import galleryCorporate from "@/assets/gallery-corporate.jpg";
import galleryTraining from "@/assets/gallery-training.jpg";

export const images = {
  heroSecurity,
  aboutTeam,
  galleryIndustrial,
  galleryHousekeeping,
  galleryEvents,
  galleryCommand,
  galleryCorporate,
  galleryTraining,
};

export const company = {
  name: "ABC Security & Facility Management Pvt. Ltd.",
  shortName: "ABC Security",
  tagline: "Protecting People. Securing Businesses. Building Trust.",
  phone: "+91 98000 00000",
  phoneHref: "tel:+919800000000",
  whatsapp: "https://wa.me/919800000000",
  email: "info@abcsecurity.example",
  address: {
    line1: "Plot 24, Corporate Tower, Sector 62",
    line2: "Noida, Uttar Pradesh 201301, India",
  },
  hours: "Office: Mon – Sat, 9:30 AM – 7:00 PM · Operations & Control Room: 24x7",
  mapEmbed:
    "https://www.google.com/maps?q=Sector+62+Noida+Uttar+Pradesh&output=embed",
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};

export const nav = [
  { label: "Home", sectionId: "hero", to: "/#hero" },
  { label: "About Us", sectionId: "about", to: "/#about" },
  { label: "Services", sectionId: "services", to: "/#services" },
  { label: "Industries", sectionId: "industries", to: "/#industries" },
  { label: "Why Choose Us", sectionId: "why-choose-us", to: "/#why-choose-us" },
  { label: "Careers", sectionId: "careers", to: "/#careers" },
  { label: "Contact", sectionId: "contact", to: "/#contact" },
] as const;

export const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "2,500+", label: "Trained Professionals" },
  { value: "1,000+", label: "Projects Completed" },
  { value: "24/7", label: "Support & Control Room" },
  { value: "PAN India", label: "Deployment Coverage" },
];

export type ServiceGroup = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  image: keyof typeof images;
  intro: string;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "security-guard-services",
    title: "Security Guard Services",
    icon: "ShieldCheck",
    summary:
      "Uniformed, PSARA-compliant guarding for corporate, industrial, healthcare, retail and residential premises.",
    image: "heroSecurity",
    intro:
      "Our core guarding division deploys screened, drilled and supervised personnel who understand access control, patrolling discipline, incident escalation and client-side reporting. Every posting is backed by a written site order book, roster planning and supervisor visits.",
    items: [
      "Industrial Security",
      "Corporate Security",
      "Residential Security",
      "Hospital Security",
      "School Security",
      "Mall Security",
      "Warehouse Security",
      "Bank Security",
      "Hotel Security",
      "Apartment Security",
      "Factory Security",
      "Construction Site Security",
      "Female Security Guards",
      "Armed Guards",
      "Unarmed Guards",
      "Night Guards",
      "Day Guards",
      "VIP Protection",
      "Executive Protection",
    ],
  },
  {
    slug: "event-management",
    title: "Event Management & Security",
    icon: "CalendarCheck",
    summary:
      "End-to-end crowd, entry and VIP management for corporate, political, religious and social events of any scale.",
    image: "galleryEvents",
    intro:
      "From a 200-guest conference to a 50,000-strong public gathering, we plan venue layouts, entry funnels, emergency egress and VIP movement in advance — then execute with briefed teams, radio communication and a single point of command.",
    items: [
      "Corporate Events",
      "Political Events",
      "Religious Events",
      "Wedding Security",
      "Concert Security",
      "Sports Events",
      "Crowd Management",
      "Entry Management",
      "Parking Management",
      "VIP Handling",
    ],
  },
  {
    slug: "bouncer-services",
    title: "Bouncer Services",
    icon: "Users",
    summary:
      "Physically trained, well-groomed bouncers for hotels, clubs, launches and celebrity engagements.",
    image: "galleryEvents",
    intro:
      "Our bouncers are selected for physique, temperament and communication. They are trained to de-escalate first and act proportionately — protecting your guests, your premises and your brand reputation.",
    items: [
      "Hotel Bouncers",
      "Club Bouncers",
      "Event Bouncers",
      "Celebrity Protection",
      "VIP Security",
    ],
  },
  {
    slug: "housekeeping-services",
    title: "Housekeeping Services",
    icon: "Sparkles",
    summary:
      "Trained housekeeping and pantry teams that keep offices, plants, hospitals and societies spotless.",
    image: "galleryHousekeeping",
    intro:
      "Structured cleaning schedules, colour-coded equipment, chemical safety training and daily checklists — supervised by area in-charges and audited monthly with a written quality score.",
    items: [
      "Office Housekeeping",
      "Industrial Housekeeping",
      "Commercial Cleaning",
      "Deep Cleaning",
      "Hospital Housekeeping",
      "Mall Housekeeping",
      "Society Housekeeping",
      "Pantry Staff",
      "Office Boys",
      "Cleaning Staff",
    ],
  },
  {
    slug: "placement-contract-labour",
    title: "Placement & Contract Labour",
    icon: "Briefcase",
    summary:
      "Skilled, semi-skilled and unskilled manpower with fully compliant payroll, PF and ESI management.",
    image: "aboutTeam",
    intro:
      "We handle sourcing, verification, onboarding, statutory registration, attendance and payroll so you get a productive workforce without the administrative and compliance burden.",
    items: [
      "Skilled Manpower",
      "Semi-skilled Manpower",
      "Unskilled Manpower",
      "Factory Workers",
      "Machine Operators",
      "Electricians",
      "Helpers",
      "Warehouse Staff",
      "Packers",
      "Loaders",
      "Office Staff",
      "Data Entry Operators",
      "Receptionists",
      "Drivers",
      "Housekeeping Staff",
      "Security Staff",
      "Temporary Staffing",
      "Permanent Staffing",
      "Payroll Management",
      "Contract Labour",
    ],
  },
  {
    slug: "monitoring-response",
    title: "Monitoring & Emergency Response",
    icon: "Radio",
    summary:
      "Technology-enabled supervision: geo-tagged attendance, patrol scanning and a 24x7 control room.",
    image: "galleryCommand",
    intro:
      "Our control room tracks guard attendance, patrol checkpoints and incident tickets in real time, and escalates to your nominated contacts within defined response windows.",
    items: [
      "24x7 Control Room",
      "Geo-tagged Attendance",
      "Patrol Checkpoint Scanning",
      "Incident Reporting Dashboard",
      "Emergency Response Teams",
      "Monthly Security Audits",
    ],
  },
];

export const industries = [
  "Manufacturing",
  "Industrial Plants",
  "Warehouses",
  "Corporate Offices",
  "Hospitals",
  "Hotels",
  "Schools",
  "Colleges",
  "Residential Societies",
  "Banks",
  "Retail Stores",
  "Shopping Malls",
  "Construction Sites",
  "Government Offices",
  "IT Companies",
  "Logistics",
  "Pharmaceutical Companies",
  "Airports",
  "Ports",
  "Events",
];

export const whyChooseUs = [
  { icon: "BadgeCheck", title: "PSARA Compliant", text: "Licensed under the Private Security Agencies (Regulation) Act with state-wise coverage." },
  { icon: "UserCheck", title: "Background Verified Staff", text: "Police verification, Aadhaar KYC, address and reference checks before deployment." },
  { icon: "GraduationCap", title: "Highly Trained Personnel", text: "Induction, fire safety, first aid and refresher drills at our own training centres." },
  { icon: "Timer", title: "Quick Deployment", text: "Standard postings mobilised within 24–48 hours, emergency cover on the same day." },
  { icon: "Headset", title: "24x7 Customer Support", text: "A dedicated relationship manager plus a control room that never sleeps." },
  { icon: "Shirt", title: "Professional Uniformed Guards", text: "Turned-out, ID-carded personnel that reflect well on your brand." },
  { icon: "ClipboardCheck", title: "Supervisor Visits", text: "Scheduled and surprise checks with written site reports shared with you." },
  { icon: "IndianRupee", title: "Affordable Pricing", text: "Transparent, statutory-compliant quotations with no hidden charges." },
  { icon: "Settings2", title: "Customized Security Plans", text: "Deployment designed around your risk profile, shifts and site layout." },
  { icon: "MonitorCheck", title: "Technology Enabled Monitoring", text: "App-based patrol scanning, incident logs and live dashboards." },
  { icon: "Fingerprint", title: "Attendance Monitoring", text: "Biometric and geo-tagged attendance with reconciled monthly billing." },
  { icon: "Siren", title: "Emergency Response", text: "Defined escalation matrix and rapid response teams for critical incidents." },
  { icon: "Users2", title: "Reliable Workforce", text: "Low attrition through fair wages, timely salary and welfare programmes." },
  { icon: "Award", title: "Quality Assurance", text: "Monthly audits, client scorecards and documented corrective actions." },
];

export const workProcess = [
  { step: "01", title: "Requirement Discussion", text: "We understand your premises, shifts, risk concerns and budget expectations." },
  { step: "02", title: "Site Inspection", text: "Our operations team surveys entry points, blind spots, lighting and manpower needs." },
  { step: "03", title: "Risk Assessment", text: "A written threat and vulnerability assessment with prioritised recommendations." },
  { step: "04", title: "Proposal Submission", text: "A transparent, compliance-backed proposal with deployment chart and costing." },
  { step: "05", title: "Deployment", text: "Screened personnel inducted, briefed on site orders and posted with supervision." },
  { step: "06", title: "Continuous Monitoring", text: "Supervisor visits, audits, MIS reports and a quarterly service review." },
];

export const certifications = [
  "ISO Certified",
  "PSARA Licensed",
  "GST Registered",
  "MSME Registered",
  "Labour Law Compliance",
  "PF Compliance",
  "ESI Compliance",
  "Professional Tax Compliance",
];

export const testimonials = [
  {
    name: "Ananya Sharma",
    designation: "HR Manager",
    org: "Meridian Technologies Pvt. Ltd.",
    quote:
      "Their guards are punctual, well-groomed and genuinely professional. Attendance reporting is accurate and billing has never once been a dispute in three years.",
    initials: "AS",
  },
  {
    name: "Rakesh Patel",
    designation: "Managing Director",
    org: "Patel Precision Industries",
    quote:
      "We run three shifts across a 12-acre plant. ABC restructured our gate and material-movement checks and pilferage dropped noticeably within the first quarter.",
    initials: "RP",
  },
  {
    name: "Dr. Meera Iyer",
    designation: "Hospital Administrator",
    org: "Sanjeevani Multispeciality Hospital",
    quote:
      "Hospital security needs patience as much as vigilance. Their team handles attendants and emergencies with real composure. Housekeeping standards are equally strong.",
    initials: "MI",
  },
  {
    name: "Suresh Nair",
    designation: "Chairman",
    org: "Greenwood Residency RWA",
    quote:
      "Visitor management is finally organised. Residents can see entry logs, and the supervisor visits every week to close complaints. Excellent value for the society.",
    initials: "SN",
  },
  {
    name: "Farah Khan",
    designation: "Event Director",
    org: "Bluewave Events",
    quote:
      "A 20,000-footfall concert with zero incidents. Their crowd plan, entry funnels and bouncer briefing were better than agencies charging us twice as much.",
    initials: "FK",
  },
];

export const clients = [
  "Meridian Technologies",
  "Patel Precision",
  "Sanjeevani Hospital",
  "Greenwood Residency",
  "Bluewave Events",
  "Nova Logistics",
  "Aarav Retail Group",
  "Sunrise Pharma",
  "Zenith Malls",
  "Orion Bank",
];

export const faqs = [
  { q: "How quickly can security guards be deployed at our site?", a: "Standard requirements are deployed within 24 to 48 hours of a signed work order. For emergencies we maintain a reserve pool and can post trained guards the same day in most metros." },
  { q: "Do you provide female security guards?", a: "Yes. We deploy trained female guards and lady supervisors for corporate receptions, hospitals, schools, malls, frisking points and women's hostels, including night shifts where permitted." },
  { q: "Are your guards background verified?", a: "Every person is verified before deployment — police verification, Aadhaar-based KYC, permanent and current address checks, previous employer references and a medical fitness declaration." },
  { q: "Do you provide 24/7 security cover?", a: "Yes. We operate 8-hour and 12-hour shift patterns with relievers, weekly-off cover and a 24x7 control room that supervises attendance and incident escalation." },
  { q: "Which industries do you serve?", a: "Manufacturing, warehousing, IT and corporate offices, hospitals, hotels, education, banking, retail and malls, residential societies, construction, logistics, pharma, government establishments and public events." },
  { q: "What are your pricing models?", a: "We quote per guard per month based on shift duration, skill level, statutory wages of the state and site complexity. Housekeeping is quoted per head or per square foot, and manpower supply on a per-worker service-charge basis." },
  { q: "Is your quotation statutory compliant?", a: "Yes. Every quotation is built on the applicable minimum wage and includes PF, ESI, bonus, leave and gratuity provisioning, plus our service charge and GST — shown as a transparent breakup." },
  { q: "Do you provide event and crowd security?", a: "Yes. We handle corporate, political, religious, sporting, wedding and concert events with crowd management, entry and parking control, VIP handling and bouncers, backed by a written event security plan." },
  { q: "Do you provide housekeeping staff?", a: "Yes. Office and industrial housekeeping, commercial and deep cleaning, hospital housekeeping, pantry staff, office boys and society cleaning teams, with supervisors and defined cleaning schedules." },
  { q: "Do you supply manpower on a contract basis?", a: "Yes. Skilled, semi-skilled and unskilled contract labour including machine operators, electricians, packers, loaders, warehouse and office staff, with complete payroll and compliance management." },
  { q: "Are you PSARA licensed?", a: "Yes. We hold a valid PSARA licence for the states we operate in, and we can share the licence copy, ISO certificate, GST and MSME registrations during the proposal stage." },
  { q: "What training do your guards receive?", a: "A structured induction covering access control, patrolling, frisking, fire safety, first aid, emergency evacuation, register maintenance and customer etiquette — followed by quarterly refresher drills." },
  { q: "How do you monitor attendance and performance?", a: "Biometric or geo-tagged mobile attendance, patrol checkpoint scanning, supervisor visit reports and a monthly MIS with incident summaries and a quality score shared with the client." },
  { q: "What happens if a guard is absent?", a: "The site supervisor arranges a reliever from the nearest reserve pool. Unfilled shifts are not billed, and repeated absence triggers replacement of the deployed person." },
  { q: "Can we replace a guard we are not satisfied with?", a: "Yes. Request a replacement and we will post an alternate person, usually within 24 to 72 hours, with no additional cost." },
  { q: "Do you operate across India?", a: "We serve clients PAN India through regional operations offices and a supervisor network, with a single point of contact and consolidated billing for multi-city contracts." },
  { q: "What is the minimum contract duration?", a: "Manpower contracts are typically annual with a one-month notice clause. Event security and short-term projects are handled on a per-assignment basis." },
  { q: "Who is liable for statutory dues of deployed staff?", a: "We are the principal employer for all deployed personnel and remit PF, ESI and other statutory dues directly, sharing monthly challans and compliance certificates with you." },
];

export const posts = [
  {
    slug: "importance-of-professional-security-guards",
    title: "Why Professional Security Guards Still Outperform Technology Alone",
    excerpt:
      "CCTV records an incident. A trained guard prevents it. Here is how a professional guarding layer changes your real risk profile.",
    category: "Security",
    date: "2026-06-18",
    readTime: "6 min read",
    image: "heroSecurity" as keyof typeof images,
  },
  {
    slug: "benefits-of-contract-labour",
    title: "The Real Benefits of Contract Labour for Growing Manufacturers",
    excerpt:
      "Workforce flexibility, predictable cost per unit and zero compliance headaches — if the contract is structured correctly.",
    category: "Manpower",
    date: "2026-05-30",
    readTime: "7 min read",
    image: "aboutTeam" as keyof typeof images,
  },
  {
    slug: "how-to-choose-a-security-agency",
    title: "How to Choose a Security Agency: A 12-Point Checklist",
    excerpt:
      "PSARA licence, wage compliance, supervision ratio, attrition — the questions that separate serious agencies from cheap quotes.",
    category: "Guides",
    date: "2026-05-12",
    readTime: "8 min read",
    image: "galleryCorporate" as keyof typeof images,
  },
  {
    slug: "event-security-checklist",
    title: "Event Security Checklist Every Organiser Should Run Through",
    excerpt:
      "Entry funnels, egress width, VIP routes, medical points and radio discipline — plan these before the guest list.",
    category: "Events",
    date: "2026-04-26",
    readTime: "5 min read",
    image: "galleryEvents" as keyof typeof images,
  },
  {
    slug: "industrial-security-best-practices",
    title: "Industrial Security Best Practices for Plants and Warehouses",
    excerpt:
      "Material gate passes, weighbridge checks, contractor control and shift handover — where most pilferage actually happens.",
    category: "Industrial",
    date: "2026-04-08",
    readTime: "9 min read",
    image: "galleryIndustrial" as keyof typeof images,
  },
  {
    slug: "housekeeping-tips-for-corporate-offices",
    title: "Housekeeping Standards That Corporate Offices Should Insist On",
    excerpt:
      "Colour-coded equipment, chemical dilution charts and audit scoring — small disciplines that transform facility quality.",
    category: "Facility",
    date: "2026-03-21",
    readTime: "5 min read",
    image: "galleryHousekeeping" as keyof typeof images,
  },
];

export const galleryItems = [
  { image: "heroSecurity" as keyof typeof images, caption: "Corporate Security Deployment", tag: "Security Guards" },
  { image: "galleryCorporate" as keyof typeof images, caption: "Reception & Access Control", tag: "Corporate Security" },
  { image: "galleryIndustrial" as keyof typeof images, caption: "Plant Perimeter Patrolling", tag: "Industrial Security" },
  { image: "galleryEvents" as keyof typeof images, caption: "Crowd & Entry Management", tag: "Events" },
  { image: "galleryHousekeeping" as keyof typeof images, caption: "Office Housekeeping Team", tag: "Housekeeping" },
  { image: "galleryTraining" as keyof typeof images, caption: "Guard Training & Drills", tag: "Training" },
  { image: "galleryCommand" as keyof typeof images, caption: "24x7 Control Room", tag: "Monitoring" },
  { image: "aboutTeam" as keyof typeof images, caption: "Shift Briefing Session", tag: "Bouncer Services" },
];

export const jobs = [
  { role: "Security Guard", type: "Full time", location: "PAN India", detail: "10th pass, physically fit, 21–50 years. Ex-servicemen preferred." },
  { role: "Security Supervisor", type: "Full time", location: "Metro cities", detail: "12th pass with 2+ years of supervisory experience in guarding operations." },
  { role: "Housekeeping Staff", type: "Full time", location: "PAN India", detail: "Experience in office, hospital or industrial cleaning is an advantage." },
  { role: "Bouncer", type: "Full / Part time", location: "Metro cities", detail: "Strong build, minimum height 5'10\", calm temperament, event experience preferred." },
  { role: "Office Staff", type: "Full time", location: "Noida HQ", detail: "Graduate with basic computer proficiency for operations coordination." },
  { role: "HR Executive", type: "Full time", location: "Noida HQ", detail: "2+ years in payroll, statutory compliance and workforce administration." },
  { role: "Recruiter", type: "Full time", location: "Noida / Regional", detail: "Bulk hiring experience for blue-collar and security manpower." },
];

export const serviceOptions = [
  "Security Guard Services",
  "Industrial Security",
  "Corporate Security",
  "Event Management & Security",
  "Bouncer Services",
  "Housekeeping Services",
  "Placement & Contract Labour",
  "Other",
];
