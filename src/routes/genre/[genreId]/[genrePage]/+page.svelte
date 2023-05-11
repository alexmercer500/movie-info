<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	export let data;
	$: genreResult = data.data.results;
	$: genre = $page.params.genreId;
	$: pageNumb = data.data.page;
</script>

<svelte:head>
	<title>{genre} || page no : {pageNumb}</title>
</svelte:head>

<section transition:fade>
	<div class="container">
		<div class="movie-page">
			<div class="page-numbers">
				<a href={`/genre/${genre}/${pageNumb === 1 ? pageNumb : pageNumb - 1}`}>Previous</a>
				<div class="pagination">
					<ul>
						<li><a href={`/genre/${genre}/${pageNumb}`}>{pageNumb}</a></li>
						<li>
							<a href={`/genre/${genre}/${pageNumb + 1}`}>{pageNumb + 1}</a>
						</li>
						<li>
							<a href={`/genre/${genre}/${pageNumb + 2}`}>{pageNumb + 2}</a>
						</li>
					</ul>
				</div>
				<a href={`/genre/${genre}/${pageNumb + 1}`}>Next</a>
			</div>
		</div>
		<div class="list-container">
			{#each genreResult as movie}
				<div class="show-box">
					<a href="/movie/{movie.id}">
						<figure>
							<img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
						</figure>
					</a>
					<div>
						<a href="/movie/{movie.id}">{movie.title}</a>
						<h3>{new Date(movie.release_date).getFullYear()}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
