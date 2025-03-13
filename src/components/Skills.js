import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiCplusplus, SiC, SiUipath, SiDotnet } from "react-icons/si";
import { FaGlobeAmericas, FaGlobeAsia, FaFlag } from 'react-icons/fa';

const skills = {
  usingNow: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "UiPath", icon: <SiUipath /> },
    { name: "C#", icon: <SiDotnet /> },
    { name: "ASP.NET", icon: <SiDotnet /> },
    { name: "MS SQL", icon: <FaDatabase /> }
  ],
  learning: [
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "TypeScript", icon: <SiTypescript /> }
  ],
  otherSkills: [
    { name: "English", icon: <FaGlobeAmericas /> },
    { name: "Hindi", icon: <FaGlobeAsia /> },
    { name: "Gujarati", icon: <FaFlag /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "C", icon: <SiC /> }
  ]
};

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '2.5rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Skills</h2>

      <h3>Using Now:</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {skills.usingNow.map((skill, index) => (
          <span key={index} style={{ margin: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#4a5568', borderRadius: '9999px', color: 'white', display: 'flex', alignItems: 'center' }}>
            {skill.icon} <span style={{ marginLeft: '0.5rem' }}>{skill.name}</span>
          </span>
        ))}
      </div>

      <h3>Learning:</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {skills.learning.map((skill, index) => (
          <span key={index} style={{ margin: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#4a5568', borderRadius: '9999px', color: 'white', display: 'flex', alignItems: 'center' }}>
            {skill.icon} <span style={{ marginLeft: '0.5rem' }}>{skill.name}</span>
          </span>
        ))}
      </div>

      <h3>Other Skills:</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {skills.otherSkills.map((skill, index) => (
          <span key={index} style={{ margin: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#4a5568', borderRadius: '9999px', color: 'white', display: 'flex', alignItems: 'center' }}>
            {skill.icon} <span style={{ marginLeft: '0.5rem' }}>{skill.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;