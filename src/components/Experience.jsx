import React from "react";
import "./Experience.css";
import mphasisLogo from "../images/experience/mphasis_logo.jpg";
import githubLogo from "../images/experience/github_logo.jpg";
import prasklaLogo from "../images/experience/praskla_logo.jpg";
import microsoftLogo from "../images/experience/microsoft_logo.jpg";
import cubeaiLogo from "../images/experience/cubeai_logo.jpg";

const experiences = [
  {
    id: 1,
    company: "Mphasis",
    role: "Associate Software Engineer Intern",
    date: "Jan 2026 - Present",
    logo: mphasisLogo,
    description:
      "• Developed and maintained enterprise-level applications using modern web technologies. Collaborated with cross-functional teams to deliver scalable software solutions.",
  },
  {
    id: 2,
    company: "Github",
    role: "Project Admin & Contributor",
    date: "Nov 2025 - Present",
    logo: githubLogo,
    description:
      "• Managing open-source projects, reviewing pull requests, and contributing to various repositories. Engaged with the developer community to improve project documentation and code quality.",
  },
  {
    id: 3,
    company: "Microsoft & AICTE",
    role: "Microsoft Azure Intern",
    date: "Dec 2026 - Jan 2026",
    logo: microsoftLogo,
    description:
      "• Gained hands-on experience with Azure cloud services, deployed and managed cloud applications, and learned about cloud architecture best practices.",
  },
  {
    id: 4,
    company: "Praskla Technology",
    role: "Software Engineer Intern",
    date: "Oct 2025 - Feb 2026",
    logo: prasklaLogo,
    description:
      "• Built responsive web applications and APIs. Worked on frontend development using React and backend services, ensuring optimal performance and user experience.",
  },
  {
    id: 5,
    company: "Cube AI Solutions",
    role: "Web Developer Intern",
    date: "Jan 2024 - Feb 2024",
    logo: cubeaiLogo,
    description:
      "• Developed and maintained client websites using modern web technologies. Implemented responsive designs and collaborated with AI team to integrate machine learning features.",
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">
        PROFESSIONAL <br />
        <span className="stroke-text">EXPERIENCE</span>
      </h2>

      <div className="experience-list">
        {experiences.map((exp) => (
          <div className="experience-item" key={exp.id}>
            <div className="exp-details">
              <div className="exp-logo">
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </div>
              <div className="exp-text">
                <h3 className="exp-company">{exp.company}</h3>
                <p className="exp-role">{exp.role}</p>
                <p className="exp-description">{exp.description}</p>
              </div>
            </div>
            <div className="exp-meta">
              <span className="exp-date">{exp.date}</span>
              <button className="exp-arrow-btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
