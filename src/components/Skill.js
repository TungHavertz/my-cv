// src/components/Skills.js
import React from 'react';
import '../styles/skills.css';
import SkillsItem from '../itemComponents/SkillItem.js'; // Đường dẫn tùy thuộc thư mục bạn chọn
import skillsData from '../data/skillData.js';

function Skills({ setModal }) {
  const handleSkillClick = (skill) => {
    setModal(skill);
  };

  return (
    <div className="d-flex justify-content-center skill-wrap">
      <div className="d-flex flex-column align-items-start">
        <h1>Skills</h1>
        <div className="row gy-4">
          {skillsData.map((skill, index) => (
            <SkillsItem
              key={index}
              title={skill.title}
              icon={skill.icon}
              modalKey={skill.modalKey}
              onSkillClick={handleSkillClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;