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
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';

// Données
import { experiences } from './data/experiences';
import { education } from './data/education';
import { skills } from './data/skills';
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
          subtitle="Ingénieur Infrastructure | Cloud & DevOps"
          initials="MI"
        />

        <main className="main">
          <About>
            <p>J'ai débuté côté développement avant de me tourner progressivement vers les systèmes, l'infrastructure, le cloud et le DevOps.</p>

            <p>Un fil conducteur relie ces étapes : <strong>l'automatisation</strong>. Ce qui me plaît, c'est de rendre les déploiements reproductibles, réduire les manipulations manuelles et fiabiliser l'exploitation au quotidien.</p>

            <p>À l'<strong>ESSEC</strong>, je conçois et fais évoluer des infrastructures on-premise et GCP dans cette même logique. J'aime porter un sujet de bout en bout, des choix d'architecture jusqu'au code, puis à l'exploitation.</p>

            <p>J'accorde aussi une vraie importance à la documentation et à la passation. Pour moi, un travail n'est terminé que lorsque l'équipe peut le comprendre, le reprendre et le faire évoluer en autonomie.</p>
          </About>

          <Experience experiences={experiences}/>
          <Education educationList={education}/>
          <Skills skills={skills}/>
          <Contact message={contactMessage}/>
        </main>

        <Footer/>
      </motion.div>
      <Navbar/>

    </div>
  );
};

export default App;
