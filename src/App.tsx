import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// Contexte
import { useTheme } from './context/ThemeContext';

// Composants
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Realisations from './components/Realisations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';

// Données
import { experiences } from './data/experiences';
import { education } from './data/education';
import { skills } from './data/skills';
import { realisations } from './data/realisations';
import { contactMessage } from './data/socialLinks';

// Animations
import { pageTransition } from './animations/variants';

const App: React.FC = () => {
  const { darkMode } = useTheme();

  // Appliquer la classe dark/light à l'élément html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <TopNavbar />
      <motion.div
        className="container main-container"
        initial="hidden"
        animate="visible"
        variants={pageTransition}
      >
        <Header 
          name="Marius Isoardi"
          subtitle="Cloud & DevOps Engineer — Infrastructure as Code, Kubernetes, CI/CD et observabilité."
          initials="MI"
        />

        <main className="main">
          <About>
            <p>Ingénieur Cloud & DevOps basé à <strong>Paris</strong>, avec une expérience de développeur backend et fullstack acquise chez <strong>HexaCoffre</strong> et sur plusieurs architectures distribuées.</p>

            <p>Diplômé d'un <strong>Master Pro Cloud</strong>, je suis certifié <strong>Google Professional Cloud Developer</strong> et <strong>AWS Cloud Practitioner</strong>. Je conçois, automatise et exploite des plateformes conteneurisées en m'appuyant sur Kubernetes, Terraform, Ansible et des pipelines CI/CD.</p>

            <div className="stack-container">
              <p className="stack-title">Objectif professionnel :</p>
              <div className="stack-items">
                <span className="stack-item">Cloud Engineer</span>
                <span className="stack-item">DevOps Engineer</span>
                <span className="stack-item">Platform Engineer</span>
              </div>
            </div>
          </About>

          <Experience experiences={experiences}/>
          <Education educationList={education}/>
          <Skills skills={skills}/>
          <Realisations realisations={realisations}/>
          <Contact message={contactMessage}/>
        </main>

        <Footer/>
      </motion.div>
      <Navbar/>

    </div>
  );
};

export default App;
