import React, { useState } from 'react';
import { Track, getSongUrl, getArtistUrl } from '../types/music';
import { CURATED_DAILY_THEMES, MASTER_PLAYLIST_TRACKS } from '../data/mockData';

interface DailyCurationViewProps {
  onToggleLike: (track: Track) => void;
  onOpenYoutube: (query: string, title: string) => void;
  onShowToast: (message: string) => void;
  onSelectTrack: (track: Track) => void;
  onOpenVideo: (track: Track) => void;
  selectedTrackId: string | null;
}

export const DailyCurationView: React.FC<DailyCurationViewProps> = ({
  onToggleLike,
  onOpenYoutube,
  onShowToast,
  onSelectTrack,
  onOpenVideo,
  selectedTrackId
}) => {
  const [sortCriteria, setSortCriteria] = useState<'recommend' | 'match' | 'calm'>('recommend');
  const [showAll12, setShowAll12] = useState(false);
  const [isMasterSaved, setIsMasterSaved] = useState(false);

  // Sorting logic
  const sortedTracks = [...MASTER_PLAYLIST_TRACKS].sort((a, b) => {
    if (sortCriteria === 'match') {
      return b.matchScore - a.matchScore;
    } else if (sortCriteria === 'calm') {
      return (b.durationSec || 0) - (a.durationSec || 0);
    }
    return (a.chartRank || 0) - (b.chartRank || 0);
  });

  const displayedTracks = showAll12 ? sortedTracks : sortedTracks.slice(0, 6);

  const handleMasterSave = () => {
    setIsMasterSaved(!isMasterSaved);
    if (!isMasterSaved) {
      onShowToast("'선선한 오후를 채우는 포근한 멜로디' 플레이리스트가 내 보관함에 저장되었습니다.");
    } else {
      onShowToast("플레이리스트 저장을 해제했습니다.");
    }
  };

  const handleFeedback = (feedbackType: string) => {
    if (feedbackType === 'good') {
      onShowToast("✨ 현재 실제 명곡 큐레이션 및 영상 구성이 최적으로 튜닝되었습니다.");
    } else if (feedbackType === 'slower') {
      onShowToast("🍃 폴킴, 아이유 등 잔잔한 어쿠스틱 발라드 영상을 우선 배치했습니다.");
    } else if (feedbackType === 'faster') {
      onShowToast("⚡ DAY6, 뉴진스, 악뮤 등 경쾌한 밴드 및 팝 영상을 보강했습니다.");
    }
  };

  const masterPlaylistLink = getSongUrl('선선한 오후를 채우는 포근한 멜로디 DAY6 백예린 폴킴', 'Aura Curation');

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-4 pb-12 flex flex-col gap-8">
      {/* ========================================== */}
      {/* 1. TOP MASTER RECOMMENDATION BANNER        */}
      {/* ========================================== */}
      <section className="w-full">
        {/* Live Context Capsule Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e9edff] text-[#141b2b] text-[12px] font-semibold border border-[#dce2f7]">
              <span className="w-2 h-2 rounded-full bg-[#6063ee] animate-pulse" />
              AI 실시간 맞춤 분석 가동 중
            </span>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f3ff] text-[#464554] text-[11px] border border-[#e1e8fd]">
              <span className="material-symbols-outlined text-[15px] text-[#b10e6b]">wb_sunny</span>
              <span>서울 19.5°C 맑음</span>
              <span className="opacity-40">|</span>
              <span className="material-symbols-outlined text-[15px] text-[#4648d4]">schedule</span>
              <span>15:20 나른한 오후</span>
              <span className="opacity-40">|</span>
              <span>감정 활력지수 74%</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[12px] text-[#464554]">
            <span>업데이트 주기</span>
            <span className="font-semibold text-[#4648d4]">매일 06:00 • 14:00 • 21:00</span>
          </div>
        </div>

        {/* Master Feature Card */}
        <div className="relative overflow-hidden rounded-2xl bg-[#f1f3ff] shadow-xs border border-[#e1e8fd]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Visual Art Panel (Left) */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] overflow-hidden group">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgzvsxp0_jVakU_bqV90OYSglSn7Vc8K0JMmoav4PiM1ZU6FCJcJr3-C3X0nP309Rhar_F5gm82HVD3lbScwf5cOCzvtbX_tBeoVcM7hI_q5dcxZ74C4OZuvkrr8oEQm9eVEqRry1qK5zqX8pfSgfnbNl7DNawmcnKjvKIJqjzM9SS8xvjVxzeRCEEIMxbULbuq3y7JPvAGyq4udFKC9B-lhu46-mX5YE2ZQNW2-GCStKlkYW_n_J1"
                alt="Master Selection Warm Atmosphere"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141b2b]/80 via-[#141b2b]/20 to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ffffff]/90 backdrop-blur-md text-[11px] font-bold text-[#4648d4] shadow-xs border border-[#ffffff]">
                  <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                  오늘의 마스터 셀렉션
                </span>
              </div>

              {/* Ambient Floating Equalizer Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between p-3 rounded-xl bg-[#ffffff]/95 backdrop-blur-md shadow-sm border border-[#e1e8fd]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#4648d4] text-[20px] animate-pulse">equalizer</span>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-[#141b2b]">오후 집중 &amp; 심신 정돈 모드</span>
                    <span className="text-[11px] text-[#464554]">어쿠스틱 • DAY6, 백예린, 폴킴 실제 명곡</span>
                  </div>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#e1e0ff] text-[#07006c] font-semibold">
                  12트랙 • 41분
                </span>
              </div>
            </div>

            {/* Content & Action Panel (Right) */}
            <div className="lg:col-span-7 p-6 lg:p-8 flex flex-col justify-between">
              <div>
                {/* Mood Tags */}
                <div className="flex flex-wrap items-center gap-1.5 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#e1e8fd] text-[#464554] text-[11px] font-medium">#햇살오후</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#e1e8fd] text-[#464554] text-[11px] font-medium">#DAY6</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#e1e8fd] text-[#464554] text-[11px] font-medium">#백예린</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#e1e8fd] text-[#464554] text-[11px] font-medium">#마음정돈</span>
                </div>

                {/* Title & Subtitle */}
                <h1 className="text-[22px] md:text-[28px] font-bold text-[#141b2b] tracking-tight mb-2 leading-snug">
                  햇살 머금은 나른한 오후, 마음을 정돈하는 명곡 플레이리스트
                </h1>
                <p className="text-[14px] md:text-[15px] text-[#464554] leading-relaxed max-w-2xl mb-5">
                  Aura 인공지능이 선별한 <strong>실제 아티스트들의 최고 명곡 12곡</strong>입니다. 공식 뮤직비디오 영상과 함께 음원 및 아티스트 공식 채널을 바로 감상해 보세요.
                </p>

                {/* Metrics Spark Bar */}
                <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-[#ffffff] shadow-2xs mb-6 border border-[#e1e8fd]">
                  <div>
                    <span className="block text-[11px] text-[#767586] font-medium">감성 일치율</span>
                    <span className="text-[16px] md:text-[18px] font-bold text-[#4648d4]">99.4%</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#767586] font-medium">대표 아티스트</span>
                    <span className="text-[15px] md:text-[16px] font-bold text-[#b10e6b]">DAY6 • 백예린</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#767586] font-medium">주요 사운드</span>
                    <span className="text-[15px] md:text-[16px] font-bold text-[#141b2b] truncate">밴드 &amp; 어쿠스틱</span>
                  </div>
                </div>
              </div>

              {/* CTAs with Video and Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Watch Video Button */}
                <button
                  onClick={() => onOpenVideo(MASTER_PLAYLIST_TRACKS[0])}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#ba1a1a] hover:bg-[#93000a] text-[#ffffff] text-[14px] font-semibold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">smart_display</span>
                  <span>대표 영상 바로보기</span>
                </button>

                <a
                  href={masterPlaylistLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#4648d4] hover:bg-[#4953bc] text-[#ffffff] text-[14px] font-semibold transition-all shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[19px]">link</span>
                  <span>플레이리스트 링크</span>
                  <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                </a>

                <button
                  onClick={handleMasterSave}
                  className={`flex items-center gap-2 px-4 py-3 rounded-full bg-[#ffffff] transition-all shadow-2xs border border-[#e1e8fd] cursor-pointer text-[14px] font-medium ${
                    isMasterSaved ? 'text-[#4648d4] font-semibold bg-[#e1e0ff]' : 'text-[#464554] hover:text-[#141b2b]'
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[19px]">
                    {isMasterSaved ? 'bookmark_added' : 'bookmark_add'}
                  </span>
                  <span>{isMasterSaved ? '보관함에 저장됨' : '내 보관함에 담기'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. THEMATIC COLLECTIONS GRID (4 CARDS)     */}
      {/* ========================================== */}
      <section className="w-full">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#4648d4] font-bold uppercase tracking-wider mb-1">
              <span className="material-symbols-outlined text-[16px]">tune</span>
              AI Daily Themes
            </div>
            <h2 className="text-[22px] md:text-[26px] font-bold text-[#141b2b]">
              시간대 &amp; 상황별 실제 명곡 테마 컬렉션
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-[12px] text-[#464554]">오후 2시 기점으로 새로고침 완료</span>
          </div>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {CURATED_DAILY_THEMES.map((theme) => {
            const themeSongLink = getSongUrl(theme.title, 'Aura Real Theme', theme.youtubeQuery);

            return (
              <div
                key={theme.id}
                className="group flex flex-col justify-between rounded-2xl p-4 bg-[#f1f3ff] hover:bg-[#e9edff] transition-all duration-300 shadow-2xs hover:shadow-md border border-[#e1e8fd]"
              >
                <div>
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={theme.coverUrl}
                      alt={theme.title}
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#ffffff]/90 backdrop-blur-md text-[11px] font-bold text-[#4648d4] shadow-xs">
                        {theme.badge}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        onOpenVideo({
                          id: theme.id,
                          title: theme.title,
                          artist: 'Official Collection',
                          coverUrl: theme.coverUrl,
                          duration: theme.duration,
                          durationSec: 200,
                          matchScore: 98.5,
                          youtubeQuery: theme.youtubeQuery,
                          youtubeVideoId: theme.youtubeVideoId
                        })
                      }
                      className="absolute bottom-2.5 right-2.5 w-10 h-10 rounded-full bg-[#ba1a1a] text-[#ffffff] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer hover:bg-[#93000a]"
                      title="공식 영상 바로보기"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]">smart_display</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#464554] text-[11px] mb-1">
                    <span>{theme.trackCount}곡</span>
                    <span>•</span>
                    <span>{theme.duration}</span>
                    <span className="ml-auto font-bold text-[#4648d4]">{theme.matchRate}</span>
                  </div>

                  <h3 className="text-[15px] font-bold text-[#141b2b] line-clamp-1 mb-1">
                    <a
                      href={themeSongLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#4648d4] hover:underline transition-colors flex items-center gap-1"
                      title="테마 링크 열기"
                    >
                      <span>{theme.title}</span>
                      <span className="material-symbols-outlined text-[13px] text-[#4648d4]">open_in_new</span>
                    </a>
                  </h3>
                  <p className="text-[12px] text-[#464554] line-clamp-2 mb-3 leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#e1e8fd]">
                  <button
                    onClick={() =>
                      onOpenVideo({
                        id: theme.id,
                        title: theme.title,
                        artist: 'Official Music Video',
                        coverUrl: theme.coverUrl,
                        duration: theme.duration,
                        durationSec: 200,
                        matchScore: 98.4,
                        youtubeQuery: theme.youtubeQuery,
                        youtubeVideoId: theme.youtubeVideoId
                      })
                    }
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#ba1a1a] hover:bg-[#93000a] text-[#ffffff] text-[11px] font-semibold transition-colors shadow-2xs cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[14px]">smart_display</span>
                    <span>영상 보기</span>
                  </button>

                  <a
                    href={themeSongLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#ffffff] hover:bg-[#dce2f7] text-[#141b2b] text-[11px] font-medium transition-colors shadow-2xs border border-[#e1e8fd]"
                  >
                    <span>링크</span>
                    <span className="material-symbols-outlined text-[11px]">open_in_new</span>
                  </a>

                  <button
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[#464554] hover:text-[#b10e6b] hover:bg-[#ffffff] transition-colors cursor-pointer"
                    title="보관함 담기"
                    onClick={() => {
                      onToggleLike({
                        id: theme.id,
                        title: theme.title,
                        artist: 'Real Artists Theme',
                        coverUrl: theme.coverUrl,
                        duration: theme.duration,
                        durationSec: 200,
                        matchScore: 98.4,
                        youtubeQuery: theme.youtubeQuery,
                        youtubeVideoId: theme.youtubeVideoId
                      });
                    }}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. DETAILED TRACKLIST FOR MASTER PLAYLIST  */}
      {/* ========================================== */}
      <section className="w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-[20px] md:text-[24px] font-bold text-[#141b2b]">
                오늘의 수록곡 상세 분석표 (실제 발매곡)
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-[#e1e0ff] text-[#07006c] text-[11px] font-bold">
                총 12곡 중 {displayedTracks.length}곡 미리보기
              </span>
            </div>
            <p className="text-[13px] text-[#464554] mt-1">
              각 행의 <strong>영상 버튼</strong>을 누르면 공식 영상이 팝업으로 재생됩니다.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#f1f3ff] border border-[#e1e8fd]">
            <button
              onClick={() => setSortCriteria('recommend')}
              className={`px-3 py-1 rounded-full text-[12px] transition-all cursor-pointer ${
                sortCriteria === 'recommend'
                  ? 'bg-[#ffffff] font-bold text-[#4648d4] shadow-xs'
                  : 'text-[#464554] hover:text-[#141b2b]'
              }`}
            >
              추천순
            </button>
            <button
              onClick={() => setSortCriteria('match')}
              className={`px-3 py-1 rounded-full text-[12px] transition-all cursor-pointer ${
                sortCriteria === 'match'
                  ? 'bg-[#ffffff] font-bold text-[#4648d4] shadow-xs'
                  : 'text-[#464554] hover:text-[#141b2b]'
              }`}
            >
              매칭률순
            </button>
            <button
              onClick={() => setSortCriteria('calm')}
              className={`px-3 py-1 rounded-full text-[12px] transition-all cursor-pointer ${
                sortCriteria === 'calm'
                  ? 'bg-[#ffffff] font-bold text-[#4648d4] shadow-xs'
                  : 'text-[#464554] hover:text-[#141b2b]'
              }`}
            >
              안정 지수순
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="rounded-2xl overflow-hidden bg-[#f1f3ff] shadow-xs border border-[#e1e8fd]">
          <div className="divide-y divide-[#e1e8fd]">
            {/* Table Header */}
            <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 text-[#464554] text-[12px] font-semibold uppercase tracking-wider bg-[#e9edff]/60">
              <div className="col-span-1 text-center">#</div>
              <div className="col-span-4">실제 곡 • 아티스트</div>
              <div className="col-span-4">AI 감성 분석 &amp; 곡 특징 해설</div>
              <div className="col-span-1 text-center">매칭률</div>
              <div className="col-span-2 text-right">영상 &amp; 링크</div>
            </div>

            {/* Track Rows */}
            {displayedTracks.map((track, idx) => {
              const songLink = getSongUrl(track.title, track.artist, track.youtubeQuery);
              const artistLink = getArtistUrl(track.artist);

              return (
                <div
                  key={track.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-y-2 lg:gap-4 items-center px-4 lg:px-6 py-3.5 hover:bg-[#e9edff]/70 transition-colors group"
                >
                  {/* Number */}
                  <div className="hidden lg:flex col-span-1 justify-center items-center text-[13px] text-[#464554] font-medium">
                    <span className="font-mono text-[#767586]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Artwork & Info with explicit Links */}
                  <div className="col-span-1 lg:col-span-4 flex items-center gap-3 min-w-0">
                    <div
                      className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-2xs cursor-pointer group/art"
                      onClick={() => onOpenVideo(track)}
                      title="공식 영상 보기"
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={track.coverUrl}
                        alt={track.title}
                      />
                      <div className="absolute inset-0 bg-[#ba1a1a]/40 opacity-0 group-hover/art:opacity-100 flex items-center justify-center text-[#ffffff] transition-opacity">
                        <span className="material-symbols-outlined text-[18px]">smart_display</span>
                      </div>
                    </div>

                    <div className="flex flex-col min-w-0">
                      {/* Song link */}
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

                      {/* Artist link */}
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
                            {track.album ? `• ${track.album}` : ''}
                          </span>
                        </a>
                      </span>
                    </div>

                    <span className="lg:hidden ml-auto text-[11px] font-bold text-[#4648d4]">
                      {track.matchScore}%
                    </span>
                  </div>

                  {/* AI Psychology Reason */}
                  <div className="col-span-1 lg:col-span-4 flex items-center gap-2 min-w-0">
                    <span className="material-symbols-outlined text-[#4648d4] text-[18px] shrink-0">
                      psychology
                    </span>
                    <p className="text-[12px] text-[#464554] truncate">
                      {track.aiReason}
                    </p>
                  </div>

                  {/* Match Score */}
                  <div className="hidden lg:flex col-span-1 justify-center items-center">
                    <span className="px-2 py-0.5 rounded-full bg-[#e1e0ff] text-[#07006c] text-[11px] font-bold">
                      {track.matchScore}%
                    </span>
                  </div>

                  {/* Actions: Video Watch + Song Link */}
                  <div className="col-span-1 lg:col-span-2 flex items-center justify-between lg:justify-end gap-2 pt-1 lg:pt-0">
                    <div className="flex items-center gap-1.5">
                      {/* Video Button */}
                      <button
                        onClick={() => onOpenVideo(track)}
                        className="px-2.5 py-1 rounded-full bg-[#ba1a1a] hover:bg-[#93000a] text-[#ffffff] text-[11px] font-bold flex items-center gap-1 shadow-2xs cursor-pointer"
                        title="공식 영상 팝업 보기"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[14px]">smart_display</span>
                        <span>영상</span>
                      </button>

                      {/* Song Link */}
                      <a
                        href={songLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 rounded-full bg-[#ffffff] hover:bg-[#e9edff] text-[#4648d4] text-[11px] font-bold flex items-center gap-1 shadow-2xs border border-[#c0c1ff]"
                        title="노래 링크 열기"
                      >
                        <span>링크</span>
                        <span className="material-symbols-outlined text-[10px]">open_in_new</span>
                      </a>

                      {/* Like */}
                      <button
                        onClick={() => onToggleLike(track)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                          track.isLiked
                            ? 'text-[#b10e6b] bg-[#ffd9e4]'
                            : 'text-[#464554] hover:text-[#b10e6b]'
                        }`}
                        title={track.isLiked ? '찜 해제' : '찜하기'}
                        type="button"
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
                </div>
              );
            })}
          </div>

          {/* Footer Action */}
          <div className="flex items-center justify-between p-4 bg-[#e9edff]/40 border-t border-[#e1e8fd]">
            <span className="text-[13px] text-[#464554]">
              총 12곡의 실제 인기 음원 및 공식 뮤직비디오 영상이 준비되어 있습니다.
            </span>
            <button
              onClick={() => setShowAll12(!showAll12)}
              className="px-4 py-2 rounded-full bg-[#ffffff] hover:bg-[#e9edff] text-[#4648d4] text-[13px] font-bold transition-all shadow-2xs border border-[#c0c1ff] cursor-pointer"
              type="button"
            >
              {showAll12 ? '주요 6개 트랙으로 접기' : '남은 6개 트랙 더보기'}
            </button>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. AI MOOD CALIBRATION FEEDBACK BANNER     */}
      {/* ========================================== */}
      <section className="w-full">
        <div className="p-6 rounded-2xl bg-[#f1f3ff] shadow-xs border border-[#e1e8fd] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e1e0ff] flex items-center justify-center text-[#4648d4] shrink-0">
              <span className="material-symbols-outlined text-[28px]">graphic_eq</span>
            </div>
            <div>
              <h4 className="text-[16px] font-bold text-[#141b2b]">
                실시간 감정 피드백으로 AI 큐레이션 정밀 튜닝하기
              </h4>
              <p className="text-[13px] text-[#464554]">
                추천된 실제 명곡과 영상이 취향에 맞으신가요? 피드백을 전달해 주시면 다음 큐레이션에 즉시 반영됩니다.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            <button
              onClick={() => handleFeedback('good')}
              className="px-4 py-2 rounded-full bg-[#ffffff] hover:bg-[#e9edff] text-[#141b2b] text-[13px] font-medium transition-all shadow-2xs border border-[#e1e8fd] flex items-center gap-1.5 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-[#4648d4]">sentiment_satisfied</span>
              <span>지금 딱 좋아요</span>
            </button>
            <button
              onClick={() => handleFeedback('slower')}
              className="px-4 py-2 rounded-full bg-[#ffffff] hover:bg-[#e9edff] text-[#141b2b] text-[13px] font-medium transition-all shadow-2xs border border-[#e1e8fd] flex items-center gap-1.5 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-[#4953bc]">speed</span>
              <span>조금 더 느리게</span>
            </button>
            <button
              onClick={() => handleFeedback('faster')}
              className="px-4 py-2 rounded-full bg-[#ffffff] hover:bg-[#e9edff] text-[#141b2b] text-[13px] font-medium transition-all shadow-2xs border border-[#e1e8fd] flex items-center gap-1.5 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-[#b10e6b]">bolt</span>
              <span>더 경쾌하게</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
