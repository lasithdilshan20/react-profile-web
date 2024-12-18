import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  .social-links {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin: 2rem 0;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 1.5rem;
    }
  }

  .social-link {
    color: var(--primary);
    font-size: 2rem;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    span {
      font-size: 0.9rem;
    }

    &:hover {
      color: var(--purple-dark);
      transform: translateY(-5px);
    }
  }

  form {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

function Contact() {
  return (
    <ContactSection id="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/chathurika-ariyarathne/"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        <a 
          href="mailto:your.email@example.com"
          className="social-link"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>
        <a 
          href="https://medium.com/@chathucm2013"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <FaMedium />
          <span>Medium</span>
        </a>
        <a 
          href="https://github.com/yourusername"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
      </div>
      <form>
        <input 
          type="text" 
          placeholder="Your Name" 
          required 
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          required 
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <textarea 
          placeholder="Your Message" 
          required
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <button 
          type="submit"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Send Message
        </button>
      </form>
    </ContactSection>
  );
}

export default Contact;