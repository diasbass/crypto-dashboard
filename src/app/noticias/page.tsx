import { fetchNews } from '../../utils/fetchNews'
import ImageWithFallback from '../../components/ImageWithFallback'
import { slugify } from '../../utils/slugify'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function NoticiasPage() {
  const news = await fetchNews()

  return (
    <main className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Latest Cryptocurrency News</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item, index) => (
          <Link key={index} href={`/noticias/${slugify(item.title)}`}            
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden group flex flex-col"
          >
            {item.thumbnail && (
              <div className="relative h-48 w-full">
                <ImageWithFallback
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
            )}

            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                {item.title}
              </h2>
              <p className="text-sm text-gray-400 mt-auto">
                {new Date(item.pubDate).toLocaleDateString('pt-BR')} · {item.source}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
