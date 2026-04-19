'use client'

interface AdBannerProps {
  size?: 'sm' | 'lg'
  label?: string
}

/**
 * Ad placeholder – replace the inner content with your AdSense <ins> tags.
 * The outer div maintains the layout space even before ads load.
 */
export function AdBanner({ size = 'sm', label = 'Advertisement' }: AdBannerProps) {
  return (
    <div className={size === 'lg' ? 'ad-banner-lg' : 'ad-banner'} aria-label="Advertisement">
      {/* 
        Replace this div content with your AdSense unit, e.g.:
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      */}
      <span>{label} (Responsive)</span>
    </div>
  )
}
