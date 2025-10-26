import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { href: '/', label: 'Products' },
  ];

  return (
    <nav className="sticky top-0 z-50 max-w-7xl mx-auto px-4 py-4 flex justify-between items-center bg-white shadow-md">
      <Link href="/" className="flex items-center">
        <h1 className="text-2xl font-extrabold text-orange-600 tracking-tight">
          Bimal
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-orange-950 font-medium tracking-tight hover:text-orange-700 transition-colors duration-300"
          >
            {item.label}
          </Link>
        ))}
        <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-all duration-300">
          Die Now
        </button>
      </div>
    </nav>
  );
}