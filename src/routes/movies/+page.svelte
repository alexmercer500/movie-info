<script>

	export let data;
	let popularMovie = data.data.results;
	let pageNumb = data.data.page;
</script>

<section>	
	<div class="container">
		<div class="movie-page">
			<div class="page-numbers">
				<button>Previous</button>
				<div class="pagination">
					<ul>
						<li><a href={`movie/${pageNumb}`}>{pageNumb}</a></li>
						<li><a href={`movie/${pageNumb + 1}`}>{pageNumb + 1}</a></li>
						<li><a href={`movie/${pageNumb + 2}`}>{pageNumb + 2}</a></li>
						<li><a href={`movie/${pageNumb + 3}`}>{pageNumb + 3}</a></li>
					</ul>
				</div>
				<button>Next</button>
			</div>
		</div>
		<div class="list-container">
			{#each popularMovie as movie}
				<div class="show-box">
					<figure>
						<a href="/movies/{movie.id}">
							<img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
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

<style>
</style>
