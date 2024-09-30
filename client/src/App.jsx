import { useRef ,useEffect} from 'react'

import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import Home from './components/body/Home'
import About from './components/body/About'
import Skills from './components/body/Skills'
import Contact from './components/body/Contact'
import Project from './components/body/Project'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const sectionsRef = useRef([]);


  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('fade-in-visible');
              } else {
                  entry.target.classList.remove('fade-in-visible'); // Optional: remove when out of view
              }
          });
      }, { threshold: 0.1 });

      sectionsRef.current.forEach((section) => observer.observe(section));

      // Cleanup observer on unmount
      return () => observer.disconnect();
  }, []);

  

  return (
    <div className="app-container">
      <header id="header">
          <Header/>
      </header>

      <main id="body-content">
        <div ref={(el) => (sectionsRef.current[0] = el)} id="home" className='fade-in-element'>
          <Home/>
        </div>
        <div ref={(el) => (sectionsRef.current[1] = el)} id="about" className='fade-in-element'>
          <About/>
        </div>
        <div ref={(el) => (sectionsRef.current[2] = el)} id="skills" className='fade-in-element'>
          <Skills/>
        </div>
        <div ref={(el) => (sectionsRef.current[3] = el)} id="projects" className='fade-in-element'>
          <Project/>
        </div>
        <div ref={(el) => (sectionsRef.current[4] = el)} id="contact" className='fade-in-element'>
          <Contact/>
        </div>
      </main>
      <footer id="footer">
          <Footer/>
      </footer>

    </div>
  )
}

export default App
