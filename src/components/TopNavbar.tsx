import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TopNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('accueil');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  // Liste des sections du portfolio
  const sections = [
    { id: 'about', label: 'À propos' },
    { id: 'experience', label: 'Expérience' },
    { id: 'education', label: 'Formation' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'realisations', label: 'Réalisations' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    // Fonction pour détecter la section active lors du défilement
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Détecter quand on est près du bas de la page pour activer la section "contact"
      if (window.innerHeight + window.scrollY >= documentHeight - 200) {
        // Vérifions si la section de contact est visible
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          const contactRect = contactSection.getBoundingClientRect();
          // Si une partie de la section contact est visible, on l'active
          if (contactRect.top < windowHeight && contactRect.bottom > 0) {
            if (activeSection !== 'contact') {
              console.log('Section contact activée (visible en bas de page)');
              setActiveSection('contact');
            }
            return;
          }
        }
      }
      
      // Trouver la section actuellement visible
      const sectionsElements = document.querySelectorAll('section[id]');
      for (let i = sectionsElements.length - 1; i >= 0; i--) {
        const section = sectionsElements[i] as HTMLElement;
        if (section && scrollPosition >= section.offsetTop) {
          const id = section.getAttribute('id') ?? '';
          if (id && id !== activeSection) {
            console.log(`Section active détectée: ${id}`);
            setActiveSection(id);
          }
          break;
        }
      }
      
      // Si on est tout en haut, activer "accueil"
      if (scrollPosition < 100) {
        setActiveSection('accueil');
      }
    };

    // Fonction pour détecter les changements de taille d'écran
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && menuOpen) {
        setMenuOpen(false);
      }
    };

    // Fonction pour détecter les changements de hash dans l'URL
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Enlever le # du début
      if (hash) {
        console.log(`Hash URL détecté: ${hash}`);
        // Si le hash correspond à une section, l'activer
        const sectionIds = sections.map(section => section.id);
        if (sectionIds.includes(hash)) {
          setActiveSection(hash);
        } else if (hash === 'accueil') {
          setActiveSection('accueil');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('hashchange', handleHashChange);
    
    // Vérifier la section active au chargement
    handleScroll();
    
    // Vérifier si un hash est présent dans l'URL au chargement
    handleHashChange();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [activeSection, menuOpen, sections]);

  // Fonction pour naviguer vers une section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Défilement avec un peu d'espace en haut
        behavior: 'smooth'
      });
      setActiveSection(id);
      // Mettre à jour l'URL avec le hash de la section, mais sans rechargement
      window.history.pushState(null, '', `#${id}`);
      setMenuOpen(false);
    } else if (id === 'accueil') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setActiveSection('accueil');
      window.history.pushState(null, '', `#accueil`);
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      className="top-navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="top-navbar-container">

        {isMobile ? (
          <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        ) : (
          <div className="nav-links">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {section.label}
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Menu mobile qui s'affiche lorsqu'on clique sur le hamburger */}
      {isMobile && (
        <motion.div 
          className={`mobile-menu ${menuOpen ? 'open' : ''}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: menuOpen ? 1 : 0,
            height: menuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {sections.map((section) => (
            <motion.button
              key={section.id}
              className={`mobile-nav-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
              whileHover={{ x: 5 }}
              whileTap={{ x: 0 }}
            >
              {section.label}
            </motion.button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default TopNavbar; 