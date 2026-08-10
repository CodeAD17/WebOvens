import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

// Extended project data for detail pages
const projectDetails: Record<
  string,
  {
    challenge: string;
    approach: string;
    results: string[];
    testimonial?: { quote: string; author: string; role: string };
    features: string[];
    heroVideo?: string;
    heroImage?: string;
    systemOverview?: {
      philosophy: string;
      archetype: string;
      palette: { name: string; hex: string; role: string }[];
    };
    workflows?: { stage: string; title: string; description: string; image: string }[];
    emergencyComparison?: { legacy: string[]; augmented: string[] };
  }
> = {
  'orderlo': {
    challenge:
      'High-volume venues struggle with long lines and inefficient ordering processes, directly impacting their revenue. OrderLO needed a system that could be set up instantly without new hardware.',
    approach:
      'We engineered a robust SaaS platform focused on extreme ease of use and speed. With a 10-minute setup, we removed all friction. The dark, high-contrast UI ensures legibility in busy venue environments.',
    results: [
      '30% increase in order volume',
      '10-minute seamless setup',
      'Zero new hardware required',
      'Used by 500+ Indian venues',
    ],
    testimonial: {
      quote: 'System set hai. Line chhodo. Note chhaapo. It perfectly encapsulates what they built for us.',
      author: 'Rahul Sharma',
      role: 'Operations Head, OrderLO',
    },
    features: [
      'Instant QR ordering',
      'Real-time inventory sync',
      'Integrated payment gateways',
      'Venue analytics dashboard',
      'Staff management portal',
      'High-volume load balancing',
    ],
  },
  'ghar-ka-chulha': {
    challenge:
      'Ghar Ka Chulha needed a digital presence that reflected the rich, authentic, slow-cooked heritage of their food. The standard e-commerce templates felt too sterile.',
    approach:
      'We designed an editorial-style experience using deep, luxurious tones and elegant typography. We let the high-quality food photography take center stage, wrapping the ordering process in an experience that feels as crafted as the meals themselves.',
    results: [
      '140% increase in online orders',
      'Higher average order value',
      'Enhanced brand perception',
      'Seamless mobile ordering',
    ],
    testimonial: {
      quote: 'The website truly captures the authentic taste and nostalgia we want our customers to feel.',
      author: 'Anita Desai',
      role: 'Founder, Ghar Ka Chulha',
    },
    features: [
      'Editorial menu layout',
      'Scheduled deliveries',
      'Custom spice-level selectors',
      'Loyalty program integration',
      'Real-time order tracking',
      'Catering request portal',
    ],
  },
  'feather': {
    challenge:
      'Developers hate writing personal brand content but want the benefits. Feather needed to convert raw git commits into engaging social posts with zero fluff.',
    approach:
      'We built a developer-first tool that hooks directly into GitHub. The UI mimics the terminal aesthetic developers love, while the AI engine in the background crafts high-signal posts. The dark mode, tech-heavy interface speaks directly to the target audience.',
    results: [
      '10,000+ posts generated',
      '30s average generation time',
      '100% signal, no fluff',
      'Cult following among indie hackers',
    ],
    testimonial: {
      quote: 'Your code tells a story. Feather finally gave me a way to share that story without leaving my IDE.',
      author: 'Alex Dev',
      role: 'Indie Hacker',
    },
    features: [
      'GitHub integration',
      'AI commit analysis',
      'Tone customization',
      'Direct social posting',
      'Markdown support',
      'Terminal-style UI',
    ],
  },
  'macvaar-ai': {
    challenge:
      'Existing medical software was visually archaic, overwhelming clinicians with cluttered toolbars while feeding a growing mistrust around AI replacement. Macvaar AI needed a brand voice and digital presence that reframed technology as a calm, trusted partner in the reading room rather than an opaque replacement.',
    approach:
      'We delivered a comprehensive brand positioning strategy, visual identity, custom typography system, interactive web platform, and motion language. Anchored in geometric typography (Manrope) and a dark background system (#12100f) contrasted with warm amber accents (#d96500), we built multi-layered glassmorphic modules to organize complex clinical data naturally.',
    results: [
      '1,000+ Screened Structures / Study',
      '< 2-Min Report Draft Generation',
      '100% Clinician Review & Control',
      'Zero PACS Workflow Friction',
    ],
    testimonial: {
      quote: "We are not doctors. We are doctors' assistants.",
      author: 'Macvaar AI Philosophy',
      role: 'Clinical Intelligence Platform · Bucharest, Romania',
    },
    features: [
      'Diagnostic DICOM Acquisition & Encryption',
      'Automated Emergency Screening (CT/X-ray)',
      'High-Resolution ECG Analytics & Waveforms',
      'Closing the 4-Hour Emergency Gap',
      'Zero-Trust Security & HIPAA Compliance',
      'PACS / RIS / HL7 / FHIR Interoperability',
    ],
    heroVideo: '/macvaar-case-study/orange-tape.mp4',
    heroImage: '/macvaar-case-study/images/hero_abstract_1781176071760.png',
    systemOverview: {
      philosophy: "We are not doctors. We are doctors' assistants.",
      archetype: "The Sage Assistant (High clinical intelligence, zero replacement rhetoric, absolute reliability).",
      palette: [
        { name: "Clinical Warm Amber", hex: "#D96500", role: "Human vitality, action & assistantship" },
        { name: "Deep Charcoal Base", hex: "#12100F", role: "Reading room eye-strain reduction" },
        { name: "Clinical Blue Modality", hex: "#1A73E8", role: "PACS integration & acquisition" },
        { name: "Clinical Teal Modality", hex: "#0D9488", role: "Worklist routing & quality control" },
        { name: "Clinical Violet Modality", hex: "#7C3AED", role: "DICOM zero-trust encryption" },
      ]
    },
    workflows: [
      {
        stage: "01",
        title: "Diagnostic Acquisition & Processing",
        description: "Direct DICOM scan acquisition and real-time processing straight from hospital equipment.",
        image: "/macvaar-case-study/images/wf_01_acquisition_1781177526152.png"
      },
      {
        stage: "02",
        title: "Zero-Trust DICOM Encryption",
        description: "End-to-end DICOM encryption pipeline guaranteeing zero data leakage and strict HIPAA compliance.",
        image: "/macvaar-case-study/images/wf_04_encryption_1781177584935.png"
      },
      {
        stage: "03",
        title: "ECG Waveform Analytics",
        description: "High-resolution ECG analytics and waveform interpretation modules.",
        image: "/macvaar-case-study/images/solution_ecg_1781176110669.png"
      },
      {
        stage: "04",
        title: "Emergency Diagnostic Screening",
        description: "Automated emergency CT and X-ray anomaly screening in under 120 seconds.",
        image: "/macvaar-case-study/images/solution_scan_1781176123436.png"
      }
    ],
    emergencyComparison: {
      legacy: [
        "Diagnostic delays up to 4-hour queues",
        "Reviewer fatigue during late-night shifts",
        "Repetitive manual dictation and entry"
      ],
      augmented: [
        "Instant < 2-minute structured report drafts",
        "1,000+ anatomical structures screened automatically",
        "100% clinician review control and instant sign-off"
      ]
    }
  },
  'algocirrus': {
    challenge:
      'Global enterprises operating across healthcare, automotive, public sector, real estate, education, and HR verticals face severe operational bottlenecks due to fragmented legacy CRMs, manual workflows, and disconnected data systems. AlgoCirrus needed a unified enterprise brand presence and multi-cloud AI solution showcase.',
    approach:
      'We engineered a comprehensive Salesforce PDO and Enterprise AI Consultancy digital platform. Anchored in an enterprise tech aesthetic with Salesforce Electric Blue accents (#00A1E0), we built interactive multi-cloud solutions, Agentforce AI routing demonstrations, and a consolidated 6-industry case study suite.',
    results: [
      '6 Global Vertical CRM Deployments',
      '100% HIPAA, GDPR & UAE Pass Compliant',
      'Agentforce AI Autonomous Routing',
      '2GP AppExchange Managed Package Ready',
    ],
    testimonial: {
      quote: 'AlgoCirrus transformed our disjointed cloud systems into a unified, future-ready enterprise AI ecosystem.',
      author: 'Enterprise Systems Director',
      role: 'AlgoCirrus Inc. · Dubai & Noida',
    },
    features: [
      'Salesforce Health Cloud & HL7 Parsing Engine',
      'Automotive Cloud & Field Service Dispatch',
      'Government Cloud & Arabic RTL Multi-lingual UI',
      'Real Estate Broker & Tenant Experience Portals',
      'Education Cloud & Grade Report Generator',
      'Einstein AI ATS & Automated HR Leave Engine',
    ],
    heroVideo: '', // Insert your external video URL here (e.g. https://your-cdn.com/algocirrus-demo.mp4)
    heroImage: '/algoCirrus/hero.png',
    systemOverview: {
      philosophy: "Architecting future-ready CRM ecosystems, agentic AI frameworks, and multi-cloud solutions.",
      archetype: "The Enterprise Architect (Salesforce PDO, Agentforce AI, Multi-Cloud Mastery).",
      palette: [
        { name: "Salesforce Electric Blue", hex: "#00A1E0", role: "Primary cloud innovation accent" },
        { name: "Deep Enterprise Charcoal", hex: "#0A0A0A", role: "High-contrast dark environment" },
        { name: "Civic Royal Navy", hex: "#1E293B", role: "Government & compliance background" },
        { name: "Clinical Teal", hex: "#0D9488", role: "Healthcare & vigilance modality" },
        { name: "Champagne Gold", hex: "#C49B5C", role: "Real estate & luxury portal accent" },
      ]
    },
    workflows: [
      {
        stage: "01",
        title: "Healthcare & Pharmacovigilance",
        description: "Salesforce Health Cloud engineering, HL7 patient data parsing, and 2GP AppExchange managed package development.",
        image: "/algoCirrus/casestudy.png"
      },
      {
        stage: "02",
        title: "Automotive & Field Operations",
        description: "Automotive Cloud integration with Field Service Lightning mobile dispatch, Avaya CTI, and dynamic VIN retrieval.",
        image: "/algoCirrus/hero.png"
      },
      {
        stage: "03",
        title: "Public Sector & Civic Governance",
        description: "Government Cloud implementation featuring Agentforce AI document reader, UAE Pass SSO, and Arabic RTL bi-directional UI.",
        image: "/algoCirrus/casestudy.png"
      },
      {
        stage: "04",
        title: "Real Estate & Asset Ecosystem",
        description: "MuleSoft middleware connecting Sales & Service Cloud with custom broker/tenant portals and automated payment engines.",
        image: "/algoCirrus/hero.png"
      }
    ],
    emergencyComparison: {
      legacy: [
        "Disjointed medical records & manual safety reporting",
        "Legacy system switching inflating call turnaround times",
        "Manual ticket routing with zero SLA tracking and language barriers"
      ],
      augmented: [
        "Instant HL7 data parsing & 100% regulatory compliance",
        "Connected FSL dispatch with dynamic VIN retrieval",
        "Agentforce AI automated document reader in Arabic & English"
      ]
    }
  },
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — WebOvens Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — WebOvens Case Study`,
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const details = projectDetails[slug];
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-wo-bg text-wo-text">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-0 relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 mb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-8">
            <Link
              href="/work"
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-wo-text-muted/50 hover:text-wo-amber transition-colors"
            >
              Work
            </Link>
            <span className="font-mono text-[10px] text-wo-text-muted/30">/</span>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-wo-amber/60">
              {project.title}
            </span>
          </div>

          {/* Project Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="font-mono text-[9px] tracking-[0.15em] px-3 py-1.5 border border-wo-border text-wo-text-muted/50">
              {project.category}
            </span>
            <span className="font-mono text-[10px] text-wo-text-muted/30 tracking-wider">
              {project.year}
            </span>
            <span className="font-mono text-[10px] text-wo-text-muted/30 tracking-wider">
              {project.tech}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl tracking-tighter text-wo-white mb-6 leading-[0.9]">
            {project.title}
          </h1>
          <p className="text-[16px] md:text-[18px] text-wo-text-muted font-light max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Full-Width Project Image */}
        <div className="relative aspect-[21/9] md:aspect-[21/8] overflow-hidden border-y border-wo-border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wo-bg/40 via-transparent to-wo-bg/20" />
          <div
            className="absolute bottom-0 left-0 w-full h-[2px]"
            style={{ backgroundColor: project.color }}
          />
        </div>
      </section>

      {/* Challenge & Approach */}
      {details && (
        <>
          <section className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Challenge */}
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50 block mb-6">
                  {'// THE CHALLENGE'}
                </span>
                <p className="text-[16px] md:text-[18px] text-wo-text leading-[1.8] font-light">
                  {details.challenge}
                </p>
              </div>

              {/* Approach */}
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50 block mb-6">
                  {'// OUR APPROACH'}
                </span>
                <p className="text-[16px] md:text-[18px] text-wo-text leading-[1.8] font-light">
                  {details.approach}
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="border-y border-wo-border">
            <div className="max-w-[1600px] mx-auto">
              <div className="px-6 md:px-12 xl:px-16 py-6 border-b border-wo-border">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50">
                  {'// RESULTS'}
                </span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {details.results.map((result, i) => (
                  <div
                    key={i}
                    className={`p-8 md:p-12 xl:p-16 text-center ${
                      i !== details.results.length - 1
                        ? 'border-r border-wo-border'
                        : ''
                    } ${i < 2 ? 'border-b lg:border-b-0 border-wo-border' : ''}`}
                  >
                    <p className="font-serif text-[15px] md:text-[17px] text-wo-text leading-relaxed">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-20 md:py-28">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50 block mb-12">
              {'// KEY FEATURES'}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {details.features.map((feature, i) => (
                <div
                  key={i}
                  className={`p-6 md:p-8 border border-wo-border/50 -mt-[1px] -ml-[1px] flex items-center gap-4 group hover:bg-wo-surface transition-colors duration-500`}
                >
                  <div className="w-1.5 h-1.5 bg-wo-border group-hover:bg-wo-amber group-hover:shadow-[0_0_6px_rgba(255,171,64,0.4)] transition-all duration-500 rounded-full flex-shrink-0" />
                  <span className="font-mono text-[12px] md:text-[13px] text-wo-text-muted group-hover:text-wo-text transition-colors duration-500 tracking-wider">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Extended Deep Dive Content for Macvaar AI & AlgoCirrus */}
          {(slug === 'macvaar-ai' || slug === 'algocirrus') && (
            <>
              {/* Brand Motion / Video Section */}
              {details.heroVideo && (
                <section className="border-t border-wo-border py-20 md:py-28 bg-wo-surface/40">
                  <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber">
                        {'// MOTION & BRAND FILM'}
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-5xl text-wo-white mb-8 tracking-tight">
                      {slug === 'algocirrus' ? 'Salesforce PDO & Enterprise AI Reel' : 'Fluid Amber Motion Language'}
                    </h3>
                    <div className="relative rounded-xl overflow-hidden border border-wo-border shadow-2xl bg-black aspect-video max-w-5xl mx-auto">
                      <video
                        src={details.heroVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-wo-text-muted bg-wo-bg/80 backdrop-blur-md px-4 py-2 border border-wo-border rounded-md">
                        <span>{slug === 'algocirrus' ? 'AlgoCirrus Platform Demo: Enterprise AI & Salesforce Consulting' : 'Brand Film: Tactile liquid capillary amber & continuous workflow continuity'}</span>
                        <span className="text-wo-amber">1080p 60fps</span>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Design System & Color Palette */}
              {details.systemOverview && (
                <section className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-20 md:py-28">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/60">
                      {'// BRAND ARCHITECTURE'}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-5xl text-wo-white mb-12 tracking-tight">
                    Design System & Modality Palette
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {details.systemOverview.palette.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-6 border border-wo-border bg-wo-surface rounded-lg flex flex-col justify-between"
                      >
                        <div
                          className="w-full h-20 rounded mb-4 border border-white/10 shadow-inner"
                          style={{ backgroundColor: item.hex }}
                        />
                        <div>
                          <div className="font-mono text-xs text-wo-amber font-semibold">{item.hex}</div>
                          <div className="font-serif text-base text-wo-white mt-1">{item.name}</div>
                          <div className="font-mono text-[11px] text-wo-text-muted mt-2 leading-relaxed">{item.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Workflows / Case Studies Showcase */}
              {details.workflows && (
                <section className="border-t border-wo-border bg-wo-surface/20 py-20 md:py-28">
                  <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber">
                        {slug === 'algocirrus' ? '// INDUSTRY VERTICAL CASE STUDIES' : '// CLINICAL WORKFLOWS & DIAGNOSTICS'}
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-5xl text-wo-white mb-12 tracking-tight">
                      {slug === 'algocirrus' ? 'Enterprise Solution Portfolio' : 'Diagnostic Acquisition & Solutions'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {details.workflows.map((wf, idx) => (
                        <div
                          key={idx}
                          className="border border-wo-border rounded-xl bg-wo-bg overflow-hidden group hover:border-wo-amber/40 transition-colors"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden bg-black">
                            <Image
                              src={wf.image}
                              alt={wf.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 bg-wo-bg/90 backdrop-blur-md px-3 py-1 border border-wo-border text-wo-amber font-mono text-xs">
                              VERTICAL {wf.stage}
                            </div>
                          </div>
                          <div className="p-8">
                            <h4 className="font-serif text-xl text-wo-white mb-2">{wf.title}</h4>
                            <p className="font-mono text-xs text-wo-text-muted leading-relaxed">{wf.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Legacy vs Transformation Comparison */}
              {details.emergencyComparison && (
                <section className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-20 md:py-28">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber">
                      {slug === 'algocirrus' ? '// ENTERPRISE TRANSFORMATION IMPACT' : '// EMERGENCY RADIOLOGY PIPELINE'}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-5xl text-wo-white mb-12 tracking-tight">
                    {slug === 'algocirrus' ? 'Bridging Legacy Systems to Agentic AI' : 'Closing the 4-Hour Emergency Gap'}
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8 border border-red-900/30 bg-red-950/10 rounded-xl">
                      <span className="font-mono text-xs text-red-400 block mb-4 uppercase tracking-widest">[ Legacy Architecture ]</span>
                      <ul className="space-y-4">
                        {details.emergencyComparison.legacy.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 font-mono text-xs text-wo-text-muted">
                            <span className="text-red-500 font-bold">✕</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-8 border border-wo-amber/40 bg-wo-amber/5 rounded-xl">
                      <span className="font-mono text-xs text-wo-amber block mb-4 uppercase tracking-widest">[ AlgoCirrus AI Ecosystem ]</span>
                      <ul className="space-y-4">
                        {details.emergencyComparison.augmented.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 font-mono text-xs text-wo-text">
                            <span className="text-wo-amber font-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              )}
            </>
          )}

          {/* Testimonial */}
          {details.testimonial && (
            <section className="border-y border-wo-border">
              <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-20 md:py-28">
                <div className="max-w-3xl mx-auto text-center">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50 block mb-8">
                    {'// CLIENT TESTIMONIAL'}
                  </span>
                  <blockquote className="font-serif text-2xl md:text-3xl xl:text-4xl text-wo-text leading-[1.3] tracking-tight mb-8 italic">
                    &ldquo;{details.testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-mono text-[12px] text-wo-text tracking-wider">
                      {details.testimonial.author}
                    </p>
                    <p className="font-mono text-[10px] text-wo-text-muted/50 tracking-wider mt-1">
                      {details.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* Next Project */}
      <section className="border-b border-wo-border">
        <Link href={`/work/${nextProject.slug}`} className="group block">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-16 md:py-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-wo-text-muted/30 block mb-3">
                  {'// NEXT PROJECT'}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl tracking-tight text-wo-text group-hover:text-wo-white transition-colors duration-500">
                  {nextProject.title}
                </h2>
              </div>
              <div className="w-12 h-12 border border-wo-border flex items-center justify-center group-hover:border-wo-amber/30 transition-all duration-500">
                <svg
                  className="w-5 h-5 text-wo-text-muted group-hover:text-wo-amber transform group-hover:translate-x-1 transition-all duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
