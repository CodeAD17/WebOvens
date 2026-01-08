import { ArrowUpRight } from 'lucide-react'
import './Footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <img src="/logo.png" alt="WebOven" className="logo-img" />
                            <span className="logo-text">WebOven</span>
                        </a>
                        <p>Engineering-first digital products. Built to perform, designed to scale.</p>

                        <div className="footer-social">
                            <a href="https://twitter.com/weboven" target="_blank" rel="noopener noreferrer">
                                Twitter <ArrowUpRight size={14} />
                            </a>
                            <a href="https://linkedin.com/company/weboven" target="_blank" rel="noopener noreferrer">
                                LinkedIn <ArrowUpRight size={14} />
                            </a>
                            <a href="https://github.com/weboven" target="_blank" rel="noopener noreferrer">
                                GitHub <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Navigation</h4>
                            <a href="#services">Services</a>
                            <a href="#pricing">Pricing</a>
                            <a href="#process">Process</a>
                            <a href="#testimonials">Testimonials</a>
                        </div>

                        <div className="footer-column">
                            <h4>Services</h4>
                            <a href="#services">Web Applications</a>
                            <a href="#services">Mobile Apps</a>
                            <a href="#services">UI/UX Design</a>
                            <a href="#services">E-Commerce</a>
                        </div>

                        <div className="footer-column">
                            <h4>Contact</h4>
                            <a href="mailto:hello@weboven.dev">hello@weboven.dev</a>
                            <a href="tel:+919876543210">+91 98765 43210</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} WebOven. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
