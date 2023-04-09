<script>
	const disclaimer = [
		{
			title: 'What is HiMovies?',
			description: `HiMovies was launched in 2019 to allow people to watch HD movies and TV shows online without having to pay anything.
			HiMovies has been continuously increasing in popularity since its first launch. With big library of HD movies and HD series, 
			you will mostly find your favorite movies and series on himovies website.`
		},
		{
			title: 'Is HiMovies a safe movies streaming website?',
			description: `Users believe HiMovies to be a safe website since it is clean even after an html code scan. 
			Furthermore, the whole ad network is examined on a regular basis to ensure that the site does not include any potentially hazardous advertisements. 
			To remain anonymous and improve streaming performance, we recommend that you use a reliable VPN.`
		},
		{
			title: 'Is it legal to use HiMovies?',
			description: `It is perfectly legal to stream free HD movies on HiMovies; it is only against the law to download and save movies on your device, 
			which is why HiMovies does not provide a download option at the moment.`
		},
		{
			title: 'Is it legal to use HiMovies?',
			description: `It is perfectly legal to stream free HD movies on HiMovies; it is only against the law to download and save movies on your device, 
			which is why HiMovies does not provide a download option at the moment.`
		},
		{
			title: "Alternatives to HiMovies: What's the Best out there apart from HiMovies?",
			description: `On the Internet, there are thousands of free online movie streaming sites, but only a tiny percentage of them are secure and trustworthy. 
			Try 123movies, gomovies, 6movies, and fmovies if HiMovies is unavailable.`
		},
		{
			title: 'Is there a HiMovies app for smartphones, iPads, or TV?',
			description: `Please install the HiMovies Android Movies Apk for your Android devices to get faster streaming speeds, Chromecast support, no advertisements, 
			and premium customer service. Please have a look at this page to view the HiMovies Android apk.
			True happiness is free, and so is HiMovies. Let's take a look at the site’s features to see why you should ditch paid premium subscriptions of other sites and start utilizing HiMovies instead.`
		},
		{
			title: 'HiMovies review',
			description: `Despite being newly established, HiMovies has garnered a lot of attention from movie fans all around the world because of the following features:`,
			feature: [
				{
					featureTitle: 'Safety',
					featureDesc: `As previously said, HiMovies is a secure and trusted service for streaming movies online as long as you follow the safety guidelines. To ensure your protection, connect to the site using a VPN and use the AdBlock add-on.`
				},
				{
					featureTitle: 'Large content library',
					featureDesc: `HiMovies has over 300,000 movies and TV episodes to choose from. The most recent releases, golden oldies, and even regional treasures may all be found here. New titles are added regularly, so the library will continue to grow.
					HiMovies also has several subtitles available for your convenience. To get the most out of the service, switch on the English, Spanish, or German subtitles.`
				},
				{
					featureTitle: 'Regular updates',
					featureDesc: `HiMovies is one of the most up-to-date streaming services. Every day, new titles are added to ensure that your supply of amusement never runs dry.`
				},
				{
					featureTitle: 'HD Streaming Resolution',
					featureDesc: `HiMovies has the highest resolution. The majority of its material is in HD, however anticipate CAM quality for recently released films in cinemas and SD quality for older films.`
				},
				{
					featureTitle: 'Streaming experience',
					featureDesc: `The movie quality is comparable to that of premium streaming providers. Do they seem too good to be true? The loading speed is fast, the smooth streaming is on spot, and the commercials are low.`
				},
				{
					featureTitle: 'Easy-to-use interface',
					featureDesc: `The site is really simple to use and navigate. If you're looking for a certain name, just simply type its title into the search box. If not, you can browse for something that strikes your attention by searching by categories or clicking "View Full Site.
					You may rapidly check out the most popular titles, the most recent releases, and even movies and TV shows that have yet to be released on the landing page.`
				},
				{
					featureTitle: 'Compatibility with many devices',
					featureDesc: `HiMovies is mobile-friendly and Chromecast-compatible, so you can watch free movies and TV series on all of your devices.`
				},
				{
					featureTitle: 'Advertisements and pop-ups',
					featureDesc: `There are no advertisements on HiMovies. You'll have to go through one or two adverts before the video starts, but that's unavoidable because ads are their only source of revenue. With the AdBlock plugin, popups can be prevented.`
				},
				{
					featureTitle: 'No need to create an account or register',
					featureDesc: `At HiMovies, there is no need to sign up or register to watch free movies and TV shows. All you need is a good internet connection, a working smart device, and get access to https://HiMovies.to/.`
				},
				{
					featureTitle: 'Customer care',
					featureDesc: `HiMovies, unlike most free streaming services, pays attention to what its viewers have to say. Please feel free to connect with us by Facebook, Twitter, Telegram, email, and other social media platforms. Simply send us an email if you have any problems. If your streaming links are broken or your desired movie is unavailable, submit a request and they will respond within one business day.`
				}
			]
		}
	];
</script>

<section>
	<div class="container">
		<div class="desclaimer">
			{#each disclaimer as paragraph}
				<article>
					<h2>{paragraph.title}</h2>
					<p>{paragraph.description}</p>

					{#if paragraph.feature}
						{#each paragraph.feature as feature}
							<div class="feature-section">
								<h3>{feature.featureTitle}</h3>
								<p>{feature.featureDesc}</p>
							</div>
						{/each}
					{/if}
				</article>
			{/each}
		</div>
		<div class="go-to-movie">
			<a href="/" class="search-btn">
				Go to HiMovies 
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path
						d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"
					/>
				</svg>
			</a>
		</div>
	</div>
</section>

<style>
	.desclaimer article{margin-bottom: 36px;}
	.desclaimer article p:not(:last-child){margin-bottom: 20px;}
	.desclaimer h2, .desclaimer h3 {font-size: 16px;}
	.desclaimer .feature-section {margin-bottom: 20px;text-align: center;}
	.go-to-movie {text-align: center;}
</style>