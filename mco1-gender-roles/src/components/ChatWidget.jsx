import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function ChatWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      <div className="bg-white text-slate-800 text-xs px-3 py-2 rounded-xl shadow-xl border border-slate-200 font-medium max-w-xs">
        Hi! Feel free to ask if you have any questions about MCO 1.
      </div>
      <button className="w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center shadow-2xl">
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}