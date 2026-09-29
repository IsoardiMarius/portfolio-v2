import React from 'react';
import { Experience } from '../types/types';

export const experiences: Experience[] = [
  {
    id: 'essec',
    company: 'ESSEC Business School',
    logo: 'E',
    role: 'Ingénieur Infrastructure | Cloud & DevOps',
    period: 'Mars 2026 - Aujourd’hui',
    location: 'Ville de Paris, Île-de-France, France · Hybride',
    richDescription: (
      <ul>
        <li>Conception d’une factory de VM Ubuntu avec Ansible et Packer sur VMware vSphere multi-vCenter, automatisant le provisioning, la configuration et le décommissionnement des serveurs</li>
        <li>Automatisation du cycle de vie des VM : IPAM/DNS, Linux/LVM, certificats, contrôles de conformité et intégration sécurité/supervision</li>
        <li>Déploiement d’un cluster HashiCorp Vault HA et d’une plateforme GitLab self-managed, avec gestion des accès, secrets, sauvegarde et restauration</li>
        <li>Conception et déploiement avec Terraform d’une infrastructure sur GCP : Cloud SQL PostgreSQL, Redis, Filestore, VM et connectivité privée</li>
        <li>Mise en place d’une stratégie Backup & Disaster Recovery avec PITR, rétention, immutabilité et procédures de restauration applicative</li>
        <li>Contribution à la haute disponibilité, la sécurité IAM, l’automatisation et l’optimisation des performances PostgreSQL</li>
      </ul>
    )
  },
  {
    id: 'hexacoffre',
    company: 'HexaCoffre',
    logo: 'H',
    role: 'Développeur Full Stack',
    period: 'Décembre 2023 - Décembre 2025',
    location: 'Marseille, Provence-Alpes-Côte d’Azur, France · Hybride',
    richDescription: (
      <ul>
        <li>Modernisation d’une application Android de gestion d’armement utilisée par plusieurs services municipaux (Java / XML)</li>
        <li>Maintenance corrective et évolutive, coordination avec les fournisseurs hardware</li>
        <li>Développement d’Opsoweb, une application métier web (Spring Boot, React) à destination des polices municipales</li>
        <li>Participation à la conception technique, encadrement ponctuel d’alternants</li>
        <li>Collaboration étroite avec les équipes métier, gestion des priorités et livrables</li>
      </ul>
    )
  },
  {
    id: 'igaar',
    company: 'Igaar',
    logo: 'I',
    role: 'Ingénieur Logiciel | Cloud & DevOps · Indépendant',
    period: 'Janvier 2024 - Juillet 2025',
    location: 'Aix-en-Provence, Provence-Alpes-Côte d’Azur, France · À distance',
    richDescription: (
      <ul>
        <li>Développement d’une application de vidéosurveillance intelligente pour entreprises, connectée à un moteur d’IA détectant des incidents critiques (intrusions, incendies, anomalies)</li>
        <li>Développement d’une REST API (Spring Boot, PostgreSQL, Redis) et de microservices spécialisés (Go pour la vidéo, Flask pour l’IA)</li>
        <li>Utilisation de WebSockets pour la synchronisation en temps réel</li>
        <li>Intégration AWS (SQS, SNS, SES) pour les alertes et notifications</li>
        <li>Coordination technique interservices et application des bonnes pratiques DevOps, SOLID et Clean Architecture</li>
        <li>Responsabilités transverses liées au rôle de co-fondateur : gestion de projet, coordination d’équipe et choix technologiques stratégiques</li>
      </ul>
    )
  },
  {
    id: 'subclic',
    company: 'Subclic',
    logo: 'S',
    role: 'Développeur Full Stack',
    period: 'Janvier 2023 - Décembre 2023',
    location: 'Marseille, Provence-Alpes-Côte d’Azur, France',
    richDescription: (
      <ul>
        <li>Conception et développement d’une API publique basée sur gRPC pour faciliter l’intégration des services de la plateforme</li>
        <li>Développement en Ruby on Rails et gRPC, gestion d’une base de données complexe</li>
        <li>Compatibilité avec les systèmes existants, rédaction de tests automatisés</li>
        <li>Maintenance et évolution d’une application legacy : débogage, optimisation continue et ajout de nouvelles fonctionnalités</li>
        <li>Travail en équipe selon la méthodologie Agile Scrum, avec participation active aux rituels (daily scrums, sprint reviews, etc.)</li>
      </ul>
    )
  }
];
