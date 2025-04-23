import Parser from 'rss-parser'

export interface NewsItem {
  title: string
  link: string
  pubDate: string
  source: string
}

const parser = new Parser()

export async function fetchNews(): Promise<NewsItem[]> {
  const feeds = [
    {
      url: 'https://www.coindesk.com/arc/outboundfeeds/rss/',
      source: 'CoinDesk',
    },
    {
      url: 'https://cointelegraph.com/rss',
      source: 'Cointelegraph',
    },
    {
      url: 'https://decrypt.co/feed',
      source: 'Decrypt',
    },
  ]

  const allNews: NewsItem[] = []

  for (const feed of feeds) {
    try {
      const parsed = await parser.parseURL(feed.url)
      const items = parsed.items?.slice(0, 10).map((item) => ({
        title: item.title ?? '',
        link: item.link ?? '',
        pubDate: item.pubDate ?? '',
        source: feed.source,
      })) ?? []

      allNews.push(...items)
    } catch (err) {
      console.error(`Erro ao carregar feed de ${feed.source}:`, err)
    }
  }

  return allNews.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
}
