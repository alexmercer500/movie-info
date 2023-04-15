import { PUBLIC_API_kEY } from '$env/static/public'

export async function load({ fetch }) {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${PUBLIC_API_kEY}`
  const response = await fetch(url)
  const data = response.json()

  return {
    data
  }
}