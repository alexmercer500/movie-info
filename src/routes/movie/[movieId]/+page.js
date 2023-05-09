const PUBLIC_API_kEY = import.meta.env.VITE_API_kEY

export function load({ fetch, params }) {
  const fetchMovie = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${PUBLIC_API_kEY}`
    const response = await fetch(url)
    const movieData = await response.json()
    return movieData
  }
  const fetchCast = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${PUBLIC_API_kEY}`
    const response = await fetch(url)
    const castData = await response.json()
    return castData
  }

  return {
    movieData: fetchMovie(params.movieId),
    castData: fetchCast(params.movieId)
  }
}