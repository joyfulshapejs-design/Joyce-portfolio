'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import TerminalWindow from './TerminalWindow';

const stackData = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Supabase', 'Firebase', 'PostgreSQL'],
  tools: ['Git', 'Vercel', 'Figma', 'VS Code'],
};

const allTech = [
  ...stackData.frontend,
  ...stackData.backend,
  ...stackData.tools,
];

export default function TechStack() {
  const listRef = useRef(null);
  const isInView = useInView(listRef, { once: true, amount: 0.3 });

  return (
    <section id="stack" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-text-secondary text-sm mb-12">
            <span className="text-accent-green">##</span> ~/stack
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <TerminalWindow title="package.json" className="max-w-2xl">
            <pre className="text-sm leading-relaxed">
              <span className="text-text-secondary">{'{'}</span>
              {'\n'}
              <span className="text-accent-cyan">{`  "developer"`}</span>
              <span className="text-text-secondary">: </span>
              <span className="text-accent-green">{`"Joyce Anne"`}</span>
              <span className="text-text-secondary">,</span>
              {'\n'}
              <span className="text-accent-cyan">{`  "stack"`}</span>
              <span className="text-text-secondary">{`: {`}</span>
              {'\n'}

              {/* Frontend */}
              <span className="text-accent-cyan">{`    "frontend"`}</span>
              <span className="text-text-secondary">: [</span>
              {stackData.frontend.map((tech, i) => (
                <span key={tech}>
                  <span className="text-accent-green">{`"${tech}"`}</span>
                  {i < stackData.frontend.length - 1 && (
                    <span className="text-text-secondary">, </span>
                  )}
                </span>
              ))}
              <span className="text-text-secondary">],</span>
              {'\n'}

              {/* Backend */}
              <span className="text-accent-cyan">{`    "backend"`}</span>
              <span className="text-text-secondary">: [</span>
              {stackData.backend.map((tech, i) => (
                <span key={tech}>
                  <span className="text-accent-green">{`"${tech}"`}</span>
                  {i < stackData.backend.length - 1 && (
                    <span className="text-text-secondary">, </span>
                  )}
                </span>
              ))}
              <span className="text-text-secondary">],</span>
              {'\n'}

              {/* Tools */}
              <span className="text-accent-cyan">{`    "tools"`}</span>
              <span className="text-text-secondary">: [</span>
              {stackData.tools.map((tech, i) => (
                <span key={tech}>
                  <span className="text-accent-green">{`"${tech}"`}</span>
                  {i < stackData.tools.length - 1 && (
                    <span className="text-text-secondary">, </span>
                  )}
                </span>
              ))}
              <span className="text-text-secondary">]</span>
              {'\n'}
              <span className="text-text-secondary">{'  }'}</span>
              {'\n'}
              <span className="text-text-secondary">{'}'}</span>
            </pre>
          </TerminalWindow>
        </ScrollReveal>

        {/* Install animation */}
        <div ref={listRef} className="mt-12 max-w-2xl">
          <div className="font-mono text-xs text-text-secondary mb-4">
            <span className="text-accent-green">$</span> npm install
          </div>
          <div className="flex flex-wrap gap-3">
            {allTech.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  delay: index * 0.06,
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-2 px-3 py-2 bg-bg-surface border border-border rounded-md"
              >
                <span className="text-sm text-text-primary font-mono">{tech}</span>
                <motion.span
                  className="text-accent-green text-xs"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.06 + 0.2, duration: 0.15 }}
                >
                  ✔
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
