import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | WebOvens',
  description:
    'Review the terms governing your use of the WebOvens website and our digital services.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  const lastUpdated = 'September 3, 2026';
  const effectiveDate = 'January 1, 2026';

  const sections = [
    {
      id: 'acceptance-of-terms',
      number: '01',
      title: 'Acceptance of Terms',
      content: (
        <>
          <p className="mb-4">
            By accessing or using the website{' '}
            <Link href="/" className="text-wo-amber hover:underline underline-offset-4">
              webovens.in
            </Link>{' '}
            (the &ldquo;Site&rdquo;), you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions (&ldquo;Terms&rdquo;) and our Privacy Policy.
          </p>
          <p>
            If you do not agree to these Terms, please refrain from using or accessing this website.
          </p>
        </>
      ),
    },
    {
      id: 'about-webovens',
      number: '02',
      title: 'About WebOvens',
      content: (
        <p>
          WebOvens is a premier digital product and web engineering studio specializing in high-performance web applications, bespoke digital architectures, and brand experiences for startups, enterprises, and visionary founders globally.
        </p>
      ),
    },
    {
      id: 'use-of-website',
      number: '03',
      title: 'Use of the Website',
      content: (
        <>
          <p className="mb-3">
            You agree to use the Site exclusively for lawful purposes and in accordance with these Terms. You specifically agree not to:
          </p>
          <ul className="space-y-2 text-sm text-wo-text-muted/90">
            <li className="flex items-start gap-2.5">
              <span className="text-wo-amber font-mono text-xs mt-0.5">{'>'}</span>
              <span>Engage in any automated scraping, data harvesting, or extraction of Site content without our prior express written permission.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-wo-amber font-mono text-xs mt-0.5">{'>'}</span>
              <span>Introduce malicious code, viruses, trojans, or automated scripts intended to disrupt or compromise server integrity.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-wo-amber font-mono text-xs mt-0.5">{'>'}</span>
              <span>Attempt unauthorized access to our hosting environments, systems, or connected networks.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-wo-amber font-mono text-xs mt-0.5">{'>'}</span>
              <span>Misrepresent your identity or submit fraudulent project inquiries through our communication forms.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'intellectual-property',
      number: '04',
      title: 'Intellectual Property',
      content: (
        <>
          <p className="mb-3">
            All original content on this website—including but not limited to visual branding, logos, graphics, interface designs, codebase, typography arrangements, and copy—is the proprietary intellectual property of WebOvens and is protected by applicable intellectual property and copyright laws.
          </p>
          <p className="mb-3">
            No material from this Site may be reproduced, copied, modified, distributed, or republished without prior written authorization from WebOvens.
          </p>
          <p className="text-sm text-wo-text-muted/80 border-l-2 border-wo-border pl-4 py-1">
            <strong className="text-wo-text">Client Work & Deliverables:</strong> Ownership of bespoke code, design deliverables, and intellectual property developed for clients is explicitly governed by the respective Statement of Work (SOW) or Master Services Agreement executed between WebOvens and the client.
          </p>
        </>
      ),
    },
    {
      id: 'project-enquiries',
      number: '05',
      title: 'Project Enquiries & Communications',
      content: (
        <p>
          Submitting a project enquiry or brief via our contact form, email, or messaging channels does not automatically create a binding client-agency relationship, contractual commitment, or obligation on WebOvens to undertake the requested work. All prospective engagements require mutual evaluation, formal quotation, scope agreement, and signed contracts.
        </p>
      ),
    },
    {
      id: 'services-agreements',
      number: '06',
      title: 'Services & Commercial Agreements',
      content: (
        <p>
          All professional design and development engagements undertaken by WebOvens are governed by separate, legally binding project agreements, contracts, or proposals. Such agreements detail specific scope parameters, milestone deliverables, project timelines, payment schedules, warranties, intellectual property transfer terms, and client responsibilities.
        </p>
      ),
    },
    {
      id: 'third-party-services',
      number: '07',
      title: 'Third-Party Services & Technologies',
      content: (
        <p>
          Our web solutions and client deliverables may integrate or rely upon third-party platforms, APIs, hosting providers, or software libraries. WebOvens does not own or operate these independent services and is not liable for service outages, modifications, or policy changes initiated by third-party providers.
        </p>
      ),
    },
    {
      id: 'website-availability',
      number: '08',
      title: 'Website Availability',
      content: (
        <p>
          We strive to keep the Site accessible, reliable, and up to date. However, we do not guarantee continuous, uninterrupted, or error-free availability of the website. We reserve the right to suspend, restrict, or modify access to any part of the Site for routine maintenance, technical updates, or infrastructure improvements without prior notice.
        </p>
      ),
    },
    {
      id: 'disclaimer-of-warranties',
      number: '09',
      title: 'Disclaimer of Warranties',
      content: (
        <p>
          The Site and its contents are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express, implied, or statutory, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
        </p>
      ),
    },
    {
      id: 'limitation-of-liability',
      number: '10',
      title: 'Limitation of Liability',
      content: (
        <p>
          To the fullest extent permitted by applicable law, WebOvens and its directors, team members, contractors, and affiliates shall not be liable for any indirect, incidental, consequential, special, or punitive damages—including loss of profits, data, revenue, or business opportunities—arising from or in connection with your access to or inability to use this website.
        </p>
      ),
    },
    {
      id: 'indemnification',
      number: '11',
      title: 'Indemnification',
      content: (
        <p>
          You agree to defend, indemnify, and hold harmless WebOvens, its team, and partners against any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising out of your violation of these Terms or misuse of the Site.
        </p>
      ),
    },
    {
      id: 'termination',
      number: '12',
      title: 'Termination & Suspension',
      content: (
        <p>
          We reserve the right to immediately suspend or terminate your access to the Site or decline correspondence if we determine, in our sole discretion, that you have breached these Terms or engaged in abusive, unlawful, or disruptive behavior.
        </p>
      ),
    },
    {
      id: 'governing-law',
      number: '13',
      title: 'Governing Law & Jurisdiction',
      content: (
        <p>
          These Terms and any disputes arising out of or related to your use of the Site shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any legal proceedings shall be subject to the exclusive jurisdiction of the competent courts in India.
        </p>
      ),
    },
    {
      id: 'changes-to-terms',
      number: '14',
      title: 'Changes to Terms',
      content: (
        <p>
          We reserve the right to modify or revise these Terms at any time. Any changes will become effective immediately upon posting to this page with an updated &ldquo;Last Updated&rdquo; timestamp. Your continued use of the Site following any posted modifications constitutes acceptance of the updated Terms.
        </p>
      ),
    },
    {
      id: 'contact',
      number: '15',
      title: 'Contact Information',
      content: (
        <>
          <p className="mb-4">
            If you have questions regarding these Terms & Conditions or wish to discuss a project agreement, please contact us:
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
              DOC-ID: TERMS-2026
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-wo-white mb-6">
            Terms & <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-wo-white via-wo-amber to-wo-orange">Conditions.</span>
          </h1>

          <p className="text-wo-text-muted text-[15px] sm:text-[17px] max-w-3xl font-light leading-relaxed mb-8">
            The terms that govern your use of the WebOvens website and our online services.
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
              Want to read how we protect your personal information?
            </span>
            <Link
              href="/privacy-policy"
              className="font-mono text-xs uppercase tracking-[0.15em] text-wo-amber hover:underline inline-flex items-center gap-2"
            >
              Read Privacy Policy →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
