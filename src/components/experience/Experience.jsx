import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { web, sde } from "./skills";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>Technical Knowledge</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Web Development</h3>
          <div className="experience__content">
            {web.map((skill) => (
              <article key={skill.id} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill.skill}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Software Developer</h3>
          <div className="experience__content">
            {sde.map((skill) => (
              <article key={skill.id} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill.skill}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
