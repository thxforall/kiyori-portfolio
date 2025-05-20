'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
// import MenuButton from './menu';
import SoundToggle from './sound';
import ContactButton from './contact';
// import MobileMenu from './mobile-menu';
import ThemeToggle from './theme';

export default function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 bg-transparent text-kiyori-text dark:text-kiyori-dark-text">
      <div className="w-full flex items-center h-12 relative">
        <div className="flex-1 flex justify-start gap-1">
          {/* <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> */}
          <ThemeToggle />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex-1 flex justify-end items-center space-x-1">
          <SoundToggle isSoundOn={isSoundOn} setIsSoundOn={setIsSoundOn} />
          <ContactButton />
        </div>
      </div>
      {/* <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> */}
    </header>
  );
}
