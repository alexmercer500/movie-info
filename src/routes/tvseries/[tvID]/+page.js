import { PUBLIC_API_kEY } from '$env/static/public'
export function load({ fetch, params }) {
  const fetchMovie = async (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${PUBLIC_API_kEY}&language=en-US`
    const response = await fetch(url)
    const tvData = response.json()
    return tvData
  }

  return {
    data: fetchMovie(params.tvID)
  }
}