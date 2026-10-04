'use client';

import ScrollReveal from './ScrollReveal';

interface Project {
  hash: string;
  year: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  screenshots: string[];
}

const projects: Project[] = [
  {
    hash: 'a3f7d2e',
    year: '2026',
    title: 'Restaurant Online Ordering & POS Platform',
    description:
      'Multi-tenant SaaS — each restaurant gets a white-label storefront with QR-code smart menu, online ordering, real-time tracking, and a merchant dashboard.',
    tech: ['React', 'Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    screenshots: ['/images/placeholder-project.svg'],
  },
  {
    hash: 'b8c4e1f',
    year: '2026',
    title: 'Resort Website (jvergara)',
    description:
      'A modern resort website showcasing rooms, amenities, and location — designed to drive direct bookings and reduce OTA dependency.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    screenshots: ['/images/placeholder-project.svg'],
  },
  {
    hash: 'c9d5f2a',
    year: '2026',
    title: 'Booking Page',
    description:
      'A streamlined booking interface for hospitality businesses, featuring real-time availability, calendar integration, and mobile-first design.',
    tech: ['React', 'TypeScript', 'Supabase'],
    screenshots: ['/images/placeholder-project.svg'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-text-secondary text-sm mb-16">
            <span className="text-accent-green">##</span> ~/projects
          </h2>
        </ScrollReveal>

        {/* Git log line + cards */}
        <div className="relative">
          {/* Vertical git log line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-border hidden md:block" />

          <div className="space-y-12">
            {projects.map((project, index) => (
              <ScrollReveal key={project.hash} delay={index * 0.08}>
                <div className="relative md:pl-12">
                  {/* Git commit dot */}
                  <div className="absolute left-[12px] top-6 w-[16px] h-[16px] rounded-full bg-accent-green border-4 border-bg-primary hidden md:block z-10" />

                  {/* Card */}
                  <div className="group bg-bg-surface border border-border rounded-lg overflow-hidden hover:border-accent-blue/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-terminal-hover">
                    {/* Commit header */}
                    <div className="px-6 pt-5 pb-3 border-b border-border font-mono text-xs">
                      <div className="text-accent-orange">commit {project.hash}</div>
                      <div className="text-text-secondary">Author: Joyce Anne</div>
                      <div className="text-text-secondary">Date:&nbsp;&nbsp; {project.year}</div>
                    </div>

                    <div className="p-6 space-y-4">
                      {/* Title */}
                      <h3 className="font-mono text-lg text-text-primary font-bold">
                        &nbsp;&nbsp;&nbsp;&nbsp;{project.title}
                      </h3>

                      {/* Screenshot placeholder — browser frame */}
                      <div className="bg-bg-primary border border-border rounded-lg overflow-hidden">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-2 px-3 py-2 bg-bg-surface border-b border-border">
                          <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-accent-red/50" />
                            <span className="w-2.5 h-2.5 rounded-full bg-accent-yellow/50" />
                            <span className="w-2.5 h-2.5 rounded-full bg-accent-green/50" />
                          </div>
                          <div className="flex-1 bg-bg-primary/50 rounded px-3 py-1 text-[11px] font-mono text-text-secondary">
                            localhost:3000
                          </div>
                        </div>
                        {/* Screenshot area */}
                        <div className="aspect-video bg-bg-primary flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
                          <div className="text-center text-text-secondary">
                            <svg
                              className="w-12 h-12 mx-auto mb-2 opacity-30"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span className="text-xs font-mono">Screenshot placeholder</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                          >
                            {t.toLowerCase()}
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-sm text-accent-blue hover:text-accent-cyan transition-colors"
                        >
                          View live <span>→</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
