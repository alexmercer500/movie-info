<script>
	import Dummy from '../../../component/Dummy.svelte';
	import { fade } from 'svelte/transition';
	export let data;
	let popularMovie;
	let pageNumb;
	$: popularMovie = data.data.results;
	$: pageNumb = data.data.page;
</script>

<svelte:head>
	<title>Popular Movie || page no : {pageNumb}</title>
</svelte:head>

<section transition:fade>
	<div class="container">
		<div class="movie-page">
			<div class="page-numbers">
				<a
					href={`/movies/${pageNumb === 1 ? pageNumb : pageNumb - 1}`}
					class={pageNumb === 1 ? 'hidden' : null}>Previous</a
				>
				<div class="pagination">
					<ul>
						<li><a href={`/movies/${pageNumb}`}>{pageNumb}</a></li>
						<li class={pageNumb >= 500 ? 'hidden' : null}>
							<a href={`/movies/${pageNumb + 1}`}>{pageNumb + 1}</a>
						</li>
						<li class={pageNumb + 1 >= 500 ? 'hidden' : null}>
							<a href={`/movies/${pageNumb + 2}`}>{pageNumb + 2}</a>
						</li>
					</ul>
				</div>
				<a href={`/movies/${pageNumb + 1}`} class={pageNumb + 1 >= 500 ? 'hidden' : null}>Next</a>
			</div>
		</div>
		<div class="list-container">
			{#each popularMovie as movie}
				<div class="show-box" title={movie.title}>
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
						<div>
							<a href="/movie/{movie.id}">{movie.title}</a>
						</div>
						<div class="show-date">
							<h3>{new Date(movie.release_date).getFullYear()}</h3>
							<span>{movie.vote_average != 0 ? movie.vote_average : 'NA'}</span>
						</div>
					</div>
				</div> 	
			{/each}
		</div>
	</div>
</section>
