import React, { useState } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { About, Domains, Gallery, Timeline, Modules, PastWinners, Prizes, Sponsors, FAQs } from './components/Sections';

function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('home');
  const [introPlayed, setIntroPlayed] = useState(false);

  return (
    <>
      <Preloader onLoadingComplete={() => setLoading(false)} />

      {!loading && (
        <div className="relative min-h-screen text-white selection:bg-cyan-500 selection:text-black">
          <Background />
          <Navbar setActiveView={setView} />

          <main>
            {view === 'home' && (
              <>
                <Hero introPlayed={introPlayed} setIntroPlayed={setIntroPlayed} />
                <About />
                <Domains />
                <Timeline />
                <Modules />
                <PastWinners />
                <Prizes />
                <Sponsors />
              </>
            )}

            {view === 'gallery' && (
              <Gallery />
            )}

            {view === 'faq' && (
              <FAQs />
            )}
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
