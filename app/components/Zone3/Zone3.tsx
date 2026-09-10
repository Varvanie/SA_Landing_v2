import './Zone3.css';

export default function Zone3() {
  return (
    <section className="zone3">
      <div className="top-text">
        <p>Записаться на пробную версию</p>
      </div>

      <div className="images-row">
        <img src="/SA_Web1.png" alt="SA Web 1" />
        <img src="/SA_Web2.png" alt="SA Web 2" />
      </div>

      <a
        className="trial-button"
        href="https://vk.com/surveyors_assistant/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Пробная версия
      </a>
    </section>
  );
}