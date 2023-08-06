import './globals.css';

import { ReactNode } from 'react';

import { exo2, orbitron } from '@/app/fonts';
import { NavBar } from '@/components/nav-bar';

const metadata = {
  title: {
    default: 'Indie Gamer',
    template: '%s | Indie Gamer',
  },
  description: 'Only the best indie games, reviewed for you.',
};

interface RootLayoutProps {
  children: ReactNode;
}
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="flex min-h-screen flex-col bg-orange-50 px-4 py-2">
        <header>
          <NavBar />
        </header>

        <main className="grow py-3">{children}</main>

        <footer className="border-t py-3 text-center text-xs text-slate-500">
          Game data and images courtesy of{' '}
          <a href="https://rawg.io/" target="_blank" className="text-orange-800 hover:underline">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
