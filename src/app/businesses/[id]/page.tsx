'use client';

import React, { use } from 'react';
import Navbar from '@/components/Navbar';
import { SBUS } from '@/constants';
import { CONTENT_PACKS, TECH_SHELF_CATEGORIES } from '@/constants/corporate';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function SBUPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const sbu = SBUS.find(b => b.id === resolvedParams.id);

  if (!sbu) return notFound();

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* SBU Hero */}
      <section className={`pt-40 pb-20 ${sbu.color} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/60 font-black uppercase tracking-[0.4em] text-xs mb-4"
           >
              Kapture Strategic Business Unit
           </motion.p>
           <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-none"
           >
              {sbu.name}
           </motion.h1>
           <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-xl md:text-2xl mt-8 max-w-3xl font-medium"
           >
              {sbu.description}
           </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-white text-3xl font-black uppercase tracking-tighter italic mb-12">Core Capabilities</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sbu.services.map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-slate-900 rounded-2xl border border-white/5">
                   <CheckCircle2 className="text-blue-500 shrink-0" size={24} />
                   <div>
                      <h4 className="text-white font-bold uppercase tracking-tight">{service}</h4>
                      <p className="text-slate-500 text-xs mt-2">World-class {service.toLowerCase()} solutions tailored for visionary brands.</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Conditional: Content Factory (for Digital) */}
      {sbu.id === 'digital' && (
        <section className="py-24 bg-slate-950 border-y border-white/5">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-white text-4xl font-black uppercase tracking-tighter italic">Content Factory</h2>
                 <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">Social Media Management Packs</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {CONTENT_PACKS.map((pack, i) => (
                   <div key={i} className="bg-black border border-white/10 p-8 rounded-3xl flex flex-col justify-between hover:border-blue-500 transition-colors">
                      <div>
                        <h3 className="text-white text-2xl font-black uppercase tracking-tighter italic">{pack.name}</h3>
                        <p className="text-blue-500 text-3xl font-black mt-4 italic">{pack.price}</p>
                        <p className="text-slate-400 text-sm mt-4">{pack.description}</p>
                        <ul className="mt-8 space-y-3">
                           {pack.features.map((f, j) => (
                             <li key={j} className="text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {f}
                             </li>
                           ))}
                        </ul>
                      </div>
                      <button className="mt-10 w-full py-4 bg-white text-black font-black uppercase text-xs rounded-full hover:bg-slate-200 transition-colors">
                         Select Package
                      </button>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      )}

      {/* Conditional: Tech Shelf (for Store) */}
      {sbu.id === 'store' && (
        <section className="py-24 bg-slate-950">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-white text-4xl font-black uppercase tracking-tighter italic mb-12">The Tech Shelf</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                 {TECH_SHELF_CATEGORIES.map((cat, i) => (
                   <div key={i} className="p-6 bg-black border border-white/5 rounded-2xl text-center hover:bg-white/5 transition-colors cursor-pointer">
                      <p className="text-white text-[10px] font-black uppercase tracking-widest">{cat}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Ready to Ignite?</h2>
           <p className="text-slate-400 mt-6 text-lg">Partner with {sbu.name} to transform your bold vision into precision reality.</p>
           <button className="mt-10 bg-white text-black text-sm font-black uppercase px-12 py-5 rounded-full hover:scale-105 transition-transform inline-flex items-center gap-3">
              Start Project <ArrowRight size={20} />
           </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/5 text-center">
         <span className="text-white/20 text-2xl font-black uppercase tracking-tighter italic">KAPTURE</span>
      </footer>
    </main>
  );
}
