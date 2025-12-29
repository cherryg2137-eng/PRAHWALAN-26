import React, { useState } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { About, Domains, Gallery, Timeline, PastWinners, Prizes, Sponsors, FAQs } from './components/Sections';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Preloader onLoadingComplete={() => setLoading(false)} />

      {!loading && (
        <div className="relative min-h-screen text-white selection:bg-cyan-500 selection:text-black">
          <Background />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Domains />
            <Gallery />
            <Timeline />
            <PastWinners />
            <Prizes />
            <Sponsors />
            <FAQs />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
