import React from 'react'
import { Users, Zap, DollarSign, Palette, Clock, Shield } from 'lucide-react'

export default function About() {
  const features = [
    {
      id: 1,
      icon: <Users className="w-8 h-8" />,
      title: "Опытная команда",
      description: "Профессиональные разработчики с опытом 5+ лет"
    },
    {
      id: 2,
      icon: <Zap className="w-8 h-8" />,
      title: "Быстрая разработка",
      description: "Используем современные технологии для ускорения процесса"
    },
    {
      id: 3,
      icon: <DollarSign className="w-8 h-8" />,
      title: "Доступные цены",
      description: "Честные цены без скрытых платежей и переплат"
    },
    {
      id: 4,
      icon: <Palette className="w-8 h-8" />,
      title: "Уникальный дизайн",
      description: "Создаём индивидуальный дизайн под ваш бренд"
    },
    {
      id: 5,
      icon: <Clock className="w-8 h-8" />,
      title: "Соблюдение сроков",
      description: "Гарантируем выполнение проекта в оговорённые сроки"
    },
    {
      id: 6,
      icon: <Shield className="w-8 h-8" />,
      title: "Гарантия качества",
      description: "6 месяцев бесплатной поддержки после сдачи проекта"
    }
  ]

  const FeatureCard = ({ feature }) => (
    <div className="group hover:cursor-pointer relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100/50 backdrop-blur-sm">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <div className="text-white">
              {feature.icon}
            </div>
          </div>
          {/* Icon glow effect */}
          <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {feature.description}
        </p>
      </div>

      {/* Subtle border animation */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </div>
  )

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full text-sm font-medium text-red-600 mb-6 uppercase tracking-wider">
            О компании
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
            Почему выбирают WebCode?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Мы создаём IT-решения, которые помогают бизнесу расти. Наша миссия — сделать технологии доступными для каждого предпринимателя.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}