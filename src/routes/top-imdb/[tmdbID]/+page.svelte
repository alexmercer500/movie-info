<script>
	import Dummy from '../../../component/Dummy.svelte';
	export let data;
	import { fade } from 'svelte/transition';
	$: [movieData, tvData] = data.data;
	let popularMovie;
	let pageNumb;
	let showType = 'movie-show';
	$: showType === 'movie-show'
		? (popularMovie = movieData.results)
		: showType === 'tv-show'
		? (popularMovie = tvData.results)
		: null;
	$: pageNumb = movieData.page;
	$: console.log(popularMovie);
</script>

<svelte:head>
	<title>TMDb Top Rated {showType === 'movie-show' ? 'Movie' : 'TV Series'}</title>
</svelte:head>
<section transition:fade>
	<div class="container">
		<div class="show-container">
			<div class="show-listing">
				<div>
					<label for="movie_id" class:selected-show={showType === 'movie-show'}>Movie</label>
					<input
						type="radio"
						name="show-toggle"
						id="movie_id"
						bind:group={showType}
						value="movie-show"
					/>
				</div>
				<div>
					<label for="tv_id" class:selected-show={showType === 'tv-show'}>TV</label>
					<input type="radio" name="show-toggle" id="tv_id" bind:group={showType} value="tv-show" />
				</div>
			</div>
			<div class="movie-page">
				<div class="page-numbers">
					<a href={`/top-imdb/${pageNumb === 1 ? pageNumb : pageNumb - 1}`}>Previous</a>
					<div class="pagination">
						<ul>
							<li><a href={`/top-imdb/${pageNumb}`}>{pageNumb}</a></li>
							<li>
								<a href={`/top-imdb/${pageNumb + 1}`}>{pageNumb + 1}</a>
							</li>
							<li>
								<a href={`/top-imdb/${pageNumb + 2}`}>{pageNumb + 2}</a>
							</li>
						</ul>
					</div>
					<a href={`/top-imdb/${pageNumb + 1}`}>Next</a>
				</div>
			</div>
		</div>
		<div class="list-container">
			{#each popularMovie as movie}
				<div class="show-box">
					<figure>
						<a href={showType === 'movie-show' ? `/movie/${movie.id}` : `/tv/${movie.id}`}>
							{#if !movie.poster_path}
								<Dummy dummyName={showType === 'movie-show' ? movie.title : movie.name} />
							{:else}
								<img
									src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
									alt={showType === 'movie-show' ? movie.title : movie.name}
								/>
							{/if}
						</a>
					</figure>
					<div class="show-info">
						<a href="/movies/{movie.id}">{showType === 'movie-show' ? movie.title : movie.name}</a>
						<h3>{new Date(showType === 'movie-show' ? movie.release_date : movie.first_air_date).getFullYear()}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.show-container {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding-block: 3.5rem 2.5rem;
	}
	.show-listing label {
		padding: 5px 10px;
		background-color: #ffe400;
		width: 80px;
		text-align: center;
		display: inline-block;
		border-radius: 0.25rem;
		transition: box-shadow 200ms;
		color: #000000;
		cursor: pointer;
	}
	.show-listing label.selected-show {
		outline: 2px solid #ffffff;
	}
	.show-listing label:hover {
		box-shadow: 0 0 10px #ffe400;
	}
	.show-listing input {
		display: none;
	}
	.show-listing {
		display: flex;
		gap: 0.8rem;
		justify-content: center;
	}
	.page-numbers {padding-block: 0;}
	@media (min-width: 800px) {
	}
</style>
