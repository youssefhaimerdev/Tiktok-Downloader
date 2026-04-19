import type { Metadata } from 'next'
import { Sora, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Script from 'next/script'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tiktokdown.pro'),
  title: {
    default: 'TikTok Video Downloader – Download TikTok Videos Without Watermark Free',
    template: '%s | TikTokDown Pro',
  },
  description:
    'Download TikTok videos without watermark instantly and for free. Paste any TikTok URL and save HD videos to your device in seconds. No app required.',
  keywords: [
    'tiktok downloader',
    'download tiktok videos',
    'tiktok without watermark',
    'save tiktok video',
    'tiktok video saver',
    'free tiktok downloader',
    'tiktok mp4 download',
    'tiktok hd download',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tiktokdown.pro',
    siteName: 'TikTokDown Pro',
    title: 'TikTok Video Downloader – Download Without Watermark Free',
    description:
      'The fastest way to download TikTok videos without watermark. Free, instant, no signup needed.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Video Downloader – No Watermark, Free',
    description: 'Download any TikTok video without watermark instantly.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://tiktokdown.pro' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${jetbrains.variable}`}>
      <head>
        {/* Google Analytics – replace GA_MEASUREMENT_ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', { page_path: window.location.pathname });
          `}
        </Script>
        {/* AdSense – replace ca-pub-XXXXXXXXXXXXXXXX */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-surface-0 text-white font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
