// App.jsx
import './App.css';
import { useEffect } from 'react';
import Hero from './components/organisms/Hero';
import CampLife from './components/pages/CampLife';
import SurfLessons from './components/pages/SurfLessons';
import BookNow from './components/molecules/BookNow';
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Hero />
      <CampLife />
      <SurfLessons />
      <BookNow />
    </>
  );
}

export default App;
