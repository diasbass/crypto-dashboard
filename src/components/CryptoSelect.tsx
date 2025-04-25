"use client"
import { useState } from "react"

export default function CryptoSelect() {
  const [selected, setSelected] = useState<string[]>([])

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (value && !selected.includes(value)) {
      setSelected([...selected, value])
    }
  }

  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Escolha criptos para comparar:</label>
      <select onChange={handleSelect} className="p-2 border rounded">
        <option value="">Selecione uma moeda</option>
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="cardano">Cardano</option>
      </select>
      <div className="mt-2">
        {selected.map((id) => (
          <span key={id} className="inline-block mr-2 p-1 px-2 bg-yellow-300 text-black rounded">
            {id}
          </span>
        ))}
      </div>
    </div>
  )
}
