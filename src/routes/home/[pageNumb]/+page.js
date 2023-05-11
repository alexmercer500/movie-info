const PUBLIC_API_kEY = import.meta.env.VITE_API_kEY
import { searchValue } from '../../../store/store';
let searchQuery;

searchValue.subscribe(value => searchQuery = value)
console.log(searchQuery);
export async function load({ fetch, params }) {
  let pageNumb = params.pageNumb || 1
  const apiUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${PUBLIC_API_kEY}&page=${pageNumb}`
  const response = await fetch(apiUrl)
  const data = await response.json()

  return {
    data
  }
}