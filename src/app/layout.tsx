import './globals.css';

export const metadata = {
  title: 'Crypto Dashboard',
  description: 'Dashboard de Criptomoedas em Tempo Real',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
