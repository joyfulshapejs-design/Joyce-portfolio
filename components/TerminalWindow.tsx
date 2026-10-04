'use client';

import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({ title, children, className = '' }: TerminalWindowProps) {
  return (
    <div
      className={`bg-bg-surface border border-border rounded-terminal shadow-terminal overflow-hidden ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center h-9 px-4 border-b border-border bg-bg-surface">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-accent-red" />
          <span className="w-3 h-3 rounded-full bg-accent-yellow" />
          <span className="w-3 h-3 rounded-full bg-accent-green" />
        </div>
        {title && (
          <span className="ml-4 text-xs font-mono text-text-secondary">{title}</span>
        )}
      </div>
      {/* Terminal content */}
      <div className="p-6 font-mono text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
