import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react'
import './Hero.css'

function FloatingHexagon({ position, scale, color, speed }) {
    const meshRef = useRef()

    useFrame((state) => {
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.2
        meshRef.current.rotation.y += 0.005
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <cylinderGeometry args={[1, 1, 0.3, 6]} />
                <MeshDistortMaterial
                    color={color}
                    distort={0.2}
                    speed={2}
                    roughness={0.4}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    )
}

function Scene3D() {
    return (
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#FF6B35" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF8A50" />

            <FloatingHexagon position={[3, 1, 0]} scale={1.2} color="#FF6B35" speed={0.5} />
            <FloatingHexagon position={[-3, -1, -2]} scale={0.8} color="#C94D1B" speed={0.7} />
            <FloatingHexagon position={[1, -2, -1]} scale={0.6} color="#FF8A50" speed={0.6} />
            <FloatingHexagon position={[-2, 2, -3]} scale={1} color="#3D3D3D" speed={0.4} />
        </Canvas>
    )
}

export default function Hero() {
    return (
        <section className="hero" id="hero">
            {/* 3D Background */}
            <div className="hero-3d-bg">
                <Scene3D />
            </div>

            {/* Gradient Orbs */}
            <div className="orb orb-orange orb-1 animate-pulse-glow" />
            <div className="orb orb-orange orb-2 animate-pulse-glow" />
            <div className="orb orb-dark orb-3" />

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="hero-badge">
                        <Zap size={16} />
                        <span>Engineering-First Digital Agency</span>
                    </div>

                    <h1 className="hero-headline">
                        We Build Products That{' '}
                        <span className="gradient-text">Actually Work</span>
                        <br />— Not Just Look Good.
                    </h1>

                    <p className="hero-subheadline">
                        Apps and websites engineered to help you launch faster, convert better, and scale without chaos. No fluff. No wasted sprints. Just real products that perform.
                    </p>

                    <div className="hero-ctas">
                        <a href="#contact" className="btn btn-primary btn-large">
                            Get Your Build Plan
                            <ArrowRight className="btn-icon" />
                        </a>
                        <a href="#process" className="btn btn-secondary btn-large">
                            View Our Process
                        </a>
                    </div>

                    <div className="hero-metrics">
                        <div className="metric">
                            <Clock size={20} className="metric-icon" />
                            <div className="metric-content">
                                <span className="metric-value">14-21</span>
                                <span className="metric-label">Days to MVP</span>
                            </div>
                        </div>
                        <div className="metric-divider" />
                        <div className="metric">
                            <Zap size={20} className="metric-icon" />
                            <div className="metric-content">
                                <span className="metric-value">50+</span>
                                <span className="metric-label">Products Shipped</span>
                            </div>
                        </div>
                        <div className="metric-divider" />
                        <div className="metric">
                            <Shield size={20} className="metric-icon" />
                            <div className="metric-content">
                                <span className="metric-value">100%</span>
                                <span className="metric-label">Scope Guarantee</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-line" />
            </div>
        </section>
    )
}
