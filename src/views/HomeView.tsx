import React, { useState } from 'react';
import { Track, getSongUrl, getArtistUrl } from '../types/music';
import { SEARCH_KEYWORD_PRESETS } from '../data/mockData';
import friendsListeningImg from '../assets/images/friends_headphones_listening_1792396129167.jpg';

interface HomeViewProps {
  recommendedTracks: Track[];
  onTriggerAiCuration: (query: string) => void;
  isAiLoading: boolean;
  libraryTracks: Track[];
  onToggleLike: (track: Track) => void;
  onSelectTrack: (track: Track) => void;
  onOpenVideo: (track: Track) => void;
  onOpenLibraryModal: () => void;
  onRemoveLibraryTrack: (id: string, title: string) => void;
  onOpenYoutube: (query: string, title: string) => void;
  selectedTrackId: string | null;
}

export const HomeView: React.FC<HomeViewProps> = ({
  recommendedTracks,
  onTriggerAiCuration,
  isAiLoading,
  libraryTracks,
  onToggleLike,
  onSelectTrack,
  onOpenVideo,
  onOpenLibraryModal,
  onRemoveLibraryTrack,
  onOpenYoutube,
  selectedTrackId
}) => {
  const [searchInput, setSearchInput] = useState(
    "비 오는 날 창가에서 조용히 마시는 따뜻한 커피 한 잔에 어울리는 헤이즈, 아이유, 잔나비 감성 노래"
  );
  const [activeKeyword, setActiveKeyword] = useState<string>('#비오는날감성');
  const [isPlayingInlineVideo, setIsPlayingInlineVideo] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    onTriggerAiCuration(searchInput.trim());
  };

  const handleKeywordClick = (keyword: string) => {
    setActiveKeyword(keyword);
    const preset = SEARCH_KEYWORD_PRESETS[keyword];
    if (preset) {
      setSearchInput(preset.query);
      onTriggerAiCuration(preset.query);
    } else {
      const generatedQuery = `${keyword.replace('#', '')} 분위기에 어울리는 실제 인기 명곡을 추천해줘`;
      setSearchInput(generatedQuery);
      onTriggerAiCuration(generatedQuery);
    }
  };

  const keywordChips = [
    '#비오는날감성',
    '#늦은밤새벽집중',
    '#퇴근길드라이브',
    '#신나는운동플레이리스트',
    '#카페에서일할때',
    '#마음이편안해지는인디',
    '#지친하루위로곡'
  ];

  return (
    <div className="w-full">
      {/* Subtle Ambient Glow Orbs */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[840px] h-[360px] bg-gradient-to-b from-[#4648d4]/10 via-[#8792fe]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
        <div className="absolute top-96 -right-24 w-96 h-96 bg-[#d23284]/5 blur-3xl pointer-events-none rounded-full" />

        {/* Main Content Container */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 w-full pb-10">
          {/* ========================================== */}
          {/* 1. AI NATURAL LANGUAGE HERO SEARCH SECTION */}
          {/* ========================================== */}
          <section className="pt-8 pb-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Moved Text & Search Box */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Algorithmic Status Pill */}
                <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#f1f3ff] text-[#4648d4] mb-3 shadow-2xs border border-[#dce2f7]">
                  <span className="material-symbols-outlined text-[16px] animate-pulse">auto_awesome</span>
                  <span className="text-[12px] font-semibold tracking-wide">
                    Aura AI v4.2 • 실제 발매된 K-POP 및 글로벌 명곡 &amp; 영상 큐레이션 작동 중
                  </span>
                </div>

                {/* Emotion-First Headline & Subcopy */}
                <h1 className="text-[30px] md:text-[38px] font-bold text-[#141b2b] tracking-tight leading-[1.25]">
                  지금 어떤 노래가 <span className="text-[#4648d4] font-bold">듣고 싶으신가요?</span>
                </h1>
                <p className="mt-2 text-[14px] md:text-[15px] text-[#464554] max-w-xl leading-relaxed">
                  기분, 날씨, 상황을 적어보세요. 가상 음악이 아닌 <strong>실제 유명 아티스트의 인기 명곡</strong>과 <strong>공식 뮤직비디오 영상</strong>을 찾아드립니다.
                </p>

                {/* Dynamic AI Search Box */}
                <div className="w-full mt-5">
                  <form className="relative group" onSubmit={handleFormSubmit}>
                    <div className="relative flex items-center bg-[#f1f3ff] rounded-full p-2 pl-4 shadow-xs transition-all duration-300 group-hover:shadow-md focus-within:bg-[#ffffff] focus-within:shadow-lg focus-within:ring-4 focus-within:ring-[#4648d4]/15 border border-[#e1e8fd]">
                      <span className="material-symbols-outlined text-[#4648d4] text-[22px] mr-2.5 select-none shrink-0">
                        psychology
                      </span>
                      <input
                        className="w-full bg-transparent border-0 outline-none text-[14px] text-[#141b2b] placeholder:text-[#767586] text-left pr-3 font-medium min-w-0"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="예: '비 오는 날 듣기 좋은 헤이즈, 잔나비, 아이유의 따뜻하고 감성적인 노래'"
                        type="text"
                      />
                      <button
                        disabled={isAiLoading}
                        className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#4648d4] text-[#ffffff] text-[13px] md:text-[14px] font-semibold shadow-md hover:bg-[#4953bc] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer shrink-0 disabled:opacity-80"
                        type="submit"
                      >
                        {isAiLoading ? (
                          <>
                            <span className="material-symbols-outlined text-[17px] animate-spin">sync</span>
                            <span>분석 중...</span>
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined text-[17px]">magic_button</span>
                            <span>추천받기</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                  {/* Interactive Mood & Context Filter Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-3.5">
                    <span className="text-[12px] text-[#464554] font-medium mr-1 select-none flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">tune</span> 실제 명곡 테마:
                    </span>
                    {keywordChips.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => handleKeywordClick(chip)}
                        className={`px-3 py-1 rounded-full text-[11px] md:text-[12px] transition-all shadow-2xs cursor-pointer ${
                          activeKeyword === chip
                            ? 'bg-[#e1e0ff] text-[#07006c] font-semibold ring-1 ring-[#c0c1ff]'
                            : 'bg-[#f1f3ff] text-[#141b2b] hover:bg-[#e1e0ff] hover:text-[#07006c]'
                        }`}
                        type="button"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Friends Listening Video Player Card */}
              <div className="lg:col-span-5 w-full">
                <div className="relative rounded-3xl overflow-hidden bg-[#141b2b] border border-[#c0c1ff]/30 shadow-xl group">
                  {/* Video Screen Area */}
                  <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
                    {isPlayingInlineVideo ? (
                      <iframe
                        src="https://www.youtube-nocookie.com/embed/foYmRj_P02Y?autoplay=1&rel=0"
                        title="Friends Listening Music Video"
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <img
                          src={friendsListeningImg}
                          alt="Friends sharing headphones listening to music"
                          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1.5 border border-white/15">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            Aura Moments
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-[#ba1a1a] text-white text-[11px] font-bold tracking-wider uppercase shadow-xs">
                            실제 영상
                          </span>
                        </div>

                        {/* Center Big Play Button */}
                        <button
                          onClick={() => {
                            if (recommendedTracks[0]) {
                              onOpenVideo(recommendedTracks[0]);
                            } else {
                              setIsPlayingInlineVideo(true);
                            }
                          }}
                          className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#ba1a1a]/90 hover:bg-[#ba1a1a] text-white flex items-center justify-center shadow-lg shadow-[#ba1a1a]/40 hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-white/30 backdrop-blur-xs"
                          title="영상 재생하기"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[32px] ml-0.5">play_arrow</span>
                        </button>

                        {/* Bottom Floating Dialogue & Music Waves */}
                        <div className="absolute bottom-3 left-3 right-3 text-left">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[#c0c1ff] text-[11px] font-mono border border-white/10 mb-1">
                            <span className="material-symbols-outlined text-[14px] text-emerald-400 animate-pulse">headphones</span>
                            <span>“You gotta hear this drop! This track is a banger.”</span>
                          </div>
                          <p className="text-white text-[13px] font-bold line-clamp-1 drop-shadow-sm">
                            친구와 이어폰을 나누어 들으며 감상하는 명곡 순간
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Controls Footer */}
                  <div className="p-3.5 bg-[#1a2133] border-t border-white/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-[#4648d4] animate-pulse"></span>
                      <span className="text-[12px] font-semibold text-white/90 truncate">
                        {isPlayingInlineVideo ? 'DAY6 - 한 페이지가 될 수 있게' : 'DAY6 • NewJeans • 아이유 추천 영상'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {isPlayingInlineVideo ? (
                        <button
                          onClick={() => setIsPlayingInlineVideo(false)}
                          className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium transition-colors cursor-pointer"
                          type="button"
                        >
                          커버로 닫기
                        </button>
                      ) : (
                        <button
                          onClick={() => setIsPlayingInlineVideo(true)}
                          className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[14px]">smart_display</span>
                          <span>인라인 재생</span>
                        </button>
                      )}

                      <button
                        onClick={() => {
                          if (recommendedTracks[0]) {
                            onOpenVideo(recommendedTracks[0]);
                          }
                        }}
                        className="px-3 py-1 rounded-lg bg-[#ba1a1a] hover:bg-[#93000a] text-white text-[11px] font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer active:scale-95"
                        type="button"
                        title="전체화면 MV 모달 열기"
                      >
                        <span className="material-symbols-outlined text-[14px]">open_in_full</span>
                        <span>영상 크게보기</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* 2. TODAY'S CURATED AI PLAYLIST BANNER       */}
          {/* ========================================== */}
          <section className="mt-8">
            <div className="relative overflow-hidden rounded-2xl bg-[#e9edff] p-6 md:p-8 shadow-xs border border-[#dce2f7]">
              {/* Background Audio Wave Graphic Decorator */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none flex items-center justify-end pr-8">
                <svg className="w-full h-40 text-[#4648d4]" fill="none" preserveAspectRatio="none" viewBox="0 0 200 60">
                  <path d="M0,30 Q15,5 30,30 T60,30 T90,10 T120,50 T150,20 T180,45 T200,30" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                  <path d="M0,30 Q20,48 40,30 T80,30 T110,55 T140,15 T170,35 T200,30" stroke="currentColor" strokeDasharray="2,3" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                {/* Left Info Block */}
                <div className="flex flex-col max-w-2xl">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#e1e0ff] text-[#07006c] text-[11px] font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[14px]">graphic_eq</span>
                      AI DAILY PICKS • 실제 명곡 셀렉션
                    </span>
                    <span className="text-[12px] text-[#464554] font-medium">
                      실시간 기상/시간대 분석 완료
                    </span>
                  </div>
                  <h2 className="text-[22px] md:text-[26px] font-bold text-[#141b2b] tracking-tight mt-1">
                    오늘 당신의 하루를 위한 AI 일일 셀렉션: <span className="text-[#4648d4] font-bold">‘선선한 오후를 채우는 포근한 멜로디’</span>
                  </h2>
                  <p className="text-[14px] text-[#464554] mt-2 leading-relaxed">
                    DAY6, 백예린, 폴킴, 10CM 등 실제 인기 아티스트들의 포근하고 낭만적인 음원 8곡과 공식 영상이 준비되었습니다.
                  </p>

                  {/* Tags & Track Metrics */}
                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full bg-[#ffffff] text-[#141b2b] text-[12px] shadow-2xs font-medium border border-[#e1e8fd]">
                      총 8곡 (28분 42초)
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#ffffff] text-[#141b2b] text-[12px] shadow-2xs font-medium border border-[#e1e8fd]">
                      BPM 78-92 잔잔함
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#ffffff] text-[#4648d4] text-[12px] shadow-2xs font-bold border border-[#c0c1ff]">
                      매칭률 98.4%
                    </span>
                  </div>
                </div>

                {/* Right CTA & Visual Thumbnail Stack */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
                  {/* Visual Stack */}
                  <div className="flex -space-x-4 items-center">
                    <img
                      className="w-16 h-16 rounded-xl object-cover shadow-md ring-2 ring-[#ffffff]"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBERubO5TwqmbsRbRBNCVyFIX2alyD4hjX0bzQdm3ZJ2khLb5npEy4qs3wxyR-TX3D_yrPCNyNqqG6abUqB2O1_Gc-0ktRtTE-txZnI8px-jUM4r5BDbQpidTGqv7KxNv4Nu-obSQZxG82FiJYhSrnJ5FnM31IXqIjok706hnPS93ooPxaNiSM4ISqP5H_ghpXcNeOQGAZWhWT0HaqYPsKtCwX-AKVmCacfmRL7nuDbq5sP1RmTXRoJ"
                      alt="Album stack 1"
                    />
                    <img
                      className="w-16 h-16 rounded-xl object-cover shadow-md ring-2 ring-[#ffffff]"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSDgPeMpjxkNiTwXswbg3anB_qk0sOfQgIi-jCOT9oStnh1LrZhF3Rfhbx6sK-caa8MeUxdPTEIkg3PtqR-1RlFh3m8rVZoZXAf6VS5hrK54se1RK-pbIo59U9QQDMbdRWOss8xog_khn3iR3pIcxtr2EbLKsVvogEhNxCsESJ7aAyXReQJfHXus9a339vkfaDO6MAOy8O-zVPtWUXqOly6shEcJq-47KzzjQFCcH71ppqTr8ITMCq"
                      alt="Album stack 2"
                    />
                    <img
                      className="w-16 h-16 rounded-xl object-cover shadow-md ring-2 ring-[#ffffff]"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB76YtUtRh574DTd0bqDfsXfkqtqMDTmX1DG62_O0l4lGzPLiq_5AJ3NBKY3BbbPldZ0QJ2CrlGTY8sdLQQUCd45qZ6ruLiPluuXVeNCV8lNIVrJMMKc48junDGZxXb6ow_ZFhOcGAjAYKelMBV-y_JaQ6vFCRD--3QNMaxxm2ESx5h-lEUKLnLCChAtrKuhN4dMxuPdHdi9kwYh_NAHnBW9RMBxSTQgzCkDu1d2nsKfJQF1qMGoEn6"
                      alt="Album stack 3"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto justify-end">
                    {/* Watch Featured Video Modal */}
                    <button
                      onClick={() => onOpenVideo(recommendedTracks[0])}
                      className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-[#ba1a1a] text-[#ffffff] text-[14px] font-semibold shadow-md hover:bg-[#93000a] transition-all cursor-pointer active:scale-98"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]">smart_display</span>
                      <span>대표 영상 바로보기</span>
                    </button>

                    <a
                      href={getSongUrl('선선한 오후를 채우는 포근한 멜로디 헤이즈 아이유 잔나비', 'AI Daily Picks')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-[#4648d4] text-[#ffffff] text-[14px] font-semibold shadow-md hover:bg-[#4953bc] transition-all cursor-pointer active:scale-98"
                    >
                      <span className="material-symbols-outlined text-[20px]">link</span>
                      <span>플레이리스트 링크</span>
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* 3. MAIN REAL RECOMMENDED TRACKS (GRID)     */}
          {/* ========================================== */}
          <section className="mt-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4648d4] text-[28px]">graphic_eq</span>
                <div>
                  <h2 className="text-[20px] font-bold text-[#141b2b] tracking-tight">
                    실제 발매된 AI 맞춤 추천 곡 <span className="text-[#4648d4] font-bold">({recommendedTracks.length}곡)</span>
                  </h2>
                  <p className="text-[12px] text-[#464554]">
                    영상 바로보기 버튼을 누르면 실제 공식 뮤직비디오가 앱 내에서 재생됩니다.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  className="flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#e9edff] text-[#464554] text-[12px] font-medium hover:text-[#141b2b] hover:bg-[#dce2f7] transition-colors cursor-pointer"
                  onClick={() => onTriggerAiCuration(searchInput)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">refresh</span>
                  <span>다시 추천받기</span>
                </button>
              </div>
            </div>

            {/* 4 Bespoke Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendedTracks.map((track, idx) => {
                const songLink = getSongUrl(track.title, track.artist, track.youtubeQuery);
                const artistLink = getArtistUrl(track.artist);
                const isSelected = selectedTrackId === track.id;

                return (
                  <div
                    key={track.id}
                    className={`group relative flex flex-col justify-between bg-[#ffffff] p-5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 border ${
                      isSelected ? 'border-[#4648d4] ring-2 ring-[#4648d4]/15' : 'border-[#e1e8fd] hover:border-[#c0c1ff]'
                    }`}
                  >
                    <div className="flex gap-4">
                      {/* Album Artwork with Video Play Overlay */}
                      <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden shadow-xs border border-[#e9edff]">
                        <img
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          src={track.coverUrl}
                          alt={track.title}
                        />
                        <button
                          onClick={() => onOpenVideo(track)}
                          className="absolute inset-0 m-auto w-11 h-11 rounded-full bg-[#ba1a1a] text-[#ffffff] flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-md cursor-pointer hover:bg-[#93000a]"
                          title="공식 영상 바로보기"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[24px]">smart_display</span>
                        </button>
                      </div>

                      {/* Metadata & Actions */}
                      <div className="flex flex-col flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <span className="inline-block text-[11px] text-[#4648d4] font-bold uppercase tracking-wider">
                              {track.genre || 'Acoustic • Soul'}
                            </span>

                            {/* Clickable Song Title Link */}
                            <h3 className="text-[16px] font-bold text-[#141b2b] truncate">
                              <a
                                href={songLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#4648d4] hover:underline transition-colors flex items-center gap-1 inline-flex max-w-full"
                                title="노래 링크 열기"
                              >
                                <span className="truncate">{track.title}</span>
                                <span className="material-symbols-outlined text-[14px] text-[#4648d4] shrink-0">open_in_new</span>
                              </a>
                            </h3>

                            {/* Clickable Artist Name Link */}
                            <p className="text-[13px] text-[#464554] truncate mt-0.5">
                              <a
                                href={artistLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#4953bc] hover:underline transition-colors flex items-center gap-1 inline-flex text-[#464554] hover:font-medium"
                                title="가수 공식 채널 링크 열기"
                              >
                                <span className="material-symbols-outlined text-[13px] text-[#767586] shrink-0">person</span>
                                <span className="truncate">{track.artist}</span>
                                <span className="text-[#767586] text-[11px] shrink-0">
                                  {track.album ? `• ${track.album}` : ''}
                                </span>
                              </a>
                            </p>
                          </div>

                          {/* Like Button */}
                          <button
                            className={`p-2 rounded-full transition-colors cursor-pointer shrink-0 ${
                              track.isLiked
                                ? 'text-[#b10e6b] bg-[#ffd9e4]'
                                : 'text-[#464554] hover:text-[#b10e6b] hover:bg-[#ffd9e4]/30'
                            }`}
                            onClick={() => onToggleLike(track)}
                            title={track.isLiked ? '찜 해제' : '찜하기'}
                            type="button"
                          >
                            <span
                              className="material-symbols-outlined text-[20px]"
                              style={{ fontVariationSettings: track.isLiked ? "'FILL' 1" : "'FILL' 0" }}
                            >
                              {track.isLiked ? 'favorite' : 'favorite_border'}
                            </span>
                          </button>
                        </div>

                        {/* Mini Progress Preview Bar */}
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-[11px] text-[#767586] font-mono">
                            {idx === 0 ? '0:45' : idx === 1 ? '1:12' : idx === 2 ? '0:18' : '2:05'}
                          </span>
                          <div className="w-full bg-[#e1e8fd] h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-[#4648d4] h-full rounded-full"
                              style={{
                                width: idx === 0 ? '28%' : idx === 1 ? '42%' : idx === 2 ? '14%' : '65%'
                              }}
                            />
                          </div>
                          <span className="text-[11px] text-[#767586] font-mono">{track.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* AI Reason Insight Box */}
                    <div className="mt-4 p-3 rounded-xl bg-[#f1f3ff] flex items-start gap-2.5 border border-[#e9edff]">
                      <span className="material-symbols-outlined text-[#4648d4] text-[18px] shrink-0 mt-0.5">
                        neurology
                      </span>
                      <p className="text-[12px] text-[#141b2b] leading-relaxed">
                        <strong className="font-semibold text-[#4648d4]">추천 이유:</strong> {track.aiReason}
                      </p>
                    </div>

                    {/* Action Links Bar: Video Watch + Song Link + Artist Link */}
                    <div className="mt-3 pt-3 flex flex-wrap items-center justify-between gap-2 border-t border-[#f1f3ff]">
                      <span className="inline-flex items-center gap-1 text-[12px] text-[#464554] font-medium">
                        <span className="material-symbols-outlined text-[15px] text-[#4648d4]">verified</span>
                        감성 매칭률 {track.matchScore}%
                      </span>

                      <div className="flex items-center gap-1.5">
                        {/* Video Modal Trigger */}
                        <button
                          onClick={() => onOpenVideo(track)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#ba1a1a] hover:bg-[#93000a] text-[#ffffff] transition-all text-[12px] font-semibold shadow-2xs cursor-pointer"
                          type="button"
                          title="앱 내에서 공식 영상 보기"
                        >
                          <span className="material-symbols-outlined text-[16px]">smart_display</span>
                          <span>영상 보기</span>
                        </button>

                        {/* Song Link */}
                        <a
                          href={songLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#4648d4] hover:bg-[#4953bc] text-[#ffffff] transition-all text-[12px] font-semibold shadow-2xs"
                        >
                          <span className="material-symbols-outlined text-[14px]">link</span>
                          <span>노래 링크</span>
                          <span className="material-symbols-outlined text-[11px]">open_in_new</span>
                        </a>

                        {/* Artist Link */}
                        <a
                          href={artistLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#f1f3ff] hover:bg-[#e1e0ff] text-[#141b2b] transition-all text-[12px] font-medium border border-[#dce2f7]"
                        >
                          <span className="material-symbols-outlined text-[14px] text-[#4648d4]">person</span>
                          <span>가수 채널</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ========================================== */}
          {/* 4. FLOATING / IN-PAGE "MY LIBRARY" DOCK    */}
          {/* ========================================== */}
          <section className="mt-10">
            <div className="bg-[#f1f3ff] rounded-2xl p-6 md:p-8 shadow-xs border border-[#e1e8fd]">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4648d4]/10 text-[#4648d4] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">folder_special</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[18px] font-bold text-[#141b2b]">내 보관함 (My Library)</h3>
                      <span className="px-2 py-0.5 rounded-full bg-[#4648d4] text-[#ffffff] text-[11px] font-bold">
                        찜한 곡 {libraryTracks.length}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#464554]">
                      실제 명곡 음원 및 공식 영상 링크 컬렉션입니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                  <button
                    className="flex items-center gap-1 px-4 py-2 rounded-full bg-[#ffffff] text-[#141b2b] text-[13px] font-medium hover:bg-[#e9edff] transition-colors shadow-2xs border border-[#e1e8fd] cursor-pointer"
                    onClick={onOpenLibraryModal}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">open_in_full</span>
                    <span>모달로 크게 보기</span>
                  </button>
                </div>
              </div>

              {/* Saved Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {libraryTracks.slice(0, 3).map((item) => {
                  const songLink = getSongUrl(item.title, item.artist, item.youtubeQuery);
                  const artistLink = getArtistUrl(item.artist);

                  return (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#ffffff] shadow-2xs hover:shadow-sm transition-all group border border-[#e1e8fd]"
                    >
                      <div
                        className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 cursor-pointer"
                        onClick={() => onOpenVideo(item)}
                        title="영상 보기"
                      >
                        <img
                          className="w-full h-full object-cover"
                          src={item.coverUrl}
                          alt={item.title}
                        />
                        <div className="absolute inset-0 bg-[#ba1a1a]/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[#ffffff] transition-opacity">
                          <span className="material-symbols-outlined text-[18px]">smart_display</span>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-[13px] font-bold text-[#141b2b] truncate">
                          <a
                            href={songLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#4648d4] hover:underline"
                            title="노래 링크 열기"
                          >
                            {item.title}
                          </a>
                        </h4>
                        <p className="text-[12px] text-[#464554] truncate">
                          <a
                            href={artistLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#4953bc] hover:underline"
                            title="가수 링크 열기"
                          >
                            {item.artist}
                          </a>
                        </p>
                        <span className="text-[11px] text-[#767586]">
                          {item.savedDate || '2024.10.28 저장됨'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => onOpenVideo(item)}
                          className="p-1.5 rounded-full text-[#ba1a1a] hover:bg-[#ffdad6]/30 transition-colors cursor-pointer"
                          title="영상 보기"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">smart_display</span>
                        </button>
                        <a
                          href={songLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-full text-[#4648d4] hover:bg-[#e1e0ff] transition-colors"
                          title="노래 링크 열기"
                        >
                          <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                        </a>
                        <button
                          className="p-1.5 rounded-full text-[#464554] hover:text-[#ba1a1a] transition-colors cursor-pointer"
                          onClick={() => onRemoveLibraryTrack(item.id, item.title)}
                          title="삭제"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
