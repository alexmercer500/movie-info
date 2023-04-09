export async function load({ fetch, params }) {
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=df5602b051539edd1f10f620dc143ad1&language=en-US`)
  const genreData = await response.json()
  const genre = genreData.genres.find(genre => genre.name === params.genreId)
  console.log(genre);
  const responseData = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=df5602b051539edd1f10f620dc143ad1&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=${genre.name}`)
  const genreResult = responseData.json()
  console.log(genreResult);
  return {
    data: genreResult
  }
}
