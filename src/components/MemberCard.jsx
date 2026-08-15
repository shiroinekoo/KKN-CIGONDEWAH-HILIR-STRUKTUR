import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function MemberCard({ nama, jabatan, foto, isFeatured = false }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17deg", "-17deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17deg", "17deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-3xl bg-stone-100/70 p-4 border border-stone-200/80 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-amber-900/10 ${
        isFeatured ? 'w-72 sm:w-80' : 'w-64'
      }`}
    >
      <div 
        style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-200 shadow-inner"
      >
        <img 
          src={foto} 
          alt={nama} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-80" />
      </div>

      <div 
        style={{ transform: "translateZ(30px)" }}
        className="mt-4 text-center space-y-1"
      >
        <span className="inline-block text-xs font-semibold tracking-wider text-amber-800 uppercase bg-amber-100/80 px-3 py-1 rounded-full">
          {jabatan}
        </span>
        <h3 className="text-lg font-serif font-bold text-stone-800 tracking-tight">
          {nama}
        </h3>
      </div>
    </motion.div>
  );
}
