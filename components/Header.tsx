'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Yusuke Inaba</div>

        {/* メニューアイコン（モバイル用） */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* メニュー（デスクトップ + モバイル展開） */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-white md:bg-transparent md:static md:flex md:items-center gap-6`}
        >
          <ul className="flex flex-col md:flex-row md:gap-6 p-4 md:p-0">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#works" className="hover:underline">Works</a></li>
            <li><a href="#skills" className="hover:underline">Skillset</a></li>
            <li><a href="#service" className="hover:underline">Service</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}