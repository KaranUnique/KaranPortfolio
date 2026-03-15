import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import SkillCards from "./SkillCards";
import Projects from "./Projects";
import Experience from "./Experience";
import Tools from "./Tools";
import Blog from "./Blog";
import Contact from "./Contact";
import OpenSourceExp from "./OpenSourceExp";

const MainContent = () => {
  return (
    <main className="main-content">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <SkillCards />
              <Projects />
              <Experience />
              <Tools />
              <Blog />
              <Contact />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Projects />
              <Contact />
            </>
          }
        />
        <Route
          path="/experience"
          element={
            <>
              <Experience />
              <Contact />
            </>
          }
        />
        <Route
          path="/tools"
          element={
            <>
              <Tools />
              <Contact />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Blog />
              <Contact />
            </>
          }
        />
        <Route
          path="/os-experience"
          element={
            <>
              <OpenSourceExp />
              <Contact />
            </>
          }
        />
      </Routes>
    </main>
  );
};

export default MainContent;
