import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>ADBUY</h1>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/services">Услуги</Link></li>
          <li><Link to="/contact">Контакты</Link></li>
          <li><Link to="/login">Вход</Link></li>
          <li><Link to="/register">Регистрация</Link></li>
          <li><Link to="/dashboard">Личный кабинет</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;