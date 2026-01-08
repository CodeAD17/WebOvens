import { motion } from 'framer-motion'
import { Check, ArrowRight, Star } from 'lucide-react'
import './Pricing.css'

const plans = [
    {
        name: 'Starter',
        price: '₹49,999',
        period: 'one-time',
        description: 'Perfect for landing pages and simple websites',
        features: [
            'Custom landing page design',
            'Mobile responsive',
            'Basic SEO optimization',
            'Contact form integration',
            '2 revision rounds',
            '14-day delivery',
            '30 days post-launch support'
        ],
        cta: 'Start Project',
        popular: false
    },
    {
        name: 'Growth',
        price: '₹1,49,999',
        period: 'one-time',
        description: 'For full-featured web applications and products',
        features: [
            'Everything in Starter',
            'Full-stack development',
            'User authentication',
            'Database integration',
            'Admin dashboard',
            'API development',
            'Payment integration',
            'Unlimited revisions',
            '21-day delivery',
            '90 days post-launch support'
        ],
        cta: 'Start Project',
        popular: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: 'quote',
        description: 'For complex platforms and ongoing partnerships',
        features: [
            'Everything in Growth',
            'Multi-platform (Web + Mobile)',
            'Custom integrations',
            'Dedicated project manager',
            'Priority support',
            'SLA guarantee',
            'Scalability planning',
            'Ongoing maintenance',
            'Custom timeline'
        ],
        cta: 'Contact Us',
        popular: false
    }
]

export default function Pricing() {
    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">
                        <Star size={14} />
                        Transparent Pricing
                    </span>
                    <h2 className="section-title">
                        Simple, <span className="gradient-text">Honest</span> Pricing
                    </h2>
                    <p className="section-description">
                        No hidden fees. No hourly billing surprises. Fixed scope, fixed price, delivered on time.
                    </p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            {plan.popular && (
                                <div className="popular-badge">Most Popular</div>
                            )}

                            <div className="pricing-header">
                                <h3>{plan.name}</h3>
                                <div className="price-wrapper">
                                    <span className="price">{plan.price}</span>
                                    {plan.period !== 'quote' && (
                                        <span className="period">{plan.period}</span>
                                    )}
                                </div>
                                <p className="plan-description">{plan.description}</p>
                            </div>

                            <ul className="features-list">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <Check size={16} className="check-icon" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-block`}
                            >
                                {plan.cta}
                                <ArrowRight size={16} className="btn-icon" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="pricing-note">
                    <p>
                        All prices are in INR. Need something different? <a href="#contact">Let's talk</a> — we customize to your needs.
                    </p>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="orb orb-orange pricing-orb-1 animate-pulse-glow" />
            <div className="orb orb-dark pricing-orb-2" />
        </section>
    )
}
