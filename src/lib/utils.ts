/**
 * Validates whether a string is a plausible TikTok URL.
 */
export function isTikTokUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return (
      parsed.hostname === 'www.tiktok.com' ||
      parsed.hostname === 'tiktok.com' ||
      parsed.hostname === 'vm.tiktok.com' ||
      parsed.hostname === 'vt.tiktok.com' ||
      parsed.hostname === 'm.tiktok.com'
    )
  } catch {
    return false
  }
}

/**
 * Formats seconds into m:ss
 */
export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

/**
 * GA event tracker
 */
export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', name, params)
  }
}
