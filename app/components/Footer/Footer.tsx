import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="link-column">
            <h4>Связаться с нами</h4>
            <ul>
              <li><a href="https://vk.com/surveyors_assistant" target="_blank">Написать нам</a></li>
              <li><a href="https://vk.com/surveyors_assistant" target="_blank">Мы находимся</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Информация</h4>
            <ul>
              <li><a href="https://vk.com/surveyors_assistant" target="_blank">О нас</a></li>
              <li><a href="https://vk.com/surveyors_assistant" target="_blank">Политика конфиденциальности</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-content">
        <div className="footer-bottom">
          <p>&copy; 2026 Surveyor&apos;s Assistant. All rights reserved.</p>
          <div className="social-links">
            <a href="https://vk.com/surveyors_assistant" target="_blank"><img src="/vk.png" alt="VK" /></a>
            <a href="https://web.telegram.org/" target="_blank"><img src="/tg.png" alt="Telegram" /></a>
            <a href="https://www.whatsapp.com/?lang=ru" target="_blank"><img src="/wa.png" alt="WhatsApp" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}