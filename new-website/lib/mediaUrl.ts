const CDN_PATTERN = /https:\/\/cdn\.prod\.website-files\.com\/([^/]+)\/(.+)/

export function cdnToLocal(cdnUrl: string): string {
  const match = cdnUrl.match(CDN_PATTERN)
  if (match) {
    return `/media/${match[1]}/${decodeURIComponent(match[2])}`
  }
  return cdnUrl
}

export function isLocalMedia(url: string): boolean {
  return url.startsWith('/media/')
}
