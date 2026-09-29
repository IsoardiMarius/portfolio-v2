import React from 'react';
import { motion } from 'framer-motion';
import { SkillGroup } from '../types/types';
import { fadeInUp, staggerContainer, skillVariant, skillHover } from '../animations/variants';

interface SkillsProps {
  skills: SkillGroup[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <motion.section 
      id="skills" 
      className="section"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>Compétences</h2>
      <motion.p
        className="section-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Technologies et pratiques mobilisées dans mes expériences professionnelles.
      </motion.p>
      <motion.div
        className="skill-groups"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map(group => (
          <motion.div key={group.id} className="skill-group" variants={skillVariant}>
            <h3>{group.title}</h3>
            <div className="skills-container">
              {group.items.map(item => (
                <motion.span key={item} className="skill" whileHover={skillHover}>
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
