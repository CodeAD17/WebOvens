import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | WebOvens',
  description:
    'Read the WebOvens Privacy Policy to understand how we collect, use, and protect information submitted through our website.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'September 3, 2026';
  const effectiveDate = 'January 1, 2026';

  const sections = [
    {
      id: 'introduction',
      number: '01',
      title: 'Introduction',
      content: (
        <>
          <p className="mb-4">
            WebOvens (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a boutique digital product and creative web engineering studio. We are committed to protecting your privacy and handling any personal information you share with us transparently and responsibly.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, store, protect, and manage your information when you visit our website at{' '}
            <Link href="/" className="text-wo-amber hover:underline underline-offset-4">
              webovens.in
            </Link>{' '}
            or communicate with us regarding potential projects, collaborations, or inquiries.
          </p>
        </>
      ),
    },
    {
      id: 'information-we-collect',
      number: '02',
      title: 'Information We Collect',
      content: (
        <>
          <p className="mb-4">
            We only collect personal information that you voluntarily provide to us or that is automatically transmitted by your browser during standard website operations:
          </p>
          <div className="space-y-4">
            <div className="border-l-2 border-wo-amber/40 pl-4 py-1">
              <h4 className="font-mono text-xs uppercase tracking-wider text-wo-white mb-1">
                A. Information You Voluntarily Provide
              </h4>
              <p className="text-wo-text-muted text-sm leading-relaxed mb-2">
                When you reach out through our project enquiry form, email us, or message us, you may provide:
              </p>
              <ul className="list-disc list-inside text-sm text-wo-text-muted/90 space-y-1">
                <li><strong className="text-wo-text">Full Name:</strong> To address you and personalize communications.</li>
                <li><strong className="text-wo-text">Email Address:</strong> To respond to your project brief or inquiry.</li>
                <li><strong className="text-wo-text">Contact Number (Optional):</strong> If you choose to share your phone/WhatsApp for direct discussion.</li>
                <li><strong className="text-wo-text">Project Details & Brief:</strong> Description of your project scope, timeline, budget, and design/technical goals.</li>
                <li>Any other information you voluntarily include in your correspondence.</li>
              </ul>
            </div>
            <div className="border-l-2 border-wo-border pl-4 py-1">
              <h4 className="font-mono text-xs uppercase tracking-wider text-wo-white mb-1">
                B. Automatically Collected Technical Information
              </h4>
              <p className="text-wo-text-muted text-sm leading-relaxed">
                When browsing our website, standard web server logs may temporarily record general technical data such as your IP address, browser type, device category, referring URL, and page timestamps. This information is utilized solely for technical diagnosis, server security, and optimizing website responsiveness.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'how-we-use-information',
      number: '03',
      title: 'How We Use Your Information',
      content: (
        <>
          <p className="mb-3">We process the collected information solely for legitimate business purposes:</p>
          <ul className="space-y-2.5 text-sm text-wo-text-muted/90">
            <li className="flex items-start gap-2.5">
              <span className="text-wo-amber font-mono text-xs mt-0.5">{'>'}</span>
              <span><strong className="text-wo-text">Responding to Enquiries:</strong> Evaluating your project brief and communicating with you regarding proposals, technical feasibility, and timelines.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-wo-amber font-mono text-xs mt-0.5">{'>'}</span>
              <span><strong className="text-wo-text">Client Relationship Management:</strong> Coordinating project deliverables, milestone reviews, and invoicing for active clients.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-wo-amber font-mono text-xs mt-0.5">{'>'}</span>
              <span><strong className="text-wo-text">Website Maintenance & Security:</strong> Monitoring platform performance, preventing unauthorized access, and debugging system errors.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-wo-amber font-mono text-xs mt-0.5">{'>'}</span>
              <span><strong className="text-wo-text">Legal Compliance:</strong> Satisfying statutory and regulatory compliance obligations when applicable.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'how-we-share-information',
      number: '04',
      title: 'How We Share Information',
      content: (
        <>
          <p className="mb-4">
            <strong className="text-wo-white">We do not sell, rent, trade, or monetize your personal data under any circumstances.</strong>
          </p>
          <p className="mb-3">
            We only share or transmit information with trusted third-party service providers that are essential to our operational infrastructure:
          </p>
          <ul className="space-y-2 text-sm text-wo-text-muted/90">
            <li className="flex items-start gap-2.5">
              <span className="text-wo-amber font-mono text-xs mt-0.5">{'>'}</span>
              <span><strong className="text-wo-text">Form Dispatch & Email Infrastructure:</strong> Transmission of enquiry form data via secure email gateways (such as EmailJS) directly to our studio inbox.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-wo-amber font-mono text-xs mt-0.5">{'>'}</span>
              <span><strong className="text-wo-text">Hosting & Cloud Infrastructure:</strong> Cloud hosting providers that securely serve our website assets and API endpoints.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-wo-amber font-mono text-xs mt-0.5">{'>'}</span>
              <span><strong className="text-wo-text">Legal Requirements:</strong> If compelled by applicable law, court order, or governmental regulation to protect our legal rights or prevent fraud.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'data-security',
      number: '05',
      title: 'Data Security',
      content: (
        <>
          <p className="mb-3">
            We employ industry-standard technical, organizational, and physical security measures to protect the confidentiality and integrity of your personal information, including encrypted SSL/TLS transmissions and access-restricted communication systems.
          </p>
          <p className="text-sm text-wo-text-muted/70 italic">
            Please note that no method of transmission over the internet or electronic storage is 100% infallible. While we strive to employ best-in-class safeguards, absolute security cannot be guaranteed.
          </p>
        </>
      ),
    },
    {
      id: 'data-retention',
      number: '06',
      title: 'Data Retention',
      content: (
        <p>
          We retain your project enquiries, contact messages, and related communications only for as long as reasonably necessary to fulfill the purposes for which they were collected—such as maintaining continuity of client discussions, fulfilling project contracts, resolving disputes, and adhering to legitimate business and statutory record-keeping requirements.
        </p>
      ),
    },
    {
      id: 'cookies-and-tracking',
      number: '07',
      title: 'Cookies & Tracking Technologies',
      content: (
        <p>
          WebOvens does not deploy behavioral advertising cookies, invasive third-party ad pixels, or commercial tracking networks on this website. Any local browser storage utilized is strictly functional to ensure optimal performance, theme preferences, and smooth UI animations.
        </p>
      ),
    },
    {
      id: 'your-rights-and-choices',
      number: '08',
      title: 'Your Rights & Choices',
      content: (
        <>
          <p className="mb-3">
            Depending on your jurisdiction and applicable data protection regulations, you may have the right to:
          </p>
          <ul className="space-y-2 text-sm text-wo-text-muted/90 mb-4">
            <li className="flex items-start gap-2.5">
              <span className="text-wo-amber font-mono text-xs mt-0.5">{'>'}</span>
              <span>Request confirmation of whether we hold your contact information and obtain a copy.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-wo-amber font-mono text-xs mt-0.5">{'>'}</span>
              <span>Request the correction or update of inaccurate personal details.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-wo-amber font-mono text-xs mt-0.5">{'>'}</span>
              <span>Request the deletion of your contact records from our active enquiry databases, subject to legal obligations.</span>
            </li>
          </ul>
          <p>
            To exercise any of these choices, please email us directly at{' '}
            <a href="mailto:webovens.in@gmail.com" className="text-wo-amber hover:underline">
              webovens.in@gmail.com
            </a>.
          </p>
        </>
      ),
    },
    {
      id: 'third-party-links',
      number: '09',
      title: 'Third-Party Links & Platforms',
      content: (
        <p>
          Our website may contain links to external websites, platforms, or social channels (such as LinkedIn, Instagram, and Twitter/X). We do not control and are not responsible for the privacy practices, content, or cookie policies of third-party platforms. We encourage you to review their respective privacy policies when visiting external destinations.
        </p>
      ),
    },
    {
      id: 'childrens-privacy',
      number: '10',
      title: "Children's Privacy",
      content: (
        <p>
          Our website and commercial services are intended solely for business professionals and individuals of legal age. We do not intentionally direct our services to children under the age of 16 or knowingly collect personal information from minors.
        </p>
      ),
    },
    {
      id: 'changes-to-policy',
      number: '11',
      title: 'Changes to This Privacy Policy',
      content: (
        <p>
          We may update this Privacy Policy periodically to reflect evolving legal frameworks, technological enhancements, or studio practices. Any changes will be published directly on this page with an updated &ldquo;Last Updated&rdquo; date at the top. We encourage you to review this page periodically.
        </p>
      ),
    },
    {
      id: 'contact-us',
      number: '12',
      title: 'Contact Us',
      content: (
        <>
          <p className="mb-4">
            If you have questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact us:
          </p>
          <div className="bg-wo-surface/50 border border-wo-border p-6 font-mono text-xs space-y-2">
            <p className="text-wo-text"><strong className="text-wo-white">Studio:</strong> WebOvens</p>
            <p className="text-wo-text"><strong className="text-wo-white">Email:</strong> <a href="mailto:webovens.in@gmail.com" className="text-wo-amber hover:underline">webovens.in@gmail.com</a></p>
            <p className="text-wo-text"><strong className="text-wo-white">Location:</strong> India (Serving Global Clients)</p>
            <p className="text-wo-text"><strong className="text-wo-white">Official Website:</strong> <a href="https://webovens.in" className="text-wo-amber hover:underline">https://webovens.in</a></p>
          </div>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-wo-bg text-wo-text">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-36 pb-16 md:pb-20 border-b border-wo-border relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/70">
              {'// LEGAL & COMPLIANCE'}
            </span>
            <span className="font-mono text-[10px] text-wo-text-muted/30">{'//'}</span>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-wo-text-muted/50">
              DOC-ID: PRIV-2026
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-wo-white mb-6">
            Privacy <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-wo-white via-wo-amber to-wo-orange">Policy.</span>
          </h1>

          <p className="text-wo-text-muted text-[15px] sm:text-[17px] max-w-3xl font-light leading-relaxed mb-8">
            How WebOvens collects, uses, protects, and manages information when you use our website or contact us about our services.
          </p>

          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] text-wo-text-muted/60 border-t border-wo-border/60 pt-6">
            <div>
              <span className="text-wo-text-muted/40 uppercase tracking-wider">Effective:</span>{' '}
              <span className="text-wo-text">{effectiveDate}</span>
            </div>
            <span className="text-wo-border hidden sm:inline">|</span>
            <div>
              <span className="text-wo-text-muted/40 uppercase tracking-wider">Last Updated:</span>{' '}
              <span className="text-wo-amber/80">{lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="space-y-16">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-32 pb-12 border-b border-wo-border/50 last:border-b-0"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mono text-xs text-wo-amber/60 tracking-wider">
                    {'//'}{section.number}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-wo-white font-normal tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="text-wo-text-muted text-[14px] md:text-[15px] leading-relaxed font-light space-y-4">
                  {section.content}
                </div>
              </article>
            ))}
          </div>

          {/* Quick Navigation Footer note */}
          <div className="mt-16 p-6 border border-wo-border bg-wo-surface/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono text-xs text-wo-text-muted">
              Looking for our terms of service?
            </span>
            <Link
              href="/terms-and-conditions"
              className="font-mono text-xs uppercase tracking-[0.15em] text-wo-amber hover:underline inline-flex items-center gap-2"
            >
              View Terms & Conditions →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
