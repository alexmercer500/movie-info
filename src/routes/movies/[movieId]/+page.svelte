<script>
	export let data;
	const movie = data.data;
</script>

<div class="container">
	<figure>
		<img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
		<figcaption>{movie.title}</figcaption>
	</figure>
	<div>
		<h3>{movie.title}</h3>
		<h3>{movie.release_date}</h3>
		<p>{movie.overview}</p>
	</div>
</div>
