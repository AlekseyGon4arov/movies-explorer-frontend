import React from 'react';
import './Portfolio.css';
import ArrowLink from '../../images/arrow-link.svg';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__section-title">Портфолио</h3>

      <div className="portfolio__links">
        <a
          className="portfolio__link"
          href="https://alekseygon4arov.github.io/how-to-learn/"
          target="_blank"
          rel="noreferrer"
        >
          <span>Статичный сайт</span>{' '}
          <img
            className="portfolio__link-img"
            src={ArrowLink}
            alt="Ссылка на внешний сайт"
          />
        </a>

        <a
          className="portfolio__link"
          href="https://alekseygon4arov.github.io/russian-travel/"
          target="_blank"
          rel="noreferrer"
        >
          <span>Адаптивный сайт</span>{' '}
          <img
            className="portfolio__link-img"
            src={ArrowLink}
            alt="Ссылка на внешний сайт"
          />
        </a>

        <a
          className="portfolio__link"
          href="https://alekseygon4arov.github.io/react-mesto-auth/#/sign-in"
          target="_blank"
          rel="noreferrer"
        >
          <span>Одностраничное приложение</span>{' '}
          <img
            className="portfolio__link-img"
            src={ArrowLink}
            alt="Ссылка на внешний сайт"
          />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
