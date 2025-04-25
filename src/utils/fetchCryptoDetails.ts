export async function fetchCryptoDetails(ids: string[]) {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids.join(",")}`
  const res = await fetch(url)
  if (!res.ok) throw new Error("Erro ao buscar dados")
  return res.json()
}
