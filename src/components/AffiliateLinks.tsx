'use client'

export default function AffiliateLinks({ name }: { name: string }) {
  return (
    <div className="mt-8 space-y-4">
      <a
        href="https://www.binance.com/pt-BR/referral/earn-together/refertoearn2000usdc/claim?hl=pt-BR&ref=GRO_14352_YRG55&utm_source=referralmode"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
      >
        Ganhe USDC comprando {name} na Binance
      </a>

      <a
        href="https://coinbase.com/join/H8QUD3G?src=android-link"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition"
      >
        Compre {name} com segurança na Coinbase
      </a>
    </div>
  )
}
