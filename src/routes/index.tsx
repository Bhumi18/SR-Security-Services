import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Maximize2,
  MessageCircle,
  Pause,
  Play,
  Phone,
  ShieldCheck,
  Sparkles,
  Volume2,
  VolumeX,
} from "lucide-react";

import srVideo from "@/assets/sr_video.mp4";
import aboutOwner from "@/assets/about.jpeg";
import { TypewriterText } from "@/components/site/TypewriterText";
import { GujaratMap } from "@/components/site/GujaratMap";
import { Icon } from "@/components/site/Icon";
import { LicensesBand } from "@/components/site/LicensesBand";
import { OurClients } from "@/components/site/OurClients";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Section, SectionHeading } from "@/components/site/Section";
import { WorkProcessSection } from "@/components/site/WorkProcessSection";
import { OnSiteGallery } from "@/components/site/OnSiteGallery";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { WhyChooseUsCarousel } from "@/components/site/WhyChooseUsCarousel";
import { Button } from "@/components/ui/button";
import {
  company,
  images,
  industries,
  workProcess,
} from "@/data/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: `${company.name} | Security & Facility Management in Gujarat` },
      {
        name: "description",
        content:
          "PSARA licensed, UDYAM (MSME) registered and AMC certified security guards, event management, housekeeping, bouncers and contract labour across Ahmedabad, Gandhinagar, Kheda, Mehsana and Sabarkantha.",
      },
    ],
  }),
});

function Home() {
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

  // About Section Video Player Controls
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true); // Sound OFF by default on page load

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Video sound OFF by default on page load
      videoRef.current.play().catch(() => {
        // Silently catch autoplay restriction if any
      });
    }
  }, []);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      const newMuted = !isVideoMuted;
      videoRef.current.muted = newMuted;
      setIsVideoMuted(newMuted);
    }
  };

  const toggleVideoFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const contactDetails = [
    {
      icon: MapPin,
      label: "Registered Office",
      value: `${company.address.line1}, ${company.address.line2}`,
      href: undefined,
    },
    { icon: Phone, label: "Phone", value: company.phone, href: company.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: company.phone, href: company.whatsapp },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: Clock, label: "Working Hours", value: company.hours, href: undefined },
  ];

  const heroButtons = (
    <div className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
      <Button asChild variant="gold" size="xl" className="flex-1 sm:flex-none lg:min-w-[210px] text-xs sm:text-base px-3 sm:px-6">
        <a href="#contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
          <span>Request Free Quote</span>
          <ArrowRight className="size-3.5 sm:size-4 shrink-0" />
        </a>
      </Button>
      <Button asChild variant="onNavy" size="xl" className="flex-1 sm:flex-none lg:min-w-[210px] text-xs sm:text-base px-3 sm:px-6">
        <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
          <Phone className="size-3.5 sm:size-4 shrink-0" />
          <span>Call Now</span>
        </a>
      </Button>
    </div>
  );

  return (
    <>
      {/* Hero */}
      <section id="hero" className="relative isolate overflow-hidden bg-gradient-to-br from-[#0B1F3A] via-[#08162A] to-[#0E4DB8] scroll-mt-20 lg:scroll-mt-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_15%_50%,rgba(61,165,255,0.2),transparent)]"
        />
        <div className="container-page pt-8 pb-16 md:pt-10 md:pb-24 lg:pt-12 lg:pb-28">
          <div className="grid items-center gap-5 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 xl:gap-16">
            <div className="min-w-0">
              <div className="fade-up flex max-w-full" style={{ animationDelay: "100ms" }}>
                <p className="inline-flex max-w-full items-center gap-1 whitespace-nowrap rounded-full border border-[#3DA5FF]/30 bg-[#3DA5FF]/10 px-2.5 py-1 text-[9px] font-semibold tracking-tight text-[#3DA5FF] uppercase sm:gap-1.5 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.12em]">
                  <ShieldCheck className="size-3 shrink-0 text-[#3DA5FF]" aria-hidden="true" />
                  <span>PSARA Licensed</span>
                  <span className="text-[#3DA5FF]/60">•</span>
                  <span>UDYAM Registered</span>
                  <span className="text-[#3DA5FF]/60">•</span>
                  <span>AMC Certified</span>
                </p>
              </div>
              <h1 className="fade-up mt-6 text-2xl leading-[1.15] font-bold text-primary-foreground sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" style={{ animationDelay: "200ms" }}>
                Trusted Security &<br />
                <span className="inline-block max-w-full min-h-[1.15em] text-[#3DA5FF] align-bottom whitespace-nowrap">
                  <TypewriterText
                    words={[
                      "Facility Management",
                      "Security Guarding",
                      "Event Management",
                      "Bouncer Services",
                      "Contract Manpower",
                    ]}
                  />
                </span>
                <br />
                in Gujarat
              </h1>
              <p className="fade-up mt-6 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base md:text-lg" style={{ animationDelay: "350ms" }}>
                Providing professional security guards, event management, housekeeping, bouncer
                services, and contract manpower across 5 key districts in Gujarat:{" "}
                {[
                  { id: "ahmedabad", name: "Ahmedabad" },
                  { id: "gandhinagar", name: "Gandhinagar" },
                  { id: "kheda", name: "Kheda" },
                  { id: "mehsana", name: "Mehsana" },
                  { id: "sabarkantha", name: "Sabarkantha" },
                ].map((d, i, arr) => (
                  <span key={d.id}>
                    <span
                      onMouseEnter={() => setHoveredDistrict(d.id)}
                      onMouseLeave={() => setHoveredDistrict(null)}
                      className={`cursor-pointer border-b border-dotted pb-px transition-all duration-300 ${hoveredDistrict === d.id
                        ? "text-[#3DA5FF] border-[#3DA5FF]"
                        : "border-primary-foreground/30 hover:text-[#3DA5FF] hover:border-[#3DA5FF]"
                        }`}
                    >
                      {d.name}
                    </span>
                    {i < arr.length - 1 ? (i === arr.length - 2 ? ", and " : ", ") : "."}
                  </span>
                ))}
              </p>
              <p className="fade-up mt-4 font-display text-xs font-medium text-[#3DA5FF] sm:text-sm md:text-base" style={{ animationDelay: "450ms" }}>
                {company.tagline}
              </p>
              {/* Desktop CTA Buttons (visible lg and up) */}
              <div className="fade-up mt-8 hidden lg:flex" style={{ animationDelay: "550ms" }}>
                {heroButtons}
              </div>
              <ul className="fade-up mt-6 sm:mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 sm:gap-x-7 gap-y-2 text-[11px] sm:text-sm font-medium text-primary-foreground/85" style={{ animationDelay: "650ms" }}>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 shrink-0 text-[#3DA5FF]" aria-hidden="true" />
                  <span>Background Verified Staff</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 shrink-0 text-[#3DA5FF]" aria-hidden="true" />
                  <span>5 Gujarat Districts Covered</span>
                </li>
                <li className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-1.5 pt-0.5 sm:pt-0">
                  <CheckCircle2 className="size-3.5 shrink-0 text-[#3DA5FF]" aria-hidden="true" />
                  <span>24x7 Control Room</span>
                </li>
              </ul>
            </div>

            {/* Right – Interactive Gujarat Map */}
            <div className="fade-up min-w-0 w-full max-w-md mx-auto lg:max-w-none block mt-1 sm:mt-2 lg:mt-0" style={{ animationDelay: "200ms" }}>
              <GujaratMap
                hoveredDistrict={hoveredDistrict}
                onHoverDistrict={setHoveredDistrict}
              />
              {/* Mobile / Small Devices CTA Buttons (placed below the map) */}
              <div className="fade-up mt-5 sm:mt-6 flex lg:hidden justify-center" style={{ animationDelay: "300ms" }}>
                {heroButtons}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" className="scroll-mt-20 lg:scroll-mt-24">
        <div className="flex flex-col gap-10 lg:gap-12">
          {/* Top Full-Width Section Title Heading */}
          <SectionHeading
            align="center"
            eyebrow="About SR Security Services"
            title="Disciplined Guarding, Professional Facility Management & Compliant Operations"
          />

          {/* Parallel Side-by-Side Grid: Video Deck (Left) & Description + 4 Feature Cards (Right) */}
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Ultra-Modern Cinema Video Player (Col 6) */}
            <div className="lg:col-span-6">
              <div className="relative group w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-2 sm:p-3 shadow-2xl ring-1 ring-white/15 transition-all duration-500 hover:border-[#0E4DB8]/60 hover:shadow-[0_25px_60px_-15px_rgba(14,77,184,0.35)]">
                {/* Layer 1: Ambient Blurred Background Glow (Fills edges with glowing colors) */}
                <video
                  src={srVideo}
                  loop
                  muted
                  playsInline
                  autoPlay
                  className="absolute inset-0 size-full object-cover blur-3xl opacity-35 pointer-events-none scale-110"
                />

                {/* Layer 2: Main Video Deck Box (Aspect 4/3 parallel with right column about cards) */}
                <div className="relative z-10 aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl flex flex-col justify-end p-3 sm:p-4 bg-black/90 shadow-inner">
                  {/* Uncropped Video (object-contain centers 16:9 video, creating black letterbox bars top & bottom) */}
                  <video
                    ref={videoRef}
                    src={srVideo}
                    loop
                    muted
                    playsInline
                    autoPlay
                    className="absolute inset-0 size-full object-contain cursor-pointer z-0"
                    onClick={toggleVideoPlay}
                  />

                  {/* Vertical Side Controls Column (Sound, Play/Pause, Fullscreen stacked vertically) */}
                  <div className="absolute right-3 sm:right-4 bottom-3 sm:bottom-4 z-10 flex flex-col items-center gap-2 pointer-events-auto">
                    {/* Sound Icon Button */}
                    <button
                      type="button"
                      onClick={toggleVideoMute}
                      className={`grid size-8.5 sm:size-9 place-items-center rounded-full border backdrop-blur-md transition hover:scale-105 cursor-pointer shadow-lg ${
                        !isVideoMuted
                          ? "border-emerald-500/50 bg-emerald-950/90 text-emerald-400 shadow-emerald-900/30"
                          : "border-white/20 bg-black/80 text-amber-400 hover:bg-white/20"
                      }`}
                      title={!isVideoMuted ? "Mute Sound" : "Enable Sound"}
                    >
                      {!isVideoMuted ? (
                        <Volume2 className="size-4 text-emerald-400 animate-pulse" />
                      ) : (
                        <VolumeX className="size-4 text-amber-400" />
                      )}
                    </button>

                    {/* Play / Pause Button */}
                    <button
                      type="button"
                      onClick={toggleVideoPlay}
                      className="grid size-8.5 sm:size-9 place-items-center rounded-full border border-white/20 bg-black/80 text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-105 cursor-pointer shadow-lg"
                      title={isVideoPlaying ? "Pause Video" : "Play Video"}
                    >
                      {isVideoPlaying ? <Pause className="size-4" /> : <Play className="size-4 text-emerald-400 ml-0.5" />}
                    </button>

                    {/* Extended Screen / Fullscreen Button */}
                    <button
                      type="button"
                      onClick={toggleVideoFullscreen}
                      className="grid size-8.5 sm:size-9 place-items-center rounded-full border border-white/20 bg-black/80 text-white backdrop-blur-md transition hover:bg-[#0E4DB8] hover:scale-105 cursor-pointer shadow-lg"
                      title="Fullscreen"
                    >
                      <Maximize2 className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Description Narrative + 4 Glass Feature Cards (Col 6 Parallel to Video Deck) */}
            <div className="lg:col-span-6 flex flex-col justify-between self-stretch h-full py-0.5">
              <div className="flex flex-col justify-between h-full gap-5 lg:gap-6">
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-[15px] lg:leading-7">
                  SR Security Services Pvt. Ltd. was built on a core corporate promise — security is a discipline, not a headcount. Headquartered in Ahmedabad and covering 5 key districts in Gujarat, we manage background-verified guarding personnel, corporate housekeeping teams, bouncer units, and event crowd controllers with 24x7 control room supervision.
                </p>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:gap-4">
                  <div className="rounded-2xl border border-border/80 bg-white p-3 sm:p-4 lg:p-4.5 shadow-xs transition duration-300 hover:border-[#0E4DB8]/40 hover:shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2.5">
                        <span className="grid size-7 sm:size-8.5 place-items-center rounded-xl bg-[#0E4DB8]/10 text-[#0E4DB8] shrink-0">
                          <ShieldCheck className="size-4 sm:size-4.5" />
                        </span>
                        <h4 className="font-display text-[11px] sm:text-xs font-bold text-primary leading-tight">Statutory Compliance</h4>
                      </div>
                      <p className="mt-2.5 text-[10px] sm:text-xs leading-relaxed text-muted-foreground">
                        PSARA, UDYAM MSME, AMC certified with full PF, ESI, GST & Labour law adherence.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-white p-3 sm:p-4 lg:p-4.5 shadow-xs transition duration-300 hover:border-[#0E4DB8]/40 hover:shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2.5">
                        <span className="grid size-7 sm:size-8.5 place-items-center rounded-xl bg-[#0E4DB8]/10 text-[#0E4DB8] shrink-0">
                          <BadgeCheck className="size-4 sm:size-4.5" />
                        </span>
                        <h4 className="font-display text-[11px] sm:text-xs font-bold text-primary leading-tight">Verified Workforce</h4>
                      </div>
                      <p className="mt-2.5 text-[10px] sm:text-xs leading-relaxed text-muted-foreground">
                        Police KYC verification, Aadhaar authentication & reference checks pre-posting.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-white p-3 sm:p-4 lg:p-4.5 shadow-xs transition duration-300 hover:border-[#0E4DB8]/40 hover:shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2.5">
                        <span className="grid size-7 sm:size-8.5 place-items-center rounded-xl bg-[#0E4DB8]/10 text-[#0E4DB8] shrink-0">
                          <CheckCircle2 className="size-4 sm:size-4.5" />
                        </span>
                        <h4 className="font-display text-[11px] sm:text-xs font-bold text-primary leading-tight">Structured Training</h4>
                      </div>
                      <p className="mt-2.5 text-[10px] sm:text-xs leading-relaxed text-muted-foreground">
                        Access control, fire safety protocols, emergency response & client etiquette.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-white p-3 sm:p-4 lg:p-4.5 shadow-xs transition duration-300 hover:border-[#0E4DB8]/40 hover:shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2.5">
                        <span className="grid size-7 sm:size-8.5 place-items-center rounded-xl bg-[#0E4DB8]/10 text-[#0E4DB8] shrink-0">
                          <Clock className="size-4 sm:size-4.5" />
                        </span>
                        <h4 className="font-display text-[11px] sm:text-xs font-bold text-primary leading-tight">24x7 Control Desk</h4>
                      </div>
                      <p className="mt-2.5 text-[10px] sm:text-xs leading-relaxed text-muted-foreground">
                        Mobile supervisory officers, surprise night checks & 24/7 response desk.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section tone="surface" id="services" className="scroll-mt-20 lg:scroll-mt-24">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete security and facility solutions under one contract"
          description="From a single night guard to a multi-city facility workforce, every service is delivered with the same standards of verification, training and supervision."
        />
        <ServiceGrid />
        <div className="mt-12 text-center">
          <Button asChild variant="hero" size="lg">
            <a href="#contact">
              Request Service Quote
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </Section>

      {/* Industries */}
      <Section tone="default" id="industries" className="scroll-mt-20 lg:scroll-mt-24">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Sector-specific deployment, not one-size-fits-all guarding"
          description="Each industry carries a different risk profile. Our site orders, checks and reporting formats are designed for the sector you operate in."
        />

        {/* Single line horizontal marquee */}
        <div className="relative mt-10 overflow-hidden py-3">
          <div className="marquee-track gap-4 hover:[animation-play-state:paused]">
            {[...industries, ...industries].map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="group flex shrink-0 items-center gap-3 rounded-full border border-[#D9DEE8] bg-white px-4 py-2.5 shadow-xs transition-all duration-300 hover:border-[#0E4DB8] hover:bg-[#EEF2F7] hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="grid size-7 place-items-center rounded-full bg-[#0E4DB8] text-white transition-all duration-300 group-hover:bg-[#3DA5FF] group-hover:scale-110 shadow-xs">
                  <Icon name={item.icon} className="size-3.5 text-white" />
                </span>
                <span className="font-display text-sm font-semibold text-[#1F2937] transition-colors group-hover:text-[#0E4DB8] whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Left and Right Gradient Fades */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background via-background/80 to-transparent z-10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background via-background/80 to-transparent z-10"
          />
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="surface" id="why-choose-us" className="scroll-mt-20 lg:scroll-mt-24">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Fourteen reasons clients stay with us for years"
          description="We compete on reliability and compliance, not on the lowest quotation."
        />
        <WhyChooseUsCarousel />
      </Section>

      {/* Licenses & Compliance Band */}
      <Section tone="default" id="licenses" className="scroll-mt-20 lg:scroll-mt-24">
        <SectionHeading
          eyebrow="Official Certifications & Registrations"
          title="Government licensed, registered & fully statutory compliant"
          description="We operate with 100% legal, municipal and statutory transparency. License copies and registration certificates are provided during onboarding."
        />
        <LicensesBand />
      </Section>

      {/* Work process */}
      <WorkProcessSection />

      {/* On-Site Operations Photo Gallery */}
      <OnSiteGallery />

      {/* Our Clients */}
      <Section tone="default" id="clients" className="scroll-mt-20 lg:scroll-mt-24">
        <SectionHeading
          eyebrow="Our Clients"
          title="Trusted by industry leaders across sectors"
          description="We are proud to partner with prestigious organisations that trust us to protect their people, premises and events."
        />
        <OurClients />

        {/* Leadership & Founder Spotlight */}
        <div className="mt-10 sm:mt-14 relative overflow-hidden rounded-2xl border border-[#0E4DB8]/30 bg-gradient-to-br from-[#0B1F3A] via-[#09182C] to-[#0E4DB8]/80 p-4 sm:p-5 md:p-6 text-white shadow-xl">
          {/* Ambient background blur glow */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-[#3DA5FF]/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-[#0E4DB8]/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-3 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-6 lg:items-start">
            {/* Small Devices Only Top Badge */}
            <div className="lg:hidden flex items-center mb-3.5 sm:mb-4">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#3DA5FF]/30 bg-[#3DA5FF]/10 px-3 py-0.5 text-xs font-semibold text-[#3DA5FF]">
                <Sparkles className="size-3" />
                <span>Founder's Message</span>
              </div>
            </div>

            {/* Mobile Header (Photo + Name) / Desktop Left Column */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col items-center lg:items-center gap-3.5 lg:gap-2.5 text-left lg:text-center">
              {/* Photo */}
              <div className="relative group shrink-0 w-16 sm:w-20 lg:w-full lg:max-w-[200px]">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-[#3DA5FF] via-amber-400 to-[#0E4DB8] opacity-60 blur-xs transition-all duration-500 group-hover:opacity-90" />
                <div className="relative overflow-hidden rounded-xl border border-white/20 bg-slate-950 p-1 shadow-lg">
                  <img
                    src={aboutOwner}
                    alt="SR Security Services Founder"
                    className="h-16 sm:h-20 lg:h-48 w-full rounded-lg object-cover object-top"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="space-y-0.5 min-w-0">
                <h4 className="font-display text-sm sm:text-base font-bold text-white leading-tight">Founder & Management</h4>
                <p className="text-[11px] font-semibold text-[#3DA5FF]">SR Security Services</p>
              </div>
            </div>

            {/* Right Column: Message & Practical Focus Cards */}
            <div className="lg:col-span-8 space-y-3">
              {/* Desktop Only Top Badge (Above Content) */}
              <div className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-[#3DA5FF]/30 bg-[#3DA5FF]/10 px-3 py-0.5 text-xs font-semibold text-[#3DA5FF]">
                <Sparkles className="size-3" />
                <span>Founder's Message</span>
              </div>

              <blockquote className="text-xs sm:text-sm leading-relaxed text-slate-200 font-normal">
                "We started SR Security Services with one clear goal: to provide honest, reliable, and well-trained security staff for businesses, industrial sites, and residential societies across Gujarat. We personally ensure every guard we deploy is police-verified, disciplined, and dependable."
              </blockquote>

              {/* Practical Operational Focus Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-[#3DA5FF]" />
                    <span>Direct Field Supervision</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-300 leading-normal">
                    Regular supervisory visits and surprise night checks to maintain guard alertness on every site.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                    <span>Personal Accountability</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-300 leading-normal">
                    Direct access to company management for site feedback, quick resolution, and custom planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact & Enquiry */}
      <Section tone="surface" id="contact" className="scroll-mt-20 lg:scroll-mt-24">
        <SectionHeading
          eyebrow="Contact & Enquiry"
          title="Talk to our operations desk today"
          description="Whether you need two guards for a warehouse or a 200-person facility workforce across four cities, we will respond with a clear plan and a compliant quotation."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="Reach Us" title="Contact information" />
            <ul className="mt-8 space-y-6">
              {contactDetails.map((d) => (
                <li key={d.label} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#0E4DB8] text-white shadow-sm">
                    <d.icon className="size-5 text-white" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel={d.href.startsWith("http") ? "noreferrer noopener" : undefined}
                        className="mt-1 block text-sm leading-relaxed font-medium text-primary transition-colors hover:text-accent"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm leading-relaxed font-medium text-primary">
                        {d.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="SR Security Services & Facility Management office location on Google Maps"
                src={company.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
            </div>
          </div>

          <div className="card-premium p-7 md:p-9">
            <h2 className="font-display text-xl font-semibold text-primary">
              Send us an enquiry / Get a Quote
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fields marked * are required. We reply within 24 working hours.
            </p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
