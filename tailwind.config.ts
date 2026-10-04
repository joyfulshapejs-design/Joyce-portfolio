import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0d1117',
          surface: '#161b22',
          'surface-hover': '#1f2937',
        },
        border: '#30363d',
        text: {
          primary: '#e6edf3',
          secondary: '#8b949e',
        },
        accent: {
          green: '#39d353',
          blue: '#58a6ff',
          cyan: '#79c0ff',
          orange: '#d29922',
          red: '#f85149',
          yellow: '#e3b341',
        },
      },
      fontFamily: {
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        terminal: '720px',
      },
      boxShadow: {
        terminal: '0 8px 32px rgba(0, 0, 0, 0.4)',
        'terminal-hover': '0 12px 48px rgba(0, 0, 0, 0.5)',
      },
      borderRadius: {
        terminal: '12px',
      },
      animation: {
        blink: 'blink 1.06s step-end infinite',
        'pulse-once': 'pulse-once 2s ease-in-out',
        'fade-in-up': 'fade-in-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fill-left': 'fill-left 0.2s ease forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'pulse-once': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(57, 211, 83, 0)' },
          '50%': { boxShadow: '0 0 0 8px rgba(57, 211, 83, 0.3)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fill-left': {
          from: { width: '0%' },
          to: { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
