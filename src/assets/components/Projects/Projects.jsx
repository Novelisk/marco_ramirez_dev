import React from 'react';
import { projectsData } from '../../../data/projectsData';

export const Projects = () => {
  return (
    <>
      <div className="top-line"></div>
      <section className="projects" id="projects">
        <div className="projects-header">
          <h1 className="projects-header__title">Projects</h1>
          <p className="projects-header__subtitle">
            Selected work focused on frontend development, UI/UX implementation,
            and full-stack problem solving.
          </p>
        </div>

        <div className="projects-content">
          {projectsData.map((project) => (
            <div className="project__card" key={project.id}>
              <div className="project__image-container">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project__image"
                />
              </div>

              <div className="project__info">
                <div className="project__meta">
                  <span className="project__type">{project.type}</span>
                  <span className="project__status">{project.status}</span>
                </div>

                <h3 className="project__title">{project.title}</h3>

                <p className="project__description">{project.description}</p>

                <div className="project__details">
                  <div className="project__detail-item">
                    <strong>Challenge:</strong>
                    <p className="project__challenge">{project.challenge}</p>
                  </div>
                  <div className="project__detail-item">
                    <strong>Solution:</strong>
                    <p className="project__solution">{project.solution}</p>
                  </div>
                </div>

                <ul className="project__stack">
                  {project.stack.map((tech, index) => (
                    <li key={index} className="project__stack-item">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="project__links">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__link"
                    >
                      View Live Project
                    </a>
                  )}

                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__link"
                    >
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
