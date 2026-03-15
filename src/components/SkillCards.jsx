import React from "react";
import { NavLink } from "react-router-dom";
import "./SkillCards.css";

const SkillCards = () => {
  return (
    <section className="skill-cards-section">
      <NavLink to="/experience" className="skill-card orange-card">
        <div className="card-top">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 18l6-6-6-6M8 6l-6 6 6 6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="card-title">
          SOFTWARE ENGINEER, <br />
          WEB DEVELOPMENT
        </h3>
        <button className="card-btn">
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
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 16 16 12 12 8"></polyline>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </button>
      </NavLink>

      <NavLink to="/os-experience" className="skill-card green-card">
        <div className="card-top">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="3" stroke="#000" strokeWidth="2" />
            <circle cx="6" cy="6" r="3" stroke="#000" strokeWidth="2" />
            <path
              d="M6 9v3a6 6 0 006 6h3"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="card-title">
          OPEN SOURCE, <br />
          PROJECT ADMIN AND CONTRIBUTOR
        </h3>
        <button className="card-btn black-btn">
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
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 16 16 12 12 8"></polyline>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </button>
      </NavLink>
    </section>
  );
};

export default SkillCards;
