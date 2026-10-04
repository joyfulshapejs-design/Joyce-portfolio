'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface TerminalBlock {
  command: string;
  response: string;
}

interface TypingAnimationProps {
  blocks: TerminalBlock[];
  onComplete?: () => void;
  skip?: boolean;
}

export default function TypingAnimation({ blocks, onComplete, skip = false }: TypingAnimationProps) {
  const [displayedBlocks, setDisplayedBlocks] = useState<
    { command: string; response: string; showResponse: boolean }[]
  >([]);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [completed, setCompleted] = useState(false);

  // Skip to completed state
  const skipToEnd = useCallback(() => {
    setDisplayedBlocks(
      blocks.map((b) => ({
        command: b.command,
        response: b.response,
        showResponse: true,
      }))
    );
    setIsTyping(false);
    setCompleted(true);
    onComplete?.();
  }, [blocks, onComplete]);

  useEffect(() => {
    if (skip) {
      skipToEnd();
      return;
    }
  }, [skip, skipToEnd]);

  useEffect(() => {
    if (completed || skip) return;

    if (currentBlockIndex >= blocks.length) {
      setIsTyping(false);
      setCompleted(true);
      onComplete?.();
      return;
    }

    const currentBlock = blocks[currentBlockIndex];
    const commandText = currentBlock.command;

    if (currentCharIndex === 0) {
      // Initialize the block
      setDisplayedBlocks((prev) => [
        ...prev,
        { command: '', response: currentBlock.response, showResponse: false },
      ]);
    }

    if (currentCharIndex < commandText.length) {
      // Variable typing speed: 40-80ms
      const char = commandText[currentCharIndex];
      const isSpace = char === ' ';
      const delay = isSpace ? 40 : 40 + Math.random() * 40;

      const timer = setTimeout(() => {
        setDisplayedBlocks((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          updated[updated.length - 1] = {
            ...last,
            command: commandText.slice(0, currentCharIndex + 1),
          };
          return updated;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      // Command typed — show response after pause
      const timer = setTimeout(() => {
        setDisplayedBlocks((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          updated[updated.length - 1] = { ...last, showResponse: true };
          return updated;
        });

        // Move to next block after pause
        setTimeout(() => {
          setCurrentBlockIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, 400);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [currentBlockIndex, currentCharIndex, blocks, completed, skip, onComplete]);

  return (
    <div className="space-y-3">
      {displayedBlocks.map((block, index) => (
        <div key={index}>
          <div className="flex items-start">
            <span className="text-accent-green mr-2 select-none">&gt;</span>
            <span className="text-text-primary">
              {block.command}
              {isTyping &&
                index === displayedBlocks.length - 1 &&
                !block.showResponse && (
                  <motion.span
                    className="inline-block w-[2px] h-[1.1em] bg-accent-green ml-[1px] align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.53, repeat: Infinity, repeatType: 'reverse' }}
                  />
                )}
            </span>
          </div>
          {block.showResponse && (
            <motion.div
              className="text-text-secondary mt-1 ml-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
            >
              {block.response}
            </motion.div>
          )}
        </div>
      ))}
      {completed && (
        <motion.span
          className="inline-block w-[2px] h-[1.1em] bg-accent-green align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.53, repeat: Infinity, repeatType: 'reverse' }}
        />
      )}
    </div>
  );
}
