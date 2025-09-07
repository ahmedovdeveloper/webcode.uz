import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import logo from "../assets/logo.png"

// ================= BUTTON =================
function Button({ children, className = "", variant = "default", size = "md", ...props }) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    default: "bg-transparent border  border-gray-400 text-black",
    ghost: "text-red-600 hover:bg-red-100 focus:ring-red-500 border border-red-300",
  }

  const sizes = {
    md: "px-6 py-3 text-sm",
    icon: "p-2",
  }

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// ================= HEADER =================
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const navigation = [
    { name: "Главная", href: "home" },
    { name: "Услуги", href: "services" },
    { name: "Портфолио", href: "portfolio" },
    { name: "О нас", href: "about" },
    { name: "Контакты", href: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate opacity and logo size based on scroll position
  const textOpacity = Math.max(0, 1 - scrollY / 100)
  const logoScale = 1 + (1 - textOpacity) * 0.5 // Scale from 1 to 1.5
  const isScrolled = scrollY > 20

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200/50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with animated text */}
          <div className="flex items-center">
            <ScrollLink
              to="home"
              smooth={true}
              duration={600}
              offset={-80}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <img 
                src={logo} 
                alt="logo" 
                className="rounded-full transition-all duration-300" 
                style={{
                  width: `${80 * logoScale}px`,
                  height: `${80 * logoScale}px`
                }}
              />
              <div 
                className="text-2xl font-bold text-gray-900 transition-all duration-300 overflow-hidden"
                style={{ 
                  opacity: textOpacity,
                  transform: `translateX(${(1 - textOpacity) * -20}px)`,
                  width: textOpacity > 0 ? 'auto' : '0px'
                }}
              >
                WebCode
              </div>
            </ScrollLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer text-sm font-medium transition-all duration-300 relative group text-gray-700 hover:text-red-600"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </ScrollLink>
            ))}
          </nav>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={700}
              offset={-80}
              className="cursor-pointer"
            >
              <Button>Заказать проект</Button>
            </ScrollLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-2xl rounded-b-lg shadow-md border-t border-gray-200">
              {navigation.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600 hover:bg-red-50 rounded-md transition-all duration-300 cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              ))}
              <div className="px-3 py-2">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={700}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer"
                >
                  <Button className="w-full">Заказать проект</Button>
                </ScrollLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}