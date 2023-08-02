// import { PUBLIC_API_kEY } from '$env/static/public'
// export async function load({ fetch, params }) {

//   try {
//     const response = await fetch(`https://api.themoviedb.org/3/configuration/countries?api_key=${PUBLIC_API_kEY}`)
//     const countryData = await response.json()
//     const country = await countryData.find(country => country.native_name === params.countryId)
//     const responseData = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${PUBLIC_API_kEY}&region=${country.iso_3166_1}`)
//     const genreResult = await responseData.json()
//     return {
//       data: genreResult
//     }
//   }
//   catch (error) {
//     return {
//       error: error.message || 'Unknown error'
//     }
//   }
// }

