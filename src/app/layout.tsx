import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

export const metadata: Metadata = {
  title: "BTCrypto Watch",
  description:
    "Crypto dashboard with charts, rankings and updated news",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <header className="bg-gray-800 p-4 shadow-md flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36l-1.42 1.42M6.34 17.66l-1.42 1.42m0-13.44l1.42 1.42M17.66 17.66l1.42 1.42M12 8a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
            <span className="font-bold text-lg">BTCrypto Watch</span>
          </Link>

          <nav className="flex items-center gap-4">
            <Link href="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
            <Link href="/noticias" className="hover:text-yellow-400 transition">
              News
            </Link>
            <ThemeToggle />
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-800 p-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} BTCrypto Watch. Desenvolvido com 💡 por 
          <Link href="https://geekdigitalservices.com.br"> Geek Digital Services</Link>.
        </footer>
      </body>
    </html>
  );
}
