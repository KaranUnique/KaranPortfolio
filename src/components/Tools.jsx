import React from 'react';
import './Tools.css';

const technologies = [
  { name: 'Java', desc: 'Programming Language', color: '#007396', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Python', desc: 'Programming Language', color: '#3776AB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'TypeScript', desc: 'Typed JavaScript', color: '#3178C6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', desc: 'Programming Language', color: '#F7DF1E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'HTML', desc: 'Markup Language', color: '#E34F26', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS', desc: 'Style Sheet Language', color: '#1572B6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'React', desc: 'JavaScript Library', color: '#61DAFB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next js', desc: 'React Framework', color: '#000000', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'Node js', desc: 'JavaScript Runtime', color: '#339933', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express js', desc: 'Web Framework', color: '#000000', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
];

const Tools = () => {
  return (
    <section className="tools-section" id="tools">
      <h2 className="section-title">
        LANGUAGES & <br />
        <span className="stroke-text">TECHNOLOGIES</span>
      </h2>

      <div className="tools-grid">
        {technologies.map((tech, index) => (
          <div className="tool-card" key={index}>
            <div className="tool-icon-box">
              {tech.icon ? (
                <img src={tech.icon} alt={tech.name} className="tech-logo"/>
              ) : (
                <span className="tool-initial" style={{ color: tech.color }}>
                  {tech.name.substring(0, 2).toUpperCase()}
                </span>
              )}
            </div>
            
            <div className="tool-info">
              <h3 className="tool-name">{tech.name}</h3>
              <p className="tool-desc">{tech.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
