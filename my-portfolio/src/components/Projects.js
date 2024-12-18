import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styled from 'styled-components';

const ProjectCard = styled.div`
  .project-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .project-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    .project-links {
      flex-direction: column;
      align-items: flex-start;
    }

    .project-link {
      width: 100%;
      padding: 0.5rem 0;
    }
  }
`;

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Developed a full-stack e-commerce platform with React.js and Node.js. Implemented user authentication, product management, and payment integration.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT"],
      github: "#",
      demo: "#"
    },
    {
      title: "Student Management System",
      description: "Created a comprehensive system for managing student records, course enrollments, and academic performance tracking.",
      tech: ["JavaScript", "MySQL", "Bootstrap", "PHP"],
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a responsive portfolio website using modern web technologies and animations.",
      tech: ["React.js", "Styled Components", "AOS", "CSS3"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects">
      <h2 data-aos="fade-up">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </ProjectCard>
        ))}
      </div>
    </section>
  );
}

export default Projects;