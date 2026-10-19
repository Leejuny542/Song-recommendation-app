import { useState, useEffect, useRef } from 'react';
import { Header, NavTab } from './components/Header';
import { Footer } from './components/Footer';
import { LibraryModal } from './components/LibraryModal';
import { FloatingPlayer } from './components/FloatingPlayer';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { Toast } from './components/Toast';
import { HomeView } from './views/HomeView';
import { DailyCurationView } from './views/DailyCurationView';
import { TrendingChartsView } from './views/TrendingChartsView';
import {
  INITIAL_HOME_RECOMMENDATIONS,
  INITIAL_LIBRARY_TRACKS,
  MASTER_PLAYLIST_TRACKS,
  CHART_ROWS_TRACKS,
  CHART_PODIUM_TRACKS,
  SEARCH_KEYWORD_PRESETS
} from './data/mockData';
import { Track } from './types/music';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  // Video Player Modal state
  const [videoTrack, setVideoTrack] = useState<Track | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Home recommendations state (all real songs)
  const [recommendedTracks, setRecommendedTracks] = useState<Track[]>(() => {
    return INITIAL_HOME_RECOMMENDATIONS;
  });
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Library state with local storage fallback
  const [libraryTracks, setLibraryTracks] = useState<Track[]>(() => {
    try {
      const saved = localStorage.getItem('aura_music_library');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_LIBRARY_TRACKS;
  });

  // Track selection state for quick link dock
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  // Persist library
  useEffect(() => {
    try {
      localStorage.setItem('aura_music_library', JSON.stringify(libraryTracks));
    } catch {
      // ignore
    }
  }, [libraryTracks]);

  const isTrackLiked = (trackId: string, trackTitle: string) => {
    return libraryTracks.some(
      (t) => t.id === trackId || t.title.toLowerCase() === trackTitle.toLowerCase()
    );
  };

  const showToast = (msg: string) => {
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    setToastMessage(msg);
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleOpenYoutube = (query: string, title: string) => {
    showToast(`'${title}' 음원 링크로 이동합니다.`);
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenVideo = (track: Track) => {
    setVideoTrack({
      ...track,
      isLiked: isTrackLiked(track.id, track.title)
    });
    setIsVideoModalOpen(true);
    showToast(`🎬 '${track.title} - ${track.artist}' 공식 영상 플레이어를 실행합니다.`);
  };

  const handleSelectTrack = (track: Track) => {
    setCurrentTrack({
      ...track,
      isLiked: isTrackLiked(track.id, track.title)
    });
    showToast(`'${track.title}' 노래 및 가수 링크가 선택되었습니다.`);
  };

  // Like / Bookmark toggle
  const handleToggleLike = (track: Track) => {
    const isAlreadyLiked = isTrackLiked(track.id, track.title);

    if (isAlreadyLiked) {
      setLibraryTracks((prev) =>
        prev.filter((t) => t.id !== track.id && t.title.toLowerCase() !== track.title.toLowerCase())
      );
      if (currentTrack?.id === track.id || currentTrack?.title === track.title) {
        setCurrentTrack((prev) => (prev ? { ...prev, isLiked: false } : null));
      }
      if (videoTrack?.id === track.id || videoTrack?.title === track.title) {
        setVideoTrack((prev) => (prev ? { ...prev, isLiked: false } : null));
      }
      showToast(`'${track.title}' 보관함에서 삭제되었습니다.`);
    } else {
      const newSavedItem: Track = {
        ...track,
        isLiked: true,
        savedDate: `${new Date().getFullYear()}.${String(new Date().getMonth() + 1).padStart(2, '0')}.${String(new Date().getDate()).padStart(2, '0')} 저장됨`
      };
      setLibraryTracks((prev) => [newSavedItem, ...prev]);
      if (currentTrack?.id === track.id || currentTrack?.title === track.title) {
        setCurrentTrack((prev) => (prev ? { ...prev, isLiked: true } : null));
      }
      if (videoTrack?.id === track.id || videoTrack?.title === track.title) {
        setVideoTrack((prev) => (prev ? { ...prev, isLiked: true } : null));
      }
      showToast(`'${track.title}' 내 보관함에 추가되었습니다.`);
    }
  };

  const handleRemoveLibraryTrack = (id: string, title: string) => {
    setLibraryTracks((prev) => prev.filter((t) => t.id !== id));
    if (currentTrack?.id === id) {
      setCurrentTrack((prev) => (prev ? { ...prev, isLiked: false } : null));
    }
    showToast(`'${title}' 곡이 삭제되었습니다.`);
  };

  // AI Curation Trigger
  const handleTriggerAiCuration = (query: string) => {
    setIsAiLoading(true);

    setTimeout(() => {
      setIsAiLoading(false);

      const foundPreset = Object.entries(SEARCH_KEYWORD_PRESETS).find(
        ([key, val]) => query.includes(key) || query.includes(val.query.slice(0, 10))
      );

      if (foundPreset) {
        setRecommendedTracks(
          foundPreset[1].tracks.map((t) => ({
            ...t,
            isLiked: isTrackLiked(t.id, t.title)
          }))
        );
      } else {
        const pool = [
          ...INITIAL_HOME_RECOMMENDATIONS,
          ...MASTER_PLAYLIST_TRACKS,
          ...CHART_ROWS_TRACKS,
          ...CHART_PODIUM_TRACKS
        ];
        const randomized = [...pool].sort(() => 0.5 - Math.random()).slice(0, 4);

        setRecommendedTracks(
          randomized.map((t, idx) => ({
            ...t,
            id: `ai-curated-${Date.now()}-${idx}`,
            matchScore: Number((96 + Math.random() * 3.8).toFixed(1)),
            aiReason: `'${query.slice(0, 16)}...' 분위기를 반영하여 감성 일치도가 높은 최적의 실제 발매곡으로 매칭되었습니다.`,
            isLiked: isTrackLiked(t.id, t.title)
          }))
        );
      }

      showToast(`✨ AI가 '${query.slice(0, 18)}...' 분위기를 분석하여 실제 명곡 4곡과 공식 영상을 업데이트했습니다!`);
    }, 700);
  };

  // Sync like flags
  const syncedRecommendedTracks = recommendedTracks.map((t) => ({
    ...t,
    isLiked: isTrackLiked(t.id, t.title)
  }));

  // Playlist pool for video modal
  const allAvailableTracks = [
    ...recommendedTracks,
    ...CHART_PODIUM_TRACKS,
    ...MASTER_PLAYLIST_TRACKS
  ];

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#141b2b] flex flex-col font-sans selection:bg-[#6063ee] selection:text-[#fffbff]">
      {/* Header */}
      <Header
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        savedCount={libraryTracks.length}
        onOpenLibrary={() => setIsLibraryOpen(true)}
      />

      {/* Main Content Pages */}
      <main className="flex-1 w-full pt-16 md:pt-20">
        {activeTab === 'home' && (
          <HomeView
            recommendedTracks={syncedRecommendedTracks}
            onTriggerAiCuration={handleTriggerAiCuration}
            isAiLoading={isAiLoading}
            libraryTracks={libraryTracks}
            onToggleLike={handleToggleLike}
            onSelectTrack={handleSelectTrack}
            onOpenVideo={handleOpenVideo}
            onOpenLibraryModal={() => setIsLibraryOpen(true)}
            onRemoveLibraryTrack={handleRemoveLibraryTrack}
            onOpenYoutube={handleOpenYoutube}
            selectedTrackId={currentTrack?.id || null}
          />
        )}

        {activeTab === 'ai-daily-curations' && (
          <DailyCurationView
            onToggleLike={handleToggleLike}
            onOpenYoutube={handleOpenYoutube}
            onShowToast={showToast}
            onSelectTrack={handleSelectTrack}
            onOpenVideo={handleOpenVideo}
            selectedTrackId={currentTrack?.id || null}
          />
        )}

        {activeTab === 'trending-charts' && (
          <TrendingChartsView
            onToggleLike={handleToggleLike}
            onOpenYoutube={handleOpenYoutube}
            onShowToast={showToast}
            onSelectTrack={handleSelectTrack}
            onOpenVideo={handleOpenVideo}
            selectedTrackId={currentTrack?.id || null}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Library Modal */}
      <LibraryModal
        isOpen={isLibraryOpen}
        onClose={() => setIsLibraryOpen(false)}
        tracks={libraryTracks}
        onRemoveTrack={handleRemoveLibraryTrack}
        onOpenYoutube={handleOpenYoutube}
        onOpenVideo={handleOpenVideo}
      />

      {/* Floating Link & Video Dock for Selected Track */}
      <FloatingPlayer
        currentTrack={currentTrack}
        onClose={() => setCurrentTrack(null)}
        onToggleLike={handleToggleLike}
        onOpenVideo={handleOpenVideo}
      />

      {/* Dedicated Real Music Video Theater Modal */}
      <VideoPlayerModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        track={videoTrack}
        onToggleLike={handleToggleLike}
        isLiked={videoTrack ? isTrackLiked(videoTrack.id, videoTrack.title) : false}
        playlistTracks={allAvailableTracks}
        onSelectTrack={(t) => setVideoTrack(t)}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
