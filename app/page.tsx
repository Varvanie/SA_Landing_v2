import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Ribbon from './components/Ribbon/Ribbon';
import SV_Zone from './components/SV_Zone/SV_Zone';
import Zone3 from './components/Zone3/Zone3';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Ribbon />
      <SV_Zone />
      <Zone3 />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
