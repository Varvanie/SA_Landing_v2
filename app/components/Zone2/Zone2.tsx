'use client';

import { useEffect, useRef } from 'react';
import './Zone2.css';

export default function Zone2() {
  const featuresRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (featuresRef.current) {
        const rect = featuresRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          const rows = featuresRef.current.querySelectorAll('.z2-features-row');
          rows.forEach(row => row.classList.add('visible'));
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="zone2">
      <div className="z2-top-text">
        <p className="z2-pp">Что умеет Surveyor&apos;s Assistant?</p>
      </div>
      <div className="z2-web-version-container">
        <div className="z2-web-main">
          <img src="/Web_Main.png" alt="Web Main" />
          <div className="z2-text-block">
            <h2>Веб-версия: Полная мощь системы в вашем браузере</h2>
            <p>Работайте из любой точки мира, где есть интернет. Все инструменты под рукой без сложных установок и обновлений.</p>
          </div>
        </div>
        <div className="z2-features-container" ref={featuresRef}>
          <div className="z2-features-row">
            <div className="z2-small-container">
              <img src="/Web_Work.png" alt="Web Work" />
            </div>
            <div className="z2-large-container">
              <h3>Работайте в команде без ограничений</h3>
              <p>Несколько специалистов могут одновременно работать над одним проектом.</p>
            </div>
          </div>
          <div className="z2-features-row">
            <div className="z2-small-container">
              <img src="/Web_AI.png" alt="Web AI" />
            </div>
            <div className="z2-large-container">
              <h3>AI Ассистент</h3>
              <p>ИИ-ассистент автоматически проверит участок по кадастровой карте, найдёт конфликты границ и риски.</p>
            </div>
          </div>
          <div className="z2-features-row">
            <div id="z2-bt-1" className="z2-small-container">
              <img src="/Web_Cloud.png" alt="Web Cloud" />
            </div>
            <div id="z2-bt-2" className="z2-large-container">
              <h3>Облачное хранилище</h3>
              <p>Ваши проекты и чертежи надёжно хранятся в зашифрованном облаке.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}