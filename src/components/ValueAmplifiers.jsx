import { motion } from 'framer-motion'
import { Shield, Zap, Users } from 'lucide-react'
import './ValueAmplifiers.css'

const amplifiers = [
    {
        icon: Shield,
        label: 'Guarantee',
        title: 'Scope-Protected Delivery',
        description: 'If your product doesn\'t meet the agreed scope, we fix it — no excuses, no extra charges. We stand behind our work.',
        color: 'success'
    },
    {
        icon: Zap,
        label: 'Speed',
        title: 'First Version in 14–21 Days',
        description: 'No 6-month timelines. No endless "discovery phases." You get a working product in your hands, fast.',
        color: 'accent'
    },
    {
        icon: Users,
        label: 'Simplicity',
        title: 'One Team. One Process. Zero Confusion.',
        description: 'No juggling freelancers or deciphering agency politics. One dedicated team, clear communication, predictable progress.',
        color: 'blue'
    }
]

export default function ValueAmplifiers() {
    return (
        <section className="value-amplifiers" id="value">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Why This Works</span>
                    <h2 className="section-title">
                        We Reduce <span className="gradient-text">Risk</span>. We Increase <span className="gradient-text">Speed</span>.
                    </h2>
                </div>

                <div className="amplifiers-grid">
                    {amplifiers.map((amp, index) => (
                        <motion.div
                            key={amp.title}
                            className={`amplifier-card ${amp.color}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className="amp-glow" />
                            <div className="amp-content">
                                <div className="amp-icon">
                                    <amp.icon size={32} />
                                </div>
                                <span className="amp-label">{amp.label}</span>
                                <h3>{amp.title}</h3>
                                <p>{amp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
