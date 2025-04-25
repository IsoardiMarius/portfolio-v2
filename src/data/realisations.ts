import { Realisation } from '../types/types';
import React from "react";

export const realisations: Realisation[] = [
  {
    id: 'realisation1',
    name: 'Kuberquest',
    logo: 'K',
    displayName: '🌐 Conception d’un environnement Kubernetes cloud-native',
    period: 'Janvier 2025 - Avril 2025',
    location: 'Aix-en-Provence, France',
    description: React.createElement(React.Fragment, null,
        React.createElement('p', null, 'Projet visant à créer une architecture complète et automatisée autour de Kubernetes'),
        React.createElement('ul', { style: { paddingLeft: '20px' } },
            React.createElement('li', null, 'Déploiement d’un cluster Kubernetes multi-nœuds (Azure & Oracle Cloud)'),
            React.createElement('li', null, 'Mise en place de NGINX Ingress, Prometheus, Grafana, Kubernetes Dashboard, Loki'),
            React.createElement('li', null, 'Conversion d’une application Docker Compose en chart Helm'),
            React.createElement('li', null, 'Mise en œuvre d’un pipeline GitOps avec Kustomize et Helm'),
            React.createElement('li', null, 'Gestion de la sécurité avec OPA Gatekeeper, secrets Kubernetes, Dex OAuth Proxy'),
            React.createElement('li', null, 'Scénarios avancés de CI/CD : rollback, autoscaling, tests de résilience'),
            React.createElement('li', null, 'Infrastructure cloud provisionnée avec Terraform et optimisation des coûts'),
            React.createElement('li', null, 'Documentation technique complète et démonstrations live en soutenance')
        )
    )
  },
  {
    id: 'realisation2',
    name: 'InfraLab Azure',
    logo: 'A',
    displayName: '🌐 Déploiement automatisé d’infrastructures IaaS & PaaS sur Azure',
    period: 'Septembre 2024 - Décembre 2024',
    location: 'Aix-en-Provence, France',
    description: React.createElement(React.Fragment, null,
        React.createElement('p', null, 'Création d’un laboratoire cloud pour comparer et automatiser les infrastructures Azure'),
        React.createElement('ul', { style: { paddingLeft: '20px' } },
            React.createElement('li', null, 'Déploiement d’applications sur infrastructures IaaS (VMs) et PaaS (Azure Web App)'),
            React.createElement('li', null, 'Provisionnement des ressources Azure avec Terraform et gestion des états d’environnements'),
            React.createElement('li', null, 'Automatisation des installations serveur avec Ansible et déploiement applicatif Dockerisé'),
            React.createElement('li', null, 'Mise en place d’une CI pour la création et la publication d’images Docker'),
            React.createElement('li', null, 'Comparaison des coûts et performances entre modèles IaaS et PaaS'),
            React.createElement('li', null, 'Tests de charge et analyse des temps de réponse'),
            React.createElement('li', null, 'Rédaction de guides de déploiement et structuration de bonnes pratiques (tags, naming, reproductibilité)'),
            React.createElement('li', null, 'Optimisation des ressources cloud avec extinction automatique, stockage d’état, Terragrunt'),
            React.createElement('li', null, 'Implémentation d’une stratégie DevOps de gestion complète des environnements')
        )
    )
  }
];
