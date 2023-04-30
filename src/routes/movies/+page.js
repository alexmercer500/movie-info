import { PUBLIC_API_kEY } from '$env/static/public'

export async function load({ fetch }) {

  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${PUBLIC_API_kEY}`
  const response = await fetch(apiUrl)
  const data = response.json()

  return {
    data
  }
}