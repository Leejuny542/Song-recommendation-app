import React from 'react';
import { Track, getSongUrl, getArtistUrl, getVideoEmbedUrl } from '../types/music';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  track: Track | null;
  onSelectTrack?: (track: Track) => void;
  playlist?: Track[];
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  track,
  onSelectTrack,
  playlist = []
}) => {
  if (!isOpen || !track) return null;

  const videoId = track.youtubeVideoId || 'BzYnNdJhZQw'; // Default to iconic IU - Through the Night
  const embedUrl = getVideoEmbedUrl(videoId);
  const directSongUrl = getSongUrl(track.title, track.artist, track.youtubeQuery);
  const directArtistUrl = getArtistUrl(track.artist);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#141b2b]/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#ffffff] rounded-2xl shadow-2xl overflow-hidden border border-[#dce2f7] flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 px-5 border-b border-[#e1e8fd] bg-[#f9f9ff]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">smart_display</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-[#ba1a1a] bg-[#ffdad6]/60 px-2 py-0.5 rounded-full">
                  OFFICIAL VIDEO
                </span>
                <span className="text-[12px] text-[#767586] hidden sm:inline">실제 아티스트 공식 영상</span>
              </div>
              <h3 className="text-[16px] font-bold text-[#141b2b] truncate mt-0.5">
                {track.title} - {track.artist}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={directSongUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#f1f3ff] hover:bg-[#e1e0ff] text-[#141b2b] text-[12px] font-medium transition-colors"
              title="YouTube 원본에서 열기"
            >
              <span>YouTube에서 보기</span>
              <span className="material-symbols-outlined text-[13px]">open_in_new</span>
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#464554] hover:bg-[#f1f3ff] hover:text-[#141b2b] transition-colors cursor-pointer"
              title="닫기"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Video Player (16:9 Aspect Ratio) */}
        <div className="relative w-full aspect-video bg-[#000000]">
          <iframe
            className="w-full h-full border-0"
            src={embedUrl}
            title={`${track.title} - ${track.artist} Official Video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Video Meta & Action Links */}
        <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#ffffff] border-t border-[#e1e8fd]">
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[14px] font-bold text-[#141b2b] truncate">
                {track.title}
              </span>
              <span className="text-[13px] text-[#464554]">
                • {track.artist}
              </span>
              {track.genre && (
                <span className="text-[11px] text-[#4648d4] font-semibold bg-[#e1e0ff] px-2 py-0.5 rounded-full">
                  {track.genre}
                </span>
              )}
            </div>
            {track.aiReason && (
              <p className="text-[12px] text-[#767586] mt-1 line-clamp-1">
                {track.aiReason}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
            <a
              href={directSongUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#4648d4] text-[#ffffff] text-[12px] font-semibold hover:bg-[#4953bc] transition-all shadow-xs"
            >
              <span className="material-symbols-outlined text-[16px]">smart_display</span>
              <span>노래 링크</span>
              <span className="material-symbols-outlined text-[12px]">open_in_new</span>
            </a>

            <a
              href={directArtistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 rounded-full bg-[#f1f3ff] text-[#141b2b] text-[12px] font-medium hover:bg-[#e1e0ff] transition-all border border-[#dce2f7]"
            >
              <span className="material-symbols-outlined text-[15px] text-[#4648d4]">person</span>
              <span>가수 공식 채널</span>
            </a>
          </div>
        </div>

        {/* Quick Recommended Video Playlist Bar */}
        {playlist.length > 1 && (
          <div className="p-3 px-5 bg-[#f9f9ff] border-t border-[#e1e8fd] overflow-x-auto">
            <span className="text-[11px] font-bold text-[#767586] uppercase tracking-wider block mb-2">
              함께 감상하기 좋은 다른 실제 인기 영상
            </span>
            <div className="flex items-center gap-3">
              {playlist.filter((p) => p.id !== track.id).slice(0, 5).map((p) => (
                <button
                  key={p.id}
                  onClick={() => onSelectTrack && onSelectTrack(p)}
                  className="flex items-center gap-2 p-1.5 pr-3 rounded-xl bg-[#ffffff] hover:bg-[#e9edff] transition-all border border-[#e1e8fd] shrink-0 text-left cursor-pointer group"
                >
                  <img
                    src={p.coverUrl}
                    alt={p.title}
                    className="w-8 h-8 rounded-lg object-cover"
                  />
                  <div className="min-w-0 max-w-[140px]">
                    <p className="text-[12px] font-bold text-[#141b2b] truncate group-hover:text-[#4648d4]">
                      {p.title}
                    </p>
                    <p className="text-[10px] text-[#767586] truncate">
                      {p.artist}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
