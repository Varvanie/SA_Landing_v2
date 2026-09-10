'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './Hero.css';

export default function Hero() {
  const [hideImage, setHideImage] = useState(false);
  const [hideBg, setHideBg] = useState(false);
  useEffect(() => {
    const checkZoom = () => {
      const outer = window.outerWidth || window.innerWidth;
      const inner = window.innerWidth || 1;
      const browserZoom = outer / inner;
      const pinchScale = window.visualViewport?.scale ?? 1;
      const dpr = window.devicePixelRatio || 1;
      const isZoomedIn =
        browserZoom >= 1.9 ||
        pinchScale >= 1.9 ||
        dpr >= 3.5;
      const isMobileLayout = window.matchMedia('(max-width: 900px)').matches;
      setHideImage(isZoomedIn);
      setHideBg(isZoomedIn && isMobileLayout);
    };
    checkZoom();
    window.addEventListener('resize', checkZoom);
    const vv = window.visualViewport;
    vv?.addEventListener('resize', checkZoom);
    vv?.addEventListener('scroll', checkZoom);
    const dpr = window.devicePixelRatio || 1;
    const mq = window.matchMedia(`(resolution: ${dpr}dppx)`);
    const mqHandler = () => checkZoom();
    mq.addEventListener?.('change', mqHandler);
    const mqLayout = window.matchMedia('(max-width: 900px)');
    const mqLayoutHandler = () => checkZoom();
    mqLayout.addEventListener?.('change', mqLayoutHandler);
    return () => {
      window.removeEventListener('resize', checkZoom);
      vv?.removeEventListener('resize', checkZoom);
      vv?.removeEventListener('scroll', checkZoom);
      mq.removeEventListener?.('change', mqHandler);
      mqLayout.removeEventListener?.('change', mqLayoutHandler);
    };
  }, []);
  const scrollToZone1 = () => {
    document.getElementById('zone1')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const sectionClass = [
    'hero',
    hideImage ? 'hero--zoomed' : '',
    hideBg ? 'hero--hide-bg' : '',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <section className={sectionClass}>
      <div className="hero-left">
        <div className="hero-content">
          <h2>Добро пожаловать в Surveyor&apos;s Assistant</h2>
          <p>
            Откройте для себя идеальный инструмент для геодезистов, работающий
            на основе ИИ и повышающий точность и эффективность полевых работ.
          </p>
          <button className="hero-button" onClick={scrollToZone1}>
            Ознакомиться
          </button>
        </div>
      </div>
      <div className="hero-right" aria-hidden={hideImage}>
        <Image
          src="/surveyor2.webp"
          alt="Геодезист с инструментами"
          width={800}
          height={800}
          sizes="(max-width: 900px) 80vw, 35vw"
          priority
        />
      </div>
    </section>
  );
}