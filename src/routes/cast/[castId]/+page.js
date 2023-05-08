// const PUBLIC_API_kEY = import.meta.env.VITE_API_kEY

// export function load({ fetch, params }) {
//   const fetchCastMovie = async (id) => {
//     const url = `https://api.themoviedb.org/3/discover/movie?api_key=${PUBLIC_API_kEY}&sort_by=popularity.desc&with_cast=${castId}`
//     const response = await fetch(url)
//     const movieData = response.json()
//     return movieData
//   }
//   const fetchCastDetails = async (id) => {
//     const url = `https://api.themoviedb.org/3/person/${id}?api_key=df5602b051539edd1f10f620dc143ad1&language=en-US`
//     const response = await fetch(url)
//     const castData = response.json()
//     return castData
//   }

//   return {
//     movieData: fetchCastMovie(params.castId),
//     castData: fetchCastDetails(params.castId)
//   }
// }