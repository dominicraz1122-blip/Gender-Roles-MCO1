
import React from 'react';

export default function EmergencyButton() {
  return (
    <div className="leave-site-wrapper">
      <button
        onClick={() =>
          window.location.href = 'https://www.GenderHistory.com'
        }
        className="leave-site-button"
        aria-label="Leave this site quickly"
      >
        <span className="leave-site-label">
          LEAVE THIS SITE
        </span>

        <span className="leave-site-icon" aria-hidden="true">
          ▶
        </span>
      </button>
    </div>
  );
}