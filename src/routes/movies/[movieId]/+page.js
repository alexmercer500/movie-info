export function load({ fetch, params }) {

  const fetchMovie = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=df5602b051539edd1f10f620dc143ad1`
    const response = await fetch(url)
    const movieData = response.json()
    return movieData
  }

  return {
    data: fetchMovie(params.movieId)
  }
}