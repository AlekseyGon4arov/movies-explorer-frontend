import React from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab';
import Logo from '../../images/promo-logo.png';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <h4 className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </h4>
        <NavTab />
      </div>
      <img className="promo__logo" src={Logo} alt="Логотип" />
    </section>
  );
};

export default Promo;
