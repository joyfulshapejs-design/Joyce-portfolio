'use client';

import { useState, FormEvent } from 'react';
import ScrollReveal from './ScrollReveal';
import TerminalWindow from './TerminalWindow';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('sending');

    try {
      // Replace with your Formspree endpoint
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setFormState('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-mono text-text-secondary text-sm mb-12">
            <span className="text-accent-green">##</span> ~/contact
          </h2>
        </ScrollReveal>

        <div className="max-w-2xl space-y-8">
          {/* Contact info terminal */}
          <ScrollReveal delay={0.08}>
            <TerminalWindow title="contact">
              <div className="space-y-1">
                <div>
                  <span className="text-accent-green">&gt;</span>{' '}
                  <span className="text-text-primary">joyce --contact</span>
                </div>
                <div className="mt-3 space-y-1 text-text-secondary">
                  <div>
                    {'  '}Email:{' '}
                    <a
                      href="mailto:joydigitals101@gmail.com"
                      className="text-accent-blue hover:text-accent-cyan transition-colors"
                    >
                      joydigitals101@gmail.com
                    </a>
                  </div>
                  <div>
                    {'  '}Upwork:{' '}
                    <a
                      href="https://www.upwork.com/freelancers/~011ded819efd952663"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-blue hover:text-accent-cyan transition-colors"
                    >
                      upwork.com/freelancers/~011ded819efd952663
                    </a>
                  </div>
                  <div>
                    {'  '}LinkedIn:{' '}
                    <a
                      href="https://linkedin.com/in/joyceannesalandanan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-blue hover:text-accent-cyan transition-colors"
                    >
                      linkedin.com/in/joyceannesalandanan
                    </a>
                  </div>
                  <div>
                    {'  '}GitHub:{' '}
                    <a
                      href="https://github.com/joyfulshape-design"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-blue hover:text-accent-cyan transition-colors"
                    >
                      github.com/joyfulshape-design
                    </a>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={0.16}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block font-mono text-xs text-text-secondary mb-1.5">
                  <span className="text-accent-green">$</span> name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full bg-bg-surface border border-border rounded-md px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent-green focus:ring-1 focus:ring-accent-green/30 outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-mono text-xs text-text-secondary mb-1.5">
                  <span className="text-accent-green">$</span> email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-bg-surface border border-border rounded-md px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent-green focus:ring-1 focus:ring-accent-green/30 outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-xs text-text-secondary mb-1.5">
                  <span className="text-accent-green">$</span> message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-bg-surface border border-border rounded-md px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent-green focus:ring-1 focus:ring-accent-green/30 outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === 'sending'}
                className="relative font-mono text-sm px-6 py-3 bg-accent-green/10 text-accent-green border border-accent-green/30 rounded-md hover:bg-accent-green/20 active:brightness-125 transition-all duration-200 disabled:opacity-50"
              >
                {formState === 'sending' ? '> sending...' : '> send'}
              </button>

              {/* Status messages */}
              {formState === 'success' && (
                <div className="font-mono text-sm text-accent-green">
                  [OK] Message sent. I&apos;ll reply within 24 hours.
                </div>
              )}
              {formState === 'error' && (
                <div className="font-mono text-sm text-accent-red">
                  [ERR] Something went wrong. Try emailing me directly.
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
