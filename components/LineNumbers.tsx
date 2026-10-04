'use client';

import { useEffect, useState } from 'react';

export default function LineNumbers() {
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    const updateLines = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const lineHeight = 24; // approximate line height in px
      setLineCount(Math.floor(scrollHeight / lineHeight));
    };

    updateLines();
    window.addEventListener('resize', updateLines);
    return () => window.removeEventListener('resize', updateLines);
  }, []);

  const [scrollLine, setScrollLine] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const lineHeight = 24;
      setScrollLine(Math.floor(scrollTop / lineHeight) + 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Render ~50 visible line numbers around current scroll position
  const visibleCount = 50;
  const startLine = Math.max(1, scrollLine - 5);
  const lines = Array.from({ length: visibleCount }, (_, i) => startLine + i).filter(
    (l) => l <= lineCount
  );

  return (
    <div
      className="fixed left-0 top-0 h-screen w-12 hidden lg:flex flex-col items-end pr-3 pt-20 pointer-events-none select-none overflow-hidden z-10"
      aria-hidden="true"
    >
      {lines.map((num) => (
        <div
          key={num}
          className="font-mono text-[11px] leading-6 text-text-secondary"
          style={{ opacity: 0.3 }}
        >
          {num}
        </div>
      ))}
    </div>
  );
}
