<script>
	import Dummy from '../../component/Dummy.svelte';
	import noResult from '../../assests/no-results.png';
	import { fade } from 'svelte/transition';
	import { searchValue } from '../../store/store';
	export let data;
	let searchResults;
	$: searchResults = data.data.results;
	let searchQuery;
	searchValue.subscribe((value) => (searchQuery = value));
</script>

<svelte:head>
	<title>Search Result - {searchQuery.toUpperCase()}</title>
</svelte:head>
<section transition:fade>
	<div class="container">
		<p>Search Result : {searchQuery.toUpperCase()}</p>
		{#if searchResults.length === 0}
			<div class="no-result">
				<img src={noResult} alt="No Result" />
			</div>
		{:else}
			<div class="list-container">
				{#each searchResults as shows}
					<div class="show-box">
						<a href={shows.media_type == 'tv' ? `/tv/${shows.id}` : `/movie/${shows.id}`}>
							<figure>
								{#if !shows.poster_path}
									<Dummy dummyName={shows?.title ? shows?.title : shows?.name} />
								{:else}
									<img
										src={`http://image.tmdb.org/t/p/w500/${shows.poster_path}`}
										alt={shows?.title ? shows?.title : shows?.name}
									/>
								{/if}
							</figure>
						</a>
						<div class="show-info">
							<a href={shows.media_type == 'tv' ? `/tv/${shows.id}` : `/movie/${shows.id}`}
								>{shows?.title ? shows?.title : shows?.name}</a
							>
							<h3>
								{new Date(
									shows.release_date ? shows.release_date : shows.first_air_date
								).getFullYear()}
							</h3>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	.no-result {
		max-width: 500px;
		height: auto;
		margin-inline: auto;
	}
</style>
