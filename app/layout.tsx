import './globals.css';

import { ReactNode } from 'react';

import { NavBar } from '../components/NavBar';

interface RootLayoutProps {
  children: ReactNode;
}
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-orange-50 px-4 py-2">
        <header>
          <NavBar />
        </header>

        <main className="grow py-3">{children}</main>

        <footer className="border-t py-3 text-center text-xs">
          Game data and images courtesy of{' '}
          <a href="https://rawg.io/" target="_blank" className="text-orange-800 hover:underline">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
