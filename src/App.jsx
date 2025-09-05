import React, { useEffect } from 'react'
import { Header } from './components/Header'
import Banner from './components/Banner'
import Services from './components/Service'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    // Включаем плавный скролл для всего документа
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // При загрузке страницы скроллим в начало
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    
    // Очистка при размонтировании компонента
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="app">
      {/* Фиксированный header */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 1000,
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <Header />
      </div>
      
      {/* Основной контент с отступом под header */}
      <div style={{ paddingTop: '80px' }}> {/* Измените 80px на высоту вашего header */}
        <section id="home">
          <Banner />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="portfolio">
          <Project />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
        <Footer />
      </div>
    </div>
  )
}

export default App