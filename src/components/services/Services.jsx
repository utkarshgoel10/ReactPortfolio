import React from "react";
import "./services.css";

const projects = [
  {
    id:1,
    name: "Salaah Mentor Community",
    description: `We are developing a MERN stack alumni portal for our college, and I'm in charge of the frontend team of about eight developers.`,
    stack: ["ReactJs", "React Router", "Strapi"],
  },
  {
    id:2,
    name: "Bending Tech",
    description: `I was responsible for the Figma UI replications and in addition I wrote SQL queries and PHP code to add CRUD functionality.`,
    stack: ["PHP", "MySql", "Bootstrap", "JS"],
  },
  {
    id:3,
    name: "Edupop",
    description:
      "I worked on a frontend platform with a team. I worked as a React developer, focussing in design replication and dynamic routing.",
    stack: ["ReactJs", "Chakra UI", "NextJs"],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>Experience</h5>
      <h2>My Recent Work</h2>
      <div className="container">
        <section id="projects" className="section projects">
          <div className="projects__grid">
            {projects.map((project) => (
              <div key={project.id} className="project">
                <h3>{project.name}</h3>

                <p className="project__description">{project.description}</p>
                {project.stack && (
                  <ul className="project__stack">
                    {project.stack.map((item) => (
                      <li className="project__stack-item">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
