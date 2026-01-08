import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import './Problem.css'

export default function Problem() {
    const badPoints = [
        'Slow, bloated code that crashes',
        'Pretty but doesn\'t convert users',
        'Breaks after launch day',
        'Hidden costs everywhere',
        'Vanishes after project handoff'
    ]

    const goodPoints = [
        'Optimized, production-grade code',
        'Built to convert and retain users',
        'Stable, tested, and scalable',
        'Transparent, fixed-scope pricing',
        'Long-term technology partner'
    ]

    return (
        <section className="problem" id="problem">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Most Agencies Sell <span className="gradient-text">Design</span>.
                        <br />We Sell <span className="gradient-text">Results</span>.
                    </h2>
                </div>

                <div className="problem-content">
                    <motion.div
                        className="problem-text reveal"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="lead-text">
                            You don't need another pretty website that takes 6 months to build and breaks after launch.
                        </p>
                        <p>
                            You need a product that loads fast, converts users, scales cleanly, and doesn't require a full-time developer just to keep it running. Most agencies are filled with designers pretending to be engineers.
                        </p>
                        <p className="emphasis">
                            WebOven builds like engineers — not decorators.
                        </p>
                    </motion.div>

                    <div className="comparison-grid">
                        <motion.div
                            className="comparison-card bad reveal"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="card-header">
                                <div className="card-icon bad">
                                    <X size={24} />
                                </div>
                                <h3>Typical Agency</h3>
                            </div>
                            <ul className="comparison-list">
                                {badPoints.map((point, i) => (
                                    <li key={i}>
                                        <X size={16} className="list-icon" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="comparison-card good reveal"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="card-header">
                                <div className="card-icon good">
                                    <Check size={24} />
                                </div>
                                <h3>WebOven Approach</h3>
                            </div>
                            <ul className="comparison-list">
                                {goodPoints.map((point, i) => (
                                    <li key={i}>
                                        <Check size={16} className="list-icon" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
