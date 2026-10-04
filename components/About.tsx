'use client';

import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-text-secondary text-sm mb-12">
            <span className="text-accent-green">##</span> ~/about
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: code comment block */}
          <ScrollReveal delay={0.08}>
            <div className="bg-bg-surface border border-border rounded-lg p-6">
              <pre className="font-mono text-sm text-text-secondary leading-relaxed">
                <span className="text-accent-cyan">{'/**'}</span>
                {'\n'}
                <span className="text-accent-cyan"> * </span>
                <span className="text-text-primary">About Joyce Anne</span>
                {'\n'}
                <span className="text-accent-cyan"> * </span>Full-stack developer who builds
                {'\n'}
                <span className="text-accent-cyan"> * </span>tools for small businesses.
                {'\n'}
                <span className="text-accent-cyan">{' */'}</span>
              </pre>
            </div>
          </ScrollReveal>

          {/* Right: photo + bio */}
          <ScrollReveal delay={0.16}>
            <div className="space-y-6">
              {/* Profile photo placeholder */}
              <div className="relative w-32 h-32">
                <div className="w-full h-full rounded-full bg-bg-surface border-2 border-accent-green flex items-center justify-center overflow-hidden animate-pulse-once">
                  {/* Placeholder avatar */}
                  <svg
                    className="w-16 h-16 text-text-secondary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                {/* Online indicator */}
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-accent-green rounded-full border-2 border-bg-primary" />
              </div>

              <p className="text-text-primary text-base leading-relaxed font-sans">
                I&apos;m a full-stack developer from the Philippines. I build custom web
                applications, online ordering systems, and business websites — mostly for
                small businesses in the hospitality and retail space. I recently built a
                multi-tenant restaurant platform from the ground up, and I&apos;m always
                working on something new. I care about clean code, fast load times, and
                building things that actually work for real users.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
