import "./globals.css";
//import type { Metadata } from "next";
import Link from "next/link";
import { PriceAlertsProvider } from "../contexts/PriceAlertsContext";
import { ThemeProvider } from "../contexts/ThemeProvider"; // 👈 novo ThemeProvider
import { Toaster } from "react-hot-toast";
import ThemeToggle from "../components/ThemeToggle";
import Breadcrumb from "../components/Breadcrumb";
import Head from "./head";

/*export const metadata: Metadata = {
  title: "BTCrypto Watch",
  description: "Crypto dashboard with charts, rankings and updated news",
};*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <Head></Head>
      <body className="min-h-screen flex flex-col transition-colors duration-300">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZTPDWWT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ThemeProvider>
          {" "}
          {/* envolvemos tudo no ThemeProvider */}
          <PriceAlertsProvider>
            <Toaster position="top-right" />
            {/* HEADER */}
            <header className="bg-white dark:bg-black text-black dark:text-white p-4 shadow-md flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-lg">BTCrypto Watch</span>
              </Link>
              <nav className="flex items-center gap-4">
                <Link
                  href="/noticias"
                  className="hover:text-yellow-400 transition"
                >
                  News
                </Link>
                <Link
                  href="/trending"
                  className="hover:text-yellow-400 transition"
                >
                  Trending Cryptos
                </Link>
                <Link
                  href="/comparador"
                  className="hover:text-yellow-400 transition"
                >
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
              <div className="flex flex-wrap justify-center gap-4 mb-2">
                <Link
                  href="/privacy-policy"
                  className="hover:text-yellow-400 transition"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="hover:text-yellow-400 transition"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/about"
                  className="hover:text-yellow-400 transition"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-yellow-400 transition"
                >
                  Contact
                </Link>
              </div>
              <p>
                © {new Date().getFullYear()} BTCrypto Watch. Developed by{" "}
                <Link
                  href="https://geekdigitalservices.com.br"
                  target="_blank"
                  className="text-yellow-400 underline"
                >
                  Geek Digital Services
                </Link>
                .
              </p>
            </footer>
          </PriceAlertsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
