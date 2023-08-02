const PUBLIC_API_kEY = import.meta.env.VITE_API_kEY

export async function load({ fetch, params }) {
    let genrePage = params.genrePage || 1;
  try {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${PUBLIC_API_kEY}&language=en-US`)
    const genreData = await response.json()
    const genre = genreData.genres.find(genre => genre.name === params.genreId)
    const responseData = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${PUBLIC_API_kEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${genre.id}&page=${genrePage}`)
    const genreResult = await responseData.json()
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

