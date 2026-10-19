import React from 'react';
import { APP_LOGO, USER_AVATAR } from '../data/mockData';

export type NavTab = 'home' | 'ai-daily-curations' | 'trending-charts';

interface HeaderProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  savedCount: number;
  onOpenLibrary: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  savedCount,
  onOpenLibrary
}) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#ffffff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e9edff]/80">
      <div className="h-16 max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => onTabChange('home')}
            className="flex items-center gap-2 text-left cursor-pointer transition-transform hover:opacity-90 active:scale-98"
            type="button"
          >
            <img
              alt="Aura Music Logo"
              className="h-8 w-auto object-contain"
              src={APP_LOGO}
            />
            <span className="font-sans text-[20px] leading-[28px] font-bold text-[#141b2b] tracking-tight">
              Aura Music
            </span>
          </button>

          {/* Nav Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="메인 내비게이션">
            <button
              onClick={() => onTabChange('home')}
              className={`px-4 py-1.5 rounded-full text-[14px] leading-[20px] transition-all cursor-pointer ${
                activeTab === 'home'
                  ? 'bg-[#e1e0ff] text-[#07006c] font-semibold shadow-xs'
                  : 'text-[#464554] font-medium hover:bg-[#f1f3ff] hover:text-[#141b2b]'
              }`}
              type="button"
            >
              홈 (Home)
            </button>
            <button
              onClick={() => onTabChange('ai-daily-curations')}
              className={`px-4 py-1.5 rounded-full text-[14px] leading-[20px] transition-all cursor-pointer ${
                activeTab === 'ai-daily-curations'
                  ? 'bg-[#e1e0ff] text-[#07006c] font-semibold shadow-xs'
                  : 'text-[#464554] font-medium hover:bg-[#f1f3ff] hover:text-[#141b2b]'
              }`}
              type="button"
            >
              AI 데일리 큐레이션
            </button>
            <button
              onClick={() => onTabChange('trending-charts')}
              className={`px-4 py-1.5 rounded-full text-[14px] leading-[20px] transition-all cursor-pointer ${
                activeTab === 'trending-charts'
                  ? 'bg-[#e1e0ff] text-[#07006c] font-semibold shadow-xs'
                  : 'text-[#464554] font-medium hover:bg-[#f1f3ff] hover:text-[#141b2b]'
              }`}
              type="button"
            >
              인기 차트
            </button>
          </nav>
        </div>

        {/* Right Section: My Library Button & Profile */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenLibrary}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f1f3ff] hover:bg-[#e9edff] hover:text-[#141b2b] transition-all text-[#464554] cursor-pointer shadow-xs active:scale-98"
            type="button"
            title="내 보관함 열기"
          >
            <span className="material-symbols-outlined text-[18px]">library_music</span>
            <span className="text-[14px] leading-[20px] font-medium">내 보관함</span>
            <span className="px-1.5 py-0.5 rounded-full bg-[#4648d4] text-[#ffffff] text-[11px] font-bold leading-none min-w-[18px] text-center">
              {savedCount}
            </span>
          </button>

          <div className="flex items-center pl-1">
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#e1e0ff]"
              src={USER_AVATAR}
            />
          </div>
        </div>
      </div>

      {/* Mobile Subnav */}
      <div className="flex md:hidden border-t border-[#e9edff] px-4 py-2 gap-2 overflow-x-auto bg-[#ffffff]">
        <button
          onClick={() => onTabChange('home')}
          className={`px-3 py-1 rounded-full text-[13px] whitespace-nowrap transition-colors ${
            activeTab === 'home'
              ? 'bg-[#e1e0ff] text-[#07006c] font-semibold'
              : 'text-[#464554] hover:bg-[#f1f3ff]'
          }`}
        >
          홈
        </button>
        <button
          onClick={() => onTabChange('ai-daily-curations')}
          className={`px-3 py-1 rounded-full text-[13px] whitespace-nowrap transition-colors ${
            activeTab === 'ai-daily-curations'
              ? 'bg-[#e1e0ff] text-[#07006c] font-semibold'
              : 'text-[#464554] hover:bg-[#f1f3ff]'
          }`}
        >
          AI 데일리 큐레이션
        </button>
        <button
          onClick={() => onTabChange('trending-charts')}
          className={`px-3 py-1 rounded-full text-[13px] whitespace-nowrap transition-colors ${
            activeTab === 'trending-charts'
              ? 'bg-[#e1e0ff] text-[#07006c] font-semibold'
              : 'text-[#464554] hover:bg-[#f1f3ff]'
          }`}
        >
          인기 차트
        </button>
      </div>
    </header>
  );
};
