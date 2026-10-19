import React from 'react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 flex items-center gap-2.5 bg-[#293040] text-[#edf0ff] px-5 py-3 rounded-full shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-300 pointer-events-none border border-[#464554]/40">
      <span className="material-symbols-outlined text-[20px] text-[#c0c1ff]">
        check_circle
      </span>
      <span className="text-[14px] font-medium leading-none">
        {message}
      </span>
    </div>
  );
};
