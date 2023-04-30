<script>
	import { page } from '$app/stores';
	const genres = [
		'Action',
		'Adventure',
		'Animation',
		'Comedy',
		'Crime',
		'Documentary',
		'Drama',
		'Family',
		'Fantasy',
		'History',
		'Horror',
		'Music',
		'Mystery',
		'Romance',
		'Science Fiction',
		'TV Movie',
		'Thriller',
		'War',
		'Western'
	];

	const countryList = [
		'Argentina',
		'Australia',
		'Austria',
		'Brazil',
		'Canada',
		'China',
		'Denmark',
		'Egypt',
		'France',
		'Germany',
		'Hong Kong',
		'India',
		'Iran',
		'Israel',
		'Italy',
		'Japan',
		'Mexico',
		'Netherlands',
		'Nigeria',
		'Norway',
		'Philippines',
		'Poland',
		'Russia',
		'Saudi Arabia',
		'South Africa',
		'South Korea',
		'Spain',
		'Sweden',
		'Switzerland',
		'Taiwan',
		'Thailand',
		'Turkey',
		'Ukraine',
		'United Arab Emirates',
		'United Kingdom',
		'United States'
	];
	import logo from '../../assests/logo.png';
	let menuActive = false;
	let currentPage;
	$: currentPage = $page.route.id;

	let activeSubLink = '';
</script>

<header class="">
	<div class="header container">
		<div class="menu-btn">
			<button
				on:click={() => {
					menuActive = true;
				}}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path
						d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
					/>
				</svg>
				Menu
			</button>
		</div>
		<div class="logo">
			<a href="/"><img src={logo} alt="App Logo" /></a>
		</div>
		<div>
			<nav class:active-menu={menuActive} class="nav-item">
				<div class="menu-close">
					<button on:click={() => (menuActive = false)}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
							<path
								d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
							/>
						</svg>
						Close Menu
					</button>
				</div>
				<ul>
					<li class="nav-link">
						<a href="/home">Home</a>
					</li>
					<li class="nav-link">
						<span>
							Genre
							<button
								on:click={() =>
									activeSubLink === 'sub-menu-one'
										? (activeSubLink = '')
										: (activeSubLink = 'sub-menu-one')}>+</button
							>
						</span>
						<div
							class={`${
								activeSubLink === 'sub-menu-one' ? 'sub-link__active' : ''
							} nav-link__sublink`}
						>
							<ul>
								{#each genres as genre}
									<li class="nav-link__genre">
										<a href="/genre/{genre}">
											{genre}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</li>
					<li class="nav-link">
						<span>
							<a href="/country">Country</a>
							<button
								on:click={() =>
									activeSubLink === 'sub-menu-two'
										? (activeSubLink = '')
										: (activeSubLink = 'sub-menu-two')}>+</button
							>
						</span>
						<div
							class={`${
								activeSubLink === 'sub-menu-two' ? 'sub-link__active' : ''
							} nav-link__sublink`}
						>
							<ul>
								{#each countryList as country}
									<li class="nav-link__genre">
										<a href="/country/{country}">
											{country}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</li>
					<li class="nav-link">
						<a href="/movies">Movies</a>
					</li>
					<li class="nav-link">
						<a href="/tvseries">TV Series</a>
					</li>
					<li class="nav-link">
						<a href="/top-imdb">Top IMDB</a>
					</li>
					<li class="nav-link">
						<a href="/android-app">Android App</a>
					</li>
				</ul>
			</nav>
		</div>
		{#if currentPage != '/home'}
			<div class="search-query">
				<form>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path
							d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
						/>
					</svg>
					<input type="text" name="search" />
				</form>
			</div>
		{/if}
		<div class="login-btn">
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path
						d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
					/>
				</svg>
				Login
			</button>
		</div>
	</div>
</header>

<style>
	header {
		margin-bottom: 25px;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: 10px;
	}
	.header .logo img {
		width: 160px;
		height: auto;
	}
	.header .nav-item {
		position: fixed;
		inset: 0 calc(100% - 300px) 0 0;
		background-color: #111;
		padding: 20px;
		box-shadow: none;
		overflow-y: auto;
		transform: translateX(-100vw);
		transition: transform 200ms linear;
	}
	.header .nav-item.active-menu {
		transform: translateX(0);
		box-shadow: 0 0 0 100vw rgba(28, 28, 28, 0.6);
	}
	.nav-item ul .nav-link__sublink > ul {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		padding: 10px 0;
	}
	.nav-item ul .nav-link__sublink ul li a {
		padding: 10px 0;
		display: block;
	}
	.nav-item ul .nav-link__sublink {
		height: 0;
		overflow-y: hidden;
		transition: 100ms ease-in;
	}
	.nav-item ul .nav-link__sublink.sub-link__active {
		height: auto;
		overflow-y: visible;
	}
	.nav-link span {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.nav-link span button {
		color: #ffffff;
		background-color: #333;
		font-weight: 600;
		height: 20px;
		width: 20px;
	}
	.header .nav-item > ul > li {
		padding-block: 15px;
		border-bottom: 1px solid #2e2e2e;
	}
	.header .nav-item a {
		font-size: 14px;
		text-decoration: none;
		color: #ffffff;
		font-weight: 500;
	}
	.header .nav-item a:hover {
		color: #ffe400;
	}
	.menu-btn button,
	.login-btn button,
	.menu-close button {
		display: flex;
		gap: 8px;
		align-items: center;
		font-size: 12px;
		padding: 8px 12px;
		background-color: rgba(255, 255, 255, 0.1);
		color: #ffffff;
		border-radius: 3px;
	}
	.menu-close button {
		color: #000000;
		background-color: #ffffff;
		border-radius: 20px;
		margin-bottom: 10px;
	}
	.login-btn button {
		font-size: 14px;
	}
	.menu-btn button svg,
	.menu-close button svg {
		height: 10px;
		width: 12px;
		fill: #ffffff;
	}
	.menu-close button svg {
		fill: #000000;
	}
	.login-btn button svg {
		height: 13px;
		width: 14px;
		fill: #ffffff;
	}
	.header .search-query form {
		display: flex;
		gap: 12px;
		align-items: center;
		max-width: 200px;
		padding: 12px;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 30px;
	}
	.header .search-query form input {
		background-color: transparent;
		border: none;
		color: #ffffff;
		width: 100%;
	}
	.header .search-query svg {
		height: 15px;
		width: 15px;
		fill: #ffffff;
	}
	/* Footer area styling */
	@media (min-width: 1200px) {
		.menu-btn {
			display: block;
		}
		.header .nav-item {
			position: static;
			width: fit-content;
			display: block;
			background-color: transparent;
			box-shadow: none;
			transition: none;
			transform: translateX(0);
			box-shadow: none;
			overflow: visible;
		}
		.header .nav-item.active-menu {
			box-shadow: none;
		}
		.header .nav-item > ul {
			display: flex;
			gap: 28px;
			width: 100%;
		}
		.menu-btn {
			display: none;
		}
		.nav-item ul .nav-link {
			position: relative;
		}
		.header .nav-item > ul > li {
			padding-block: 20px;
			border: none;
		}
		.nav-item ul .nav-link__sublink {
			height: auto;
			overflow-y: unset;
		}
		.nav-item ul .nav-link__sublink {
			display: none;
			position: absolute;
			top: 60px;
			left: 0;
			width: 700px;
			background: #333;
			box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
		}
		.nav-link span {
			display: unset;
		}
		.nav-link span button,
		.menu-close button {
			display: none;
		}
		.nav-item ul .nav-link:hover .nav-link__sublink {
			display: block;
		}
		.nav-item ul .nav-link__sublink > ul {
			grid-template-columns: repeat(4, 1fr);
			padding: 10px;
		}
		.nav-item ul .nav-link__sublink ul li a {
			padding: 5px 10px;
		}
		.nav-item ul .nav-link__sublink ul li a:hover {
			background: #ffe400;
			color: #111 !important;
			text-decoration: none;
		}
	}
</style>
