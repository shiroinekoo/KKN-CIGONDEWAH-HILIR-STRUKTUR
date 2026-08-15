import React from 'react';
import { motion } from 'framer-motion';
import MemberCard from './MemberCard';

export default function StructureSection({ data }) {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto space-y-24">
      
      {/* 1. DPL Section */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-serif font-bold text-stone-800 tracking-tight">
          Dosen Pembimbing Lapangan
        </h2>
        <div className="flex justify-center">
          <MemberCard 
            nama={data.dpl.nama} 
            jabatan={data.dpl.jabatan} 
            foto={data.dpl.foto} 
            isFeatured={true}
          />
        </div>
      </div>

      <hr className="border-stone-200/60 w-1/2 mx-auto" />

      {/* 2. Pimpinan (Ketua & Wakil) */}
      <div className="text-center space-y-8">
        <h2 className="text-2xl font-serif font-bold text-stone-800 tracking-tight">
          Pimpinan KKN
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {data.pimpinan.map((item, index) => (
            <MemberCard 
              key={index}
              nama={item.nama}
              jabatan={item.jabatan}
              foto={item.foto}
              isFeatured={true}
            />
          ))}
        </div>
      </div>

      <hr className="border-stone-200/60 w-1/2 mx-auto" />

      {/* 3. Divisi-Divisi */}
      <div className="space-y-20">
        {data.divisi.map((div, idx) => (
          <div key={idx} className="space-y-8 text-center">
            <h3 className="text-xl font-serif font-semibold text-stone-700 relative inline-block after:content-[''] after:block after:w-12 after:h-0.5 after:bg-amber-700/60 after:mx-auto after:mt-2">
              Divisi {div.namaDivisi}
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
              {div.anggota.map((member, memberIdx) => (
                <motion.div
                  key={memberIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: memberIdx * 0.1 }}
                >
                  <MemberCard 
                    nama={member.nama}
                    jabatan={member.jabatan}
                    foto={member.foto}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
