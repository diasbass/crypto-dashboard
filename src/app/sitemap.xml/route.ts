import { fetchNews } from '../../utils/fetchNews'
import { slugify } from '../../utils/slugify'
import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://btcryptowatch.com'
  const news = await fetchNews()

  const urls = news.map(item => {
    const slug = slugify(item.title)
    return `
      <url>
        <loc>${baseUrl}/noticias/${slug}</loc>
        <lastmod>${new Date(item.pubDate).toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
    `
  })

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/noticias</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  ${urls.join('\n')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
