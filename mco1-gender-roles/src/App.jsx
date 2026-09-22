import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EmergencyButton from './components/EmergencyButton';
import ChatWidget from './components/ChatWidget';

import Hero from './sections/Hero';
import Understanding from './sections/Understanding';
import Historical from './sections/Historical';
import Contemporary from './sections/Contemporary';
import Issues from './sections/Issues';
import Analysis from './sections/Analysis';
import Multimedia from './sections/Multimedia';
import Conclusion from './sections/Conclusion';
import References from './sections/References';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const sections = [
    { id: 'home', label: '1. HOMEPAGE' },
    { id: 'understanding', label: '2. UNDERSTANDING' },
    { id: 'historical', label: '3. HISTORICAL PERSPECTIVE' },
    { id: 'contemporary', label: '4. CONTEMPORARY ROLES' },
    { id: 'issues', label: '5. ISSUES & REALITIES' },
    { id: 'analysis', label: '6. ANALYSIS & REFLECTION' },
    { id: 'multimedia', label: '7. MULTIMEDIA' },
    { id: 'conclusion', label: '8. CONCLUSION' },
    { id: 'references', label: '9. REFERENCES' },
  ];

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative pb-20">
      <EmergencyButton />
      <ChatWidget />
      <Navbar sections={sections} activeTab={activeTab} scrollToSection={scrollToSection} />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Understanding />
        <Historical />
        <Contemporary />
        <Issues />
        <Analysis />
        <Multimedia />
        <Conclusion />
      </main>

      <References />
    </div>
  );
}