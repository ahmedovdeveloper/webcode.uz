import React from 'react'
import { ExternalLink } from 'lucide-react'

export default function Project() {
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      category: "Веб-сайт",
      categoryColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      title: 'Интернет-магазин "Техно"',
      description: "Полнофункциональный магазин электроники с системой оплаты и современным дизайном",
      technologies: ["E-commerce", "React", "Node.js"],
      accent: "from-purple-400 to-pink-400"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
      category: "Мобильное приложение",
      categoryColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
      title: 'Мобильное приложение "FitTracker"',
      description: "Инновационное приложение для отслеживания фитнес-активности и здорового образа жизни",
      technologies: ["React Native", "Firebase", "Health"],
      accent: "from-emerald-400 to-teal-400"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      category: "Telegram-бот",
      categoryColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
      title: "Telegram-бот для ресторана",
      description: "Интеллектуальная автоматизация заказов и бронирования столиков для ресторанного бизнеса",
      technologies: ["Telegram API", "Python", "PostgreSQL"],
      accent: "from-blue-400 to-cyan-400"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      category: "Веб-сайт",
      categoryColor: "bg-gradient-to-r from-orange-500 to-red-500",
      title: "Сайт строительной компании",
      description: "Элегантный корпоративный сайт с каталогом услуг и впечатляющим портфолио проектов",
      technologies: ["WordPress", "PHP", "MySQL"],
      accent: "from-orange-400 to-red-400"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      category: "CRM система",
      categoryColor: "bg-gradient-to-r from-indigo-500 to-purple-500",
      title: "CRM для управления продажами",
      description: "Мощная система управления клиентами с продвинутой аналитикой и отчетностью",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      accent: "from-indigo-400 to-purple-400"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      category: "Веб-приложение",
      categoryColor: "bg-gradient-to-r from-rose-500 to-pink-500",
      title: "Платформа для обучения",
      description: "Современная онлайн-платформа с интерактивными курсами и системой тестирования",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      accent: "from-rose-400 to-pink-400"
    }
  ]

  const ProjectCard = ({ project, index }) => (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
      {/* Gradient Border Animation */}
      <div className={`absolute inset-0 bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
      
      <div className="relative z-10 bg-white rounded-3xl overflow-hidden">
        {/* Project Image */}
        <div className="relative overflow-hidden h-72">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500`}></div>
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <span className={`${project.categoryColor} text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm`}>
              {project.category}
            </span>
          </div>

          {/* Project Number */}
          <div className="absolute top-6 right-6">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* View Button */}
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <button className={`bg-gradient-to-r ${project.accent} hover:shadow-lg text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110`}>
              <ExternalLink className="w-6 h-6" />
            </button>
          </div>

          {/* Animated Dots */}
          <div className="absolute bottom-6 left-6 flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className={`w-2 h-2 bg-white/60 rounded-full transition-all duration-500 delay-${i * 100} group-hover:bg-white group-hover:scale-125`}
              ></div>
            ))}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Технологии:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-sm text-gray-700 bg-gray-100 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-600 hover:text-white px-3 py-1 rounded-full transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className={`h-1 bg-gradient-to-r ${project.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
      </div>
    </div>
  )

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r bg-black text-white rounded-full text-sm font-bold mb-8 uppercase tracking-wider shadow-lg">
            Портфолио
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black  mb-8 leading-tight">
            Наши работы
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Более 48 успешно реализованных проектов. Каждый проект — это уникальное решение, 
            созданное с вниманием к деталям и стремлением к совершенству.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}