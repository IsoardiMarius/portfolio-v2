import React from 'react';
import { Experience } from '../types/types';

export const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'Igaar',
    logo: 'I',
    role: 'Co-fondateur',
    period: 'Août 2024 - Aujourd\'hui',
    location: 'Aix-en-Provence, Provence-Alpes-Côte d\'Azur, France',
    richDescription: (
        <ul>
          <li>Conception d’une architecture distribuée de vidéosurveillance et de détection d’incidents en temps réel</li>
          <li>Développement de microservices en Spring Boot, Go et Python, avec PostgreSQL et Redis</li>
          <li>Intégration de services AWS (SQS, SNS, SES) pour les traitements asynchrones et les notifications</li>
          <li>Coordination interservices, résilience applicative et mise en œuvre de pratiques DevOps</li>
        </ul>
    )
  },
  {
    id: 'exp2',
    company: 'HexaCoffre',
    logo: 'H',
    role: 'Développeur Full Stack',
    period: 'Décembre 2023 - Aujourd\'hui',
    location: 'Marseille, Provence-Alpes-Côte d\'Azur, France · Hybride',
    richDescription: (
        <ul>
          <li>Conception et évolution d’applications métier critiques en Java et Spring Boot</li>
          <li>Maintenance corrective, gestion des environnements et coordination avec les fournisseurs matériels</li>
          <li>Participation aux choix techniques, à la planification des livraisons et à l’encadrement d’alternants</li>
        </ul>
    )
  },
  {
    id: 'exp3',
    company: 'Digital Express',
    logo: 'D',
    role: 'Développeur Full Stack Freelance',
    period: 'Fév 2023 - Déc 2023',
    location: 'Aix-en-Provence, Provence-Alpes-Côte d\'Azur, France · À distance',
    richDescription: (
        <ul>
          <li>Conception et développement d’une solution SaaS sur mesure pour un restaurant</li>
          <li>Création des environnements de développement et de production avec Docker</li>
          <li>Automatisation des déploiements avec Ansible et mise en place d’une chaîne CI/CD</li>
          <li>Administration Linux, reverse proxy NGINX et suivi des performances applicatives</li>
        </ul>
    )
  },
  {
    id: 'exp4',
    company: 'Subclic',
    logo: 'S',
    role: 'Développeur Full Stack',
    period: 'Jan 2023 - Déc 2023',
    location: 'Marseille, Provence-Alpes-Côte d\'Azur, France',
    richDescription: (
        <ul>
          <li>Conception et développement d’une API publique basée sur gRPC pour faciliter l’intégration des services de la plateforme</li>
          <li>Gestion des échanges interservices et de la compatibilité avec les systèmes existants</li>
          <li>Tests automatisés, débogage et optimisation continue d’une application en production</li>
        </ul>
    )
  }
];
