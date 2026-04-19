import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-surface-3 mt-24">
      {/* Bottom ad banner */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <div className="ad-banner-lg text-center">
          {/* AdSense Ad Unit – bottom banner */}
          {/* Replace with: <ins className="adsbygoogle" ... /> */}
          Advertisement (728×90 or Responsive)
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-brand-500 to-orange-500 flex items-center justify-center text-white font-bold text-xs">
              T
            </span>
            <span className="font-bold text-white text-sm">
              TikTok<span className="text-brand-500">Down</span> Pro
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-zinc-500">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/#faq" className="hover:text-zinc-300 transition-colors">
              FAQ
            </Link>
          </nav>

          <p className="text-zinc-600 text-xs">
            © {year} TikTokDown Pro. Not affiliated with TikTok.
          </p>
        </div>

        <p className="text-zinc-700 text-xs text-center mt-6 leading-relaxed max-w-xl mx-auto">
          This tool is provided for personal use only. Please respect copyright laws and only
          download content you own or have permission to download. We are not affiliated with
          TikTok or ByteDance.
        </p>
      </div>
    </footer>
  )
}
