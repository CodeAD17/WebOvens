import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowUpRight, Layers, Code, Smartphone, Globe } from 'lucide-react'
import './Portfolio.css'

const projects = [
  {
    id: 'feather',
    title: 'Feather',
    subtitle: 'LinkedIn Content Automation',
    description: 'Transform your GitHub commits into engaging LinkedIn posts. Build in public with zero effort.',
    image: '/project-feather-landing.png',
    url: 'https://feather-orcin.vercel.app/',
    tags: ['React', 'Node.js', 'GitHub API', 'LinkedIn API'],
    category: 'Web App',
    icon: Code,
    color: '#3B82F6'
  },
  {
    id: 'feather-app',
    title: 'Feather Dashboard',
    subtitle: 'Content Management System',
    description: 'Full-featured dashboard for managing posts, scheduling content, and tracking GitHub activity.',
    image: '/project-feather-app.png',
    url: 'https://feather-orcin.vercel.app/landing.html',
    tags: ['React', 'Dashboard', 'Analytics'],
    category: 'Dashboard',
    icon: Layers,
    color: '#3B82F6'
  },
  {
    id: 'flowstrate',
    title: 'FlowStrate',
    subtitle: 'Workflow Automation Platform',
    description: 'Automate workflows that save you 20+ hours every week. Define outcomes in plain English.',
    image: '/project-flowstrate.png',
    url: 'https://flowstate-rouge.vercel.app/',
    tags: ['Next.js', 'Automation', 'AI'],
    category: 'SaaS',
    icon: Globe,
    color: '#22C55E'
  },
  {
    id: 'orderlo',
    title: 'OrderLO',
    subtitle: 'Restaurant POS System',
    description: 'The revenue engine for high-volume venues. 10 minute setup. No new hardware. Just profit.',
    image: '/project-orderlo.png',
    url: 'https://order-lo.vercel.app/',
    tags: ['React', 'Firebase', 'POS', 'Payments'],
    category: 'Mobile + Web',
    icon: Smartphone,
    color: '#FF5733'
  },
  {
    id: 'gharkachulha',
    title: 'Ghar Ka Chulha',
    subtitle: 'Food Delivery Platform',
    description: 'Authentic home-cooked flavors delivered to your doorstep. Complete restaurant website with ordering.',
    image: '/project-gharkachulha.png',
    url: 'https://www.gharkachulha.in/',
    tags: ['Next.js', 'E-commerce', 'Payments'],
    category: 'E-commerce',
    icon: Globe,
    color: '#D4A574'
  }
]

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="portfolio" id="portfolio">
      {/* Background decoration */}
      <div className="portfolio-bg">
        <div className="grid-lines" />
      </div>

      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <Layers size={14} />
            Our Work
          </span>
          <h2 className="section-title">
            Products We've <span className="gradient-text-new">Shipped</span>
          </h2>
          <p className="section-description">
            Real products. Real results. See what we've built for ambitious founders and businesses.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`portfolio-card ${hoveredId === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image Container */}
              <div className="card-image-container">
                <div className="card-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="card-image"
                  />
                  <div className="image-overlay" />
                </div>
                
                {/* Floating Badge */}
                <div className="card-category" style={{ '--category-color': project.color }}>
                  <project.icon size={14} />
                  {project.category}
                </div>

                {/* Visit Link */}
                <div className="card-visit">
                  <ExternalLink size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="card-content">
                <div className="card-header">
                  <h3>{project.title}</h3>
                  <ArrowUpRight size={20} className="arrow-icon" />
                </div>
                <p className="card-subtitle">{project.subtitle}</p>
                <p className="card-description">{project.description}</p>
                
                <div className="card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="card-glow" style={{ '--glow-color': project.color }} />
            </motion.a>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div 
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>Want to see more? Check out our full portfolio or start a conversation.</p>
          <a href="#contact" className="btn btn-primary">
            Start Your Project
            <ArrowUpRight size={18} className="btn-icon" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
