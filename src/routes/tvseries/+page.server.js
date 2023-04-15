import { PUBLIC_API_kEY } from '$env/static/public'

export async function load({ fetch }) {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${PUBLIC_API_kEY}&language=en-US`
  const response = await fetch(url)
  const data = response.json()
  console.log(data);
  return {
    data
  }
}
