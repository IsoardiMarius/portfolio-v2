import { SkillGroup } from '../types/types';

export const skills: SkillGroup[] = [
  {
    id: 'infrastructure',
    title: 'Infrastructure & Cloud',
    items: ['GCP', 'VMware vSphere', 'Terraform', 'Ansible', 'Packer', 'Veeam']
  },
  {
    id: 'systems',
    title: 'Systèmes & automatisation',
    items: ['Linux', 'Bash', 'Python', 'PowerShell', 'Vault', 'GitLab']
  },
  {
    id: 'data',
    title: 'Données & services cloud',
    items: ['PostgreSQL', 'Redis', 'Cloud SQL', 'Filestore', 'AWS SQS', 'AWS SNS', 'AWS SES']
  },
  {
    id: 'development',
    title: 'Développement',
    items: ['Java', 'Spring Boot', 'React', 'Go', 'Flask', 'Ruby on Rails', 'REST', 'gRPC', 'WebSockets']
  },
  {
    id: 'practices',
    title: 'Architecture & exploitation',
    items: ['IAM', 'Backup & Disaster Recovery', 'Haute disponibilité', 'DevOps', 'SOLID', 'Clean Architecture', 'Agile Scrum']
  }
];
