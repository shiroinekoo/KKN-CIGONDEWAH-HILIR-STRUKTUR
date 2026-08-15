import React from 'react';
import { kknData } from './data/teamData';
import HeroSection from './components/HeroSection';
import StructureSection from './components/StructureSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* Hero Section */}
      <HeroSection data={kknData} />

      {/* Structure Section */}
      <main className="relative z-10 bg-gradient-to-b from-transparent via-amber-50/30 to-transparent">
        <StructureSection data={kknData} />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-stone-500 border-t border-stone-200/50">
        <p>© {kknData.tahun} {kknData.namaKelompok} — {kknData.desa}. Created with Modern Cozy Theme.</p>
      </footer>
    </div>
  );
}
