<script>
	const PUBLIC_API_kEY = import.meta.env.VITE_API_kEY;
	import { fade } from 'svelte/transition';
	import Dummy from '../../../component/Dummy.svelte';
	import { onMount } from 'svelte';
	import dummyPoster from '../../../assests/dummy.png';
	import { page } from '$app/stores';
	let popularMovie = [];
	let pageNumb = 1;
	let castId;
	$: castId = $page.params.castId;
	const fetchMovie = async (pageNo) => {
		let page = pageNo || 1;
		const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${PUBLIC_API_kEY}&sort_by=popularity.desc&page=${pageNumb}&with_cast=${castId}`;
		const response = await fetch(apiUrl);
		const data = await response.json();

		pageNumb = data.page;
		popularMovie = data.results;
	};

	onMount(() => {
		fetchMovie(pageNumb);
	});
	function onLoad() {
		if (this.src != this.dataset.url) {
			this.src = this.dataset.url;
		}
	}
</script>

<svelte:head>
	<title>{castId}</title>
</svelte:head>

<section transition:fade>
	<div class="container">
		<div class="movie-page">
			<!-- <div class="page-numbers">
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
			</div> -->
		</div>
		<div class="list-container">
			{#each popularMovie as movie}
				<div class="show-box">
					<a href="/movie/{movie.id}">
						<figure>
							{#if !movie.poster_path}
								<Dummy dummyName={movie.title} />
							{:else}
								<img
									data-url={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
									src={dummyPoster}
									alt={movie.title}
									on:load={onLoad}
								/>
							{/if}
						</figure>
					</a>
					<div class="show-info">
						<a href="/movie/{movie.id}">{movie.title}</a>
						<h3>{new Date(movie.release_date).getFullYear()}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
