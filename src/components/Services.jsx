import { motion } from 'framer-motion'
import {
    Globe,
    Smartphone,
    Palette,
    ShoppingCart,
    Server,
    Cloud,
    ArrowUpRight
} from 'lucide-react'
import './Services.css'

const services = [
    {
        icon: Globe,
        title: 'Custom Web Applications',
        description: 'Full-stack web apps built with React, Next.js, and Node.js. Blazing fast, SEO optimized, and ready to scale.',
        features: ['React / Next.js', 'Node.js / Python', 'PostgreSQL / MongoDB']
    },
    {
        icon: Smartphone,
        title: 'Mobile Applications',
        description: 'Cross-platform mobile apps that feel native. iOS and Android from a single codebase.',
        features: ['React Native', 'Flutter', 'iOS & Android']
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Conversion-focused interfaces designed with real user psychology. Not just pretty — effective.',
        features: ['User Research', 'Wireframing', 'Prototyping']
    },
    {
        icon: ShoppingCart,
        title: 'E-Commerce Platforms',
        description: 'Custom storefronts and marketplaces built to convert. Payment integrations, inventory, and analytics.',
        features: ['Shopify / Custom', 'Payment Gateways', 'Analytics Dashboard']
    },
    {
        icon: Server,
        title: 'API Development',
        description: 'Robust REST and GraphQL APIs built for performance. Authentication, rate limiting, documentation included.',
        features: ['REST / GraphQL', 'Authentication', 'Documentation']
    },
    {
        icon: Cloud,
        title: 'DevOps & Cloud',
        description: 'CI/CD pipelines, containerization, and cloud infrastructure. Deploy with confidence.',
        features: ['AWS / GCP / Azure', 'Docker / K8s', 'CI/CD Pipelines']
    }
]

export default function Services() {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">What We Build</span>
                    <h2 className="section-title">
                        End-to-End <span className="gradient-text">Product Development</span>
                    </h2>
                    <p className="section-description">
                        From idea to production. We handle strategy, design, development, and deployment — so you can focus on growth.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="service-card card reveal"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="service-icon">
                                <service.icon size={28} />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="service-features">
                                {service.features.map((feature, i) => (
                                    <span key={i} className="feature-tag">{feature}</span>
                                ))}
                            </div>
                            <a href="#contact" className="service-link">
                                Learn more <ArrowUpRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Grid */}
            <div className="grid-bg-overlay" />
        </section>
    )
}
