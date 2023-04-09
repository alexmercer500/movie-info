<script>
	export let data;
	let popularTV = data.data.results;
</script>

<section>
	<div class="container">
		<div class="list-container">
			{#each popularTV as tv}
				<div class="show-box" title={tv.original_name}>
					<figure>
						<a href="/tvseries/{tv.id}">
							<img src={`http://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt={tv.original_name} />
						</a>
						<figcaption>{tv.original_name}</figcaption>
					</figure>
					<div>
						<a href="/tvseries/{tv.id}">
							<h3>{tv.original_name}</h3>
						</a>
						<h3>{tv.first_air_date}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>

</style>
