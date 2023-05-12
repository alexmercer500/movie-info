const PUBLIC_API_kEY = import.meta.env.VITE_API_kEY

<<<<<<< HEAD
export function load({ fetch, params }) {
  const fetchTv = async (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${PUBLIC_API_kEY}&language=en-US`
    const response = await fetch(url)
    const tvData = await response.json()
    return tvData
  }

  return {
    data: fetchTv(params.tvID)
=======
export async function load({ fetch, params }) {
  let pageNumb = params.tvID || 1
  const apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${PUBLIC_API_kEY}&page=${pageNumb}`
  const response = await fetch(apiUrl)
  const data = await response.json()

  return {
    data
>>>>>>> 4e1790f7815bb35414fff99072a2d33329db4a05
  }
}