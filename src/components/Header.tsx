'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">Yusuke Inaba</div>

        {/* ハンバーガー */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            ☰
          </button>
        </div>

        {/* PC用メニュー */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* モバイルメニュー（アニメーション付き） */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4"
          >
            <ul className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-sm py-2 border-b"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}