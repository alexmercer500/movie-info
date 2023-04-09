<script>
	export let data;
	const teleOne = data.data;
</script>

<div class="container">
	<figure>
		<img src={`http://image.tmdb.org/t/p/w500/${teleOne.poster_path}`} alt={teleOne.name} />
		<figcaption>{teleOne.name}</figcaption>
	</figure>
	<div>
		<h3>{teleOne.name}</h3>
		<h3>{teleOne.first_air_date}</h3>
		<p>{teleOne.overview}</p>
	</div>
</div>
