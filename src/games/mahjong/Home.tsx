import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowLeft } from 'lucide-react';

interface HomeProps {
  onStart: () => void;
  onBack: () => void;
}

export default function Home({ onStart, onBack }: HomeProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative px-4 bg-dark">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] border-2 border-gold/5 rotate-45" />
         <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] border-2 border-accent/5 -rotate-12" />
      </div>

      {/* Hero Section */}
      <main className="z-10 text-center max-w-4xl flex flex-col items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-8 text-white uppercase">
            <span className="text-gold text-7xl md:text-9xl">麻將</span>
          </h2>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="group relative flex items-center justify-center gap-4 bg-gold text-wood px-12 py-4 rounded-sm font-black text-2xl hover:brightness-110 transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(212,175,55,0.2)] min-w-[280px]"
        >
          <Play size={24} fill="currentColor" />
          遊戲開始
          <div className="absolute -inset-1 border border-gold/40 scale-100 group-hover:scale-105 transition-transform pointer-events-none" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="group relative flex items-center justify-center gap-4 bg-black/40 text-gold border border-gold/50 px-12 py-4 rounded-sm font-black text-2xl hover:bg-black/60 transition-all duration-300 cursor-pointer mt-6 min-w-[280px]"
        >
          <ArrowLeft size={24} />
          離開遊戲
          <div className="absolute -inset-1 border border-gold/20 scale-100 group-hover:scale-105 transition-transform pointer-events-none" />
        </motion.button>
      </main>

    </div>
  );
}
