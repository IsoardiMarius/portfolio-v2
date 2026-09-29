import { education } from './data/education';
import { skills } from './data/skills';
import { socialLinks } from './data/socialLinks';

test('contient les informations LinkedIn à jour', () => {
  expect(education).toEqual(expect.arrayContaining([
    expect.objectContaining({
      institution: 'Google',
      degree: 'Professional Cloud Developer Certification',
      period: 'Février 2026 - Février 2028'
    }),
    expect.objectContaining({
      institution: 'Amazon Web Services (AWS)',
      degree: 'AWS Certified Cloud Practitioner',
      period: 'Septembre 2024 - Septembre 2027'
    })
  ]));

  expect(socialLinks.find(link => link.name === 'LinkedIn')?.url)
    .toBe('https://www.linkedin.com/in/marius-isoardi/');

  expect(skills).toEqual(expect.arrayContaining([
    expect.objectContaining({ title: 'Cloud & Infrastructure as Code' }),
    expect.objectContaining({ title: 'Conteneurs & orchestration' }),
    expect.objectContaining({ title: 'CI/CD & exploitation' })
  ]));
});
