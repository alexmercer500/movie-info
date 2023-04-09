<script>
	export let data;
	const genreResult = data.data.results;
	// console.log(genreResult);
</script>

<section>
	<div class="container">
		<div class="list-container">
			{#each genreResult as movie}
				<div class="show-box">
					<figure>
						<a href="/movies/{movie.id}">
							<img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
						</a>
						<figcaption>{movie.title}</figcaption>
					</figure>
					<div>
						<a href="/movies/{movie.id}">
							<h3>{movie.title}</h3>
						</a>
						<h3>{movie.release_date}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
