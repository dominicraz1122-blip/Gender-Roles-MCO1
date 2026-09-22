import React, { useState } from 'react';
import { ChevronDown, Search, Menu, X } from 'lucide-react';

export default function Navbar({ sections, activeTab, scrollToSection }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tighter text-slate-900 font-serif">
                DataBae's<span className="text-pink-600">.</span>MCO1
              </span>
              <span className="text-[10px] tracking-widest text-slate-500 uppercase font-bold -mt-1">
                MCO 1 Academic Portal
              </span>
            </div>
          </div>

          <nav className="hidden xl:flex items-center space-x-6">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`text-xs font-black tracking-wider uppercase transition-colors flex items-center space-x-1 py-1 ${
                  activeTab === sec.id
                    ? 'text-pink-600 border-b-2 border-pink-600'
                    : 'text-slate-800 hover:text-pink-600'
                }`}
              >
                <span>{sec.label}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>
            ))}
            <button className="text-slate-700 hover:text-pink-600 p-1">
              <Search className="w-4 h-4" />
            </button>
          </nav>

          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            >
              {isNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isNavOpen && (
        <div className="xl:hidden bg-slate-900 text-white px-4 pt-2 pb-6 space-y-2">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => {
                scrollToSection(sec.id);
                setIsNavOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-bold tracking-wider uppercase border-b border-slate-800 hover:text-pink-400"
            >
              {sec.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}