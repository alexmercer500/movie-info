<script>
	import Dummy from '../../../component/Dummy.svelte';
	import { fade } from 'svelte/transition';
	export let data;
	$: popularTV = data.data.results;
	$: pageNumb = data.data.page;
</script>

<svelte:head>
	<title>Popular TV || page no : {pageNumb}</title>
</svelte:head>
<section transition:fade>
	<div class="container">
		<div class="movie-page">
			<div class="page-numbers">
				<a
					href={`/tvseries/${pageNumb === 1 ? pageNumb : pageNumb - 1}`}
					class={pageNumb === 1 ? 'hidden' : null}>Previous</a
				>
				<div class="pagination">
					<ul>
						<li><a href={`/tvseries/${pageNumb}`}>{pageNumb}</a></li>
						<li class={pageNumb >= 500 ? 'hidden' : null}>
							<a href={`/tvseries/${pageNumb + 1}`}>{pageNumb + 1}</a>
						</li>
						<li class={pageNumb + 1 >= 500 ? 'hidden' : null}>
							<a href={`/tvseries/${pageNumb + 2}`}>{pageNumb + 2}</a>
						</li>
					</ul>
				</div>
				<a href={`/tvseries/${pageNumb + 1}`} class={pageNumb + 1 >= 500 ? 'hidden' : null}>Next</a>
			</div>
		</div>
		<div class="list-container">
			{#each popularTV as tv}
				<div class="show-box" title={tv.original_name}>
					<a href="/tv/{tv.id}">
						<figure>
							{#if !tv.poster_path}
								<Dummy dummyName={tv.original_name} />
							{:else}
								<img
									src={`http://image.tmdb.org/t/p/w500/${tv.poster_path}`}
									alt={tv.original_name}
								/>
							{/if}
						</figure>
					</a>
					<div class="show-info">
						<div>
							<a href="/tv/{tv.id}">{tv.original_name}</a>
						</div>
						<div class="show-date">
							<h3>{new Date(tv.first_air_date).getFullYear()}</h3>
							<span>{tv.vote_average}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
