import React from 'react';
import { Video, FileText } from 'lucide-react';

export default function Multimedia() {
  return (
    <section id="multimedia" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center uppercase text-slate-900 mb-10">
          MULTIMEDIA RESOURCES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 border border-slate-200 shadow-sm">
            <div className="aspect-video bg-slate-900 flex flex-col items-center justify-center text-white p-4">
              <Video className="w-12 h-12 text-pink-500 mb-2" />
              <span className="text-xs font-bold uppercase tracking-wider">Documentary Video Embed</span>
            </div>
            <h4 className="font-extrabold text-sm uppercase mt-3 text-slate-900">The History of Philippine Gender Roles</h4>
            <p className="text-xs text-slate-500 mt-1">Explores Babaylan roots and modern societal shifts.</p>
          </div>

          <div className="bg-white p-4 border border-slate-200 shadow-sm">
            <div className="aspect-video bg-slate-900 flex flex-col items-center justify-center text-white p-4">
              <FileText className="w-12 h-12 text-purple-400 mb-2" />
              <span className="text-xs font-bold uppercase tracking-wider">Infographic & Timeline Asset</span>
            </div>
            <h4 className="font-extrabold text-sm uppercase mt-3 text-slate-900">Gender Legislation Timeline (1937–Present)</h4>
            <p className="text-xs text-slate-500 mt-1">Interactive roadmap of gender rights policy in the Philippines.</p>
          </div>
        </div>
      </div>
    </section>
  );
}