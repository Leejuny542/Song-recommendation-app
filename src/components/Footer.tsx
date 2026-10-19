import React from 'react';
import { APP_LOGO } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f1f3ff] mt-10 py-10 border-t border-[#e1e8fd]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            alt="Aura Music Logo"
            className="h-6 w-auto object-contain opacity-70"
            src={APP_LOGO}
          />
          <span className="text-[13px] text-[#464554]">
            © 2024 Aura Music AI Inc. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            className="text-[13px] text-[#464554] hover:text-[#141b2b] transition-colors"
            href="#terms"
            onClick={(e) => { e.preventDefault(); alert('Aura Music 이용약관: 본 서비스는 개인 맞춤형 AI 음악 추천을 제공합니다.'); }}
          >
            이용약관
          </a>
          <a
            className="text-[13px] text-[#464554] hover:text-[#141b2b] transition-colors"
            href="#privacy"
            onClick={(e) => { e.preventDefault(); alert('Aura Music 개인정보처리방침: 사용자의 감성 피드백 및 청취 취향은 안전하게 보관됩니다.'); }}
          >
            개인정보처리방침
          </a>
          <a
            className="text-[13px] text-[#464554] hover:text-[#141b2b] transition-colors"
            href="#support"
            onClick={(e) => { e.preventDefault(); alert('고객지원 센터: support@auramusic.ai (연중무휴 AI 즉시 지원)'); }}
          >
            고객지원
          </a>
        </div>
      </div>
    </footer>
  );
};
