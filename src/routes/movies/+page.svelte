<script>
	import { PUBLIC_API_kEY } from '$env/static/public';
	import { onMount } from 'svelte';

	let popularMovie = [];
	let pageNumb = 1;
	const fetchMovie = async (pageNo) => {
		let page = pageNo || 1;
		const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${PUBLIC_API_kEY}&page=${page}`;
		const response = await fetch(apiUrl);
		const data = await response.json();
		pageNumb = data.page;
		popularMovie = data.results;
	};

	onMount(() => {
		fetchMovie(pageNumb);
	});
</script>

<section>
	<div class="container">
		<div class="movie-page">
			<div class="page-numbers">
				<button type="button" on:click={fetchMovie(pageNumb - 1)}>Previous</button>
				<div class="pagination">
					<ul>
						<li><button type="button" on:click={fetchMovie(pageNumb)}>{pageNumb}</button></li>
						<li>
							<button type="button" on:click={fetchMovie(pageNumb + 1)}>{pageNumb + 1}</button>
						</li>
						<li>
							<button type="button" on:click={fetchMovie(pageNumb + 2)}>{pageNumb + 2}</button>
						</li>
					</ul>
				</div>
				<button on:click={fetchMovie(pageNumb + 1)}>Next</button>
			</div>
		</div>
		<div class="list-container">
			{#each popularMovie as movie}
				<div class="show-box">
					<figure>
						<a href="/movies/{movie.id}">
							<img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
						</a>
					</figure>
					<div class="show-info">
						<a href="/movies/{movie.id}">{movie.title}</a>
						<h3>{new Date(movie.release_date).getFullYear()}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
</style>
