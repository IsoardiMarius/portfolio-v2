import React from 'react';
import { Experience } from '../types/types';

export const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'Igaar',
    logo: 'I',
    role: '🌐 Co-fondateur',
    period: 'Août 2024 - Aujourd\'hui',
    location: 'Aix-en-Provence, Provence-Alpes-Côte d\'Azur, France',
    richDescription: (
        <ul>
          <li>Développement d’une application de vidéosurveillance intelligente pour entreprises, connectée à un moteur d’IA détectant des incidents critiques (intrusions, incendies, anomalies)</li>
          <li>Développement d’une REST API (Spring Boot, PostgreSQL, Redis) et de microservices spécialisés (Go pour la vidéo, Flask pour l’IA)</li>
          <li>Utilisation de WebSockets pour la synchronisation en temps réel</li>
          <li>Intégration AWS (SQS, SNS, SES) pour les alertes et notifications</li>
          <li>Coordination technique interservices et application des bonnes pratiques DevOps, SOLID et Clean Architecture</li>
        </ul>
    )
  },
  {
    id: 'exp2',
    company: 'HexaCoffre',
    logo: 'H',
    role: '🌐 Développeur Full Stack',
    period: 'Décembre 2023 - Aujourd\'hui',
    location: 'Marseille, Provence-Alpes-Côte d\'Azur, France · Hybride',
    richDescription: (
        <ul>
          <li>Modernisation d’une application Android de gestion d’armement utilisée par plusieurs services municipaux (Java / XML)</li>
          <li>Maintenance corrective et évolutive, coordination avec les fournisseurs hardware</li>
          <li>Développement d’Opsoweb, une application métier web (Spring Boot, React) à destination des polices municipales</li>
          <li>Participation à la conception technique, encadrement ponctuel d’alternants</li>
          <li>Collaboration étroite avec les équipes métier et gestion des priorités et livrables</li>
        </ul>
    )
  },
  {
    id: 'exp5',
    company: 'Your Job',
    logo: 'Y',
    role: '🌐 Développeur Frontend Freelance',
    period: 'Jan 2025 - Mars 2025',
    location: 'À distance',
    richDescription: (
        <ul>
          <li>Développement du frontend d’une application web de recherche d’emploi</li>
          <li>Initialisation complète du projet avec React et TypeScript</li>
          <li>Application des principes SOLID et Clean Architecture</li>
          <li>Intégration pixel-perfect des maquettes fournies</li>
          <li>Création de composants UI réutilisables, optimisation des performances</li>
          <li>Collaboration directe avec le client pour les ajustements fonctionnels</li>
        </ul>
    )
  },
  {
    id: 'exp3',
    company: 'Digital Express',
    logo: 'D',
    role: '🌐 Développeur Full Stack Freelance',
    period: 'Fév 2023 - Déc 2023',
    location: 'Aix-en-Provence, Provence-Alpes-Côte d\'Azur, France · À distance',
    richDescription: (
        <ul>
          <li>Conception et développement d’une solution SaaS sur mesure pour un restaurant</li>
          <li>Mise en place de l’environnement de prod/dev, dockerisation, déploiement automatisé avec Ansible</li>
          <li>Intégration de CI/CD, développement full stack en React, Node.js, Prisma, MySQL</li>
          <li>Création d’une UI Library réutilisable, optimisation SEO et performance</li>
        </ul>
    )
  },
  {
    id: 'exp4',
    company: 'Subclic',
    logo: 'S',
    role: '🌐 Développeur Full Stack',
    period: 'Jan 2023 - Déc 2023',
    location: 'Marseille, Provence-Alpes-Côte d\'Azur, France',
    richDescription: (
        <ul>
          <li>Conception et développement d’une API publique basée sur gRPC pour faciliter l’intégration des services de la plateforme</li>
          <li>Développement en Ruby on Rails et gRPC, gestion d’une base de données complexe</li>
          <li>Compatibilité avec les systèmes existants, rédaction de tests automatisés</li>
          <li>Maintenance et évolution d’une application legacy : débogage, optimisation continue, ajout de nouvelles fonctionnalités</li>
        </ul>
    )
  }
];
