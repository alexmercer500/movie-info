const PUBLIC_API_kEY = import.meta.env.VITE_API_kEY;

export async function load({ fetch, params }) {
    let movieUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${PUBLIC_API_kEY}&language=en-US&page=${params.tmdbID}`;
    let tvUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${PUBLIC_API_kEY}&language=en-US&page=${params.tmdbID}`;

    const fetchTopRated = async () => {
        const [movieResponse, tvResponse] = await Promise.all([fetch(movieUrl), fetch(tvUrl)]);
        const [movieData, tvData] = await Promise.all([movieResponse.json(), tvResponse.json()]);
        return [movieData, tvData]
    };

    return {
        data: fetchTopRated()
    }
}