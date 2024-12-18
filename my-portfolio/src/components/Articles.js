import React from 'react';
import styled from 'styled-components';

const ArticlesSection = styled.section`
  .articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 0 1rem;
    }
  }

  .article-card {
    background: #fff;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    @media (max-width: 768px) {
      margin-bottom: 1.5rem;
    }

    &:hover {
      transform: translateY(-5px);
    }
  }

  .article-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    @media (max-width: 768px) {
      height: 180px;
    }
  }

  .article-content {
    padding: 1.5rem;
  }

  .article-title {
    color: var(--text);
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .article-link {
    display: inline-block;
    color: var(--primary);
    text-decoration: none;
    margin-top: 1rem;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: var(--secondary);
    }
  }
`;

function Articles() {
  const articles = [
    {
      title: "QA Myths Unmasked: What Every Beginner Should Know",
      description: "A comprehensive guide debunking common myths in Quality Assurance for beginners.",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*J_5gm3PWQCjGqdrb5mHSkQ.png",
      link: "https://medium.com/@chathucm2013/qa-myths-unmasked-what-every-beginner-should-know-6d091fccd1ff"
    }
    // You can add more articles here as you write them
  ];

  return (
    <ArticlesSection id="articles">
      <h2 data-aos="fade-up">My Articles</h2>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div
            key={index}
            className="article-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">
              <h3 className="article-title">{article.title}</h3>
              <p>{article.description}</p>
              <a
                href={article.link}
                className="article-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Article →
              </a>
            </div>
          </div>
        ))}
      </div>
    </ArticlesSection>
  );
}

export default Articles; 