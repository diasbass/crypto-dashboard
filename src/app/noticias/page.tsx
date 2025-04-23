import { fetchNews } from '../../utils/fetchNews'

export const dynamic = 'force-dynamic'

export default async function NoticiasPage() {
  const news = await fetchNews()

  return (
    <main className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Últimas Notícias sobre Criptomoedas</h1>

      <ul className="space-y-4">
        {news.map((item, index) => (
          <li key={index} className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
              <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
              <p className="text-sm text-gray-400">
                {new Date(item.pubDate).toLocaleString()} · {item.source}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
