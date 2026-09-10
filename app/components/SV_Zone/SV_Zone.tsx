'use client';

import { useEffect, useRef } from 'react';
import Zone1 from '../Zone1/Zone1';
import Zone2 from '../Zone2/Zone2';
import './SV_Zone.css';

export default function SV_Zone() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const mq = window.matchMedia('(max-width: 768px)');
    let rafId = 0;
    const update = () => {
      rafId = 0;
      if (!mq.matches) {
        el.style.backgroundPosition = '';
        return;
      }
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress =
        total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      el.style.backgroundPosition = `${progress * 80}% center`;
    };
    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };
    const onMqChange = () => update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    mq.addEventListener('change', onMqChange);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      mq.removeEventListener('change', onMqChange);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  return (
    <section ref={sectionRef} className="sv-zone">
      <Zone1 />
      <Zone2 />
    </section>
  );
}