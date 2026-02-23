import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'

import PartitionPage from './Pages/PartitionPage'
import NormalVersion from './Pages/NormalVersion/NormalVersion'
import AdvancedVersion from './Pages/AdvancedVersion/AdvancedVersion'
import NotFound from './Pages/NotFound'
import { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,            // smoother & stable
      smoothWheel: true,
      wheelMultiplier: 1, // prevents jumpy wheel spikes
      touchMultiplier: 1.1,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<PartitionPage />} />
        <Route path="/normalversion" element={<NormalVersion />} />
        <Route path="/advancedversion" element={<AdvancedVersion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
