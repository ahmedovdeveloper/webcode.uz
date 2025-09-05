import React, { useState, useEffect } from 'react'
import { Play, ArrowRight } from 'lucide-react'
import { Link as ScrollLink } from "react-scroll"

// Particle component for animated background
const Particle = ({ delay, duration, x, y, color, size }) => (
  <div
    className={`absolute rounded-full opacity-60 animate-float`}
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    }}
  />
)

// Connection line between particles
const Connection = ({ x1, y1, x2, y2, opacity }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{ zIndex: 1 }}
  >
    <line
      x1={`${x1}%`}
      y1={`${y1}%`}
      x2={`${x2}%`}
      y2={`${y2}%`}
      stroke="rgba(59, 130, 246, 0.2)"
      strokeWidth="1"
      opacity={opacity}
      className="animate-pulse"
    />
  </svg>
)

export default function Banner() {
  const [particles, setParticles] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Generate random particles
    const colors = [
      '#ef4444', // red
      '#f59e0b', // yellow  
      '#10b981', // green
      '#3b82f6', // blue
      '#8b5cf6', // purple
      '#ec4899', // pink
      '#06b6d4', // cyan
      '#f97316'  // orange
    ]

    const newParticles = []
    const newConnections = []

    for (let i = 0; i < 25; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        delay: Math.random() * 5,
        duration: Math.random() * 15 + 8
      })
    }

    // Create connections between nearby particles
    for (let i = 0; i < newParticles.length; i++) {
      for (let j = i + 1; j < newParticles.length; j++) {
        const dx = newParticles[i].x - newParticles[j].x
        const dy = newParticles[i].y - newParticles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 25 && Math.random() > 0.7) {
          newConnections.push({
            id: `${i}-${j}`,
            x1: newParticles[i].x,
            y1: newParticles[i].y,
            x2: newParticles[j].x,
            y2: newParticles[j].y,
            opacity: Math.random() * 0.5 + 0.1
          })
        }
      }
    }

    setParticles(newParticles)
    setConnections(newConnections)
  }, [])

  const stats = [
    { value: "48+", label: "Проектов выполнено", color: "text-red-500" },
    { value: "24/7", label: "Поддержка", color: "text-yellow-500" },
    { value: "5★", label: "Рейтинг клиентов", color: "text-red-500" },
    { value: "14 дней", label: "Средний срок", color: "text-yellow-500" }
  ]

  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Particles */}
        {particles.map((particle) => (
          <Particle key={particle.id} {...particle} />
        ))}
        
        {/* Connections */}
        {connections.map((connection) => (
          <Connection key={connection.id} {...connection} />
        ))}
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/90" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="text-gray-900">Создаём </span>
          <span className="text-red-500">сайты</span>
          <span className="text-gray-900">, </span>
          <span className="text-yellow-500">приложения</span>
          <br className="hidden sm:block" />
          <span className="text-gray-900">и ботов под ключ</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          WebCode — твой партнёр в IT-решениях для бизнеса. Быстро, 
          качественно и с гарантией результата.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={700} 
            offset={-80} 
            className="cursor-pointer"
          >
            <button className="group bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center gap-3">
              Заказать проект
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </ScrollLink>
          
          <ScrollLink 
            to="portfolio" 
            smooth={true} 
            duration={700} 
            offset={-80} 
            className="cursor-pointer"
          >
            <button className="group flex items-center gap-3 text-gray-700 border border-amber-100 hover:text-gray-900 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
              <div className="w-10 rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-gray-700 ml-1" />
              </div>
              Посмотреть портфолио
            </button>
          </ScrollLink>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.6;
          }
          25% { 
            transform: translateY(-20px) rotate(90deg); 
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-10px) rotate(180deg); 
            opacity: 1;
          }
          75% { 
            transform: translateY(-30px) rotate(270deg); 
            opacity: 0.8;
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }

        @keyframes pulse-line {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}
