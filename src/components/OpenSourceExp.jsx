import React from "react";
import "./Experience.css";
import hacktoberfestLogo from "../images/OSexperience/hacktoberfest_logo.jpg";
import codeSocialLogo from "../images/OSexperience/code_social_logo.jpg";
import eliteCodersLogo from "../images/OSexperience/elite_coders_logo.jpg";
import apertreLogo from "../images/OSexperience/apertre_logo.jpg";
import openSourceConnectLogo from "../images/OSexperience/open_source_connect_logo.jpg";
import jwocLogo from "../images/OSexperience/jwoc_logo.jpg";

const experiences = [
  {
    id: 1,
    company: "Hacktoberfest",
    role: "Open Source Contributor",
    date: "Oct 2025",
    logo: hacktoberfestLogo,
    description:
      "• Contributed to open-source projects during Hacktoberfest. Built features using React, Node.js, and Express.js, integrated MongoDB for data persistence, and successfully merged 5+ pull requests across multiple repositories.",
  },
  {
    id: 2,
    company: "Winter of Code Social",
    role: "Project Admin & Contributor",
    date: "Nov 2025 - Jan 2026",
    logo: codeSocialLogo,
    description:
      "• Led project administration for the CryptoHub platform. Managed feature planning, task assignments, and coordinated with contributors to track development progress and ensure smooth project delivery.",
  },
  {
    id: 3,
    company: "Elite Coders",
    role: "Project Admin",
    date: "Jan 2026 - Mar 2026",
    logo: eliteCodersLogo,
    description:
      "• Managed end-to-end coordination of the Crypto Hub open-source project. Organized project structure, planned features, assigned development tasks, and collaborated with contributors to ensure timely completion.",
  },
  {
    id: 4,
    company: "Apertre 3.0",
    role: "Project Admin",
    date: "Feb 2026",
    logo: apertreLogo,
    description:
      "• Oversaw project workflows and coordination for the Crypto Hub platform. Acted as the central point of communication among contributors, organized development tasks, and ensured smooth project execution.",
  },
  {
    id: 5,
    company: "Open Source Connect Global",
    role: "Project Admin",
    date: "Feb 2026 - Present",
    logo: openSourceConnectLogo,
    description:
      "• Coordinated open-source projects by guiding contributors, reviewing pull requests, resolving issues, and facilitating collaboration within the developer community.",
  },
  {
    id: 6,
    company: "JGEC Winter of Code",
    role: "Project Admin",
    date: "Mar 2026 - Present",
    logo: jwocLogo,
    description:
      "• Mentoring contributors on an AI-powered interview preparation platform. Reviewing pull requests, managing issues, and supporting contributors with open-source best practices and scalable development.",
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">
        OPEN SOURCE <br />
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
