import React from 'react'
import { Users, Zap, DollarSign, Palette, Clock, Shield } from 'lucide-react'

export default function About() {
  const features = [
    {
      id: 1,
      icon: <Users className="w-8 h-8" />,
      title: "Опытная команда",
      description: "Профессиональные разработчики с опытом 5+ лет в создании качественных решений",
      color: "from-blue-500 to-blue-600",
      lightBg: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      icon: <Zap className="w-8 h-8" />,
      title: "Быстрая разработка",
      description: "Используем современные технологии и методологии для ускорения процесса разработки",
      color: "from-purple-500 to-purple-600",
      lightBg: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      id: 3,
      icon: <DollarSign className="w-8 h-8" />,
      title: "Доступные цены",
      description: "Честные и прозрачные цены без скрытых платежей и неожиданных переплат",
      color: "from-green-500 to-green-600",
      lightBg: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      id: 4,
      icon: <Palette className="w-8 h-8" />,
      title: "Уникальный дизайн",
      description: "Создаём индивидуальный и запоминающийся дизайн, отражающий ваш бренд",
      color: "from-pink-500 to-pink-600",
      lightBg: "bg-pink-50",
      textColor: "text-pink-600"
    },
    {
      id: 5,
      icon: <Clock className="w-8 h-8" />,
      title: "Соблюдение сроков",
      description: "Гарантируем выполнение проекта точно в оговорённые сроки с высоким качеством",
      color: "from-orange-500 to-orange-600",
      lightBg: "bg-orange-50",
      textColor: "text-orange-600"
    },
    {
      id: 6,
      icon: <Shield className="w-8 h-8" />,
      title: "Гарантия качества",
      description: "Предоставляем 6 месяцев бесплатной поддержки и исправлений после сдачи",
      color: "from-emerald-500 to-emerald-600",
      lightBg: "bg-emerald-50",
      textColor: "text-emerald-600"
    }
  ]

  const FeatureCard = ({ feature }) => (
    <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* Hover background effect */}
      <div className={`absolute inset-0 ${feature.lightBg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6">
          <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <div className="text-white">
              {feature.icon}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-xl lg:text-2xl font-bold text-gray-900 group-hover:${feature.textColor} mb-4 transition-colors duration-300`}>
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
    </div>
  )

  return (
    <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/6 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-sm font-semibold mb-8 uppercase tracking-wider shadow-md">
            О компании
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Почему выбирают WebCode?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Мы создаём IT-решения, которые помогают бизнесу расти. Наша миссия — сделать технологии доступными для каждого предпринимателя.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

      </div>
    </section>
  )
}