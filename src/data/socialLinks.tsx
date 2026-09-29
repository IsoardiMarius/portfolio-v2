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
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  ),
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  )
};

// Données de contact principales
export const contactEmail = "isoardi.m@outlook.com";
export const contactPhone = "+33 6 12 02 84 85";
export const contactMessage = "Vous pouvez me contacter par téléphone, par email ou via LinkedIn.";

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
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/marius-isoardi/",
    ariaLabel: "LinkedIn",
    icon: icons.linkedin,
    showInNavbar: true,
    showInContact: true
  },
  {
    name: contactEmail,
    url: `mailto:${contactEmail}`,
    ariaLabel: `Envoyer un email à ${contactEmail}`,
    icon: icons.email,
    showInNavbar: true,
    showInContact: true
  },
];

// Filtres pour obtenir des sous-ensembles des liens
export const getNavbarLinks = () => socialLinks.filter(link => link.showInNavbar);
export const getContactLinks = () => socialLinks.filter(link => link.showInContact);
