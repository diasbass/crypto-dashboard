"use client"
export default function CompareCrypto() {
  // Placeholder para dados vindos da API
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-700">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="p-2 border">Cripto</th>
            <th className="p-2 border">Preço</th>
            <th className="p-2 border">Market Cap</th>
            <th className="p-2 border">Volume 24h</th>
          </tr>
        </thead>
        <tbody>
          {/* Dados comparativos renderizados dinamicamente aqui */}
          <tr className="text-center">
            <td className="border p-2">Bitcoin</td>
            <td className="border p-2">$67,000</td>
            <td className="border p-2">$1.3T</td>
            <td className="border p-2">$20B</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
