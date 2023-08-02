<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	const PUBLIC_API_kEY = import.meta.env.VITE_API_kEY;
	import Dummy from '../../../component/Dummy.svelte';
	let popularMovie = [];
	let castInfo;
	let pageNumb = 1;
	let totalPage;
	let totalResults;
	let moreContent = false;
	$: castId = $page.params.castId;
	const fetchMovie = async (pageNo) => {
		let pageNu = pageNo || 1;
		const castUrl = `https://api.themoviedb.org/3/person/${castId}?api_key=${PUBLIC_API_kEY}&language=en-US`;
		const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${PUBLIC_API_kEY}&sort_by=popularity.desc&page=${pageNu}&with_cast=${castId}`;

		const [castResponse, movieResponse] = await Promise.all([fetch(castUrl), fetch(apiUrl)]);
		const [castData, movieData] = await Promise.all([castResponse.json(), movieResponse.json()]);
		castInfo = castData;
		pageNumb = movieData.page;
		popularMovie = movieData.results;
		totalPage = movieData.total_pages;
		totalResults = movieData.total_results;
	};

	onMount(() => {
		fetchMovie(pageNumb);
	});
</script>

<svelte:head>
	<title>{castInfo ? castInfo.name : null}</title>
</svelte:head>

<section transition:fade>
	<div class="container">
		{#if castInfo}
			<div class="show-info_container">
				<div class="cast-info">
					<div>
						<div class="poster-container">
							<figure>
								<img
									src={`http://image.tmdb.org/t/p/w500/${castInfo.profile_path}`}
									alt={castInfo.name}
								/>
							</figure>
						</div>
						<div class="mov-guide">
							<div>
								<p>{castInfo.name}</p>
								<p>Date of Birth: {castInfo.birthday}</p>
								<div>
									<p>
										{!moreContent && castInfo.biography.length > 400
											? castInfo.biography.substring(0, 400) + '...'
											: castInfo.biography}
									</p>
									<button
										type="button"
										class:hidden={castInfo.biography.length < 400}
										on:click={() => {
											moreContent = !moreContent;
										}}>{!moreContent ? 'Read More' : 'See Less'}</button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
		<div class="movie-page">
			<div class="page-count">
				<p>Page No : <span> {pageNumb} </span> of <span>{totalPage}</span></p>
				<p>
					Results : <span>
						{pageNumb === 1 ? pageNumb : 20 * pageNumb - 20 + 1} to {20 * pageNumb > totalResults
							? totalResults
							: 20 * pageNumb}
					</span>
					of <span>{totalResults}</span>
				</p>
			</div>
			<div class="page-numbers">
				<button
					type="button"
					disabled={pageNumb <= 1 ? true : false}
					on:click={() => {
						fetchMovie(pageNumb - 1);
					}}>Previous</button
				>
				<div class="pagination">
					<ul>
						<li class:hidden={pageNumb <= 2}>
							<button
								type="button"
								on:click={() => {
									fetchMovie(pageNumb - 2);
								}}>{pageNumb - 2}</button
							>
						</li>
						<li class:hidden={pageNumb >= totalPage - 1}>
							<button
								type="button"
								on:click={() => {
									fetchMovie(pageNumb + 2);
								}}>{pageNumb + 2}</button
							>
						</li>
					</ul>
				</div>
				<button
					type="button"
					disabled={pageNumb >= totalPage ? true : false}
					on:click={fetchMovie(pageNumb + 1)}>Next
				</button>
			</div>
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
									src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
									alt={movie.title}
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

<style>
	.movie-page {
		display: flex;
		justify-content: space-between;
		gap: 0.75rem;
		flex-wrap: wrap;
		align-items: center;
		padding-bottom: 2.5rem;
	}
	.movie-page .page-count {
		font-size: 18px;
	}
	.movie-page .page-count p:last-child {
		margin-top: 1rem;
	}
	.movie-page .page-count span {
		font-weight: 600;
	}
	.movie-page .page-numbers {
		margin-inline: 0;
		width: unset;
		padding-block: 0;
	}
	/* Actors Details styling */

	.cast-info {
		padding-block: 3rem;
	}
	.cast-info > * {
		display: flex;
		flex-direction: column;
	}
	.cast-info .poster-container {
		flex-basis: 350px;
	}
	.cast-info .mov-guide {
		flex: 1;
	}
	.mov-guide button {
		margin-top: 24px;
	}
	.poster-container figure {
		display: grid;
		width: -moz-fit-content;
		width: fit-content;
		margin-inline: auto;
		padding: 0.75rem;
		border-radius: 10px;
		background-color: rgba(0, 0, 0, 0.6);
	}
	.poster-container figure img {
		border-radius: 10px;
	}
	@media (min-width: 800px) {
		section {
			padding-top: 2rem;
		}
		.cast-info > * {
			flex-direction: row;
		}
		.cast-info .mov-guide div {
			max-width: 650px;
			margin-left: auto;
		}
	}
</style>
