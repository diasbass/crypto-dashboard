import "./globals.css";
//import type { Metadata } from "next";
import Link from "next/link";
import { PriceAlertsProvider } from "../contexts/PriceAlertsContext";
import { ThemeProvider } from "../contexts/ThemeProvider"; // 👈 novo ThemeProvider
import { Toaster } from "react-hot-toast";
import ThemeToggle from "../components/ThemeToggle";
import Breadcrumb from "../components/Breadcrumb";
import Head from "./head"

/*export const metadata: Metadata = {
  title: "BTCrypto Watch",
  description: "Crypto dashboard with charts, rankings and updated news",
};*/

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <Head></Head>
      <body className="min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider> {/* envolvemos tudo no ThemeProvider */}
          <PriceAlertsProvider>
            <Toaster position="top-right" />
            {/* HEADER */}
            <header className="bg-white dark:bg-black text-black dark:text-white p-4 shadow-md flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-lg">BTCrypto Watch</span>
              </Link>
              <nav className="flex items-center gap-4">
                <Link href="/" className="hover:text-yellow-400 transition">
                  Home
                </Link>
                <Link href="/noticias" className="hover:text-yellow-400 transition">
                  News
                </Link>
                <Link href="/comparador" className="hover:text-yellow-400 transition">
                  Comparator
                </Link>
                <ThemeToggle />
              </nav>
            </header>
            <Breadcrumb />
            {/* MAIN */}
            <main className="flex-grow bg-white dark:bg-black text-black dark:text-white">
              {children}
            </main>

            {/* FOOTER */}
            <footer className="bg-white dark:bg-black text-center text-gray-400 text-sm p-4">
              © {new Date().getFullYear()} BTCrypto Watch. Desenvolvido por{" "}
              <Link href="https://geekdigitalservices.com.br">Geek Digital Services</Link>.
            </footer>
          </PriceAlertsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
