<script>
	export let data;
	let popularMovie = data.data.results;
	console.log(popularMovie[0]);
	// console.log(data.data.total_pages);
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
	.page-numbers {
		display: flex;
		gap: 2rem;
		justify-content: center;
		align-items: center;
		max-width: 400px;
		width: 100%;
		margin-inline: auto;
		padding-bottom: 2.5rem;
	}
	.page-numbers .pagination ul {
		display: flex;
		gap: 0.5rem;
	}
	.page-numbers button {
		padding: 5px 10px;
		background-color: #ffe400;
		width: 100px;
		border-radius: 0.25rem;
		transition: box-shadow 200ms;
	}
	.pagination ul li a {
		display: block;
		width: 40px;
		color: #000000;
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: #ffe400;
		display: grid;
		place-content: center;
	}
	.page-numbers button:hover,
	.pagination ul li a:hover {
		box-shadow: 0 0 10px #ffe400;
	}
</style>
