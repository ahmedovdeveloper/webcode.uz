import React from 'react'
import { 
  Globe, 
  Smartphone, 
  MessageSquare, 
  Palette, 
  Search, 
  Headphones, 
  ArrowRight,
  Star
} from 'lucide-react'

// Mock ScrollLink for demo
function ScrollLink({ to, children, className, ...props }) {
  return (
    <a 
      href={`#${to}`} 
      className={className}
      onClick={(e) => e.preventDefault()}
      {...props}
    >
      {children}
    </a>
  )
}

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <Globe className="w-8 h-8" />,
      title: "Веб-сайты",
      description: "Landing pages, интернет-магазины, корпоративные сайты",
      features: [
        "Адаптивный дизайн",
        "SEO-оптимизация", 
        "Быстрая загрузка"
      ],
      duration: "7-14 дней",
      price: "от 50 000 ₽",
      popular: false
    },
    {
      id: 2,
      icon: <Smartphone className="w-8 h-8" />,
      title: "Мобильные приложения",
      description: "iOS и Android приложения для вашего бизнеса",
      features: [
        "Нативная разработка",
        "Push-уведомления",
        "Интеграция с API"
      ],
      duration: "21-45 дней",
      price: "от 150 000 ₽",
      popular: true
    },
    {
      id: 3,
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Telegram-боты",
      description: "Автоматизация бизнеса через Telegram bot",
      features: [
        "Приём платежей",
        "CRM интеграция",
        "Автоответчик"
      ],
      duration: "5-10 дней",
      price: "от 25 000 ₽",
      popular: false
    },
    {
      id: 4,
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Дизайн",
      description: "Современный дизайн и пользовательский опыт",
      features: [
        "Прототипирование",
        "Брендинг",
        "Дизайн-система"
      ],
      duration: "7-14 дней",
      price: "от 30 000 ₽",
      popular: false
    },
    {
      id: 5,
      icon: <Search className="w-8 h-8" />,
      title: "SEO продвижение",
      description: "Выведем ваш сайт в топ поисковых систем",
      features: [
        "Техническое SEO",
        "Контент-маркетинг",
        "Аналитика"
      ],
      duration: "Постоянно",
      price: "от 20 000 ₽/мес",
      popular: false
    },
    {
      id: 6,
      icon: <Headphones className="w-8 h-8" />,
      title: "Техподдержка",
      description: "24/7 поддержка и обслуживание ваших проектов",
      features: [
        "Мониторинг",
        "Обновления",
        "Резервное копирование"
      ],
      duration: "Постоянно",
      price: "от 5 000 ₽/мес",
      popular: false
    }
  ]

  const ServiceCard = ({ service }) => (
    <div className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border ${
      service.popular 
        ? 'border-red-500 shadow-lg scale-105' 
        : 'border-gray-200 hover:border-red-200 shadow-md'
    }`}>
      
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute -top-3 left-6">
          <span className="bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" />
            Популярно
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>

      {/* Duration and Price */}
      <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-xl">
        <div>
          <span className="text-gray-500 text-sm block">Срок</span>
          <span className="font-semibold text-gray-900">{service.duration}</span>
        </div>
        <div className="text-right">
          <span className="text-gray-500 text-sm block">Стоимость</span>
          <span className="font-bold text-xl text-red-500">{service.price}</span>
        </div>
      </div>

      {/* CTA Button */}
      <ScrollLink
        to="contact"
        className="cursor-pointer block"
      >
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group">
          Заказать проект
        </button>
      </ScrollLink>
    </div>
  )

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Наши услуги
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Полный спектр IT-услуг для развития вашего бизнеса. От идеи до готового продукта.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}