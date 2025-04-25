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
import Projects from './components/Projects';
import Realisations from './components/Realisations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';

// Données
import { experiences } from './data/experiences';
import { education } from './data/education';
import { skills } from './data/skills';
import { projects } from './data/projects';
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
          subtitle="Développeur Fullstack avec une forte sensibilité DevOps / Cloud."
          initials="MI"
        />

        <main className="main">
          <About>
            <p>Actuellement en poste chez <strong>Hexacoffre</strong> en tant que développeur fullstack.</p>

            <p>Je travaille sur des projets techniques mêlant backend, frontend et infrastructure. Certifié <strong>AWS
              Cloud Practitioner</strong>, je m'oriente activement vers les métiers du Cloud, avec l'objectif de monter
              en expertise.</p>

            <div className="stack-container">
              <p className="stack-title">Stack Dev :</p>
              <div className="stack-items">
                <span className="stack-item">Spring Boot</span>
                <span className="stack-item">Express</span>
                <span className="stack-item">Flask</span>
                <span className="stack-item">React</span>
                <span className="stack-item">Java</span>
                <span className="stack-item">JS</span>
                <span className="stack-item">TS</span>
                <span className="stack-item">Go</span>
                <span className="stack-item">gRPC</span>
                <span className="stack-item">Redis</span>
                <span className="stack-item">MySQL</span>
              </div>
            </div>

            <div className="stack-container">
              <p className="stack-title">Stack Ops :</p>
              <div className="stack-items">
                <span className="stack-item">Terraform</span>
                <span className="stack-item">Kubernetes</span>
                <span className="stack-item">Ansible</span>
                <span className="stack-item">Docker</span>
                <span className="stack-item">GitLab CI/CD</span>
                <span className="stack-item">GitHub Actions</span>
                <span className="stack-item">AWS</span>
                <span className="stack-item">Azure</span>
              </div>
            </div>

            <div className="stack-container">
              <p className="stack-title">Compétences transverses :</p>
              <div className="stack-items">
                <span className="stack-item">Gestion des priorités</span>
                <span className="stack-item">Gestion et coordination d'équipe</span>
                <span className="stack-item">Conception</span>
                <span className="stack-item">Prise d'initiative</span>
                <span className="stack-item">Adaptabilité</span>
              </div>
            </div>


            <p>Je privilégie un poste de <strong>Cloud Engineer</strong> tout en restant ouvert aux missions fullstack.
            </p>
          </About>

          <Experience experiences={experiences}/>
          <Education educationList={education}/>
          <Skills skills={skills}/>
          <Projects projects={projects}/>
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
