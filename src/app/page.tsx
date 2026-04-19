import type { Metadata } from 'next'
import { DownloaderForm } from '@/components/DownloaderForm'
import { AdBanner } from '@/components/AdBanner'

export const metadata: Metadata = {
  title: 'TikTok Video Downloader – Download TikTok Videos Without Watermark Free',
  description:
    'Download TikTok videos without watermark for free. Paste any TikTok link and save HD videos instantly to your phone or PC. No account needed, no app required.',
}

const steps = [
  {
    num: '01',
    title: 'Copy the TikTok Link',
    body: 'Open TikTok on your phone or browser, find the video you want, tap "Share," and copy the link.',
  },
  {
    num: '02',
    title: 'Paste the URL Above',
    body: 'Come back to this page and paste the copied link into the input box. The tool supports all TikTok URL formats including short links.',
  },
  {
    num: '03',
    title: 'Click Download',
    body: 'Hit the Download button. Within seconds you\'ll see a preview and a direct download link for the watermark-free MP4 file.',
  },
]

const features = [
  {
    icon: '🚫',
    title: 'No Watermark',
    body: 'Download the clean, original video without the TikTok logo stamped in the corner. Perfect for repurposing or archiving content.',
  },
  {
    icon: '⚡',
    title: 'Instant Results',
    body: 'No waiting, no queues. Paste the URL and your video is ready to download in under five seconds on most connections.',
  },
  {
    icon: '📱',
    title: 'Works on Any Device',
    body: 'Whether you\'re on an iPhone, Android, Windows laptop, or Mac — our tool works in any modern browser without installing anything.',
  },
  {
    icon: '🔒',
    title: 'Private & Secure',
    body: 'We don\'t store your URLs or the videos you download. Every request is processed on-the-fly and nothing is saved on our servers.',
  },
  {
    icon: '🆓',
    title: '100% Free',
    body: 'No hidden fees, no premium plans, no sign-up forms. Just paste, click, and download. It really is that simple.',
  },
  {
    icon: '🎞️',
    title: 'HD Quality',
    body: 'We fetch the highest resolution available from TikTok\'s servers so you always get the best possible video quality.',
  },
]

const faqs = [
  {
    q: 'Is it legal to download TikTok videos?',
    a: 'Downloading TikTok videos for personal, offline use is generally accepted, similar to saving a webpage for offline reading. However, you should never re-upload someone else\'s content without their permission, and you should respect copyright. Always check TikTok\'s Terms of Service and the laws in your country.',
  },
  {
    q: 'Why is the downloaded video missing the TikTok watermark?',
    a: 'TikTok stores the original, pre-watermark video on its CDN alongside the watermarked version. Our tool fetches from the original source, which means the TikTok watermark is not present. The video still contains the creator\'s own content — we simply remove the platform branding.',
  },
  {
    q: 'Why does the download sometimes fail?',
    a: 'The most common reasons are: the video is set to private or friends-only, the account has been deleted or suspended, or TikTok has temporarily rate-limited requests. Make sure the video is publicly visible before downloading.',
  },
  {
    q: 'Does this work with TikTok Live videos?',
    a: 'Currently, our tool works with regular recorded TikTok videos. Live streams cannot be downloaded while they are active. However, once a live session ends and TikTok saves it as a replay, it can usually be downloaded like any other video.',
  },
  {
    q: 'Are there any limits on how many videos I can download?',
    a: 'There are no hard limits imposed by us. You can download as many videos as you need, one at a time. Keep in mind that TikTok itself may rate-limit unusually high volumes of requests from the same IP address.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        {/* Background glow */}
        <div
          className="hero-glow"
          style={{ top: '-100px', left: '50%', transform: 'translateX(-50%)' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/25 rounded-full px-4 py-1.5 text-brand-400 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Free · No Watermark · Instant Download
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Download TikTok Videos{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'var(--gradient-brand)' }}
            >
              Without Watermark
            </span>
          </h1>

          <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed mb-12 max-w-xl mx-auto">
            Paste any TikTok URL below and save the video in HD — no watermark,
            no sign-up, completely free.
          </p>

          {/* Top ad banner */}
          <div className="mb-10">
            <AdBanner size="sm" label="Advertisement – Top Banner" />
          </div>

          {/* ── THE TOOL ── */}
          <div className="card p-5 sm:p-8 text-left shadow-2xl shadow-black/50">
            <DownloaderForm />
          </div>

          <p className="text-zinc-600 text-xs mt-4">
            Supports tiktok.com · vm.tiktok.com · vt.tiktok.com and all short links
          </p>
        </div>
      </section>

      {/* ── Mid ad ───────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <AdBanner size="sm" label="Advertisement – Mid Banner" />
      </div>

      {/* ── SEO Content: How to use ──────────────────────────────── */}
      <section id="how-to" className="max-w-6xl mx-auto px-4 mb-24 scroll-mt-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How to Download TikTok Videos in 3 Steps
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed">
            You don&apos;t need to install any app or create an account. The whole
            process takes under a minute, start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="card p-6 relative overflow-hidden">
              <span
                className="absolute -top-4 -right-2 text-7xl font-black text-surface-3 select-none pointer-events-none font-mono"
              >
                {step.num}
              </span>
              <h3 className="text-white font-semibold text-lg mb-2 relative z-10">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SEO Text block ───────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 mb-24">
        <div className="prose prose-invert prose-zinc max-w-none">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Why People Love Our TikTok Downloader
          </h2>
          <div className="space-y-5 text-zinc-400 leading-relaxed">
            <p>
              TikTok is one of the fastest-growing social platforms in the world, and for good
              reason. Every day, millions of creators share funny clips, cooking tutorials,
              travel vlogs, fitness routines, and creative art — and sometimes you find a video
              that you genuinely want to keep. Maybe it&apos;s an incredible recipe, a workout
              you want to follow offline, or just something that made you laugh and you want
              to share it with a friend who isn&apos;t on TikTok.
            </p>
            <p>
              The problem is, TikTok&apos;s built-in save feature stamps a large watermark across
              every downloaded video. That watermark is distracting and makes the video look
              messy when shared elsewhere. Our tool solves that. We fetch the original video
              file from TikTok&apos;s own servers — the same file without the branding overlay —
              so you get a clean, high-definition MP4 that looks exactly like the video does
              when you watch it in the app.
            </p>
            <p>
              Content creators and social media managers also find this useful for archiving
              their own work. If you&apos;ve posted a video on TikTok and need the original file
              for another platform, this is the quickest way to get it back. No more digging
              through camera rolls or cloud backups.
            </p>
            <p>
              Everything happens in your browser. You paste a URL, we look up the video
              metadata, and you get a download link. Simple, fast, and completely private.
              We don&apos;t log your activity or share anything with third parties.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why use this tool ────────────────────────────────────── */}
      <section id="features" className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Use This Tool?
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Built for speed and simplicity. No bloat, no ads on your downloads, no nonsense.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="card p-6 hover:border-surface-4/80 hover:bg-surface-3 transition-colors duration-200"
            >
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mid-bottom ad ────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 mb-24">
        <AdBanner size="lg" label="Advertisement – Large Mid-Bottom Banner" />
      </div>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" className="max-w-3xl mx-auto px-4 mb-24 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400">Everything you need to know about downloading TikTok videos.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="card group open:ring-1 open:ring-brand-500/30 transition-all"
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <span className="shrink-0 w-6 h-6 rounded-full border border-surface-4 flex items-center justify-center text-zinc-400 group-open:border-brand-500 group-open:text-brand-500 transition-colors text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-surface-4 pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ── JSON-LD Structured Data ───────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'TikTokDown Pro',
            url: 'https://tiktokdown.pro',
            description:
              'Free online TikTok video downloader. Download TikTok videos without watermark instantly.',
            applicationCategory: 'UtilitiesApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            featureList: [
              'No watermark download',
              'HD quality',
              'Free to use',
              'No registration required',
            ],
          }),
        }}
      />
    </>
  )
}
