export interface VideoInfo {
  id: string
  title: string
  author: string
  thumbnail: string
  duration: number
  playUrl: string
  noWatermarkUrl: string
}

export interface DownloadResponse {
  success: boolean
  data?: VideoInfo
  error?: string
}

export type DownloadStatus = 'idle' | 'loading' | 'success' | 'error'
