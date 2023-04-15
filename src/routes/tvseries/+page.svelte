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
						<a href="/tvseries/{tv.id}">{tv.original_name}</a>
						<h3>{new Date(tv.first_air_date).getFullYear()}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>

</style>
