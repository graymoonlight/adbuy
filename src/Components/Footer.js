import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h1>Рекламные услуги</h1>
          <p>Делаем сайты с 2024 года!</p>
        </div>
        <div className="footer-section">
          <h2>Контакты</h2>
          <p>Email: info@advertising.com</p>
          <p>Телефон: +1 234 567 890</p>
        </div>
        <div className="footer-section">
          <h2>Мы в соцсетях</h2>
          <ul className="social-links">
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Навигация</h2>
          <ul className="nav-links">
            <li><a href="/">Главная</a></li>
            <li><a href="/services">Услуги</a></li>
            <li><a href="/contact">Контакты</a></li>
            <li><a href="/login">Вход</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Рекламные услуги. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;