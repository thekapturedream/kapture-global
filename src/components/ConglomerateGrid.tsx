'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SBUS } from '@/constants';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function ConglomerateGrid() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-white text-4xl font-black uppercase tracking-tighter italic">The Empire</h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">Strategic Business Units</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SBUS.map((sbu, index) => (
            <motion.div
              key={sbu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-96 bg-slate-900 rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors"
            >
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div>
                   <div className={`w-12 h-1 rounded-full ${sbu.color} mb-6`} />
                   <h3 className="text-white text-3xl font-black uppercase tracking-tighter italic leading-none">{sbu.name}</h3>
                   <p className="text-slate-400 mt-4 text-sm font-medium leading-relaxed">{sbu.description}</p>
                </div>
                
                <div className="space-y-4">
                   <div className="flex flex-wrap gap-2">
                     {sbu.services.slice(0, 3).map((service) => (
                       <span key={service} className="text-[10px] font-bold uppercase tracking-widest text-white/40 border border-white/10 px-3 py-1 rounded-full">
                         {service}
                       </span>
                     ))}
                   </div>
                   <Link href={`/businesses/${sbu.id}`} className="flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                      Explore Segment <ArrowUpRight size={16} />
                   </Link>
                </div>
              </div>

              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
