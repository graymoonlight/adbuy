import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import Biz from '../Images/biz.jpg';

const Home = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <div className="home">
        <Slider {...settings}>
          <div className="hero-slide">
            <div className="hero">
              <img src={Biz} alt="Slide 1" className="hero-image"/>
              <h2>Добро пожаловать!</h2>
              <p>Мы предлагаем лучшие рекламные услуги для вашего бизнеса.</p>
              <button className="cta-button"><Link to="/services">Узнать больше</Link></button>
            </div>
          </div>
          <div className="hero-slide">
            <div className="hero">
              <img src={Biz} alt="Slide 2" className="hero-image"/>
              <h2>Наши Преимущества</h2>
              <p>Высокое качество, профессионализм и индивидуальный подход.</p>
              <button className="cta-button"><Link to="/services">Узнать больше</Link></button>
            </div>
          </div>
          <div className="hero-slide">
            <div className="hero">
              <img src={Biz} alt="Slide 3" className="hero-image"/>
              <h2>Результаты</h2>
              <p>Ваш успех - наша цель. Мы добьемся его вместе!</p>
              <button className="cta-button"><Link to="/services">Узнать больше</Link></button>
            </div>
          </div>
        </Slider>
        <div className="portfolio">
          <h3>Примеры наших работ</h3>
          <div className="portfolio-items">
            <div className="portfolio-item">
              <img src="https://via.placeholder.com/150" alt="Project 1" />
              <p>Проект 1: Описание проекта</p>
            </div>
            <div className="portfolio-item">
              <img src="https://via.placeholder.com/150" alt="Project 2" />
              <p>Проект 2: Описание проекта</p>
            </div>
            <div className="portfolio-item">
              <img src="https://via.placeholder.com/150" alt="Project 3" />
              <p>Проект 3: Описание проекта</p>
            </div>
          </div>
        </div>
        <div className="comments">
          <h3>Отзывы наших клиентов</h3>
          <div className="comment">
            <p>"Отличная работа! Результаты превзошли все наши ожидания."</p>
            <p>- Иван Иванов</p>
          </div>
          <div className="comment">
            <p>"Профессиональный подход и качественная реклама. Спасибо!"</p>
            <p>- Мария Смирнова</p>
          </div>
          <div className="comment">
            <p>"Наш бизнес вырос благодаря их рекламе. Очень рекомендуем!"</p>
            <p>- Алексей Петров</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;