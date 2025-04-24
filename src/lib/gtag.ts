export const GA_TRACKING_ID = 'G-TY60WB1CGY'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
