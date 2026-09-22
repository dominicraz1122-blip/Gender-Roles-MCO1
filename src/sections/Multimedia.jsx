import React, { useState } from 'react';
import { Video, FileText, Play, ArrowUpRight, X } from 'lucide-react';

const multimediaItems = [
  {
    number: '01',
    type: 'DOCUMENTARY VIDEO EMBED',
    title: 'Women in Ancient Southeast Asia — History & Culture',
    description: 'Explores pre-colonial female leadership, matriarchal systems, and societal roles across the region.',
    icon: Video,
    accent: 'pink',
    fileId: '1_7jjXE-0qYgPhB0nEs9C4rX-BeKw07G0', 
  },
  {
    number: '02',
    type: 'INFOGRAPHIC & TIMELINE ASSET',
    title: 'Gender Legislation Timeline (1937–Present)',
    description: 'Interactive roadmap of gender rights policy in the Philippines.',
    icon: FileText,
    accent: 'purple',
  },
];

export default function Multimedia() {
  const [playingVideo, setPlayingVideo] = useState(false);

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

        {/* MEDIA DISPLAY */}
        <div className="multimedia-grid">

          {multimediaItems.map((item) => {
            const Icon = item.icon;
            const isVideoItem = item.accent === 'pink';

            return (
              <article
                key={item.number}
                className={`multimedia-card multimedia-card--${item.accent} relative overflow-hidden`}
              >

                {/* MEDIA FRAME */}
                <div 
                  className={`multimedia-media ${isVideoItem ? 'cursor-pointer' : ''}`}
                  onClick={() => isVideoItem && setPlayingVideo(true)}
                >

                  {/* EMBEDDED GOOGLE DRIVE PLAYER FOR ITEM 01 */}
                  {isVideoItem && playingVideo ? (
                    <div className="absolute inset-0 z-20 w-full h-full bg-black flex flex-col">
                      <div className="flex justify-between items-center px-4 py-2 bg-slate-900/90 border-b border-white/10">
                        <span className="text-xs text-pink-400 font-mono tracking-wider">LIVE EMBED / GOOGLE DRIVE</span>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setPlayingVideo(false);
                          }}
                          className="text-white hover:text-pink-400 flex items-center gap-1 text-xs font-mono bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors"
                        >
                          <X size={14} /> CLOSE
                        </button>
                      </div>
                      <iframe
                        className="w-full flex-1"
                        src={`https://drive.google.com/file/d/${item.fileId}/preview`}
                        title={item.title}
                        frameBorder="0"
                        allow="autoplay"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : null}

                  <div className="multimedia-media__background"></div>

                  <div className="multimedia-media__number">
                    {item.number}
                  </div>

                  <div className="multimedia-media__center">

                    <div className="multimedia-icon transition-transform duration-300 hover:scale-110">
                      <Icon size={28} strokeWidth={1.7} />
                    </div>

                    {isVideoItem && (
                      <div className="multimedia-play transition-transform duration-300 hover:scale-110">
                        <Play size={15} fill="currentColor" />
                      </div>
                    )}

                  </div>

                  <div className="multimedia-media__label">
                    {item.type}
                  </div>

                  <div className="multimedia-media__corner">
                    <ArrowUpRight size={18} />
                  </div>

                </div>

                {/* INFORMATION */}
                <div className="multimedia-card__content">

                  <div className="multimedia-card__meta">
                    <span>EXHIBIT {item.number}</span>
                    <span>MEDIA RESOURCE</span>
                  </div>

                  <h3 className="multimedia-card__title">
                    {item.title}
                  </h3>

                  <div className="multimedia-card__line"></div>

                  <p className="multimedia-card__description">
                    {item.description}
                  </p>

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