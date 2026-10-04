'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TerminalWindow from './TerminalWindow';
import TypingAnimation from './TypingAnimation';

const bootLines = [
  { text: 'Loading modules...', delay: 0 },
  { text: 'Initializing portfolio...', delay: 100 },
  { text: 'Connection established.', delay: 200 },
];

const terminalBlocks = [
  {
    command: 'joyce --about',
    response: 'Full-Stack Developer based in the Philippines.\nI build web apps, ordering systems, and business websites.',
  },
  {
    command: 'joyce --stack',
    response: 'React · Next.js · TypeScript · Supabase · Tailwind CSS',
  },
  {
    command: 'joyce --status',
    response: 'Open to work. Scroll down to see what I\'ve built. ↓',
  },
];

export default function Hero() {
  const [bootPhase, setBootPhase] = useState<'booting' | 'typing' | 'complete'>('booting');
  const [bootProgress, setBootProgress] = useState<number[]>([]);
  const [skipped, setSkipped] = useState(false);

  const skipAll = useCallback(() => {
    setSkipped(true);
    setBootPhase('complete');
  }, []);

  // Boot sequence
  useEffect(() => {
    if (skipped) return;

    const timers: NodeJS.Timeout[] = [];

    bootLines.forEach((line, index) => {
      timers.push(
        setTimeout(() => {
          setBootProgress((prev) => [...prev, index]);
        }, 300 + line.delay + index * 400)
      );
    });

    // After boot, transition to typing
    timers.push(
      setTimeout(() => {
        if (!skipped) setBootPhase('typing');
      }, 2000)
    );

    return () => timers.forEach(clearTimeout);
  }, [skipped]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4"
      onClick={() => bootPhase !== 'complete' && skipAll()}
    >
      <div className="w-full max-w-terminal">
        <TerminalWindow title="joyce@portfolio — bash">
          <AnimatePresence mode="wait">
            {bootPhase === 'booting' && !skipped && (
              <motion.div
                key="boot"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="space-y-1"
              >
                {bootLines.map((line, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span
                      className={`font-mono text-sm transition-colors duration-200 ${
                        bootProgress.includes(index) ? 'text-accent-green' : 'text-text-secondary'
                      }`}
                    >
                      [OK]
                    </span>
                    <span className="text-text-secondary text-sm">{line.text}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {bootPhase === 'typing' && !skipped && (
              <motion.div
                key="typing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <TypingAnimation
                  blocks={terminalBlocks}
                  onComplete={() => setBootPhase('complete')}
                />
              </motion.div>
            )}

            {(bootPhase === 'complete' || skipped) && (
              <motion.div
                key="complete"
                initial={{ opacity: skipped ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <TypingAnimation blocks={terminalBlocks} skip={true} />
              </motion.div>
            )}
          </AnimatePresence>
        </TerminalWindow>

        {bootPhase !== 'complete' && !skipped && (
          <p className="text-center text-text-secondary text-xs mt-4 font-mono">
            click anywhere to skip
          </p>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: bootPhase === 'complete' ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <motion.span
          className="block text-text-secondary text-2xl"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
