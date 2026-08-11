import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  Film,
  Mail,
  MapPin,
  Maximize2,
  MessageCircle,
  Pause,
  Play,
  Phone,
  ShieldCheck,
  Volume2,
  VolumeX,
} from "lucide-react";

import srVideo from "@/assets/sr_video.mp4";
import { TypewriterText } from "@/components/site/TypewriterText";
import { CtaBand } from "@/components/site/CtaBand";
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
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false); // Sound ON by default
  const [showSoundPrompt, setShowSoundPrompt] = useState<boolean>(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Attempt unmuted audio playback
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser policy blocked unmuted autoplay, fallback to muted and show 1-tap unmute prompt
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsVideoMuted(true);
            setShowSoundPrompt(true);
            videoRef.current.play();
          }
        });
      }
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
      setShowSoundPrompt(false);
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

  return (
    <>
      {/* Hero */}
      <section id="hero" className="relative isolate overflow-hidden bg-gradient-to-br from-[#0B1F3A] via-[#08162A] to-[#0E4DB8] scroll-mt-20 lg:scroll-mt-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_15%_50%,rgba(61,165,255,0.2),transparent)]"
        />
        <div className="container-page pt-8 pb-16 md:pt-10 md:pb-24 lg:pt-12 lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 xl:gap-16">
            <div className="min-w-0">
              <div className="fade-up flex max-w-full" style={{ animationDelay: "100ms" }}>
                <p className="inline-flex max-w-full items-center gap-1 whitespace-nowrap rounded-full border border-[#3DA5FF]/30 bg-[#3DA5FF]/10 px-2.5 py-1 text-[9px] font-semibold tracking-tight text-[#3DA5FF] uppercase sm:gap-1.5 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.12em]">
                  <ShieldCheck className="size-3 shrink-0 text-[#3DA5FF] sm:size-3.5" aria-hidden="true" />
                  <span>PSARA Licensed</span>
                  <span className="text-[#3DA5FF]/60">•</span>
                  <span>UDYAM Registered</span>
                  <span className="text-[#3DA5FF]/60">•</span>
                  <span>AMC Certified</span>
                </p>
              </div>
              <h1 className="fade-up mt-6 text-2xl leading-[1.15] font-bold text-primary-foreground sm:text-4xl md:text-5xl xl:text-6xl" style={{ animationDelay: "200ms" }}>
                Trusted Security &<br />
                <span className="inline-block max-w-full min-h-[1.15em] text-[#3DA5FF] align-bottom">
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
              <div className="fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:w-auto" style={{ animationDelay: "550ms" }}>
                <Button asChild variant="gold" size="xl" className="w-full sm:w-auto">
                  <a href="#contact">
                    Request Free Quote
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="onNavy" size="xl" className="w-full sm:w-auto">
                  <a href={company.phoneHref}>
                    <Phone className="size-4" />
                    Call Now
                  </a>
                </Button>
              </div>
              <ul className="fade-up mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 sm:gap-x-7 gap-y-2.5 text-[11px] sm:text-sm font-medium text-primary-foreground/85" style={{ animationDelay: "650ms" }}>
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

            {/* Right – Interactive Gujarat Map (Fully Responsive on All Viewports) */}
            <div className="fade-up min-w-0 w-full max-w-md mx-auto lg:max-w-none block mt-6 lg:mt-0" style={{ animationDelay: "200ms" }}>
              <GujaratMap
                hoveredDistrict={hoveredDistrict}
                onHoverDistrict={setHoveredDistrict}
              />
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

                {/* Layer 2: Main Uncropped Video (object-contain ensures 100% of video, people, & objects are visible) */}
                <div className="relative z-10 aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl flex items-center justify-center bg-black/60 backdrop-blur-xs">
                  <video
                    ref={videoRef}
                    src={srVideo}
                    loop
                    playsInline
                    autoPlay
                    className="size-full object-contain cursor-pointer"
                    onClick={toggleVideoPlay}
                  />
                </div>

                {/* Floating Top Controls Bar */}
                <div className="absolute top-5 inset-x-5 flex items-center justify-between z-20 pointer-events-auto">
                  {/* Live Operation Tag */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/65 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md shadow-lg">
                    <Film className="size-3.5 text-[#3DA5FF]" />
                    <span className="font-mono text-[11px] font-bold">SR OPERATIONS FILM</span>
                    {!isVideoMuted && isVideoPlaying && (
                      <span className="flex items-end gap-0.5 h-3 ml-0.5">
                        <span className="w-0.5 bg-[#3DA5FF] animate-pulse h-full" />
                        <span className="w-0.5 bg-[#3DA5FF] animate-pulse h-2/3" />
                        <span className="w-0.5 bg-[#3DA5FF] animate-pulse h-4/5" />
                      </span>
                    )}
                  </div>

                  {/* Media Controls (Sound, Play/Pause, Fullscreen) */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={toggleVideoMute}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold backdrop-blur-md transition-all duration-300 cursor-pointer ${!isVideoMuted
                          ? "border-emerald-500/40 bg-emerald-950/85 text-emerald-400 shadow-md shadow-emerald-900/30"
                          : "border-amber-500/40 bg-amber-950/85 text-amber-400"
                        }`}
                      title={!isVideoMuted ? "Mute Sound" : "Enable Sound"}
                    >
                      {!isVideoMuted ? (
                        <>
                          <Volume2 className="size-3.5 text-emerald-400 animate-pulse" />
                          <span>SOUND ON</span>
                        </>
                      ) : (
                        <>
                          <VolumeX className="size-3.5 text-amber-400" />
                          <span>SOUND OFF</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={toggleVideoPlay}
                      className="grid size-8 place-items-center rounded-full border border-white/20 bg-black/65 text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-105 cursor-pointer"
                      title={isVideoPlaying ? "Pause Video" : "Play Video"}
                    >
                      {isVideoPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5 text-emerald-400 ml-0.5" />}
                    </button>

                    <button
                      type="button"
                      onClick={toggleVideoFullscreen}
                      className="grid size-8 place-items-center rounded-full border border-white/20 bg-black/65 text-white backdrop-blur-md transition hover:bg-[#0E4DB8] hover:scale-105 cursor-pointer"
                      title="Fullscreen"
                    >
                      <Maximize2 className="size-3.5" />
                    </button>
                  </div>
                </div>

                {/* Tap to Enable Sound Overlay Prompt */}
                {showSoundPrompt && isVideoMuted && (
                  <button
                    type="button"
                    onClick={toggleVideoMute}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-2 rounded-full border border-[#3DA5FF]/60 bg-[#0B1F3A]/95 px-4 py-2 text-xs font-bold text-white shadow-2xl backdrop-blur-lg animate-bounce transition hover:bg-[#0E4DB8] cursor-pointer"
                  >
                    <Volume2 className="size-4 text-[#3DA5FF]" />
                    <span>Tap for Audio 🔊</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Description Narrative + 4 Glass Feature Cards (Col 6 Parallel to Video) */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base mb-5">
                  SR Security Services Pvt. Ltd. was built on a core corporate promise — security is a discipline, not a headcount. Headquartered in Ahmedabad and covering 5 key districts in Gujarat, we manage background-verified guarding personnel, corporate housekeeping teams, bouncer units, and event crowd controllers with 24x7 control room supervision.
                </p>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/80 bg-white p-4 shadow-xs transition duration-300 hover:border-[#0E4DB8]/40 hover:shadow-md">
                    <div className="flex items-center gap-2.5">
                      <span className="grid size-8.5 place-items-center rounded-xl bg-[#0E4DB8]/10 text-[#0E4DB8]">
                        <ShieldCheck className="size-4.5" />
                      </span>
                      <h4 className="font-display text-xs font-bold text-primary">Statutory & Regulatory Compliance</h4>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                      PSARA licensed, UDYAM (MSME) registered, AMC certified with complete PF, ESI, GST & Labour law adherence.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-white p-4 shadow-xs transition duration-300 hover:border-[#0E4DB8]/40 hover:shadow-md">
                    <div className="flex items-center gap-2.5">
                      <span className="grid size-8.5 place-items-center rounded-xl bg-[#0E4DB8]/10 text-[#0E4DB8]">
                        <BadgeCheck className="size-4.5" />
                      </span>
                      <h4 className="font-display text-xs font-bold text-primary">Verified & Vetted Workforce</h4>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                      Police KYC verification, Aadhaar authentication, address & reference validation prior to deployment.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-white p-4 shadow-xs transition duration-300 hover:border-[#0E4DB8]/40 hover:shadow-md">
                    <div className="flex items-center gap-2.5">
                      <span className="grid size-8.5 place-items-center rounded-xl bg-[#0E4DB8]/10 text-[#0E4DB8]">
                        <CheckCircle2 className="size-4.5" />
                      </span>
                      <h4 className="font-display text-xs font-bold text-primary">Structured Operational Training</h4>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                      Access control, fire safety protocols, emergency evacuation handling & professional client etiquette.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-white p-4 shadow-xs transition duration-300 hover:border-[#0E4DB8]/40 hover:shadow-md">
                    <div className="flex items-center gap-2.5">
                      <span className="grid size-8.5 place-items-center rounded-xl bg-[#0E4DB8]/10 text-[#0E4DB8]">
                        <Clock className="size-4.5" />
                      </span>
                      <h4 className="font-display text-xs font-bold text-primary">24x7 Control Room Supervision</h4>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                      Mobile supervisory officers, surprise night inspections & round-the-clock incident response desk.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button asChild variant="hero" size="lg">
                  <a href="#services">
                    Explore Our Services
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#contact">Contact Operational Desk</a>
                </Button>
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
      <Section id="industries" className="scroll-mt-20 lg:scroll-mt-24">
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
      <Section id="licenses" className="scroll-mt-20 lg:scroll-mt-24">
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
      <Section tone="surface" id="clients" className="scroll-mt-20 lg:scroll-mt-24">
        <SectionHeading
          eyebrow="Our Clients"
          title="Trusted by industry leaders across sectors"
          description="We are proud to partner with prestigious organisations that trust us to protect their people, premises and events."
        />
        <OurClients />
      </Section>

      <CtaBand />

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
