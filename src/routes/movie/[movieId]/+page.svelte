<script>
	import Dummy from '../../../component/Dummy.svelte';
	import { fade } from 'svelte/transition';
	export let data;
	const movie = data.movieData;
	console.log(movie.title);
	const { cast } = data.castData;
</script>

<svelte:head>
	<title>{movie.title} - {new Date(movie.release_date).getFullYear()}</title>
</svelte:head>

<section transition:fade>
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
								<Dummy dummyName={cast.name} />
							{:else}
								<img src={`http://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt={cast.name} />
							{/if}
						</figure>
						<a href="!#">{cast.name}</a>
						<p>{cast.character}</p>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		padding-top: 4rem;
	}
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
	@media (min-width:800px) {
		section {padding-top: 2rem;}
	}
</style>
