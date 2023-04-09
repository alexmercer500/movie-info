export async function load({ fetch }) {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=df5602b051539edd1f10f620dc143ad1`
  const response = await fetch(url)
  const data = response.json()

  return {
    data
  }
}