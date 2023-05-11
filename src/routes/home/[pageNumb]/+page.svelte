<script>
	import Dummy from '../../../component/Dummy.svelte';
	import { fade } from 'svelte/transition';
	export let data;
	let trendingShow;
	let pageNumb;
	$: trendingShow = data.data.results;
	$: pageNumb = data.data.page;
</script>

<svelte:head>
	<title>Popular Movie || page no : {pageNumb}</title>
</svelte:head>
<section transition:fade>
	<div class="container">
		<p class="trending">Trending</p>
		<div class="movie-page">
			<div class="page-numbers">
				<a href={`/home/${pageNumb === 1 ? pageNumb : pageNumb - 1}`}>Previous</a>
				<div class="pagination">
					<ul>
						<li><a href={`/home/${pageNumb}`}>{pageNumb}</a></li>
						<li class={pageNumb >= data.data.total_pages ? 'hidden': null}><a href={`/home/${pageNumb + 1}`}>{pageNumb + 1}</a></li>
						<li class={pageNumb + 1 >= data.data.total_pages ? 'hidden': null}><a href={`/home/${pageNumb + 2}`}>{pageNumb + 2}</a></li>
					</ul>
				</div>
				<a href={`/home/${pageNumb + 1}`}>Next</a>
			</div>
		</div>
		<div class="list-container">
			{#each trendingShow as shows}
				<div class="show-box">
					<a href={shows.media_type == 'tv' ? `/tv/${shows.id}` : `/movie/${shows.id}`}>
						<figure>
							{#if !shows.poster_path}
								<Dummy dummyName={shows?.title ? shows?.title : shows?.name} />
							{:else}
								<img src={`http://image.tmdb.org/t/p/w500/${shows.poster_path}`} alt={shows?.title ? shows?.title : shows?.name} />
							{/if}
						</figure>
					</a>
					<div class="show-info">
						<a href={shows.media_type == 'tv' ? `/tv/${shows.id}` : `/movie/${shows.id}`}>{shows?.title ? shows?.title : shows?.name}</a>
						<h3>
							{new Date( shows.release_date ? shows.release_date : shows.first_air_date).getFullYear()}
						</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>