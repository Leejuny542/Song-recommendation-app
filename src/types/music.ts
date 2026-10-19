export interface Track {
  id: string;
  title: string;
  artist: string;
  album?: string;
  year?: string | number;
  duration: string;
  durationSec: number;
  coverUrl: string;
  genre?: string;
  bpm?: string;
  matchScore: number;
  aiReason?: string;
  isLiked?: boolean;
  savedDate?: string;
  youtubeQuery: string;
  youtubeVideoId?: string;
  videoEmbedUrl?: string;
  videoTitle?: string;
  videoViews?: string;
  songUrl?: string;
  artistUrl?: string;
  audioToneType?: 'acoustic' | 'jazz' | 'lofi' | 'classical' | 'electronic' | 'ambient';
  chartRank?: number;
  rankChange?: 'up' | 'down' | 'same' | 'new';
  rankDiff?: number | string;
  sentimentText?: string;
  sentimentBreakdown?: {
    primaryLabel: string;
    primaryPct: number;
    secondaryLabel: string;
    secondaryPct: number;
  };
  tags?: string[];
  listenersCount?: string;
  reactionsCount?: string;
}

export interface CuratedTheme {
  id: string;
  title: string;
  badge: string;
  trackCount: number;
  duration: string;
  matchRate: string;
  description: string;
  coverUrl: string;
  youtubeQuery: string;
  youtubeVideoId?: string;
  videoTitle?: string;
  songUrl?: string;
  artistUrl?: string;
}

export function getSongUrl(title: string, artist: string, query?: string): string {
  const q = query || `${title} ${artist}`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
}

export function getArtistUrl(artist: string): string {
  const cleanArtist = artist.split('(')[0].trim() || artist;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(cleanArtist + ' 공식 채널 노래')}`;
}

export function getVideoWatchUrl(videoId?: string, query?: string): string {
  if (videoId) {
    return `https://www.youtube.com/watch?v=${videoId}`;
  }
  return `https://www.youtube.com/results?search_query=${encodeURIComponent((query || '공식 뮤직비디오') + ' 공식 MV')}`;
}

export function getVideoEmbedUrl(videoId?: string): string {
  if (videoId) {
    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
  }
  return '';
}
