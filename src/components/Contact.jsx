import React, { useState } from 'react'
import { Phone, Mail, MessageCircle, Clock, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    description: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const sendToTelegram = async (data) => {
    const botToken = '7383993129:AAFBhC-mFDAo6l5khq0Hmo8hY6Ey1q0LMYE'
    const chatId = '-1003081534567'
    
    const message = `
🆕 <b>Новая заявка с сайта!</b>

👤 <b>Имя:</b> ${data.name}
📞 <b>Телефон:</b> ${data.phone}
📧 <b>Email:</b> ${data.email || 'Не указан'}
🎯 <b>Тип проекта:</b> ${data.projectType || 'Не выбран'}
📝 <b>Описание:</b> ${data.description || 'Не указано'}

⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU')}
    `.trim()

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML'
        })
      })
      
      return response.ok
    } catch (error) {
      console.error('Error sending to Telegram:', error)
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone) {
      setSubmitStatus({ type: 'error', message: 'Пожалуйста, заполните обязательные поля' })
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const success = await sendToTelegram(formData)
      
      if (success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Заявка успешно отправлена! Мы свяжемся с вами в течение часа.' 
        })
        setFormData({
          name: '',
          phone: '',
          email: '',
          projectType: '',
          description: ''
        })
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: 'Произошла ошибка при отправке. Попробуйте еще раз или свяжитесь с нами напрямую.' 
        })
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Произошла ошибка при отправке. Попробуйте еще раз.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const projectTypes = [
    'Веб-сайт',
    'Мобильное приложение', 
    'Telegram-бот',
    'UI/UX Дизайн',
    'SEO продвижение',
    'Техподдержка',
    'E-commerce решение',
    'CRM система',
    'Другое'
  ]

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Телефон",
      value: "+998 90 000 00 00",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email", 
      value: "webcode.uz",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "Telegram",
      value: "@mihlievadmin",
      link: "https://t.me/mihlievadmin",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Режим работы",
      value: "Пн-Пт: 9:00-18:00",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Header */}
        <div className="text-center lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-sm font-semibold mb-8 uppercase tracking-wider shadow-md">
            Контакты
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Свяжитесь с нами
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение часа.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Оставить заявку
            </h3>
            
            {submitStatus && (
              <div className={`flex items-center gap-3 p-4 rounded-xl mb-6 ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <span className="text-sm font-medium">{submitStatus.message}</span>
              </div>
            )}
            
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-800 font-semibold mb-3">
                  Имя *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ваше имя"
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all hover:bg-gray-100"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-800 font-semibold mb-3">
                  Телефон *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+998 90 000 00 00"
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all hover:bg-gray-100"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-800 font-semibold mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all hover:bg-gray-100"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-gray-800 font-semibold mb-3">
                  Тип проекта
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all appearance-none cursor-pointer hover:bg-gray-100"
                >
                  <option value="" className="text-gray-800">Выберите тип проекта</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type} className="text-gray-800">{type}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-800 font-semibold mb-3">
                  Описание проекта
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Расскажите подробнее о вашем проекте, целях и требованиях..."
                  rows="6"
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all resize-none hover:bg-gray-100"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-white border border-gray-500 disabled:bg-gray-400 text-black font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Отправляем...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Отправить заявку
                  </>
                )}
              </button>

              <p className="text-sm text-gray-600 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Наши контакты</h3>
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`${item.color} ${item.bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform duration-200 border border-gray-100`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {item.label}
                    </h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`${item.color} hover:underline transition-colors font-medium`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Consultation Block */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Быстрая консультация
                </h3>
                <p className="mb-6 text-blue-100">
                  Получите бесплатную консультацию по вашему проекту прямо сейчас
                </p>
                <a
                  href="https://t.me/mihlievadmin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/20 backdrop-blur-sm  text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3  transform border border-white/30"
                >
                  <MessageSquare className="w-5 h-5" />
                  Написать в Telegram
                </a>
              </div>
            </div>

            {/* Office Address */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-red-600 bg-red-50 p-3 rounded-xl border border-gray-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Наш офис
                  </h4>
                  <p className="text-gray-700 mb-1">
                    ANFA CLINIC (АНФА КЛИНИК), Yunusabad D2, 100093, Tashkent, Узбекистан
                  </p>
                </div>
              </div>
              
              {/* Google Map */}
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d47913.84126175673!2d69.24236829696906!3d41.360719553379305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x38ae8ddaad6ffe8d%3A0x852c5599e99958ca!2zQU5GQSBDTElOSUMgKNCQ0J3QpNCQINCa0JvQmNCd0JjQmiksIFl1bnVzYWJhZCBEMiwgVGFzaGtlbnQ!3m2!1d41.360726899999996!2d69.2835678!4m5!1s0x38ae8ddaad6ffe8d%3A0x852c5599e99958ca!2sYunusabad%20D2%2C%20100093%2C%20Tashkent!3m2!1d41.360726899999996!2d69.2835678!5e0!3m2!1sru!2s!4v1757010908391!5m2!1sru!2s" 
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}