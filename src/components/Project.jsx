import React from 'react'
import { ExternalLink } from 'lucide-react'

export default function Project() {
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      category: "Веб-сайт",
      categoryColor: "bg-yellow-500",
      title: 'Интернет-магазин "Техно"',
      description: "Полнофункциональный магазин электроники с системой оплаты",
      technologies: ["E-commerce", "React", "Node.js"]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
      category: "Мобильное приложение",
      categoryColor: "bg-green-500",
      title: 'Мобильное приложение "FitTracker"',
      description: "Приложение для отслеживания фитнес-активности",
      technologies: ["React Native", "Firebase", "Health"]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      category: "Telegram-бот",
      categoryColor: "bg-blue-500",
      title: "Telegram-бот для ресторана",
      description: "Автоматизация заказов и бронирования столиков",
      technologies: ["Telegram API", "Python", "PostgreSQL"]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      category: "Веб-сайт",
      categoryColor: "bg-purple-500",
      title: "Сайт строительной компании",
      description: "Корпоративный сайт с каталогом услуг и портфолио",
      technologies: ["WordPress", "PHP", "MySQL"]
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      category: "CRM система",
      categoryColor: "bg-indigo-500",
      title: "CRM для управления продажами",
      description: "Система управления клиентами и аналитикой продаж",
      technologies: ["Vue.js", "Laravel", "MySQL"]
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      category: "Веб-приложение",
      categoryColor: "bg-cyan-500",
      title: "Платформа для обучения",
      description: "Онлайн-платформа с курсами и системой тестирования",
      technologies: ["Next.js", "Prisma", "PostgreSQL"]
    }
  ]

  const ProjectCard = ({ project }) => (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`${project.categoryColor} text-white text-sm font-semibold px-3 py-1 rounded-full`}>
            {project.category}
          </span>
        </div>

        {/* View Button */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
           <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full text-sm font-medium text-red-600 mb-6 uppercase tracking-wider">
            Портфолио
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Наши работы
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Более 48 успешно реализованных проектов. Каждый проект — это уникальное решение для конкретного бизнеса.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}