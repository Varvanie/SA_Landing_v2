import Image from 'next/image';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Surveyor&apos;s Assistant</h1>
      </div>
      <div className="header-sponsors">
        <div className="header-sponsors__logo">
          <Image
            src="/2_FASIE_v2.png"
            alt="FASIE sponsor"
            fill
            sizes="(max-width: 768px) 6rem, 12vw"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="header-sponsors__logo">
          <Image
            src="/3_SFEDU.png"
            alt="SFEDU sponsor"
            fill
            sizes="(max-width: 768px) 4rem, 8vw"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="header-sponsors__logo">
          <Image
            src="/1_SA.png"
            alt="Surveyor's Assistant logo"
            fill
            sizes="(max-width: 768px) 4rem, 8vw"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </header>
  );
}