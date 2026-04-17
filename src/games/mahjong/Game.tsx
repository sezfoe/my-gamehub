import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, User } from 'lucide-react';

interface GameProps {
  onBack: () => void;
}

export default function Game({ onBack }: GameProps) {
  return (
    <div className="relative w-full h-full bg-dark flex items-center justify-center overflow-hidden">
      {/* Main Table Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Table Felt Surface */}
        <div className="w-full h-full bg-table relative flex items-center justify-center overflow-hidden border border-white/5 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
          {/* Subtle Grid Pattern on Felt */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />

          {/* Local Game Info Bar & Back Button */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-50 pointer-events-none">
            <button 
              onClick={onBack}
              className="p-2.5 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-sm border border-white/10 transition-all text-white/50 hover:text-white pointer-events-auto flex items-center gap-2 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-bold tracking-widest uppercase pr-2">離開遊戲</span>
            </button>

            <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2 border border-white/10 rounded-sm pointer-events-auto">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gold/20 border border-gold/50 rounded-sm flex items-center justify-center">
                  <span className="text-xs font-bold text-gold">東</span>
                </div>
                <span className="text-xs text-white/80 font-bold tracking-widest">東風圈 · 第四局</span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/40 font-mono uppercase">剩餘</span>
                <span className="text-sm font-black text-white leading-none">82</span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <span className="text-[10px] text-stone-300 font-bold">100 / 50</span>
            </div>
          </div>

          {/* Player Areas */}
          
          {/* Top Player (Opponent / North) */}
          <div id="north-player-root" className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center group border border-black">
            <div id="north-info-area" className="mb-3 flex flex-row gap-1.5 items-center border border-black/30">
              <div id="north-dir-box" className="w-10 h-10 bg-black/70 border border-gold rounded-sm text-sm text-gold font-black shadow-xl flex items-center justify-center tracking-tighter">北</div>
              <div id="north-score-box" className="h-10 px-3 bg-black/50 border border-white/20 rounded-sm text-sm text-white font-mono shadow-xl flex items-center justify-center min-w-[90px]">$15,200</div>
            </div>
            {/* Hand */}
            <div id="north-hand-area" className="flex gap-0.5 border border-black/30">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-7 h-10 bg-gradient-to-br from-emerald-700 to-emerald-900 border border-black/50 rounded-sm shadow-md" />
              ))}
            </div>
            {/* Meld Area (In front - Below for North) */}
            <div id="north-meld-area" className="mt-2 flex gap-2 opacity-40 border border-black/30">
              <div className="flex gap-0.5">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-6 h-8 bg-tile rounded-sm border border-black/20" />
                ))}
              </div>
            </div>
          </div>

          {/* Left Player (West) */}
          <div id="west-player-root" className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-4 border border-black">
            <div id="west-info-area" className="flex flex-col gap-2 whitespace-nowrap items-center border border-black/30">
              <div id="west-dir-box" className="w-10 h-10 bg-black/70 border border-gold rounded-sm text-sm text-gold font-black shadow-xl flex items-center justify-center tracking-tighter">西</div>
              <div id="west-score-box" className="h-10 px-3 bg-black/50 border border-white/20 rounded-sm text-sm text-white font-mono shadow-xl flex items-center justify-center min-w-[90px]">$18,500</div>
            </div>
            {/* Hand */}
            <div id="west-hand-area" className="flex flex-col gap-0.5 border border-black/30">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-10 h-7 bg-gradient-to-br from-emerald-700 to-emerald-900 border border-black/50 rounded-sm shadow-sm" />
              ))}
            </div>
            {/* Meld Area (In front - Right for West) */}
            <div id="west-meld-area" className="flex flex-col gap-2 opacity-40 border border-black/30">
              <div className="flex flex-col gap-0.5">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-8 h-6 bg-tile rounded-sm border border-black/20" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Player (East) */}
          <div id="east-player-root" className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center flex-row-reverse gap-4 border border-black">
            <div id="east-info-area" className="flex flex-col gap-2 whitespace-nowrap items-center border border-black/30">
              <div id="east-dir-box" className="w-10 h-10 bg-black/70 border border-gold rounded-sm text-sm text-gold font-black shadow-xl flex items-center justify-center tracking-tighter">東</div>
              <div id="east-score-box" className="h-10 px-3 bg-black/50 border border-white/20 rounded-sm text-sm text-white font-mono shadow-xl flex items-center justify-center min-w-[90px]">$12,800</div>
            </div>
            {/* Hand */}
            <div id="east-hand-area" className="flex flex-col-reverse gap-0.5 border border-black/30">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-10 h-7 bg-gradient-to-br from-emerald-700 to-emerald-900 border border-black/50 rounded-sm shadow-sm" />
              ))}
            </div>
            {/* Meld Area (In front - Left for East) */}
            <div id="east-meld-area" className="flex flex-col gap-2 opacity-40 border border-black/30">
              <div className="flex flex-col gap-0.5">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-8 h-6 bg-tile rounded-sm border border-black/20" />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Player (Self / South) */}
          <div id="south-player-root" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center border border-black">
             <div id="south-tiles-container" className="mb-1 scale-90 md:scale-95 lg:scale-100 flex flex-col items-center border border-black/30">
                {/* Meld Area (In front - Above for South) */}
                <div id="south-meld-area" className="flex gap-4 mb-1.5 opacity-40 border border-black/20">
                   <div className="flex gap-0.5">
                     {[1, 2, 3].map((_, i) => (
                       <div key={i} className="w-8 h-10 bg-tile/80 rounded-sm border-b-[3px] border-stone-400 flex items-center justify-center text-xs">
                         <span className="font-bold text-table/60">筒</span>
                       </div>
                     ))}
                   </div>
                </div>

                {/* Player Hands Preview */}
                <div id="south-hand-area" className="flex items-end gap-1 pr-10 border border-black/20">
                   {['萬','萬','萬','筒','筒','筒','條','條','條','風','東','南','西','北','中','發'].map((type, i) => (
                     <motion.div
                       key={i}
                       whileHover={{ y: -15 }}
                       transition={{ type: 'spring', stiffness: 300 }}
                       className="w-10 h-14 bg-tile rounded-sm border-b-[4px] border-stone-400 shadow-[2px_2px_0_#bbb,3px_3px_0_#999] flex items-center justify-center cursor-pointer"
                     >
                       <span className="text-xl font-bold text-table">{type}</span>
                     </motion.div>
                   ))}
                   {/* Drawn Tile */}
                   <motion.div
                     initial={{ x: 20, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     className="w-10 h-14 bg-tile rounded-sm border-2 border-gold shadow-[2px_2px_0_#bbb,3px_3px_0_#999] flex items-center justify-center cursor-pointer ml-4"
                   >
                     <span className="text-xl font-bold text-accent">白</span>
                   </motion.div>
                </div>
             </div>
             <div id="south-info-area" className="mt-4 flex flex-row gap-2 items-center border border-black/30">
               <div id="south-dir-box" className="w-10 h-10 bg-black/80 border border-gold rounded-sm text-xl text-gold font-black shadow-2xl flex items-center justify-center">南</div>
               <div id="south-score-box" className="h-10 px-6 bg-black/60 border border-white/30 rounded-sm text-2xl text-white font-mono shadow-2xl flex items-center justify-center min-w-[140px]">$22,100</div>
             </div>
          </div>

          {/* Central Play Area (Wall & Discards) */}
          <div id="center-play-area" className="relative flex items-center justify-center w-[520px] h-[400px] z-0 -translate-y-6 border border-black">
            {/* The Wall (144 Tiles represented as 4 sides of 18 stacks) */}
            {/* Top Wall */}
            <div id="wall-top" className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-0.5 border border-black/10">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="relative w-5 h-10">
                  <div className="absolute top-0 left-0 w-5 h-7 bg-tile/10 border border-white/5 rounded-t-sm" />
                  <div className="absolute top-1.75 left-1 w-5 h-7 bg-tile/10 border border-white/5 rounded-t-sm shadow-sm" />
                </div>
              ))}
            </div>
            {/* Bottom Wall */}
            <div id="wall-bottom" className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-0.5">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="relative w-5 h-10">
                  <div className="absolute bottom-0 left-0 w-5 h-7 bg-tile/10 border border-white/5 rounded-b-sm shadow-sm" />
                  <div className="absolute bottom-1.75 left-1 w-5 h-7 bg-tile/10 border border-white/5 rounded-b-sm" />
                </div>
              ))}
            </div>
            {/* Left Wall */}
            <div id="wall-left" className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="relative w-10 h-5">
                  {/* Bottom layer (Outer) */}
                  <div className="absolute left-0 top-0 w-7 h-5 bg-tile/10 border border-white/5 rounded-l-sm" />
                  {/* Top layer (Inner - covers 3/4 and shifts right/down) */}
                  <div className="absolute left-1.75 top-1 w-7 h-5 bg-tile/10 border border-white/5 rounded-l-sm shadow-sm" />
                </div>
              ))}
            </div>
            {/* Right Wall */}
            <div id="wall-right" className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="relative w-10 h-5">
                  <div className="absolute right-0 top-0 w-7 h-5 bg-tile/10 border border-white/5 rounded-r-sm shadow-sm" />
                  <div className="absolute right-1.75 top-1 w-7 h-5 bg-tile/10 border border-white/5 rounded-r-sm" />
                </div>
              ))}
            </div>

            {/* Discard Pool (Matrix Layout - Max 84 tiles) */}
            <div id="discard-pool-root" className="w-[420px] h-[280px] flex items-center justify-center p-2 border border-black/40">
              <div className="grid grid-cols-14 gap-0.5 opacity-40">
                {Array.from({ length: 84 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-7 h-10 bg-tile rounded-sm border border-black/20 shadow-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
