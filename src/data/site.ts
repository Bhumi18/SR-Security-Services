import heroSecurity from "@/assets/security-guards.png";
import aboutTeam from "@/assets/about-team.jpg";
import galleryIndustrial from "@/assets/gallery-industrial.jpg";
import galleryHousekeeping from "@/assets/gallery-housekeeping.jpg";
import galleryEvents from "@/assets/event-management.png";
import galleryCommand from "@/assets/gallery-command.jpg";
import galleryCorporate from "@/assets/gallery-corporate.jpg";
import galleryTraining from "@/assets/gallery-training.jpg";
import logo from "@/assets/logo-cropped.png";

export const images = {
  logo,
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
  name: "SR Security Services Pvt. Ltd.",
  shortName: "SR Security Services",
  tagline: "Protecting People. Securing Businesses. Building Trust.",
  phone: "+91 98259 02217",
  phoneHref: "tel:+919825902217",
  whatsapp: "https://wa.me/919825902217",
  email: "sr.personnelservices@gmail.com",
  address: {
    line1: "A-11, 1st Floor, Ajanta Commercial Center",
    line2: "Nr. Income Tax Circle, Ashram Road, Ahmedabad - 380014, Gujarat, India",
  },
  hours: "Office: Mon – Sat, 9:30 AM – 7:00 PM · Operations & Control Room: 24x7",
  mapEmbed:
    "https://www.google.com/maps?q=Ajanta+Commercial+Center+Income+Tax+Circle+Ashram+Road+Ahmedabad+380014&output=embed",
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};

export type NavSubItem = {
  label: string;
  sectionId?: string;
  to: string;
};

export type NavItem = {
  label: string;
  sectionId?: string;
  to: string;
  children?: NavSubItem[];
};

export const nav: NavItem[] = [
  { label: "Home", sectionId: "hero", to: "/#hero" },
  {
    label: "About Us",
    sectionId: "about",
    to: "/#about",
    children: [
      { label: "Company Overview", sectionId: "about", to: "/#about" },
      { label: "Why Choose Us", sectionId: "why-choose-us", to: "/#why-choose-us" },
      { label: "Licenses & Certifications", sectionId: "licenses", to: "/#licenses" },
      { label: "Our Work Process", sectionId: "process", to: "/#process" },
    ],
  },
  {
    label: "Services",
    sectionId: "services",
    to: "/#services",
    children: [
      { label: "All Services Overview", sectionId: "services", to: "/#services" },
      { label: "Security Services", to: "/services/security-services" },
      { label: "Event Management", to: "/services/event-management" },
      { label: "Bouncer Services", to: "/services/bouncer-services" },
      { label: "Housekeeping Services", to: "/services/housekeeping-services" },
      { label: "Placement & Contract Labour", to: "/services/placement-contract-labour" },
    ],
  },
  { label: "Industries", sectionId: "industries", to: "/#industries" },
  { label: "Gallery", sectionId: "gallery", to: "/#gallery" },
  { label: "Clients", sectionId: "clients", to: "/#clients" },
  { label: "Contact", sectionId: "contact", to: "/#contact" },
];

export const coverageDistricts = [
  { name: "Ahmedabad", role: "HQ & Operations Hub" },
  { name: "Gandhinagar", role: "Capital Region & Corporate" },
  { name: "Kheda", role: "Industrial & Manufacturing" },
  { name: "Mehsana", role: "Commercial & Plant Security" },
  { name: "Sabarkantha", role: "Regional Manpower & Facility" },
];

export const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "2,500+", label: "Trained Professionals" },
  { value: "1,000+", label: "Projects Completed" },
  { value: "24/7", label: "Support & Control Room" },
  { value: "5 Districts", label: "Gujarat Coverage" },
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
    slug: "security-services",
    title: "Security Services",
    icon: "ShieldCheck",
    summary:
      "Uniformed, PSARA-compliant guarding for corporate, industrial, healthcare, commercial, and residential premises.",
    image: "heroSecurity",
    intro:
      "Our security division deploys police-verified, screening-tested, and supervised personnel who execute access control, perimeter patrolling, incident logging, and emergency escalation. Every deployment is governed by custom site orders and mobile field supervision.",
    items: [
      "Industrial Security",
      "Corporate Security",
      "Residential Security",
      "Hospital Security",
      "School & Institutional Security",
      "Mall & Retail Security",
      "Warehouse Security",
      "Bank & ATM Security",
      "Factory Security",
      "Construction Site Security",
      "Armed & Unarmed Guards",
      "Night Patrol Guards",
    ],
  },
  {
    slug: "event-management",
    title: "Event Management",
    icon: "CalendarCheck",
    summary:
      "End-to-end crowd control, access funnels, VIP movement, and event security logistics for gatherings of any scale.",
    image: "galleryEvents",
    intro:
      "From corporate AGMs and VIP galas to large public gatherings, we plan venue layouts, entry funnels, emergency egress, and VIP security logistics in advance—executing with briefed teams, radio networks, and central command.",
    items: [
      "Corporate Events",
      "Political & Public Rallies",
      "Religious & Cultural Functions",
      "Weddings & Galas",
      "Concerts & Expos",
      "Crowd Control",
      "Entry & Parking Management",
      "VIP Logistics",
    ],
  },
  {
    slug: "bouncer-services",
    title: "Bouncer Services",
    icon: "Users",
    summary:
      "Physically trained, well-groomed bouncers for private events, hotels, clubs, product launches, and celebrity protection.",
    image: "galleryCorporate",
    intro:
      "Our bouncers are selected for physique, tactical poise, and professional communication. Trained in crowd de-escalation and emergency response, they protect your guests, premises, and brand reputation.",
    items: [
      "Hotel Bouncers",
      "Club & Venue Bouncers",
      "Event Bouncers",
      "Celebrity Escort & Protection",
      "VIP Personal Security",
    ],
  },
  {
    slug: "housekeeping-services",
    title: "Housekeeping Services",
    icon: "Sparkles",
    summary:
      "Trained housekeeping, pantry, and sanitization staff keeping offices, industrial plants, and facilities spotless.",
    image: "galleryHousekeeping",
    intro:
      "Structured cleaning routines, color-coded equipment, chemical safety protocols, and daily checklists—supervised by dedicated area managers and backed by monthly quality audits.",
    items: [
      "Office Housekeeping",
      "Industrial Cleaning",
      "Commercial Cleaning",
      "Deep Sanitization",
      "Hospital Housekeeping",
      "Residential Cleaning",
      "Pantry & Hospitality Staff",
    ],
  },
  {
    slug: "placement-contract-labour",
    title: "Placement & Contract Labour",
    icon: "Briefcase",
    summary:
      "Verified skilled, semi-skilled, and unskilled manpower with full statutory compliance, EPF, ESIC, and payroll management.",
    image: "aboutTeam",
    intro:
      "We handle sourcing, background verification, onboarding, statutory compliance (EPF/ESIC), attendance, and payroll logistics—delivering a productive, reliable workforce without administrative burden.",
    items: [
      "Skilled Manpower",
      "Semi-Skilled Staff",
      "Unskilled Helpers",
      "Machine Operators",
      "Electricians & Technicians",
      "Warehouse Staff",
      "Office Admin",
      "Contract Staffing",
    ],
  },
];

export const industries = [
  { name: "Manufacturing", icon: "Factory" },
  { name: "Industrial Plants", icon: "Building2" },
  { name: "Warehouses", icon: "Warehouse" },
  { name: "Corporate Offices", icon: "Briefcase" },
  { name: "Hospitals", icon: "Hospital" },
  { name: "Hotels", icon: "Hotel" },
  { name: "Schools", icon: "GraduationCap" },
  { name: "Colleges", icon: "School" },
  { name: "Residential Societies", icon: "Home" },
  { name: "Banks", icon: "Landmark" },
  { name: "Retail Stores", icon: "ShoppingBag" },
  { name: "Shopping Malls", icon: "Store" },
  { name: "Construction Sites", icon: "HardHat" },
  { name: "Government Offices", icon: "Building" },
  { name: "IT Companies", icon: "Laptop" },
  { name: "Logistics", icon: "Truck" },
  { name: "Pharmaceutical Companies", icon: "Pill" },
  { name: "Airports", icon: "Plane" },
  { name: "Ports", icon: "Ship" },
  { name: "Events", icon: "Ticket" },
];

export const whyChooseUs = [
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
  "PSARA Licensed",
  "UDYAM Registered (MSME)",
  "AMC Registration Certificate",
  "GST Registered",
  "Labour Law Compliance",
  "PF & ESI Compliance",
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
      "We run three shifts across a 12-acre plant. SR Security Services restructured our gate and material-movement checks and pilferage dropped noticeably within the first quarter.",
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
  { q: "Are you PSARA licensed?", a: "Yes. We hold a valid PSARA licence for the states we operate in, and we can share the licence copy, UDYAM registration (MSME), AMC certificate and GST registration during the proposal stage." },
  { q: "What training do your guards receive?", a: "A structured induction covering access control, patrolling, frisking, fire safety, first aid, emergency evacuation, register maintenance and customer etiquette — followed by quarterly refresher drills." },
  { q: "How do you monitor attendance and performance?", a: "Biometric or geo-tagged mobile attendance, patrol checkpoint scanning, supervisor visit reports and a monthly MIS with incident summaries and a quality score shared with the client." },
  { q: "What happens if a guard is absent?", a: "The site supervisor arranges a reliever from the nearest reserve pool. Unfilled shifts are not billed, and repeated absence triggers replacement of the deployed person." },
  { q: "Can we replace a guard we are not satisfied with?", a: "Yes. Request a replacement and we will post an alternate person, usually within 24 to 72 hours, with no additional cost." },
  { q: "Which areas do you serve in Gujarat?", a: "We provide security, event management, housekeeping, and contract manpower services across 5 key districts in Gujarat: Ahmedabad, Gandhinagar, Kheda, Mehsana, and Sabarkantha." },
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
  { role: "Security Guard", type: "Full time", location: "Gujarat (5 Districts)", detail: "10th pass, physically fit, 21–50 years. Ex-servicemen preferred." },
  { role: "Security Supervisor", type: "Full time", location: "Ahmedabad & Gandhinagar", detail: "12th pass with 2+ years of supervisory experience in guarding operations." },
  { role: "Housekeeping Staff", type: "Full time", location: "Gujarat (5 Districts)", detail: "Experience in office, hospital or industrial cleaning is an advantage." },
  { role: "Bouncer", type: "Full / Part time", location: "Ahmedabad / Events", detail: "Strong build, minimum height 5'10\", calm temperament, event experience preferred." },
  { role: "Office Staff", type: "Full time", location: "Ahmedabad HQ", detail: "Graduate with basic computer proficiency for operations coordination." },
  { role: "HR Executive", type: "Full time", location: "Ahmedabad HQ", detail: "2+ years in payroll, statutory compliance and workforce administration." },
  { role: "Recruiter", type: "Full time", location: "Ahmedabad HQ", detail: "Bulk hiring experience for blue-collar and security manpower." },
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
