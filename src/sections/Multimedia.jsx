import React, { useState } from 'react';
import { Video, Image as ImageIcon, Play, ArrowUpRight, X, ExternalLink } from 'lucide-react';

const multimediaBoxes = [
  // BOX 01: VIDEOS (Using official YouTube video thumbnails dynamically via videoId)
  {
    boxNumber: '01',
    accent: 'pink',
    type: 'video',
    items: [
      {
        id: 'vid1',
        label: 'VID 1',
        mediaType: 'YOUTUBE DOCUMENTARY',
        title: 'Babaylan: Full Documentary on Philippine Shamanism',
        description: 'Explores the history and spiritual roles of pre-colonial babaylans and women in Philippine society prior to colonization.',
        videoId: 'lLv7ldIB4vc',
        url: 'https://www.youtube.com/watch?v=lLv7ldIB4vc',
      },
      {
        id: 'vid2',
        label: 'VID 2',
        mediaType: 'TVUP PANEL DISCUSSION',
        title: 'SOGIE Equality Bill & Legal Frameworks in the Philippines',
        description: 'An in-depth discussion from TVUP examining legislation, gender rights, and policy frameworks for equality.',
        videoId: 'E0GpaYpkJP4',
        url: 'https://www.youtube.com/watch?v=E0GpaYpkJP4',
      },
    ],
  },
  // BOX 02: PHOTOS (Using topic-accurate internet image URLs)
  {
    boxNumber: '02',
    accent: 'purple',
    type: 'photo',
    items: [
      {
        id: 'photo1',
        label: 'PHOTO 1',
        mediaType: 'ARCHIVAL EXHIBIT',
        title: 'Pre-Colonial Gender Roles & Society',
        description: 'A glimpse into historical lifestyles where women held high social status and significant societal authority.',
        // Historical artifact / traditional museum exhibit style image
        imageUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80',
        url: 'https://www.youtube.com/watch?v=lLv7ldIB4vc',
      },
      {
        id: 'photo2',
        label: 'PHOTO 2',
        mediaType: 'MODERN ADVOCACY',
        title: 'Contemporary Gender Equality Mobilization',
        description: 'Current protests and grassroots advocacy campaigns championing the rights of women and LGBTQ+ communities in the Philippines.',
        // Social movement / human rights march and protest style image
        imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80',
        url: 'https://www.youtube.com/watch?v=E0GpaYpkJP4',
      },
    ],
  },
];

export default function Multimedia() {
  const [activeTabs, setActiveTabs] = useState({ 0: 'vid1', 1: 'photo1' });
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const handleTabChange = (boxIndex, itemId) => {
    setActiveTabs(prev => ({ ...prev, [boxIndex]: itemId }));
  };

  return (
    <section id="multimedia" className="multimedia-exhibition">
      <div className="multimedia-exhibition__container">

        {/* SECTION HEADER */}
        <header className="multimedia-header">
          <div className="multimedia-kicker">
            <span className="multimedia-kicker-line"></span>
            <span>07 / 09 — MULTIMEDIA</span>
          </div>

          <div className="multimedia-heading-row">
            <h2 className="multimedia-title">
              MULTIMEDIA
              <span>RESOURCES</span>
            </h2>

            <div className="multimedia-intro">
              <div className="multimedia-intro-mark">+</div>
              <p>
                Visual and documentary materials that extend the exploration
                beyond written analysis.
              </p>
            </div>
          </div>
        </header>

        {/* MEDIA DISPLAY GRID (2 BOXES) */}
        <div className="multimedia-grid">
          {multimediaBoxes.map((box, boxIndex) => {
            const currentItemId = activeTabs[boxIndex] || box.items[0].id;
            const activeItem = box.items.find(item => item.id === currentItemId);
            
            const isVideoBox = box.type === 'video';
            // If video box, use YouTube thumbnail; if photo box, use the topic-specific internet image URL
            const displayImage = isVideoBox 
              ? `https://img.youtube.com/vi/${activeItem.videoId}/hqdefault.jpg` 
              : activeItem.imageUrl;

            const isPlaying = isVideoBox && playingVideoId === activeItem.videoId + '-' + boxIndex;

            return (
              <article
                key={box.boxNumber}
                className={`multimedia-card multimedia-card--${box.accent} relative overflow-hidden`}
              >
                {/* MEDIA FRAME BACKGROUND */}
                <div 
                  className={`multimedia-media relative ${isVideoBox ? 'cursor-pointer' : ''}`}
                  onClick={() => isVideoBox && setPlayingVideoId(activeItem.videoId + '-' + boxIndex)}
                  style={{
                    backgroundImage: `url(${displayImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 hover:bg-black/40"></div>

                  {/* YOUTUBE PLAYER OVERLAY */}
                  {isPlaying && (
                    <div className="absolute inset-0 z-30 w-full h-full bg-black flex flex-col">
                      <div className="flex justify-between items-center px-4 py-2 bg-slate-900/95 border-b border-white/10">
                        <span className="text-xs text-pink-400 font-mono tracking-wider">YOUTUBE PLAYER EMBED ({activeItem.label})</span>
                        <div className="flex items-center gap-2">
                          <a 
                            href={activeItem.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-white hover:text-pink-400 flex items-center gap-1 text-xs font-mono bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors"
                          >
                            OPEN ON YT <ExternalLink size={12} />
                          </a>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlayingVideoId(null);
                            }}
                            className="text-white hover:text-pink-400 flex items-center gap-1 text-xs font-mono bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors"
                          >
                            <X size={14} /> CLOSE
                          </button>
                        </div>
                      </div>
                      <iframe
                        className="w-full flex-1"
                        src={`https://www.youtube.com/embed/${activeItem.videoId}?autoplay=1`}
                        title={activeItem.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}

                  <div className="multimedia-media__number relative z-10">
                    {box.boxNumber}
                  </div>

                  <div className="multimedia-media__center relative z-10">
                    <div className="multimedia-icon transition-transform duration-300 hover:scale-110">
                      {isVideoBox ? <Video size={28} strokeWidth={1.7} /> : <ImageIcon size={28} strokeWidth={1.7} />}
                    </div>

                    {isVideoBox && (
                      <div className="multimedia-play transition-transform duration-300 hover:scale-110 flex items-center justify-center">
                        <Play size={15} fill="currentColor" />
                      </div>
                    )}
                  </div>

                  <div className="multimedia-media__label relative z-10">
                    {activeItem.mediaType}
                  </div>

                  <div className="multimedia-media__corner relative z-10">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* CARD INFORMATION WITH BUTTONS */}
                <div className="multimedia-card__content bg-white flex flex-col justify-between">
                  <div>
                    {/* TOGGLE BUTTONS */}
                    <div className="flex items-center gap-2 mb-3">
                      {box.items.map((item) => {
                        const isActive = currentItemId === item.id;
                        return (
                          <button
                            key={item.id}
                            onMouseEnter={() => handleTabChange(boxIndex, item.id)}
                            onClick={() => handleTabChange(boxIndex, item.id)}
                            className={`px-3 py-1 text-xs font-mono font-bold tracking-wider rounded transition-all ${
                              isActive 
                                ? 'bg-black text-white shadow' 
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                      <span className="text-xs text-gray-400 font-mono ml-auto">Select topic</span>
                    </div>

                    <div className="multimedia-card__meta">
                      <span>EXHIBIT {box.boxNumber}</span>
                      <span>{isVideoBox ? 'VIDEO RESOURCE' : 'PHOTO GALLERY'}</span>
                    </div>

                    <h3 className="multimedia-card__title transition-all duration-300">
                      {activeItem.title}
                    </h3>

                    <div className="multimedia-card__line"></div>

                    <p className="multimedia-card__description transition-all duration-300">
                      {activeItem.description}
                    </p>
                  </div>

                  {/* ACTION FOOTER */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    {isVideoBox ? (
                      <>
                        <button 
                          onClick={() => setPlayingVideoId(activeItem.videoId + '-' + boxIndex)}
                          className="text-xs font-mono font-bold tracking-wider text-pink-600 hover:text-pink-800 transition-colors"
                        >
                          ▶ WATCH HERE ({activeItem.label})
                        </button>
                        <a 
                          href={activeItem.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-gray-500 hover:text-black flex items-center gap-1 transition-colors"
                        >
                          YOUTUBE <ExternalLink size={12} />
                        </a>
                      </>
                    ) : (
                      <>
                        <span className="text-xs font-mono text-gray-500">
                          Topic Photo Source
                        </span>
                        <a 
                          href={activeItem.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs font-mono font-bold tracking-wider text-purple-600 hover:text-purple-800 flex items-center gap-1 transition-colors"
                        >
                          VIEW SOURCE ({activeItem.label}) <ExternalLink size={12} />
                        </a>
                      </>
                    )}
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* EXHIBITION FOOTER */}
        <div className="multimedia-footer">
          <span>WATCH</span>
          <span className="multimedia-footer__line"></span>
          <span>EXPLORE</span>
          <span className="multimedia-footer__line"></span>
          <span>LEARN</span>
        </div>

      </div>
    </section>
  );
}