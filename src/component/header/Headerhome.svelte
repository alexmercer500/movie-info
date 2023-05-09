<script>
	import logo from '../../assests/logo.png';
	let menuActive = false;
</script>

<header class="">
	<div class="header container">
		<div class="logo">
			<a href="/"><img src={logo} alt="App Logo" /></a>
		</div>
		<div class="navigation">
			<div class:active-menu={menuActive} class="nav-item">
				<nav>
					<a class="nav-link" href="/home/1">Home</a>
					<a class="nav-link" href="/movies/1">Movies</a>
					<a class="nav-link" href="/tvseries/1">TV Series</a>
					<a class="nav-link" href="/top-imdb/1">Top IMDB</a>
				</nav>
			</div>
			<div class="menu-btn">
				<button
					on:click={() => {
						menuActive = !menuActive;
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
		</div>
	</div>
</header>

<style>
	header {
		background-color: #000000;
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
		position: absolute;
		background-color: black;
		width: 220px;
		right: 0;
		top: 55px;
		border-radius: 10px;
		transition: 100ms linear;
		transform-origin: top;
		display: none;
	}
	.header .nav-item.active-menu {
		display: block;
	}
	.header .nav-item nav {
		display: flex;
		gap: 16px;
		flex-direction: column;
		align-items: center;
		padding: 20px 0;
	}
	.header .nav-item a {
		font-size: 14px;
		text-decoration: none;
		color: #ffffff;
		font-weight: 500;
	}
	.header .nav-item a:hover {
		text-decoration: underline;
	}
	.navigation {
		display: flex;
		align-items: center;
		position: relative;
	}

	.navigation .menu-btn button svg {
		height: 10px;
		width: 12px;
		fill: #ffffff;
	}
	.navigation .menu-btn button {
		display: flex;
		gap: 8px;
		align-items: center;
		font-size: 12px;
		padding: 8px 12px;
		background-color: rgba(255, 255, 255, 0.1);
		color: #ffffff;
		border-radius: 3px;
	}
	/* Footer area styling */
	@media (min-width: 992px) {
		.navigation .menu-btn {
			display: block;
		}
		.header .nav-item {
			position: static;
			width: 100%;
			display: block;
		}
		.header .nav-item nav {
			flex-direction: row;
			display: flex;
			gap: 48px;
		}
		.navigation .menu-btn {
			display: none;
		}
	}
</style>
