import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} — Joyce Anne Salandanan`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <Link
            href="/#blog"
            className="font-mono text-sm text-accent-blue hover:text-accent-cyan transition-colors"
          >
            ← cd ~/blog
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="font-mono text-xs text-text-secondary mb-4">
            <span className="text-accent-orange">commit</span> · {post.date}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary font-sans leading-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-4 text-text-secondary text-lg">{post.excerpt}</p>
          )}
        </header>

        {/* Content — rendered as plain text for now; MDX rendering can be added */}
        <div className="prose prose-invert max-w-none text-text-primary leading-relaxed space-y-4">
          {post.content.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-3xl mx-auto text-center font-mono text-sm text-text-secondary">
          © {new Date().getFullYear()} Joyce Anne Salandanan · Built with Next.js
        </div>
      </footer>
    </div>
  );
}
