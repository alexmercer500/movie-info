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
				<a href={`/tvseries/${pageNumb === 1 ? pageNumb : pageNumb - 1}`}>Previous</a>
				<div class="pagination">
					<ul>
						<li><a href={`/tvseries/${pageNumb}`}>{pageNumb}</a></li>
						<li>
							<a href={`/tvseries/${pageNumb + 1}`}>{pageNumb + 1}</a>
						</li>
						<li>
							<a href={`/tvseries/${pageNumb + 2}`}>{pageNumb + 2}</a>
						</li>
					</ul>
				</div>
				<a href={`/tvseries/${pageNumb + 1}`}>Next</a>
			</div>
		</div>
		<div class="list-container">
			{#each popularTV as tv}
				<div class="show-box" title={tv.original_name}>
					<figure>
						<a href="/tv/{tv.id}">
							{#if !tv.poster_path}
								<Dummy dummyName={tv.original_name} />
							{:else}
								<img
									src={`http://image.tmdb.org/t/p/w500/${tv.poster_path}`}
									alt={tv.original_name}
								/>
							{/if}
						</a>
						<figcaption>{tv.original_name}</figcaption>
					</figure>
					<div>
						<a href="/tv/{tv.id}">{tv.original_name}</a>
						<h3>{new Date(tv.first_air_date).getFullYear()}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
