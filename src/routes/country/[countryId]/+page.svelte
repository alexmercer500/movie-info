<!-- <script>
	export let data;
	$: genreResult = data.data.results;
</script>

<section>
	<div class="container">
		<div class="movie-page">
			<div class="page-numbers">
				<button>Previous</button>
				<div class="pagination">
					<ul>
						<li><a href="1">1</a></li>
						<li><a href="2">2</a></li>
						<li><a href="3">3</a></li>
						<li><a href="4">4</a></li>
					</ul>
				</div>
				<button>Next</button>
			</div>
		</div>
		<div class="list-container">
			{#each genreResult as movie}
				<div class="show-box">
					<figure>
						<a href="/movies/{movie.id}">
							<img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
						</a>
					</figure>
					<div>
						<a href="/movies/{movie.id}">{movie.title}</a>
						<h3>{new Date(movie.release_date).getFullYear()}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section> -->
