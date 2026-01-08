import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import './CTA.css'

export default function CTA() {
    return (
        <section className="cta" id="contact">
            <div className="container">
                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="cta-eyebrow">
                        <Sparkles size={16} />
                        Ready to Start?
                    </span>

                    <h2 className="cta-headline">
                        Ready to Build Something{' '}
                        <span className="gradient-text">Real</span>?
                    </h2>

                    <p className="cta-subheadline">
                        Let's turn your idea into a product that actually performs. No fluff. No wasted time. Just results.
                    </p>

                    <div className="cta-actions">
                        <a href="mailto:hello@weboven.dev" className="btn btn-primary btn-large">
                            Start Your Build
                            <ArrowRight className="btn-icon" />
                        </a>
                        <p className="cta-note">Free strategy call. No commitment required.</p>
                    </div>
                </motion.div>
            </div>

            {/* Decorative orbs */}
            <div className="orb orb-orange cta-orb-1 animate-pulse-glow" />
            <div className="orb orb-orange cta-orb-2 animate-pulse-glow" />
            <div className="orb orb-dark cta-orb-3" />

            {/* Hexagon decorations */}
            <div className="hex-decoration hex-1 animate-float" />
            <div className="hex-decoration hex-2 animate-float-slow" />
        </section>
    )
}
