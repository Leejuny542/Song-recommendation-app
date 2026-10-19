import React, { useState } from 'react';
import { Track, getSongUrl, getArtistUrl } from '../types/music';

interface LibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  tracks: Track[];
  onRemoveTrack: (id: string, title: string) => void;
  onOpenYoutube: (query: string, title: string) => void;
  onOpenVideo?: (track: Track) => void;
}

export const LibraryModal: React.FC<LibraryModalProps> = ({
  isOpen,
  onClose,
  tracks,
  onRemoveTrack,
  onOpenYoutube,
  onOpenVideo
}) => {
  const [activeTab, setActiveTab] = useState<'liked' | 'playlists' | 'history'>('liked');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141b2b]/40 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#ffffff] rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200 border border-[#e1e8fd]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#e1e8fd]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#e1e0ff] flex items-center justify-center text-[#4648d4]">
              <span className="material-symbols-outlined text-[22px]">library_music</span>
            </div>
            <div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#141b2b]">
                내 보관함 (찜한 곡 <span className="text-[#4648d4]">{tracks.length}</span>)
              </h3>
              <p className="text-[13px] text-[#464554]">
                저장한 곡들의 음원 링크 및 아티스트 링크 모음
              </p>
            </div>
          </div>
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#464554] hover:bg-[#f1f3ff] hover:text-[#141b2b] transition-colors cursor-pointer"
            onClick={onClose}
            type="button"
            title="닫기"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Tab Navigator */}
        <div className="flex gap-4 mt-4 text-[13px] border-b border-[#f1f3ff]">
          <button
            onClick={() => setActiveTab('liked')}
            className={`pb-2.5 font-semibold transition-all cursor-pointer ${
              activeTab === 'liked'
                ? 'border-b-2 border-[#4648d4] text-[#4648d4]'
                : 'text-[#464554] hover:text-[#141b2b]'
            }`}
          >
            찜한 곡 목록 ({tracks.length})
          </button>
          <button
            onClick={() => setActiveTab('playlists')}
            className={`pb-2.5 font-semibold transition-all cursor-pointer ${
              activeTab === 'playlists'
                ? 'border-b-2 border-[#4648d4] text-[#4648d4]'
                : 'text-[#464554] hover:text-[#141b2b]'
            }`}
          >
            저장된 AI 플레이리스트 (2)
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`pb-2.5 font-semibold transition-all cursor-pointer ${
              activeTab === 'history'
                ? 'border-b-2 border-[#4648d4] text-[#4648d4]'
                : 'text-[#464554] hover:text-[#141b2b]'
            }`}
          >
            방문 기록 (18)
          </button>
        </div>

        {/* Content Area */}
        {activeTab === 'liked' && (
          <div className="mt-4 max-h-[380px] overflow-y-auto space-y-3 pr-1">
            {tracks.length === 0 ? (
              <div className="py-12 text-center text-[#767586] flex flex-col items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[36px] text-[#c7c4d7]">favorite_border</span>
                <p className="text-[14px]">보관함에 저장된 곡이 없습니다.</p>
                <p className="text-[12px] text-[#464554]">마음에 드는 곡의 하트 아이콘을 눌러 추가해 보세요.</p>
              </div>
            ) : (
              tracks.map((track) => {
                const songLink = getSongUrl(track.title, track.artist, track.youtubeQuery);
                const artistLink = getArtistUrl(track.artist);

                return (
                  <div
                    key={track.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#f1f3ff] hover:bg-[#e9edff] transition-all group border border-transparent hover:border-[#dce2f7]"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 shadow-xs group/img">
                        <img
                          className="w-full h-full object-cover"
                          src={track.coverUrl}
                          alt={track.title}
                        />
                        <a
                          href={songLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 bg-[#141b2b]/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center text-[#ffffff] transition-opacity"
                          title="노래 링크 열기"
                        >
                          <span className="material-symbols-outlined text-[20px]">smart_display</span>
                        </a>
                      </div>
                      <div className="min-w-0 pr-2">
                        {/* Song link */}
                        <p className="text-[14px] font-semibold text-[#141b2b] truncate">
                          <a
                            href={songLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#4648d4] hover:underline flex items-center gap-1 inline-flex"
                            title="노래 링크 열기"
                          >
                            <span>{track.title}</span>
                            <span className="material-symbols-outlined text-[13px] text-[#4648d4]">open_in_new</span>
                          </a>
                        </p>
                        {/* Artist link */}
                        <p className="text-[12px] text-[#464554] truncate mt-0.5">
                          <a
                            href={artistLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#4953bc] hover:underline flex items-center gap-1 inline-flex text-[#464554]"
                            title="가수 링크 열기"
                          >
                            <span className="material-symbols-outlined text-[12px] text-[#767586]">person</span>
                            <span>{track.artist}</span>
                            <span className="text-[#767586] text-[11px]">• {track.duration}</span>
                          </a>
                        </p>
                        <p className="text-[11px] text-[#767586]">
                          {track.savedDate || '최근 추가됨'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {/* Video watch */}
                      {onOpenVideo && (
                        <button
                          onClick={() => onOpenVideo(track)}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#ba1a1a] text-[#ffffff] text-[12px] font-bold hover:bg-[#93000a] transition-all shadow-2xs cursor-pointer"
                          title="공식 영상/MV 보기"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[15px]">smart_display</span>
                          <span className="hidden sm:inline">영상</span>
                        </button>
                      )}

                      {/* Song link */}
                      <a
                        href={songLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#ffffff] text-[#4648d4] text-[12px] font-bold hover:bg-[#e1e0ff] transition-all shadow-2xs border border-[#c0c1ff]"
                        title="노래 링크 열기"
                      >
                        <span className="material-symbols-outlined text-[15px]">smart_display</span>
                        <span className="hidden sm:inline">노래</span>
                        <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                      </a>

                      {/* Artist link */}
                      <a
                        href={artistLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#ffffff] text-[#141b2b] text-[12px] hover:bg-[#e9edff] transition-all shadow-2xs border border-[#e1e8fd]"
                        title="가수 링크 열기"
                      >
                        <span className="material-symbols-outlined text-[14px] text-[#767586]">person</span>
                        <span className="hidden sm:inline">가수</span>
                      </a>

                      {/* Delete */}
                      <button
                        className="p-1.5 rounded-full text-[#464554] hover:text-[#ba1a1a] hover:bg-[#ffdad6]/40 transition-colors cursor-pointer"
                        onClick={() => onRemoveTrack(track.id, track.title)}
                        title="삭제"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {activeTab === 'playlists' && (
          <div className="mt-4 max-h-[380px] overflow-y-auto space-y-3 pr-1">
            <div className="p-4 rounded-xl bg-[#f1f3ff] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-[#4648d4] bg-[#e1e0ff] px-2 py-0.5 rounded-full">
                  AI 일일 큐레이션
                </span>
                <h4 className="text-[14px] font-bold text-[#141b2b] mt-1">
                  선선한 오후를 채우는 포근한 멜로디
                </h4>
                <p className="text-[12px] text-[#464554]">총 8곡 (28분 42초) • 매칭률 98.4%</p>
              </div>
              <a
                href={getSongUrl('선선한 오후를 채우는 포근한 멜로디', 'AI Curation')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#4648d4] text-[#ffffff] text-[12px] font-medium hover:bg-[#4953bc] transition-colors"
              >
                <span>음원 링크</span>
                <span className="material-symbols-outlined text-[13px]">open_in_new</span>
              </a>
            </div>
            <div className="p-4 rounded-xl bg-[#f1f3ff] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-[#b10e6b] bg-[#ffd9e4] px-2 py-0.5 rounded-full">
                  테마 컬렉션
                </span>
                <h4 className="text-[14px] font-bold text-[#141b2b] mt-1">
                  퇴근길 피로를 씻어주는 로파이 비트
                </h4>
                <p className="text-[12px] text-[#464554]">총 8곡 (26분) • 매칭률 98.7%</p>
              </div>
              <a
                href={getSongUrl('퇴근길 피로를 씻어주는 로파이 비트', 'Aura Music')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#4648d4] text-[#ffffff] text-[12px] font-medium hover:bg-[#4953bc] transition-colors"
              >
                <span>음원 링크</span>
                <span className="material-symbols-outlined text-[13px]">open_in_new</span>
              </a>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="mt-4 max-h-[380px] overflow-y-auto space-y-2 pr-1 text-[13px]">
            <p className="text-[#767586] text-[12px] pb-1">최근 확인한 트랙 링크 목록입니다.</p>
            {tracks.concat(tracks).slice(0, 5).map((track, i) => (
              <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-[#f9f9ff] border border-[#e9edff]">
                <a
                  href={getSongUrl(track.title, track.artist)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#141b2b] font-medium truncate max-w-[260px] hover:text-[#4648d4] hover:underline"
                >
                  {track.title}
                </a>
                <span className="text-[#767586] text-[11px]">{i === 0 ? '방금 전' : `${i * 15}분 전`}</span>
              </div>
            ))}
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-[#e1e8fd] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[12px] text-[#464554]">
            저장된 링크는 브라우저 계정에 자동 동기화됩니다.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              className="px-4 py-2 rounded-full bg-[#e9edff] text-[#141b2b] text-[13px] font-medium hover:bg-[#dce2f7] transition-colors cursor-pointer"
              onClick={onClose}
              type="button"
            >
              닫기
            </button>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#4648d4] text-[#ffffff] text-[13px] font-semibold hover:bg-[#4953bc] transition-all shadow-md cursor-pointer active:scale-98"
            >
              <span className="material-symbols-outlined text-[18px]">smart_display</span>
              <span>YouTube에서 전체 듣기</span>
              <span className="material-symbols-outlined text-[13px]">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
