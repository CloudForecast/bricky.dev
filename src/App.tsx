import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SimplifiedSection } from './components/SimplifiedSection';
import { SolutionSection } from './components/SolutionSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="bg-slate-900 text-white min-h-screen overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <SimplifiedSection />
        <SolutionSection />
      </main>
      <Footer />
    </div>;
}