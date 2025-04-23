import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dashboard Cripto',
  description: 'Painel de criptoativos com gráficos, ranking e notícias atualizadas',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        <header className="bg-gray-800 p-4 shadow-md flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0L15.09 7.36H23L17 11.64L20.18 19L12 14.56L3.82 19L7 11.64L1 7.36H8.91L12 0Z" />
            </svg>
            <span className="font-bold text-lg">CryptoDash</span>
          </Link>

          <nav className="space-x-4">
            <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link href="/noticias" className="hover:text-yellow-400 transition">Notícias</Link>
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-800 p-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} CryptoDash. Desenvolvido com 💡 por diasbass.
        </footer>
      </body>
    </html>
  )
}
