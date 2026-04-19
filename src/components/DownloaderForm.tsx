'use client'

import { useState, useRef } from 'react'
import type { VideoInfo, DownloadStatus } from '@/lib/types'
import { isTikTokUrl, trackEvent } from '@/lib/utils'
import { VideoResult } from './VideoResult'

export function DownloaderForm() {
  const [url, setUrl] = useState('')
  const [status, setStatus] = useState<DownloadStatus>('idle')
  const [video, setVideo] = useState<VideoInfo | null>(null)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = url.trim()

    if (!trimmed) {
      setError('Please paste a TikTok URL first.')
      inputRef.current?.focus()
      return
    }

    if (!isTikTokUrl(trimmed)) {
      setError("That doesn't look like a TikTok URL. Try something like: https://www.tiktok.com/@user/video/...")
      return
    }

    setStatus('loading')
    setError('')
    setVideo(null)
    trackEvent('url_submitted', { url_host: new URL(trimmed).hostname })

    try {
      const res = await fetch(`/api/info?url=${encodeURIComponent(trimmed)}`)
      const json = await res.json()

      if (!res.ok || !json.success) {
        throw new Error(json.error ?? 'Something went wrong.')
      }

      setVideo(json.data)
      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Failed to fetch video. Please try again.')
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    // Auto-submit when user pastes a valid URL
    const pasted = e.clipboardData.getData('text').trim()
    if (isTikTokUrl(pasted)) {
      setUrl(pasted)
      setTimeout(() => {
        const fakeEvent = { preventDefault: () => {} } as React.FormEvent
        handleSubmit(fakeEvent)
      }, 100)
    }
  }

  function handleClear() {
    setUrl('')
    setVideo(null)
    setStatus('idle')
    setError('')
    inputRef.current?.focus()
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onPaste={handlePaste}
              placeholder="Paste TikTok URL here... https://www.tiktok.com/@user/video/..."
              className="input-url pr-10 h-14 text-sm sm:text-base"
              aria-label="TikTok video URL"
              disabled={status === 'loading'}
              autoComplete="off"
              spellCheck={false}
            />
            {url && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors text-lg leading-none"
                aria-label="Clear input"
              >
                ×
              </button>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary h-14 px-8 text-base font-semibold min-w-[160px] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <span className="spinner" />
                Fetching...
              </span>
            ) : (
              <span className="flex items-center gap-2 relative z-10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download
              </span>
            )}
          </button>
        </div>
      </form>

      {/* Error message */}
      {error && (
        <div className="mt-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm animate-fade-in flex items-start gap-2">
          <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {error}
        </div>
      )}

      {/* Result */}
      {status === 'success' && video && (
        <div className="mt-8 animate-slide-up">
          <VideoResult video={video} />
        </div>
      )}
    </div>
  )
}
