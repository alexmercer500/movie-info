<script>
	import Dummy from '../../../component/Dummy.svelte';
	export let data;
	let popularMovie;
	let pageNumb;
	$: popularMovie = data.data.results;
	$: pageNumb = data.data.page;
</script>

<svelte:head>
	<title>Popular Movie || page no : {pageNumb}</title>
</svelte:head>

<section>
	<div class="container">
		<div class="movie-page">
			<div class="page-numbers">
				<a href={`/movies/${pageNumb === 1 ? pageNumb : pageNumb - 1}`}>Previous</a>
				<div class="pagination">
					<ul>
						<li><a href={`/movies/${pageNumb}`}>{pageNumb}</a></li>
						<li>
							<a href={`/movies/${pageNumb + 1}`}>{pageNumb + 1}</a>
						</li>
						<li>
							<a href={`/movies/${pageNumb + 2}`}>{pageNumb + 2}</a>
						</li>
					</ul>
				</div>
				<a href={`/movies/${pageNumb + 1}`}>Next</a>
			</div>
		</div>
		<div class="list-container">
			{#each popularMovie as movie}
				<div class="show-box">
					<figure>
						<a href="/movie/{movie.id}">
							{#if !movie.poster_path}
								<Dummy dummyName={movie.title} />
							{:else}
								<img
									src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
									alt={movie.title}
								/>
							{/if}
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
