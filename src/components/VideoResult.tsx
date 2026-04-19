'use client'

import Image from 'next/image'
import type { VideoInfo } from '@/lib/types'
import { formatDuration, trackEvent } from '@/lib/utils'

interface VideoResultProps {
  video: VideoInfo
}

export function VideoResult({ video }: VideoResultProps) {
  function handleDownload() {
    trackEvent('download_clicked', { video_id: video.id })
    // Create a hidden link pointing directly to the no-watermark URL
    // and force download via the `download` attribute + fetch blob trick
    const link = document.createElement('a')
    link.href = video.noWatermarkUrl
    link.setAttribute('download', 'tiktok-video.mp4')
    link.setAttribute('target', '_blank')
    link.setAttribute('rel', 'noopener noreferrer')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="card p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row gap-5">
        {video.thumbnail && (
          <div className="relative shrink-0 w-full sm:w-36 h-52 sm:h-44 rounded-2xl overflow-hidden bg-surface-3">
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 144px"
              unoptimized
            />
            {video.duration > 0 && (
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded-md font-mono">
                {formatDuration(video.duration)}
              </span>
            )}
          </div>
        )}

        <div className="flex-1 flex flex-col justify-between gap-4">
          <div>
            <p className="text-xs text-zinc-500 mb-1 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              @{video.author}
            </p>
            <h3 className="text-white font-semibold text-sm sm:text-base line-clamp-3 leading-snug">
              {video.title || 'TikTok Video'}
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleDownload}
              className="btn-primary py-3 px-6 text-sm"
            >
              <span className="flex items-center gap-2 relative z-10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download (No Watermark)
              </span>
            </button>

            <a
              href={video.playUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-surface-4 text-zinc-300 hover:border-zinc-500 hover:text-white transition-all text-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Open in TikTok
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-surface-4 flex flex-wrap gap-2">
        {['No Watermark', 'HD Quality', 'Free', 'Instant'].map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
