import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
    {
        quote: "WebOven delivered in 3 weeks what our previous agency couldn't do in 4 months. The difference? They actually understand engineering.",
        author: 'Rajesh Kumar',
        title: 'Founder, TechStart India',
        rating: 5
    },
    {
        quote: "Finally, an agency that doesn't just make things look good — they make things WORK. Our conversion rate increased by 40% after the rebuild.",
        author: 'Priya Sharma',
        title: 'CEO, E-Commerce Platform',
        rating: 5
    },
    {
        quote: "The team was incredibly responsive and the code quality was exceptional. We've scaled 10x and haven't touched the backend since launch.",
        author: 'Amit Patel',
        title: 'CTO, SaaS Startup',
        rating: 5
    }
]

export default function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">
                        <Star size={14} />
                        Client Stories
                    </span>
                    <h2 className="section-title">
                        Trusted by <span className="gradient-text">Ambitious</span> Founders
                    </h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className="quote-icon">
                                <Quote size={32} />
                            </div>

                            <div className="rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="star" />
                                ))}
                            </div>

                            <p className="quote">{testimonial.quote}</p>

                            <div className="author">
                                <div className="author-avatar">
                                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="author-info">
                                    <span className="author-name">{testimonial.author}</span>
                                    <span className="author-title">{testimonial.title}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
