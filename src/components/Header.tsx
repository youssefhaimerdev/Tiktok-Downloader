'use client'

import Link from 'next/link'

export function Header() {
  return (
    <header className="relative z-10 border-b border-surface-3">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-brand-500/30">
            T
          </span>
          <span className="font-bold text-white text-lg tracking-tight">
            TikTok<span className="text-brand-500">Down</span>
          </span>
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-400">
          <Link href="/#how-to" className="hover:text-white transition-colors">
            How to Use
          </Link>
          <Link href="/#faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  )
}
