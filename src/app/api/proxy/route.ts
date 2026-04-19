import { NextRequest, NextResponse } from 'next/server'

// No runtime = Node.js by default on Vercel (no edge 25MB limit)

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const videoUrl = searchParams.get('url')?.trim() ?? ''

  if (!videoUrl) {
    return NextResponse.json({ error: 'No URL' }, { status: 400 })
  }

  // Only allow tikwm and TikTok CDN domains
  let parsed: URL
  try {
    parsed = new URL(videoUrl)
  } catch {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 })
  }

  const allowed = ['tikwm.com', 'tiktok.com', 'tiktokcdn.com', 'tiktokcdn-us.com', 'muscdn.com']
  if (!allowed.some((d) => parsed.hostname.endsWith(d))) {
    return NextResponse.json({ error: 'Domain not allowed' }, { status: 403 })
  }

  try {
    const upstream = await fetch(videoUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://tikwm.com/',
        'Accept': '*/*',
      },
    })

    if (!upstream.ok) {
      return NextResponse.json({ error: `Upstream ${upstream.status}` }, { status: 502 })
    }

    return new NextResponse(upstream.body, {
      status: 200,
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Disposition': 'attachment; filename="tiktok-video.mp4"',
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('[/api/proxy]', err)
    return NextResponse.json({ error: 'Proxy failed' }, { status: 500 })
  }
}
