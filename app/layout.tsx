import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Joyce Anne Salandanan — Full-Stack Developer',
  description:
    'I build custom web apps, ordering systems, and business websites. React, Next.js, TypeScript, Supabase.',
  openGraph: {
    title: 'Joyce Anne Salandanan — Full-Stack Developer',
    description:
      'I build custom web apps, ordering systems, and business websites. React, Next.js, TypeScript, Supabase.',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
