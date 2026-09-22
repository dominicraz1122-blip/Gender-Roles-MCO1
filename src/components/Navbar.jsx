import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar({ sections }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const activeTab =
    location.pathname === '/'
      ? 'home'
      : location.pathname.replace('/', '');

  const handleNavigation = (id) => {
    setMenuOpen(false);

    if (id === 'home') {
      navigate('/');
      return;
    }

    navigate(`/${id}`);
  };

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-navbar">
      <div className="navbar-inner">
        <button
          className="brand"
          onClick={() => handleNavigation('home')}
          aria-label="Go to homepage"
        >
          <span className="brand-name">
            GENDER<span>.PH</span>
          </span>

          <span className="brand-subtitle">
            MCO 1 ACADEMIC PORTAL
          </span>
        </button>

        <button
          className={`menu-toggle ${
            menuOpen ? 'menu-toggle-open' : ''
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="side-navigation"
        >
          <span
            className="menu-toggle-icon"
            aria-hidden="true"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>

          <span className="menu-toggle-label">
            {menuOpen ? 'CLOSE' : 'MENU'}
          </span>
        </button>
      </div>

      <div
        className={`navigation-overlay ${
          menuOpen
            ? 'navigation-overlay-visible'
            : ''
        }`}
        onClick={handleOverlayClick}
        aria-hidden={!menuOpen}
      />

      <aside
        id="side-navigation"
        className={`side-navigation ${
          menuOpen
            ? 'side-navigation-open'
            : ''
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="side-navigation-header">
          <div>
            <span className="navigation-eyebrow">
              SITE NAVIGATION
            </span>

            <h2>
              Explore the
              <span>Sections</span>
            </h2>
          </div>

          <button
            className="side-navigation-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        <nav
          className="side-navigation-list"
          aria-label="Main navigation"
        >
          {sections.map((section, index) => {
            const isActive =
              activeTab === section.id;

            const number = String(index + 1).padStart(
              2,
              '0'
            );

            const label = section.label
              .replace(/^\d+\.\s*/, '')
              .replace(' PERSPECTIVE', '')
              .replace(' ROLES', '')
              .replace(' & REALITIES', '')
              .replace(' & REFLECTION', '');

            return (
              <button
                key={section.id}
                className={`side-navigation-item ${
                  isActive
                    ? 'side-navigation-item-active'
                    : ''
                }`}
                onClick={() =>
                  handleNavigation(section.id)
                }
                aria-current={
                  isActive
                    ? 'page'
                    : undefined
                }
              >
                <span className="side-navigation-number">
                  {number}
                </span>

                <span className="side-navigation-label">
                  {label}
                </span>

                <span
                  className="side-navigation-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            );
          })}
        </nav>

        <div className="side-navigation-footer">
          <span>MCO 1 ACADEMIC WEBSITE</span>
          <span>GENDER &amp; SOCIETY</span>
        </div>
      </aside>
    </header>
  );
}

export default Navbar;