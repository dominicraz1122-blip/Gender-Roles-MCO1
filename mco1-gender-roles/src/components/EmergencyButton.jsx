import React from 'react';

export default function EmergencyButton() {
  return (
    <div className="fixed top-20 right-4 z-50">
      <button 
        onClick={() => window.location.href = 'https://www.Facebook.com'}
        className="bg-[#facc15] hover:bg-yellow-400 text-slate-900 font-extrabold text-xs px-4 py-2.5 rounded shadow-lg flex items-center space-x-2 tracking-wider uppercase border border-yellow-500"
      >
        <span>LEAVE SITE QUICKLY</span>
        <span className="text-sm">▶</span>
      </button>
    </div>
  );
}