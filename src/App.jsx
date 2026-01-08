import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import ValueAmplifiers from './components/ValueAmplifiers'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    // Smooth reveal on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Portfolio />
        <Pricing />
        <ValueAmplifiers />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
