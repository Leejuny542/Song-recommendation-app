import React, { useState } from 'react';
import { Track, getSongUrl, getArtistUrl } from '../types/music';
import { CHART_PODIUM_TRACKS, CHART_ROWS_TRACKS } from '../data/mockData';

interface TrendingChartsViewProps {
  onToggleLike: (track: Track) => void;
  onOpenYoutube: (query: string, title: string) => void;
  onShowToast: (message: string) => void;
  onSelectTrack: (track: Track) => void;
  onOpenVideo: (track: Track) => void;
  selectedTrackId: string | null;
}

export const TrendingChartsView: React.FC<TrendingChartsViewProps> = ({
  onToggleLike,
  onOpenYoutube,
  onShowToast,
  onSelectTrack,
  onOpenVideo,
  selectedTrackId
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'situation' | 'generation' | 'rising'>('all');
  const [sortOrder, setSortOrder] = useState<'rank' | 'match'>('rank');
  const [showFullChart, setShowFullChart] = useState(false);

  // Sorting
  const sortedRows = [...CHART_ROWS_TRACKS].sort((a, b) => {
    if (sortOrder === 'match') {
      return b.matchScore - a.matchScore;
    }
    return (a.chartRank || 0) - (b.chartRank || 0);
  });

  const displayedRows = showFullChart ? sortedRows : sortedRows.slice(0, 7); // 4-10 or 4-15

  const filterTabs = [
    { id: 'all', label: '전체 TOP 50 (실제 인기곡)', icon: 'equalizer' },
    { id: 'situation', label: '상황별 차트 (출근길/운동/수면)', icon: 'directions_run' },
    { id: 'generation', label: '세대별 공감 차트', icon: 'group' },
    { id: 'rising', label: '급상승 감성 키워드', icon: 'auto_awesome' }
  ] as const;

  const handleFilterClick = (tabId: typeof activeFilter, label: string) => {
    setActiveFilter(tabId);
    onShowToast(`'${label}' 필터가 적용되었습니다.`);
  };

  const handleKeywordClick = (keyword: string) => {
    onShowToast(`'${keyword}' 관련 감성 차트와 영상이 활성화되었습니다.`);
  };

  const customSessionLink = getSongUrl('퇴근길 차분함 K-POP 명곡 큐레이션', 'Aura Music');

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-4 pb-12 flex flex-col gap-8">
      {/* ========================================== */}
      {/* 1. HEADER SECTION                          */}
      {/* ========================================== */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e1e0ff] text-[#07006c] text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4648d4] animate-pulse" />
                LIVE AI INSIGHT • 실제 차트 실시간 집계
              </span>
              <span className="text-[12px] text-[#464554] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                2024.10.28 15:00 기준 실시간 집계 완료
              </span>
            </div>
            <h1 className="text-[30px] md:text-[38px] font-bold text-[#141b2b] tracking-tight">
              실시간 감성 트렌드 &amp; 실제 인기 차트
            </h1>
            <p className="text-[14px] md:text-[15px] text-[#464554] leading-relaxed">
              NewJeans, DAY6, 아이유, 악뮤 등 현재 가장 많은 사랑을 받는 실제 아티스트들의 공식 뮤직비디오와 음원 링크 차트입니다.
            </p>
          </div>

          {/* Quick AI Mood Metric Pill */}
          <div className="hidden lg:flex items-center gap-3 p-3 px-4 bg-[#f1f3ff] rounded-2xl shadow-2xs border border-[#e1e8fd]">
            <div className="flex flex-col">
              <span className="text-[11px] text-[#767586] font-medium">현재 가장 뜨거운 감정</span>
              <span className="text-[15px] font-bold text-[#4648d4] flex items-center gap-1">
                #저녁퇴근길 차분함 <span className="material-symbols-outlined text-[18px]">trending_up</span>
              </span>
            </div>
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#ffffff] text-[#4648d4] shadow-xs font-bold text-[14px] border border-[#c0c1ff]">
              94%
            </div>
          </div>
        </div>

        {/* Live Filter Navigation Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleFilterClick(tab.id, tab.label)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#4648d4] text-[#ffffff] shadow-xs'
                  : 'bg-[#f1f3ff] text-[#464554] hover:bg-[#e9edff] hover:text-[#141b2b] border border-[#e1e8fd]'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. PODIUM SECTION: TOP 3 HIGHLIGHTS        */}
      {/* ========================================== */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4648d4] text-[22px]">workspace_premium</span>
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#141b2b]">
              실시간 TOP 3 명예의 전당 (실제 K-POP 챔피언)
            </h2>
          </div>
          <span className="text-[12px] text-[#464554]">5분 주기 동기화</span>
        </div>

        {/* 3-Column Luxury Podium Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* #2 Rank (Silver Accent) */}
          {(() => {
            const track = CHART_PODIUM_TRACKS[0];
            const songLink = getSongUrl(track.title, track.artist, track.youtubeQuery);
            const artistLink = getArtistUrl(track.artist);

            return (
              <div className="group relative flex flex-col justify-between bg-[#f1f3ff] rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 md:order-1 border border-[#e1e8fd]">
                <div className="absolute -top-3 left-6 flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#e0e0ff] text-[#000767] text-[12px] font-bold shadow-2xs border border-[#ffffff]">
                  <span className="material-symbols-outlined text-[15px]">military_tech</span> 2위
                  <span className="text-[11px] text-[#4648d4] font-extrabold ml-1">▲ 1</span>
                </div>

                <div className="flex flex-col gap-3 mt-2">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#ffffff] shadow-2xs group-hover:scale-[1.01] transition-transform duration-300">
                    <img
                      className="w-full h-full object-cover"
                      src={track.coverUrl}
                      alt={track.title}
                    />
                    <button
                      onClick={() => onOpenVideo(track)}
                      className="absolute inset-0 bg-[#141b2b]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] cursor-pointer"
                      title="공식 뮤직비디오 보기"
                      type="button"
                    >
                      <span className="w-12 h-12 rounded-full bg-[#ba1a1a] text-[#ffffff] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[24px]">smart_display</span>
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {track.tags?.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-full bg-[#e9edff] text-[#464554] text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Song Link */}
                    <h3 className="text-[18px] font-bold text-[#141b2b] truncate">
                      <a
                        href={songLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#4648d4] hover:underline transition-colors flex items-center gap-1 inline-flex"
                        title="노래 링크 열기"
                      >
                        <span>{track.title}</span>
                        <span className="material-symbols-outlined text-[14px] text-[#4648d4]">open_in_new</span>
                      </a>
                    </h3>

                    {/* Artist Link */}
                    <p className="text-[13px] text-[#464554]">
                      <a
                        href={artistLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#4953bc] hover:underline transition-colors flex items-center gap-1 inline-flex"
                        title="가수 링크 열기"
                      >
                        <span className="material-symbols-outlined text-[13px] text-[#767586]">person</span>
                        <span>{track.artist}</span>
                      </a>
                    </p>
                  </div>

                  {/* Sentiment Bar */}
                  <div className="flex flex-col gap-1 p-3 bg-[#ffffff] rounded-xl border border-[#e1e8fd]">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#141b2b] font-semibold">{track.sentimentText}</span>
                      <span className="text-[#4648d4] font-bold">{track.matchScore}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#e1e8fd] overflow-hidden">
                      <div className="h-full bg-[#4648d4] rounded-full" style={{ width: `${track.matchScore}%` }} />
                    </div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#e1e8fd]">
                  {/* Watch Video Button */}
                  <button
                    onClick={() => onOpenVideo(track)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-[#ba1a1a] text-[#ffffff] hover:bg-[#93000a] text-[12px] font-semibold transition-colors shadow-2xs cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">smart_display</span>
                    <span>영상 바로보기</span>
                  </button>

                  <a
                    href={songLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 py-2 px-3 rounded-full bg-[#ffffff] text-[#4648d4] hover:bg-[#e1e0ff] text-[12px] font-semibold transition-colors shadow-2xs border border-[#c0c1ff]"
                    title="노래 링크 열기"
                  >
                    <span>링크</span>
                    <span className="material-symbols-outlined text-[11px]">open_in_new</span>
                  </a>

                  <button
                    className={`w-9 h-9 rounded-full bg-[#ffffff] flex items-center justify-center shadow-2xs transition-colors cursor-pointer border border-[#e1e8fd] ${
                      track.isLiked ? 'text-[#b10e6b]' : 'text-[#464554] hover:text-[#b10e6b]'
                    }`}
                    onClick={() => onToggleLike(track)}
                    type="button"
                    title="찜하기"
                  >
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: track.isLiked ? "'FILL' 1" : "'FILL' 0" }}>
                      favorite
                    </span>
                  </button>
                </div>
              </div>
            );
          })()}

          {/* #1 Rank (Crown Gold / Center Highlight - NewJeans Ditto) */}
          {(() => {
            const track = CHART_PODIUM_TRACKS[1];
            const songLink = getSongUrl(track.title, track.artist, track.youtubeQuery);
            const artistLink = getArtistUrl(track.artist);

            return (
              <div className="group relative flex flex-col justify-between bg-[#e1e0ff]/40 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 md:order-2 md:-mt-3 border-2 border-[#4648d4]/30">
                <div className="absolute -top-3.5 left-6 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#4648d4] text-[#ffffff] text-[13px] font-bold shadow-md">
                  <span className="material-symbols-outlined text-[18px]">crown</span> 1위 챔피언
                  <span className="text-[11px] text-[#e1e0ff] bg-[#07006c]/40 px-1.5 py-0.5 rounded-full font-bold ml-1">
                    유지 -
                  </span>
                </div>

                <div className="flex flex-col gap-3 mt-2">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#ffffff] shadow-md group-hover:scale-[1.01] transition-transform duration-300">
                    <img
                      className="w-full h-full object-cover"
                      src={track.coverUrl}
                      alt={track.title}
                    />
                    <button
                      onClick={() => onOpenVideo(track)}
                      className="absolute inset-0 bg-[#141b2b]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] cursor-pointer"
                      title="Ditto 공식 뮤직비디오 보기"
                      type="button"
                    >
                      <span className="w-14 h-14 rounded-full bg-[#ba1a1a] text-[#ffffff] flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[28px]">smart_display</span>
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#4648d4] text-[#ffffff] text-[11px] font-bold">
                        #실시간1위
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#ffffff] text-[#4648d4] text-[11px] font-semibold border border-[#c0c1ff]">
                        #아련한겨울
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#ffffff] text-[#464554] text-[11px] border border-[#e1e8fd]">
                        #뉴진스
                      </span>
                    </div>

                    {/* Song Link */}
                    <h3 className="text-[20px] font-bold text-[#141b2b] truncate">
                      <a
                        href={songLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#4648d4] hover:underline transition-colors flex items-center gap-1 inline-flex"
                        title="노래 링크 열기"
                      >
                        <span>{track.title}</span>
                        <span className="material-symbols-outlined text-[15px] text-[#4648d4]">open_in_new</span>
                      </a>
                    </h3>

                    {/* Artist Link */}
                    <p className="text-[14px] text-[#464554]">
                      <a
                        href={artistLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#4953bc] hover:underline transition-colors flex items-center gap-1 inline-flex"
                        title="가수 링크 열기"
                      >
                        <span className="material-symbols-outlined text-[14px] text-[#767586]">person</span>
                        <span>{track.artist}</span>
                      </a>
                    </p>
                  </div>

                  {/* Sentiment Gauge Detailed */}
                  <div className="flex flex-col gap-1.5 p-3.5 bg-[#ffffff] rounded-xl shadow-xs border border-[#e1e8fd]">
                    <div className="flex justify-between items-center text-[12px]">
                      <span className="text-[#141b2b] font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-[#b10e6b]">sentiment_very_satisfied</span>
                        {track.sentimentText}
                      </span>
                      <span className="text-[#4648d4] font-extrabold text-[15px]">{track.matchScore}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[#e1e8fd] overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#4648d4] to-[#6063ee] rounded-full" style={{ width: `${track.matchScore}%` }} />
                    </div>
                    <div className="flex justify-between text-[11px] text-[#767586] pt-0.5">
                      <span>{track.listenersCount}</span>
                      <span className="font-semibold text-[#4648d4]">{track.reactionsCount}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#c0c1ff]">
                  <button
                    onClick={() => onOpenVideo(track)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#ba1a1a] text-[#ffffff] hover:bg-[#93000a] text-[13px] font-semibold transition-colors shadow-xs cursor-pointer active:scale-98"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">smart_display</span>
                    <span>공식 MV 바로보기</span>
                  </button>

                  <a
                    href={songLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-full bg-[#ffffff] text-[#4648d4] hover:bg-[#e1e0ff] text-[13px] font-semibold transition-colors shadow-xs border border-[#c0c1ff]"
                    title="노래 링크 열기"
                  >
                    <span>링크</span>
                    <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                  </a>

                  <button
                    className={`w-10 h-10 rounded-full bg-[#ffffff] flex items-center justify-center shadow-xs transition-colors cursor-pointer border border-[#c0c1ff] ${
                      track.isLiked ? 'text-[#b10e6b]' : 'text-[#464554] hover:text-[#b10e6b]'
                    }`}
                    onClick={() => onToggleLike(track)}
                    type="button"
                    title="찜하기"
                  >
                    <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: track.isLiked ? "'FILL' 1" : "'FILL' 0" }}>
                      favorite
                    </span>
                  </button>
                </div>
              </div>
            );
          })()}

          {/* #3 Rank (Bronze Accent) */}
          {(() => {
            const track = CHART_PODIUM_TRACKS[2];
            const songLink = getSongUrl(track.title, track.artist, track.youtubeQuery);
            const artistLink = getArtistUrl(track.artist);

            return (
              <div className="group relative flex flex-col justify-between bg-[#f1f3ff] rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 md:order-3 border border-[#e1e8fd]">
                <div className="absolute -top-3 left-6 flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#ffd9e4] text-[#3e0022] text-[12px] font-bold shadow-2xs border border-[#ffffff]">
                  <span className="material-symbols-outlined text-[15px]">military_tech</span> 3위
                  <span className="text-[11px] text-[#b10e6b] font-extrabold ml-1">NEW</span>
                </div>

                <div className="flex flex-col gap-3 mt-2">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#ffffff] shadow-2xs group-hover:scale-[1.01] transition-transform duration-300">
                    <img
                      className="w-full h-full object-cover"
                      src={track.coverUrl}
                      alt={track.title}
                    />
                    <button
                      onClick={() => onOpenVideo(track)}
                      className="absolute inset-0 bg-[#141b2b]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] cursor-pointer"
                      title="공식 영상 보기"
                      type="button"
                    >
                      <span className="w-12 h-12 rounded-full bg-[#ba1a1a] text-[#ffffff] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[24px]">smart_display</span>
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {track.tags?.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-full bg-[#e9edff] text-[#464554] text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Song Link */}
                    <h3 className="text-[18px] font-bold text-[#141b2b] truncate">
                      <a
                        href={songLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#4648d4] hover:underline transition-colors flex items-center gap-1 inline-flex"
                        title="노래 링크 열기"
                      >
                        <span>{track.title}</span>
                        <span className="material-symbols-outlined text-[14px] text-[#4648d4]">open_in_new</span>
                      </a>
                    </h3>

                    {/* Artist Link */}
                    <p className="text-[13px] text-[#464554]">
                      <a
                        href={artistLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#4953bc] hover:underline transition-colors flex items-center gap-1 inline-flex"
                        title="가수 링크 열기"
                      >
                        <span className="material-symbols-outlined text-[13px] text-[#767586]">person</span>
                        <span>{track.artist}</span>
                      </a>
                    </p>
                  </div>

                  {/* Sentiment Bar */}
                  <div className="flex flex-col gap-1 p-3 bg-[#ffffff] rounded-xl border border-[#e1e8fd]">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#141b2b] font-semibold">{track.sentimentText}</span>
                      <span className="text-[#4648d4] font-bold">{track.matchScore}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#e1e8fd] overflow-hidden">
                      <div className="h-full bg-[#4648d4] rounded-full" style={{ width: `${track.matchScore}%` }} />
                    </div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#e1e8fd]">
                  <button
                    onClick={() => onOpenVideo(track)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-[#ba1a1a] text-[#ffffff] hover:bg-[#93000a] text-[12px] font-semibold transition-colors shadow-2xs cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">smart_display</span>
                    <span>영상 바로보기</span>
                  </button>

                  <a
                    href={songLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 py-2 px-3 rounded-full bg-[#ffffff] text-[#4648d4] hover:bg-[#e1e0ff] text-[12px] font-semibold transition-colors shadow-2xs border border-[#c0c1ff]"
                    title="노래 링크 열기"
                  >
                    <span>링크</span>
                    <span className="material-symbols-outlined text-[11px]">open_in_new</span>
                  </a>

                  <button
                    className={`w-9 h-9 rounded-full bg-[#ffffff] flex items-center justify-center shadow-2xs transition-colors cursor-pointer border border-[#e1e8fd] ${
                      track.isLiked ? 'text-[#b10e6b]' : 'text-[#464554] hover:text-[#b10e6b]'
                    }`}
                    onClick={() => onToggleLike(track)}
                    type="button"
                    title="찜하기"
                  >
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: track.isLiked ? "'FILL' 1" : "'FILL' 0" }}>
                      favorite
                    </span>
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. MAIN GRID: CHART TABLE + ANALYTICS      */}
      {/* ========================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Chart Table (8 cols) */}
        <section className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-[18px] md:text-[20px] font-bold text-[#141b2b]">
                실시간 트렌드 차트 (4위 - {showFullChart ? '15위' : '10위'})
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-[#e1e8fd] text-[#464554] text-[11px] font-medium">
                실시간 공식 영상 연동
              </span>
            </div>
            <div className="flex items-center gap-1 text-[12px]">
              <button
                className={`px-3 py-1 rounded-full cursor-pointer transition-colors ${
                  sortOrder === 'rank'
                    ? 'bg-[#e9edff] text-[#141b2b] font-bold'
                    : 'text-[#464554] hover:bg-[#f1f3ff]'
                }`}
                onClick={() => {
                  setSortOrder('rank');
                  onShowToast('차트를 순위순으로 정렬했습니다.');
                }}
              >
                순위순
              </button>
              <button
                className={`px-3 py-1 rounded-full cursor-pointer transition-colors ${
                  sortOrder === 'match'
                    ? 'bg-[#e9edff] text-[#141b2b] font-bold'
                    : 'text-[#464554] hover:bg-[#f1f3ff]'
                }`}
                onClick={() => {
                  setSortOrder('match');
                  onShowToast('차트를 AI 감성 공감도순으로 정렬했습니다.');
                }}
              >
                공감도순
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="w-full bg-[#ffffff] rounded-2xl shadow-xs overflow-hidden border border-[#e1e8fd]">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-[#f1f3ff] text-[12px] text-[#464554] font-semibold items-center border-b border-[#e1e8fd]">
              <div className="col-span-1 text-center">순위</div>
              <div className="col-span-6 md:col-span-5">실제 곡 / 아티스트 정보</div>
              <div className="hidden md:block md:col-span-4">실시간 리스너 감정 분석 게이지</div>
              <div className="col-span-5 md:col-span-2 text-right">영상 / 링크</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-[#f1f3ff]">
              {displayedRows.map((track) => {
                const songLink = getSongUrl(track.title, track.artist, track.youtubeQuery);
                const artistLink = getArtistUrl(track.artist);

                return (
                  <div
                    key={track.id}
                    className="grid grid-cols-12 gap-2 px-4 py-3.5 items-center hover:bg-[#f1f3ff]/70 transition-colors group"
                  >
                    {/* Rank & Change */}
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <span className="text-[15px] font-bold text-[#141b2b] font-mono">
                        {track.chartRank}
                      </span>
                      {track.rankChange === 'up' && (
                        <span className="text-[10px] text-[#4648d4] font-bold flex items-center">
                          ▲ {track.rankDiff}
                        </span>
                      )}
                      {track.rankChange === 'down' && (
                        <span className="text-[10px] text-[#ba1a1a] font-bold flex items-center">
                          ▼ {track.rankDiff}
                        </span>
                      )}
                      {track.rankChange === 'same' && (
                        <span className="text-[10px] text-[#767586] font-bold">-</span>
                      )}
                      {track.rankChange === 'new' && (
                        <span className="text-[10px] text-[#b10e6b] font-bold">NEW</span>
                      )}
                    </div>

                    {/* Artwork & Title/Artist with Links */}
                    <div className="col-span-6 md:col-span-5 flex items-center gap-3 min-w-0">
                      <div
                        className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-[#e9edff] shadow-2xs group/img cursor-pointer"
                        onClick={() => onOpenVideo(track)}
                        title="공식 영상 보기"
                      >
                        <img
                          className="w-full h-full object-cover"
                          src={track.coverUrl}
                          alt={track.title}
                        />
                        <div className="absolute inset-0 bg-[#ba1a1a]/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center text-[#ffffff] transition-opacity">
                          <span className="material-symbols-outlined text-[18px]">smart_display</span>
                        </div>
                      </div>

                      <div className="flex flex-col min-w-0">
                        {/* Song Link */}
                        <span className="text-[14px] font-bold text-[#141b2b] truncate">
                          <a
                            href={songLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#4648d4] hover:underline transition-colors flex items-center gap-1 inline-flex"
                            title="노래 링크 열기"
                          >
                            <span className="truncate">{track.title}</span>
                            <span className="material-symbols-outlined text-[13px] text-[#4648d4] shrink-0">open_in_new</span>
                          </a>
                        </span>

                        {/* Artist Link */}
                        <span className="text-[12px] text-[#464554] truncate mt-0.5">
                          <a
                            href={artistLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#4953bc] hover:underline transition-colors flex items-center gap-1 inline-flex text-[#464554]"
                            title="가수 링크 열기"
                          >
                            <span className="material-symbols-outlined text-[12px] text-[#767586]">person</span>
                            <span className="truncate">{track.artist}</span>
                            <span className="text-[#767586] text-[11px] shrink-0">
                              • {track.duration}
                            </span>
                          </a>
                        </span>
                      </div>
                    </div>

                    {/* Sentiment Analysis Gauge (Desktop) */}
                    <div className="hidden md:flex md:col-span-4 flex-col gap-1 pr-2">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-[#141b2b] truncate font-medium">
                          {track.sentimentBreakdown?.primaryLabel} {track.sentimentBreakdown?.primaryPct}% • {track.sentimentBreakdown?.secondaryLabel} {track.sentimentBreakdown?.secondaryPct}%
                        </span>
                        <span className="text-[#4648d4] font-bold">
                          {track.matchScore}% 일치
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#e1e8fd] overflow-hidden">
                        <div
                          className="h-full bg-[#4648d4] rounded-full"
                          style={{ width: `${track.sentimentBreakdown?.primaryPct || 70}%` }}
                        />
                      </div>
                    </div>

                    {/* Actions: Video Watch + Song Link */}
                    <div className="col-span-5 md:col-span-2 flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => onOpenVideo(track)}
                        className="px-2.5 py-1 rounded-full bg-[#ba1a1a] hover:bg-[#93000a] text-[#ffffff] text-[11px] font-bold flex items-center gap-1 shadow-2xs cursor-pointer"
                        title="공식 영상 팝업 보기"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[14px]">smart_display</span>
                        <span>영상</span>
                      </button>

                      <a
                        href={songLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-full bg-[#ffffff] hover:bg-[#e9edff] text-[#4648d4] text-[11px] font-bold flex items-center gap-1 shadow-2xs border border-[#c0c1ff]"
                        title="노래 링크 열기"
                      >
                        <span>링크</span>
                        <span className="material-symbols-outlined text-[11px]">open_in_new</span>
                      </a>

                      <button
                        className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                          track.isLiked
                            ? 'text-[#b10e6b] bg-[#ffd9e4]'
                            : 'text-[#464554] hover:bg-[#f1f3ff] hover:text-[#b10e6b]'
                        }`}
                        onClick={() => onToggleLike(track)}
                        title={track.isLiked ? '찜 해제' : '보관함 저장'}
                      >
                        <span
                          className="material-symbols-outlined text-[16px]"
                          style={{ fontVariationSettings: track.isLiked ? "'FILL' 1" : "'FILL' 0" }}
                        >
                          favorite
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Expansion Trigger */}
            <button
              onClick={() => setShowFullChart(!showFullChart)}
              className="w-full py-3 bg-[#f1f3ff] hover:bg-[#e9edff] text-[#141b2b] text-[13px] font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border-t border-[#e1e8fd]"
            >
              <span>{showFullChart ? '차트 10위까지만 보기' : '차트 11위 - 15위 전체보기'}</span>
              <span className="material-symbols-outlined text-[18px]">
                {showFullChart ? 'expand_less' : 'expand_more'}
              </span>
            </button>
          </div>
        </section>

        {/* Right Column: AI Analytics Widgets (4 cols) */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          {/* Widget 1: Rising Emotion Keywords */}
          <div className="flex flex-col bg-[#ffffff] rounded-2xl p-5 shadow-xs border border-[#e1e8fd]">
            <div className="flex items-center justify-between pb-3 border-b border-[#f1f3ff]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#4648d4] text-[20px]">whatshot</span>
                <h3 className="text-[15px] font-bold text-[#141b2b]">실시간 급상승 실제 명곡 키워드</h3>
              </div>
              <span className="text-[11px] text-[#4648d4] font-bold">LIVE</span>
            </div>

            <div className="flex flex-col gap-1.5 mt-3">
              {[
                { rank: 1, tag: '#비오는날헤이즈', change: '+342%' },
                { rank: 2, tag: '#새벽아이유밤편지', change: '+210%' },
                { rank: 3, tag: '#가을바람데이식스', change: '+185%' },
                { rank: 4, tag: '#퇴근후백예린', change: '+94%' },
                { rank: 5, tag: '#러닝뉴진스', change: '+78%' }
              ].map((item) => (
                <button
                  key={item.rank}
                  onClick={() => handleKeywordClick(item.tag)}
                  className="group flex items-center justify-between p-2 rounded-xl hover:bg-[#f1f3ff] transition-colors text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[14px] font-bold text-[#4648d4] w-5 text-center font-mono">
                      {item.rank}
                    </span>
                    <span className="text-[13px] font-medium text-[#141b2b] group-hover:text-[#4648d4] transition-colors">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <span className="text-[11px] font-bold text-[#4648d4]">{item.change}</span>
                    <span className="material-symbols-outlined text-[16px] text-[#4648d4]">arrow_drop_up</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Widget 2: Generational Top Resonance Summary */}
          <div className="flex flex-col bg-[#ffffff] rounded-2xl p-5 shadow-xs border border-[#e1e8fd]">
            <div className="flex items-center justify-between pb-3 border-b border-[#f1f3ff]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#4953bc] text-[20px]">pie_chart</span>
                <h3 className="text-[15px] font-bold text-[#141b2b]">연령대별 최다 청취 실제 곡</h3>
              </div>
              <span className="text-[11px] text-[#464554]">실시간 분석</span>
            </div>

            <div className="flex flex-col gap-3 mt-3">
              {/* 20s - NewJeans Ditto */}
              <div
                className="flex items-center gap-3 p-3 rounded-xl bg-[#f1f3ff] border border-[#e1e8fd] hover:bg-[#e9edff] transition-colors cursor-pointer"
                onClick={() => onOpenVideo(CHART_PODIUM_TRACKS[1])}
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#e1e0ff] text-[#07006c] flex items-center justify-center text-[12px] font-bold">
                  20대
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-bold text-[#141b2b] truncate hover:text-[#4648d4]">
                      Ditto
                    </span>
                    <span className="text-[12px] text-[#4648d4] font-bold">42.8%</span>
                  </div>
                  <span className="text-[11px] text-[#464554] truncate">NewJeans • 공식 MV 감상</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-[#ba1a1a]">smart_display</span>
              </div>

              {/* 30s - DAY6 */}
              <div
                className="flex items-center gap-3 p-3 rounded-xl bg-[#f1f3ff] border border-[#e1e8fd] hover:bg-[#e9edff] transition-colors cursor-pointer"
                onClick={() => onOpenVideo(CHART_PODIUM_TRACKS[0])}
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#e0e0ff] text-[#000767] flex items-center justify-center text-[12px] font-bold">
                  30대
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-bold text-[#141b2b] truncate hover:text-[#4648d4]">
                      한 페이지가 될 수 있게
                    </span>
                    <span className="text-[12px] text-[#4648d4] font-bold">38.4%</span>
                  </div>
                  <span className="text-[11px] text-[#464554] truncate">DAY6 (데이식스) • 밴드 MV 감상</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-[#ba1a1a]">smart_display</span>
              </div>

              {/* 40s+ - IU */}
              <div
                className="flex items-center gap-3 p-3 rounded-xl bg-[#f1f3ff] border border-[#e1e8fd] hover:bg-[#e9edff] transition-colors cursor-pointer"
                onClick={() => onOpenVideo(CHART_PODIUM_TRACKS[2])}
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#ffd9e4] text-[#3e0022] flex items-center justify-center text-[12px] font-bold">
                  40대+
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-bold text-[#141b2b] truncate hover:text-[#4648d4]">
                      밤편지 (Through the Night)
                    </span>
                    <span className="text-[12px] text-[#4648d4] font-bold">31.2%</span>
                  </div>
                  <span className="text-[11px] text-[#464554] truncate">아이유 (IU) • 공식 MV 감상</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-[#ba1a1a]">smart_display</span>
              </div>
            </div>
          </div>

          {/* Widget 3: AI Real-time Audio Stream Insight Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#e1e0ff]/50 via-[#f1f3ff] to-[#bdc2ff]/20 shadow-xs border border-[#c0c1ff] flex flex-col gap-2.5 relative overflow-hidden">
            <div className="flex items-center gap-1.5 text-[#4648d4]">
              <span className="material-symbols-outlined text-[20px]">psychology</span>
              <span className="text-[11px] font-bold tracking-wider">AURA INTELLIGENCE</span>
            </div>
            <h4 className="text-[15px] font-bold text-[#141b2b]">
              현재 청취자 68.2%가 ‘퇴근 후 안정감’을 찾는 중
            </h4>
            <p className="text-[12px] text-[#464554] leading-relaxed">
              헤이즈, 아이유, 백예린의 잔잔한 어쿠스틱 및 R&B 명곡 영상 소비율이 지난 1시간 동안 2.4배 급증했습니다.
            </p>
            <a
              href={customSessionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 self-start px-4 py-2 rounded-full bg-[#ffffff] text-[#141b2b] hover:bg-[#4648d4] hover:text-[#ffffff] transition-all text-[12px] font-semibold shadow-xs border border-[#e1e8fd] flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">smart_display</span>
              <span>퇴근길 맞춤 K-POP 명곡 영상 열기</span>
              <span className="material-symbols-outlined text-[12px]">open_in_new</span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
};
