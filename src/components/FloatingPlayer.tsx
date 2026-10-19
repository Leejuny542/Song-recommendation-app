import React from 'react';
import { Track, getSongUrl, getArtistUrl } from '../types/music';

interface FloatingPlayerProps {
  currentTrack: Track | null;
  onClose: () => void;
  onToggleLike: (track: Track) => void;
  onOpenVideo: (track: Track) => void;
}

export const FloatingPlayer: React.FC<FloatingPlayerProps> = ({
  currentTrack,
  onClose,
  onToggleLike,
  onOpenVideo
}) => {
  if (!currentTrack) return null;

  const songLink = getSongUrl(currentTrack.title, currentTrack.artist, currentTrack.youtubeQuery);
  const artistLink = getArtistUrl(currentTrack.artist);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[880px] z-40 bg-[#ffffff]/95 backdrop-blur-xl border border-[#c0c1ff] shadow-[0_8px_30px_rgba(70,72,212,0.16)] rounded-2xl p-3 md:px-5 md:py-3.5 transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-5">
        {/* Track Info */}
        <div className="flex items-center gap-3 min-w-0 w-full sm:w-auto">
          <div
            className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-sm border border-[#e1e8fd] cursor-pointer group/img"
            onClick={() => onOpenVideo(currentTrack)}
            title="영상 바로보기"
          >
            <img
              src={currentTrack.coverUrl}
              alt={currentTrack.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#ba1a1a]/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center text-[#ffffff] transition-opacity">
              <span className="material-symbols-outlined text-[20px]">smart_display</span>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-bold text-[#4648d4] bg-[#e1e0ff] px-2 py-0.5 rounded-full">
                선택된 실제 음원
              </span>
              <span className="text-[11px] text-[#767586]">{currentTrack.duration}</span>
            </div>
            <h4 className="text-[14px] font-bold text-[#141b2b] truncate mt-0.5">
              <a
                href={songLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4648d4] hover:underline transition-colors flex items-center gap-1 inline-flex"
                title="노래 링크 열기"
              >
                <span>{currentTrack.title}</span>
                <span className="material-symbols-outlined text-[13px] text-[#4648d4]">open_in_new</span>
              </a>
            </h4>
            <p className="text-[12px] text-[#464554] truncate">
              <a
                href={artistLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4953bc] hover:underline transition-colors flex items-center gap-1 inline-flex text-[#464554]"
                title="가수 링크 열기"
              >
                <span className="material-symbols-outlined text-[12px] text-[#767586]">person</span>
                <span>{currentTrack.artist}</span>
              </a>
            </p>
          </div>
        </div>

        {/* Action Link & Video Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end flex-wrap">
          {/* Watch Video in Modal Button */}
          <button
            onClick={() => onOpenVideo(currentTrack)}
            className="flex items-center gap-1 px-3.5 py-2 rounded-full bg-[#ba1a1a] text-[#ffffff] text-[13px] font-semibold hover:bg-[#93000a] transition-all shadow-xs cursor-pointer active:scale-98"
            type="button"
            title="앱 내에서 공식 뮤직비디오/영상 보기"
          >
            <span className="material-symbols-outlined text-[17px]">smart_display</span>
            <span>영상 바로보기</span>
          </button>

          {/* Direct Song Link */}
          <a
            href={songLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3.5 py-2 rounded-full bg-[#4648d4] text-[#ffffff] text-[13px] font-semibold hover:bg-[#4953bc] transition-all shadow-xs"
          >
            <span className="material-symbols-outlined text-[16px]">link</span>
            <span>노래 링크</span>
            <span className="material-symbols-outlined text-[12px]">open_in_new</span>
          </a>

          {/* Direct Artist Link */}
          <a
            href={artistLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 rounded-full bg-[#f1f3ff] text-[#141b2b] text-[13px] font-medium hover:bg-[#e1e0ff] transition-all border border-[#dce2f7]"
          >
            <span className="material-symbols-outlined text-[15px] text-[#4648d4]">account_circle</span>
            <span>가수 채널</span>
          </a>

          {/* Like */}
          <button
            onClick={() => onToggleLike(currentTrack)}
            className={`p-2 rounded-full transition-colors cursor-pointer border border-[#e1e8fd] ${
              currentTrack.isLiked
                ? 'text-[#b10e6b] bg-[#ffd9e4]'
                : 'text-[#464554] hover:bg-[#f1f3ff]'
            }`}
            title={currentTrack.isLiked ? '찜 해제' : '찜하기'}
            type="button"
          >
            <span
              className="material-symbols-outlined text-[19px]"
              style={{ fontVariationSettings: currentTrack.isLiked ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#767586] hover:text-[#141b2b] hover:bg-[#f1f3ff] transition-colors cursor-pointer ml-1"
            title="닫기"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
      </div>
    </div>
  );
};
