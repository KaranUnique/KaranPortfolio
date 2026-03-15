import React from 'react';
import './Projects.css';
import interviewPilotImg from '../images/projects/InterviewPilot.png';
import cryptoHubImg from '../images/projects/Cryptohub.png';
import aiSatelliteImg from '../images/projects/AISatellite.png';
import codeMigrationImg from '../images/projects/CodeMigration.png';

const projects = [
  {
    id: 1,
    title: 'InterviewPilot',
    description: 'AI-Powered Interview Preparation Platform',
    color: 'linear-gradient(135deg, #1A1A1A 0%, #3a3a3a 100%)',
    image: interviewPilotImg,
    link: 'https://interview-preparation-ai-zu05.onrender.com/'
  },
  {
    id: 2,
    title: 'CryptoHub',
    description: 'Real-Time Cryptocurrency Analytics Dashboard',
    color: 'linear-gradient(135deg, #1A1A1A 0%, #2a2a2a 100%)',
    image: cryptoHubImg,
    link: 'https://crypto-hub-rosy.vercel.app/'
  },
  {
    id: 3,
    title: 'AI Satellite Analytics',
    description: 'AI-Powered Satellite Imagery Analysis Platform',
    color: 'linear-gradient(135deg, #0f0f0f 0%, #1f1f1f 100%)',
    image: aiSatelliteImg,
    link: 'https://github.com/KaranUnique/Satellite-Image-Analyzer'
  },
   {
    id: 4,
    title: 'Code Migration CLI Tool',
    description: 'AI-Powered Satellite Imagery Analysis Platform',
    color: 'linear-gradient(135deg, #0f0f0f 0%, #1f1f1f 100%)',
    image: codeMigrationImg,
    link: 'https://hub.docker.com/r/karanunix/code-migration-cli'
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">
        RECENT <br />
        <span className="stroke-text">PROJECTS</span>
      </h2>

      <div className="projects-list">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div 
              className="project-image-container" 
              style={{ background: project.color }}
            >
               <img src={project.image} alt={project.title} className="project-image" />
            </div>
            
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
            
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-arrow-btn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
