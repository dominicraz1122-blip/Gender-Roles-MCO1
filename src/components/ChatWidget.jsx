import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-message">
          <div className="chat-message-header">
            <strong>MCO 1 Assistant</strong>

            <button
              onClick={() => setIsOpen(false)}
              className="chat-close"
              aria-label="Close chat message"
            >
              <X size={15} />
            </button>
          </div>

          <p>
            Hi! Feel free to ask if you have any questions about MCO 1.
          </p>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-button"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}