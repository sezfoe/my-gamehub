/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, LayoutGrid, Trophy, Settings, ArrowLeft } from 'lucide-react';
import Game from './games/mahjong/Game';
import Home from './games/mahjong/Home';

type Page = 'home' | 'mahjong-home' | 'mahjong-game';

const GAMES = [
  {
    id: 'mahjong-home',
    title: '麻將',
    color: 'bg-table'
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="w-full min-h-screen bg-dark text-white selection:bg-gold selection:text-wood overflow-hidden flex flex-col">
      <div className="flex-1 relative overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <div
              key="home"
              className="flex-1 flex flex-col relative"
            >
              <div className="z-10 w-full px-6 py-12 md:py-24 flex flex-col items-center">
                {/* Hub Hero */}
                <div
                  className="text-center mb-16 md:mb-24"
                >
                  <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
                    樂遊<span className="text-gold">大集合</span>
                  </h1>
                </div>

                <div className="flex justify-center w-full">
                  {GAMES.map((game, i) => (
                    <div
                      key={game.id}
                      onClick={() => setCurrentPage(game.id as any)}
                      className="group relative w-full max-w-md aspect-[16/6] overflow-hidden border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 hover:border-gold/50"
                    >
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 opacity-10 ${game.color} group-hover:opacity-20 transition-opacity`} />
                      
                      {/* Content */}
                      <div className="relative z-10 text-center">
                        <h3 className="text-3xl font-black tracking-[0.2em]">{game.title}</h3>
                      </div>

                      {/* Hover Border Accent */}
                      <div className="absolute inset-0 border border-gold opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : currentPage === 'mahjong-home' ? (
            <motion.div
              key="mahjong-home"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col"
            >
              <Home 
                onStart={() => setCurrentPage('mahjong-game')} 
                onBack={() => setCurrentPage('home')} 
              />
            </motion.div>
          ) : (
            <motion.div
              key="mahjong-game"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col"
            >
              <Game onBack={() => setCurrentPage('mahjong-home')} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
