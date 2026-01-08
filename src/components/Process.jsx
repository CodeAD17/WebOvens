import { motion } from 'framer-motion'
import './Process.css'

const steps = [
    {
        number: '01',
        title: 'Understand',
        description: 'We break your idea into a build-ready plan. Clear requirements, defined scope, realistic timeline.'
    },
    {
        number: '02',
        title: 'Design',
        description: 'Clean, fast, conversion-focused UI. No unnecessary elements. Every pixel earns its place.'
    },
    {
        number: '03',
        title: 'Build',
        description: 'Production-grade code from day one. Modern stack, best practices, built for scale.'
    },
    {
        number: '04',
        title: 'Launch',
        description: 'Smooth deployment. We handle the technical complexity so you can focus on your business.'
    },
    {
        number: '05',
        title: 'Scale',
        description: 'Long-term tech partner, not a one-time vendor. We grow with you.'
    }
]

export default function Process() {
    return (
        <section className="process" id="process">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">The System</span>
                    <h2 className="section-title">
                        How We <span className="gradient-text">Build</span>
                    </h2>
                    <p className="section-description">
                        A proven, battle-tested process that turns ideas into shipped products. No mystery. No chaos.
                    </p>
                </div>

                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="process-step"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="step-number-wrapper">
                                <span className="step-number">{step.number}</span>
                                {index < steps.length - 1 && <div className="step-connector" />}
                            </div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background decoration */}
            <div className="process-bg-line" />
        </section>
    )
}
