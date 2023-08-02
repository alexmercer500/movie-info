const PUBLIC_API_kEY = import.meta.env.VITE_API_kEY
import { searchValue } from '../../store/store';
let searchQuery;

searchValue.subscribe(value => searchQuery = value)

export async function load({ fetch }) {
  const apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=${PUBLIC_API_kEY}&query=${searchQuery}&language=en-US&include_adult=false`
  const response = await fetch(apiUrl)
  const data = await response.json()

  return {
    data
  }
}