import React from 'react'
import { Code2, MessageCircle, Instagram, Phone, Mail, Link } from 'lucide-react'
import logo from "../assets/logo.jpg"
import { Link as ScrollLink } from "react-scroll"

export default function Footer() {
  const services = [
    "Веб-сайты",
    "Мобильные приложения", 
    "Telegram-боты",
    "UI/UX Дизайн",
    "SEO продвижение"
  ]

  const company = [
    "О нас",
    "Портфолио",
    "Блог", 
    "Карьера",
    "Контакты"
  ]

  const contacts = [
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+998 90 000 00 00"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "webcode.uz"
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      text: "@mihlievadmin"
    }
  ]

  const socialLinks = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://t.me/mihlievadmin",
      label: "Telegram"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/webcode.uz/",
      label: "Instagram"
    }
  ]

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1 hover:cursor-auto">
            <p className="text-gray-300 mb-6 lg:mb-8 leading-relaxed">
              Создаём IT-решения, которые помогают бизнесу расти. Ваш надёжный партнер в мире технологий.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white hover:text-black text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 lg:mb-6 text-white">Услуги</h3>
            <ul className="space-y-3 lg:space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base flex items-center group"
                  >
                    <span className="w-2 h-2 bg-white rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 lg:mb-6 text-white">Компания</h3>
            <ul className="space-y-3 lg:space-y-4">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base flex items-center group"
                  >
                    <span className="w-2 h-2 bg-white rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-4 lg:mb-6 text-white">Контакты</h3>
            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base hover:text-white transition-colors duration-300 group">
                  <div className="text-white group-hover:scale-110 transition-transform duration-200">
                    {contact.icon}
                  </div>
                  {contact.text.includes('@') ? (
                    <a 
                      href={`https://t.me/${contact.text.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span>{contact.text}</span>
                  )}
                </div>
              ))}
            </div>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={700}
              offset={-80}
              className="w-full block cursor-pointer"
            >
              <button className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200">
                Заказать проект
              </button>
            </ScrollLink>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 lg:mt-16 pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <p className="text-gray-400 text-sm">
              © 2025 WebCode Studio. Все права защищены.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <a 
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Политика конфиденциальности
              </a>
              <a 
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}