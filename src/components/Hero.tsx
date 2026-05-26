'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { KAPTURE_INFO } from '@/constants';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />
        {/* Animated grid or pattern could go here */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-blue-500 font-black uppercase tracking-[0.4em] text-sm mb-6"
        >
          Global Storytellers
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase italic"
        >
          {KAPTURE_INFO.tagline}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-slate-400 text-lg md:text-xl mt-8 max-w-3xl mx-auto font-medium leading-relaxed"
        >
          {KAPTURE_INFO.taglineLong}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="bg-white text-black text-sm font-black uppercase px-10 py-5 rounded-full hover:scale-105 transition-transform flex items-center gap-3 group">
            Explore the Empire <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="text-white text-sm font-black uppercase px-10 py-5 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
            Our Stories
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-0.5 h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
