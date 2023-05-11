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
	<div>
		<div
			class="show-info_container"
			style={`background-image: url('http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${tvData.backdrop_path}')`}
		>
			<div class="tv-info">
				<div class="container">
					<div class="poster-container">
						<figure>
							<img
								src={`http://image.tmdb.org/t/p/w500/${tvData.poster_path}`}
								alt={tvData.title}
							/>
						</figure>
					</div>
					<div class="tv-guide">
						<div>
							<p>{tvData.name}</p>
							<p>First Aired Date : {tvData.first_air_date}</p>
							<p>{tvData.overview}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="cast">
				{#each cast as cast}
					<div>
						<a href="/cast/{cast.id}">
							<figure>
								{#if !cast.profile_path}
									<Dummy dummyName={cast.name} />
								{:else}
									<img
										src={`http://image.tmdb.org/t/p/w200/${cast.profile_path}`}
										alt={cast.name}
									/>
								{/if}
							</figure>
							<a href="!#">{cast.name}</a>
							<p>{cast.character}</p>
						</a>
					</div>
				{/each}
			</div>
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
	.tv-info {
		background-color: rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(3px) brightness(0.5);
		padding-block: 3rem;
	}
	.tv-info > * {
		display: flex;
		flex-direction: column;
	}
	.tv-info .poster-container {
		flex-basis: 350px;
	}
	.tv-info .tv-guide {
		flex: 1;
	}
	.show-info_container {
		background-repeat: no-repeat;
		background-position-x: 100%;
		background-size: cover;
		background-color: rgba(255, 255, 255, 0.3);
	}
	.tv-info .tv-guide div {
		max-width: 650px;
		margin-left: auto;
	}
	.poster-container figure {
		display: grid;
		width: -moz-fit-content;
		width: fit-content;
		margin-inline: auto;
		padding: 0.75rem;
		border-radius: 10px;
		background-color: rgba(0, 0, 0, 0.6);
	}
	.poster-container figure img {
		border-radius: 10px;
	}
	@media (min-width: 800px) {
		section {
			padding-top: 2rem;
		}
		.tv-info > * {
			flex-direction: row;
		}
		.tv-info .tv-guide div {
			max-width: 650px;
			margin-left: auto;
		}
	}
</style>
