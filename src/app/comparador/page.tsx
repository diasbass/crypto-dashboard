import Comparador from './Comparador'

export const metadata = {
  title: 'Comparador de Criptoativos | BTCrypto Watch',
  description: 'Compare criptomoedas em tempo real por preço, volume e muito mais.',
}

export default function ComparadorPage() {
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Comparador de Criptoativos</h1>
      <Comparador />
    </main>
  )
}
