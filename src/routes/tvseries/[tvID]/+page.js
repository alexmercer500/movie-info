const PUBLIC_API_kEY = import.meta.env.VITE_API_kEY

export async function load({ fetch, params }) {
  let pageNumb = params.tvID || 1
  const apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${PUBLIC_API_kEY}&page=${pageNumb}`
  const response = await fetch(apiUrl)
  const data = await response.json()

  return {
    data
  }
}