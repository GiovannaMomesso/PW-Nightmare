"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black shadow-lg p-4 border-b border-red-700">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="font-extrabold text-2xl text-red-700 tracking-wider">
          Nightmare 🕸️
        </div>
        <div className="space-x-6 text-red-600 font-semibold">
          <Link href="/" className="hover:text-red-400 transition">
            Home
          </Link>
          <Link href="/produtos" className="hover:text-red-400 transition">
            Produtos
          </Link>
          <Link href="/login" className="hover:text-red-400 transition">
            Login
          </Link>
          <Link href="/cadastro" className="hover:text-red-400 transition">
            Cadastro
          </Link>
        </div>
      </nav>
    </header>
  );
}
