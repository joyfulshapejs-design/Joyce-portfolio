'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', label: '~/about' },
  { href: '#projects', label: '~/projects' },
  { href: '#stack', label: '~/stack' },
  { href: '#blog', label: '~/blog' },
  { href: '#contact', label: '~/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-sm text-accent-green hover:text-accent-green/80 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            joyce@portfolio:~$
            <motion.span
              className="inline-block w-[2px] h-[1em] bg-accent-green ml-1 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.53, repeat: Infinity, repeatType: 'reverse' }}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative font-mono text-sm px-3 py-2 rounded-md transition-colors group ${
                    isActive ? 'text-accent-green' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {/* Hover fill effect */}
                  <span className="absolute inset-0 rounded-md bg-accent-blue/0 group-hover:bg-accent-blue/10 transition-colors duration-200" />
                  <span className="relative">{link.label}</span>
                  {isActive && (
                    <>
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent-green" />
                      <motion.span
                        className="relative inline-block w-[1px] h-[1em] bg-accent-green ml-1 align-middle"
                        animate={{ opacity: [1, 0] }}
                        transition={{
                          duration: 0.53,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }}
                      />
                    </>
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-secondary hover:text-text-primary p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span className="font-mono text-lg">{mobileOpen ? '×' : '≡'}</span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown — terminal style */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg-surface border-b border-border"
          >
            <div className="px-4 py-3 font-mono text-sm space-y-1">
              <div className="text-text-secondary mb-2">
                <span className="text-accent-green">$</span> ls ~/
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-text-secondary hover:text-accent-green hover:bg-accent-blue/10 rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
