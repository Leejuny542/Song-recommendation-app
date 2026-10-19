import React, { useState } from 'react';
import { Track, getVideoWatchUrl, getVideoEmbedUrl, getSongUrl, getArtistUrl } from '../types/music';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  track: Track | null;
  onToggleLike?: (track: Track) => void;
  isLiked?: boolean;
  playlistTracks?: Track[];
  onSelectTrack?: (track: Track) => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  isOpen,
  onClose,
  track,
  onToggleLike,
  isLiked = false,
  playlistTracks = [],
  onSelectTrack,
}) => {
  const [videoMode, setVideoMode] = useState<'mv' | 'visualizer'>('mv');

  if (!isOpen || !track) return null;

  const embedUrl = getVideoEmbedUrl(track.youtubeVideoId);
  const watchUrl = getVideoWatchUrl(track.youtubeVideoId, track.youtubeQuery || `${track.title} ${track.artist}`);
  const songUrl = getSongUrl(track.title, track.artist, track.youtubeQuery);
  const artistUrl = getArtistUrl(track.artist);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#13141f] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#1a1b28]">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">smart_display</span>
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#8b8fff] uppercase tracking-wider">Aura Real MV Theater</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-medium flex items-center gap-1 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  실제 공식 음원 영상
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1">{track.title} - {track.artist}</h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Mode switch */}
            <div className="hidden sm:flex bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setVideoMode('mv')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors flex items-center gap-1.5 ${
                  videoMode === 'mv' ? 'bg-primary text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">movie</span>
                공식 뮤직비디오
              </button>
              <button
                onClick={() => setVideoMode('visualizer')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors flex items-center gap-1.5 ${
                  videoMode === 'visualizer' ? 'bg-primary text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">headphones</span>
                감성 비주얼라이저
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title="닫기"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>
        </div>

        {/* Video Player Display Area */}
        <div className="relative w-full bg-black aspect-video flex items-center justify-center overflow-hidden">
          {videoMode === 'mv' && embedUrl ? (
            <iframe
              src={embedUrl}
              title={`${track.title} - ${track.artist} Official MV`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            /* Visualizer / Aesthetic Listening Video Mode */
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-radial from-[#22254b] via-[#10111a] to-black overflow-hidden">
              {/* Background Animated Atmosphere */}
              <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>

              {/* Cover Art Spinning Vinyl Effect */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full border-4 border-white/20 shadow-2xl shadow-primary/30 overflow-hidden mb-5 animate-[spin_12s_linear_infinite]">
                  <img src={track.coverUrl} alt={track.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 m-auto w-10 h-10 bg-[#13141f] rounded-full border-4 border-white/40 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-[20px] animate-bounce">graphic_eq</span>
                  <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold">Aura Listening Room</span>
                  <span className="material-symbols-outlined text-primary text-[20px] animate-bounce">graphic_eq</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">{track.title}</h4>
                <p className="text-sm text-slate-300 mb-4">{track.artist} {track.album ? `• ${track.album}` : ''}</p>

                <div className="flex flex-wrap items-center justify-center gap-2 max-w-md text-xs text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl backdrop-blur-md">
                  <span className="text-primary font-medium">실시간 감성 분석:</span>
                  <span>{track.aiReason || '맑고 깊은 감성으로 일상의 순간을 특별하게 채워줍니다.'}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Video Info & Controls Bar */}
        <div className="p-4 sm:p-5 bg-[#171825] border-t border-white/10 flex flex-col gap-4 overflow-y-auto">
          {/* Track Detail Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <img src={track.coverUrl} alt={track.title} className="w-12 h-12 rounded-xl object-cover border border-white/10" />
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">{track.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  <span className="text-white/90 font-medium">{track.artist}</span>
                  {track.year && <span className="ml-1.5 text-slate-500">({track.year})</span>}
                  {track.genre && <span className="ml-2 text-primary text-xs">• {track.genre}</span>}
                </p>
              </div>
            </div>

            {/* Quick External Actions */}
            <div className="flex flex-wrap items-center gap-2">
              {onToggleLike && (
                <button
                  onClick={() => onToggleLike(track)}
                  className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    isLiked
                      ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[18px] ${isLiked ? 'fill-current text-rose-400' : ''}`}>favorite</span>
                  {isLiked ? '찜 완료' : '보관함'}
                </button>
              )}

              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02]"
              >
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                YouTube 영상 열기
              </a>

              <a
                href={songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">music_note</span>
                음원 스트리밍
              </a>

              <a
                href={artistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">person</span>
                가수 공식 채널
              </a>
            </div>
          </div>

          {/* Related / Other real MV quick list */}
          {playlistTracks.length > 0 && (
            <div className="pt-3 border-t border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">playlist_play</span>
                  추천 공식 뮤직비디오 플레이리스트 (실제 인기곡)
                </span>
                <span className="text-[11px] text-slate-500">원하는 곡을 누르면 즉시 영상이 재생됩니다</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {playlistTracks.slice(0, 4).map((pTrack) => {
                  const isCurrent = pTrack.id === track.id;
                  return (
                    <button
                      key={pTrack.id}
                      onClick={() => onSelectTrack && onSelectTrack(pTrack)}
                      className={`text-left p-2 rounded-xl flex items-center gap-2.5 transition-all border ${
                        isCurrent
                          ? 'bg-primary/20 border-primary/50 text-white'
                          : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/15 text-slate-300'
                      }`}
                    >
                      <img src={pTrack.coverUrl} alt={pTrack.title} className="w-9 h-9 rounded-lg object-cover shrink-0" />
                      <div className="overflow-hidden min-w-0">
                        <div className="text-xs font-semibold truncate text-white">{pTrack.title}</div>
                        <div className="text-[11px] text-slate-400 truncate">{pTrack.artist}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
