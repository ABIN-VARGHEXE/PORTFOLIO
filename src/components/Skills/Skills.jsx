import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../../public/data/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section id='skills' className="skills-container">
      <Fade direction='up'delay={450} triggerOnce= {true} duration={750}>
      <h5>Technical Proficiency</h5>
      </Fade>
      <Fade direction='up'delay={650} triggerOnce= {true} duration={900}>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => handleSelectSkill(item)}
            />
          ))}
        </div>

        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
      </Fade>
    
    </section>
  );
};

export default Skills;