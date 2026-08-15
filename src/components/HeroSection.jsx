import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Users } from 'lucide-react';

export default function HeroSection({ data }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-16 text-stone-800 overflow-hidden">
      {/* Background Ornaments (Cozy Warm Glow) */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl z-10 mb-10"
      >
        <span className="text-sm font-medium tracking-widest text-amber-800 uppercase bg-amber-100 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
          <Users size={16} /> Struktur Kelompok & Tim
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
          {data.namaKelompok}
        </h1>
        <p className="mt-3 text-lg text-stone-600 font-light">
          {data.desa} — {data.tahun}
        </p>
      </motion.div>

      {/* Frame Foto Bersama */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-full max-w-4xl p-3 sm:p-5 rounded-3xl bg-white/60 border border-stone-200/60 shadow-xl backdrop-blur-md"
      >
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-md group">
          <img 
            src={data.fotoBersama} 
            alt={`Foto Bersama ${data.namaKelompok}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-300" />
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-12 z-10 flex flex-col items-center text-stone-500 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs tracking-widest uppercase font-medium mb-1">Scroll Ke Struktur</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
