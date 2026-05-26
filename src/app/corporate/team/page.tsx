'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { TEAM_MEMBERS } from '@/constants/corporate';
import { motion } from 'framer-motion';

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <section className="pt-40 pb-20 bg-slate-900 text-white border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <p className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs mb-4">The Machine</p>
           <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-none">Organizational Structure</h1>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM_MEMBERS.map((member, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-slate-950 border border-white/10 rounded-3xl group hover:border-blue-500 transition-colors"
                >
                   <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{member.department}</p>
                   <h3 className="text-white text-xl font-black uppercase tracking-tighter italic leading-none mb-4 group-hover:text-blue-500 transition-colors">{member.role}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      <footer className="py-12 bg-black border-t border-white/5 text-center">
         <span className="text-white/20 text-2xl font-black uppercase tracking-tighter italic">KAPTURE</span>
      </footer>
    </main>
  );
}
