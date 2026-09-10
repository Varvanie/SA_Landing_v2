import './Zone1.css';

export default function Zone1() {
  return (
    <section id="zone1" className="zone1">
      <div className="zone1-content">
        <div className="text-container top-left">
          <p>
            Surveyor&apos;s Assistant — это первая российская система с ИИ-помощником, которая автоматизирует рутинные кадастровые операции. Повышает точность, сокращайте время и минимизируйте ошибки.
          </p>
        </div>
        <div className="text-container bottom-right">
          <h3>Проблемы, которые мы решаем:</h3>
          <ul>
            <li>Рутина и потери времени;</li>
            <li>Технические ограничения;</li>
            <li>Риск ошибок при ручной работе;</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
