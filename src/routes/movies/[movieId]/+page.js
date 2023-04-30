import { PUBLIC_API_kEY } from '$env/static/public'
export function load({ fetch, params }) {
  const fetchMovie = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${PUBLIC_API_kEY}`
    const response = await fetch(url)
    const movieData = response.json()
    return movieData
  }
  const fetchCast = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${PUBLIC_API_kEY}`
    const response = await fetch(url)
    const castData = response.json()
    return castData
  }

  return {
    movieData: fetchMovie(params.movieId),
    castData: fetchCast(params.movieId)
  }
}