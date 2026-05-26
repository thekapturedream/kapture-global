'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { SBUS } from '@/constants';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <span className="text-white text-3xl font-black tracking-tighter uppercase italic">KAPTURE</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <button 
                onMouseEnter={() => setActiveMenu('businesses')}
                className="text-white/70 hover:text-white text-sm font-bold uppercase tracking-widest flex items-center gap-1 transition-colors"
              >
                Our Businesses <ChevronDown size={14} />
              </button>
              <Link href="/about" className="text-white/70 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">
                The Visionary
              </Link>
              <Link href="/store" className="text-white/70 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">
                Store
              </Link>
              <Link href="/news" className="text-white/70 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">
                Stories
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
             <button className="text-white/70 hover:text-white p-2">
                <Search size={20} />
             </button>
             <Link href="/contact" className="bg-white text-black text-xs font-black uppercase px-6 py-3 rounded-full hover:bg-slate-200 transition-colors">
                Contact
             </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {activeMenu === 'businesses' && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onMouseLeave={() => setActiveMenu(null)}
            className="absolute top-20 left-0 w-full bg-slate-900 border-b border-white/10 p-8"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              {SBUS.map((sbu) => (
                <Link key={sbu.id} href={`/businesses/${sbu.id}`} className="group">
                  <h4 className="text-white font-bold mb-2 group-hover:text-blue-500 transition-colors uppercase tracking-tight">{sbu.name}</h4>
                  <p className="text-slate-400 text-xs line-clamp-2">{sbu.description}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            <div className="p-4 space-y-4">
              {SBUS.map((sbu) => (
                <Link key={sbu.id} href={`/businesses/${sbu.id}`} className="block text-white text-lg font-bold">
                  {sbu.name}
                </Link>
              ))}
              <hr className="border-white/10" />
              <Link href="/about" className="block text-white text-lg font-bold">The Visionary</Link>
              <Link href="/store" className="block text-white text-lg font-bold">Store</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
