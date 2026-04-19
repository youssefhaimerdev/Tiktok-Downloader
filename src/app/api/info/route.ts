import { NextRequest, NextResponse } from 'next/server'
import { isTikTokUrl } from '@/lib/utils'

export const runtime = 'edge'

async function fetchFromTikwm(tiktokUrl: string) {
  const res = await fetch('https://tikwm.com/api/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    },
    body: new URLSearchParams({ url: tiktokUrl, hd: '1' }),
  })
  if (!res.ok) throw new Error('tikwm_failed')
  const json = await res.json()
  if (json.code !== 0 || !json.data) throw new Error(json.msg ?? 'no_data')
  return json.data
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const rawUrl = searchParams.get('url')?.trim() ?? ''

  if (!rawUrl) {
    return NextResponse.json({ success: false, error: 'No URL provided.' }, { status: 400 })
  }
  if (!isTikTokUrl(rawUrl)) {
    return NextResponse.json(
      { success: false, error: "That doesn't look like a TikTok URL." },
      { status: 400 }
    )
  }

  try {
    const data = await fetchFromTikwm(rawUrl)

    // tikwm's /video/ endpoint is a direct, clean MP4 by video ID.
    // This is more reliable than data.no_watermark which can be an
    // auth-gated CDN URL or HLS stream that the browser can't save.
    const videoId: string = data.id ?? ''
    const noWatermarkUrl: string = videoId
      ? `https://tikwm.com/video/${videoId}.mp4`
      : (data.play || '')

    if (!noWatermarkUrl) throw new Error('No download URL returned')

    return NextResponse.json({
      success: true,
      data: {
        id: videoId || 'unknown',
        title: data.title ?? 'TikTok Video',
        author: data.author?.nickname ?? data.author?.unique_id ?? 'Unknown',
        thumbnail: data.cover ?? data.origin_cover ?? '',
        duration: data.duration ?? 0,
        playUrl: rawUrl,
        noWatermarkUrl,
      },
    })
  } catch (err: unknown) {
    console.error('[/api/info]', err)
    return NextResponse.json(
      { success: false, error: 'Could not fetch video. Make sure it is public.' },
      { status: 502 }
    )
  }
}
