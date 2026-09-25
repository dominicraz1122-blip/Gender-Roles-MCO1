import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import Navbar from './components/Navbar';
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

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return null;
}

function Website() {
  const navigate = useNavigate();

  const navigateToSection = (id) => {
    if (id === 'home') {
      navigate('/');
      return;
    }

    navigate(`/${id}`);
  };

  return (
    <div className="app-shell relative pb-20">
      <ChatWidget />

      <Navbar sections={sections} />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Hero scrollToSection={navigateToSection} />}
          />

          <Route
            path="/understanding"
            element={<Understanding />}
          />

          <Route
            path="/historical"
            element={<Historical />}
          />

          <Route
            path="/contemporary"
            element={<Contemporary />}
          />

          <Route
            path="/issues"
            element={<Issues />}
          />

          <Route
            path="/analysis"
            element={<Analysis />}
          />

          <Route
            path="/multimedia"
            element={<Multimedia />}
          />

          <Route
            path="/conclusion"
            element={<Conclusion />}
          />

          <Route
            path="/references"
            element={<References />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Website />
    </BrowserRouter>
  );
}