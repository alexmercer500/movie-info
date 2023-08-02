const PUBLIC_API_kEY = import.meta.env.VITE_API_kEY

export async function load({ fetch }) {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${PUBLIC_API_kEY}&language=en-US`
  const response = await fetch(url)
  const data = await response.json()
  return {
    data
  }
}
