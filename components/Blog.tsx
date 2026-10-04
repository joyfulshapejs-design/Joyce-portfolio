'use client';

import ScrollReveal from './ScrollReveal';

// Empty state for launch — replace with real blog data later
const posts: { hash: string; date: string; title: string; slug: string }[] = [];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-text-secondary text-sm mb-12">
            <span className="text-accent-green">##</span> ~/blog
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="max-w-2xl">
            {posts.length > 0 ? (
              <div className="space-y-4 font-mono text-sm">
                {posts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <div className="flex items-baseline gap-4 text-text-secondary group-hover:text-text-primary transition-colors">
                      <span className="text-accent-orange shrink-0">commit {post.hash}</span>
                      <span className="text-text-secondary shrink-0">— {post.date}</span>
                    </div>
                    <div className="ml-4 mt-1 text-text-primary group-hover:text-accent-blue transition-colors">
                      &nbsp;&nbsp;&nbsp;&nbsp;{post.title}
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="bg-bg-surface border border-border rounded-lg p-6 font-mono text-sm">
                <div className="text-text-secondary">
                  <span className="text-accent-green">&gt;</span> ls ~/blog
                </div>
                <div className="text-text-secondary mt-2">
                  (empty) — Posts coming soon.{' '}
                  <span className="inline-block w-[2px] h-[1em] bg-accent-green animate-blink align-middle" />
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
