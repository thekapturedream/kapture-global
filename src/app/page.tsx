import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ConglomerateGrid from '@/components/ConglomerateGrid';
import { KAPTURE_INFO } from '@/constants';
import { Mail, Shield, Globe, Users } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ConglomerateGrid />
      
      {/* Visionary Section */}
      <section className="py-24 bg-slate-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
             <p className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs mb-4">The Visionary</p>
             <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">Rodney Manyepa</h2>
             <p className="text-slate-400 text-lg mt-8 leading-relaxed">
                Entrepreneur, Designer, and Global Storyteller. Rodney is the architect of the Kapture Empire, dedicated to organizing Africa for fair and profitable global engagement.
             </p>
             <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                   <p className="text-white text-4xl font-black italic">10+</p>
                   <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Years of Innovation</p>
                </div>
                <div>
                   <p className="text-white text-4xl font-black italic">UNICORN</p>
                   <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Growth Mindset</p>
                </div>
             </div>
          </div>
          <div className="relative aspect-square bg-slate-900 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-12 group">
             {/* Placeholder for Rodney's High-End Portrait */}
             <div className="text-center">
                <Users size={64} className="text-white/20 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-white/40 font-black uppercase tracking-tighter italic">Portrait of the Architect</p>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Corporate Values / Stats */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          <div className="space-y-4">
            <Globe className="mx-auto text-blue-500" size={32} />
            <h4 className="text-white font-black uppercase tracking-widest text-sm">Global Scale</h4>
            <p className="text-slate-500 text-xs">Africa-centric, globally minded infrastructure.</p>
          </div>
          <div className="space-y-4">
            <Shield className="mx-auto text-blue-500" size={32} />
            <h4 className="text-white font-black uppercase tracking-widest text-sm">Precision Design</h4>
            <p className="text-slate-500 text-xs">Excellence in every pixel and every line of code.</p>
          </div>
          <div className="space-y-4">
            <Mail className="mx-auto text-blue-500" size={32} />
            <h4 className="text-white font-black uppercase tracking-widest text-sm">Storytelling</h4>
            <p className="text-slate-500 text-xs">Narratives that redefine brands and industries.</p>
          </div>
          <div className="space-y-4">
            <Users className="mx-auto text-blue-500" size={32} />
            <h4 className="text-white font-black uppercase tracking-widest text-sm">The Network</h4>
            <p className="text-slate-500 text-xs">Empowering the next generation of pioneers.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-white/40 text-2xl font-black uppercase tracking-tighter italic">KAPTURE</span>
          <div className="flex gap-6">
            {Object.entries(KAPTURE_INFO.socials).filter(([key]) => key !== 'handle').map(([key, url]) => (
              <a key={key} href={url as string} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                {key}
              </a>
            ))}
          </div>
          <p className="text-slate-600 text-[10px] uppercase font-bold tracking-widest">© 2026 Kapture Global. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
