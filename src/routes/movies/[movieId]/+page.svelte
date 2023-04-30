<script>
	import castPlaceholder from '../../../assests/user.webp';
	export let data;
	const movie = data.movieData;
	const { cast } = data.castData;
	console.log(cast);
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
	<div class="cast">
		{#each cast as cast}
			<div>
				<a href="/cast/{cast.id}">
					<figure>
						{#if !cast.profile_path}
							<img src={castPlaceholder} alt={cast.name} class="alt-image" />
						{:else}
							<img src={`http://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt={cast.name} />
						{/if}
					</figure>
					<a href="!#">{cast.name}</a>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.cast {
		display: grid;
		gap: 0.75rem;
		grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
	}
	.cast img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
