import { SkillGroup } from '../types/types';

export const skills: SkillGroup[] = [
  {
    id: 'cloud',
    title: 'Cloud & virtualisation',
    items: ['GCP', 'AWS', 'VMware vSphere']
  },
  {
    id: 'automation',
    title: 'Infrastructure as Code & automatisation',
    items: ['Terraform', 'Ansible', 'Packer', 'Bash', 'Python', 'PowerShell']
  },
  {
    id: 'platforms',
    title: 'Systèmes & plateformes',
    items: ['Linux', 'HashiCorp Vault', 'GitLab', 'Veeam', 'IPAM / DNS', 'LVM']
  },
  {
    id: 'resilience',
    title: 'Données, sécurité & résilience',
    items: ['PostgreSQL', 'Redis', 'Cloud SQL', 'IAM', 'Backup & Disaster Recovery', 'PITR']
  }
];
