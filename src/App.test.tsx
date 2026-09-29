import { education } from './data/education';
import { experiences } from './data/experiences';
import { skills } from './data/skills';
import { socialLinks } from './data/socialLinks';

test('contient uniquement les informations du CV', () => {
  expect(education).toEqual(expect.arrayContaining([
    expect.objectContaining({
      institution: 'Google',
      degree: 'Professional Cloud Developer Certification',
      period: 'Émise en février 2026 - Expire en février 2028'
    }),
    expect.objectContaining({
      institution: 'Amazon Web Services (AWS)',
      degree: 'AWS Certified Cloud Practitioner',
      period: 'Émise en septembre 2024 - Expire en septembre 2027'
    })
  ]));

  expect(socialLinks.find(link => link.name === 'LinkedIn')?.url)
    .toBe('https://www.linkedin.com/in/marius-isoardi/');

  expect(skills).toEqual(expect.arrayContaining([
    expect.objectContaining({ title: 'Infrastructure & Cloud' }),
    expect.objectContaining({ title: 'Systèmes & automatisation' }),
    expect.objectContaining({ title: 'Données & services cloud' })
  ]));

  expect(experiences[0]).toEqual(expect.objectContaining({
    company: 'ESSEC Business School',
    role: 'Ingénieur Infrastructure | Cloud & DevOps',
    period: 'Mars 2026 - Aujourd’hui'
  }));
  expect(experiences.some(experience => experience.company === 'Digital Express')).toBe(false);
});
