<script>
	import { fade } from 'svelte/transition';
	import Dummy from '../../../component/Dummy.svelte';
	export let data;
	const tvData = data.tvData;
	const { cast } = data.castData;
</script>

<svelte:head>
	<title>{tvData.name}</title>
</svelte:head>
<section transition:fade>
	<div class="container">
		<figure>
			<img src={`http://image.tmdb.org/t/p/w500/${tvData.poster_path}`} alt={tvData.title} />
			<figcaption>{tvData.name}</figcaption>
		</figure>
		<div>
			<h3>{tvData.name}</h3>
			<h3>{tvData.first_air_date}</h3>
			<p>{tvData.overview}</p>
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
