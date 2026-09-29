import { SkillGroup } from '../types/types';

export const skills: SkillGroup[] = [
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure as Code',
    items: ['Google Cloud', 'AWS', 'Azure', 'Oracle Cloud', 'Terraform', 'Terragrunt', 'Ansible']
  },
  {
    id: 'containers',
    title: 'Conteneurs & orchestration',
    items: ['Kubernetes', 'Docker', 'Helm', 'Kustomize', 'NGINX Ingress', 'GitOps']
  },
  {
    id: 'delivery',
    title: 'CI/CD & exploitation',
    items: ['GitLab CI/CD', 'GitHub Actions', 'Linux', 'Prometheus', 'Grafana', 'Loki']
  },
  {
    id: 'security',
    title: 'Sécurité des plateformes',
    items: ['OPA Gatekeeper', 'Kubernetes Secrets', 'OAuth2', 'Dex']
  },
  {
    id: 'backend',
    title: 'Backend & systèmes distribués',
    items: ['Java', 'Spring Boot', 'Go', 'Python', 'REST', 'gRPC', 'PostgreSQL', 'Redis']
  }
];
