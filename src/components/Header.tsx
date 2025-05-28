'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Yusuke Inaba</div>

        {/* デスクトップナビ */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-black">About</a>
          <a href="#works" className="text-gray-700 hover:text-black">Works</a>
          <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
        </nav>

        {/* ハンバーガー */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="md:hidden bg-white shadow px-4 pb-4">
          <a href="#about" className="block py-2 text-gray-700">About</a>
          <a href="#works" className="block py-2 text-gray-700">Works</a>
          <a href="#contact" className="block py-2 text-gray-700">Contact</a>
        </div>
      )}
    </header>
  );
}