import { PUBLIC_API_kEY } from '$env/static/public'
export async function load({ fetch, params }) {

  try {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${PUBLIC_API_kEY}&language=en-US`)
    const genreData = await response.json()
    const genre = genreData.genres.find(genre => genre.name === params.genreId)
    const responseData = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${PUBLIC_API_kEY}&language=en-US&sort_by=popularity.desc&include_adult=true&page=1&with_genres=${genre.id}`)
    const genreResult = await responseData.json()
    console.log(genreResult);
    return {
      data: genreResult
    }
  }
  catch (error) {
    return {
      error: error.message || 'Unknown error'
    }
  }
}

