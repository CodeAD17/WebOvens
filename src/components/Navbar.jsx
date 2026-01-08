import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">
                    <img src="/logo.png" alt="WebOven" className="logo-img" />
                    <span className="logo-text">WebOven</span>
                </a>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                    <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
                    <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
                    <a href="#contact" className="btn btn-primary btn-nav" onClick={() => setMenuOpen(false)}>
                        Get Started
                    </a>
                </div>

                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    )
}
