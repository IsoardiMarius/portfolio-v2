// Configuration centralisée des liens sociaux et informations de contact
// Ces données seront utilisées par divers composants (Contact, Navbar, etc.)

import React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
  icon: React.ReactNode;
  showInNavbar?: boolean;
  showInContact?: boolean;
}

// Icônes SVG pour les différentes plateformes
const icons = {
  home: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
    </svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  ),
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  )
};

// Données de contact principales
export const contactEmail = "isoardi.m@outlook.com";
export const contactMessage = "Je recherche une opportunité de Cloud Engineer, DevOps Engineer ou Platform Engineer. Pour échanger sur un poste ou une mission autour du cloud, de Kubernetes et de l'automatisation, contactez-moi via LinkedIn ou par email.";

// Liste des liens sociaux
export const socialLinks: SocialLink[] = [
  {
    name: "Accueil",
    url: "#",
    ariaLabel: "Accueil",
    icon: icons.home,
    showInNavbar: true,
    showInContact: false
  },
  {
    name: "GitHub",
    url: "https://github.com/IsoardiMarius",
    ariaLabel: "GitHub",
    icon: icons.github,
    showInNavbar: true,
    showInContact: false
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/marius-isoardi/",
    ariaLabel: "LinkedIn",
    icon: icons.linkedin,
    showInNavbar: true,
    showInContact: true
  },
  {
    name: "Email",
    url: `mailto:${contactEmail}`,
    ariaLabel: "Email",
    icon: icons.email,
    showInNavbar: true,
    showInContact: true
  },
];

// Filtres pour obtenir des sous-ensembles des liens
export const getNavbarLinks = () => socialLinks.filter(link => link.showInNavbar);
export const getContactLinks = () => socialLinks.filter(link => link.showInContact);
