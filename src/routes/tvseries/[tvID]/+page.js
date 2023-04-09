export function load({ fetch, params }) {
  const fetchMovie = async (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=df5602b051539edd1f10f620dc143ad1&language=en-US`
    const response = await fetch(url)
    const tvData = response.json()
    return tvData
  }

  return {
    data: fetchMovie(params.tvID)
  }
}