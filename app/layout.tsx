import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agentic Starter',
  description: 'Deployed on Vercel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-slate-900 antialiased">
        <div className="mx-auto max-w-5xl px-6 py-10">
          {children}
        </div>
      </body>
    </html>
  );
}
