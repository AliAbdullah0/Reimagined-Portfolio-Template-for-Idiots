"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

const Content = () => {
  return (
    <div className="content">
      <div className="loading">Loading</div>
      <div className="trigger"></div>
      <div className="section">
        <h1>{portfolioData.header.title}</h1>
        <h3>{portfolioData.header.subtitle}</h3>
        <p>{portfolioData.header.intro}</p>
        <div className="scroll-cta">Scroll</div>
      </div>

      {portfolioData.sections.map((section) => {
        if (section.isGround) {
          return (
            <div className="ground-container" key={section.id}>
              <div className="parallax ground"></div>
              <div className={`section ${section.alignment === "right" ? "right" : ""} ${section.dark ? "dark" : ""}`}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
              <div className="parallax clouds"></div>
            </div>
          );
        } else if (section.isBlueprint) {
          return (
            <div className="blueprint" key={section.id}>
              <div className="section dark">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
              {section.subSections.map((sub) => (
                <div className={`section dark ${sub.id}`} key={sub.id}>
                  <h2>{sub.title}</h2>
                  <p>{sub.content}</p>
                </div>
              ))}
            </div>
          );
        } else if (section.isEnd) {
          return (
            <div className="sunset" key={section.id}>
              <div className="section"></div>
              <div className="section end">
                <h2>{section.title}</h2>
                <ul className="credits">
                  {section.credits.map((credit, idx) => (
                    <li key={idx}>
                      {credit.text}{" "}
                      <a href={credit.link} target="_blank" rel="noopener noreferrer">
                        {credit.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        } else {
          return (
            <div
              className={`section ${section.alignment === "right" ? "right" : ""} ${section.dark ? "dark" : ""}`}
              key={section.id}
            >
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Content;