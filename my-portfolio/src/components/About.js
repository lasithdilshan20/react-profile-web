import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  .profile-container {
    display: flex;
    gap: 3rem;
    align-items: center;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .profile-image {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--primary);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    background-color: #fff;
    padding: 5px;
  }

  .bio {
    flex: 1;
    line-height: 1.8;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }

  .skill-tag {
    background: var(--primary);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
  }
`;

function About() {
  const skills = [
    "React.js", "Node.js", "JavaScript", "TypeScript",
    "HTML5", "CSS3", "MongoDB", "Express.js",
    "Git", "RESTful APIs", "SQL", "Agile"
  ];

  return (
    <AboutSection id="about" data-aos="fade-up">
      <h2>About Me</h2>
      <div className="profile-container">
        <img
          src="https://miro.medium.com/v2/resize:fill:96:96/1*h6BUv8Hb4akuwry9QE6L_Q.jpeg"
          alt="Chathurika Ariyarathne"
          className="profile-image"
          data-aos="fade-right"
        />
        <div className="bio" data-aos="fade-left">
          <p>
            Hello! I'm Chathurika Ariyarathne, a passionate Full Stack Developer with expertise in building modern web applications. 
            Currently pursuing my Bachelor's degree in Software Engineering at NSBM Green University, I combine academic knowledge with practical experience.
          </p>
          <p>
            I specialize in creating responsive and user-friendly applications using React.js and Node.js. 
            My experience includes working with diverse technologies and frameworks to deliver efficient solutions.
          </p>
        </div>
      </div>
      <div className="skills">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="skill-tag"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            {skill}
          </span>
        ))}
      </div>
    </AboutSection>
  );
}

export default About;