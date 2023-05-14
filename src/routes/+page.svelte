<script>
	import { searchValue } from '../store/store';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import logo from '../assests/logo.png';
	// import HomeDisclaimer from '../component/HomeDisclaimer.svelte';

	let searchData;
	searchValue.subscribe((value) => {
		searchData = value;
	});

	function handleUpdate(e) {
		const formData = new FormData(e.target);
		const data = formData.get('searchShow');
		searchValue.update((value) => (value = data));
		goto('/home');
	}
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>
<section transition:fade>
	<div class="container">
		<div class="home-page">
			<div class="main-logo"><img src={logo} alt="Logo" /></div>
			<div class="search-box">
				<form on:submit|preventDefault={handleUpdate}>
					<input type="text" name="searchShow" placeholder="Enter keywords..." />
					<button type="submit">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path
								d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
							/>
						</svg>
					</button>
				</form>
			</div>
			<div class="social-links">
				<button type="button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path
							d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
						/>
					</svg>
					Twitter
				</button>
				<button type="button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
						<path
							d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
						/>
					</svg>
					Facebook
				</button>
				<button type="button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path
							d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
						/>
					</svg>
					WhatsApp
				</button>
				<button type="button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
						<path
							d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
						/>
					</svg>
					Pinterest
				</button>
				<button type="button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
						<path
							d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
						/>
					</svg>
					Telegram
				</button>
				<button type="button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path
							d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
						/>
					</svg>
					Email
				</button>
			</div>
			<a href="/home/1" class="search-btn">
				View full site
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path
						d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"
					/>
				</svg>
			</a>
		</div>
	</div>
	<!-- <HomeDisclaimer /> -->
</section>

<style>
	.home-page {
		text-align: center;
		padding: 60px 0;
	}
	.home-page .main-logo {
		max-width: 300px;
		margin-inline: auto;
		width: 100%;
		height: auto;
		margin-bottom: 1.25rem;
	}
	.home-page .main-logo img {
		max-width: 100%;
	}
	.search-box form {
		display: flex;
		height: 50px;
		border-radius: 5px;
	}
	.search-box {
		margin-bottom: 40px;
	}
	.search-box input {
		width: 100%;
		padding: 0 20px;
		border: none;
		font-size: 15px;
		font-family: 'Poppins', sans-serif;
	}
	.search-box button {
		padding-inline: 15px;
		border: none;
		background-color: #ffe400;
		cursor: pointer;
	}
	.search-box button svg {
		width: 20px;
		height: 100%;
	}
	.home-page .social-links {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
		margin-bottom: 20px;
	}
	.home-page .social-links button {
		color: #ffffff;
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px;
		font-size: 10.5px;
		transition: transform 150ms linear;
	}
	.home-page .social-links button svg {
		fill: #ffffff;
		height: 20px;
		width: 20px;
		display: inline-block;
	}
	.home-page .social-links button:nth-child(1) {
		background-color: rgb(29, 161, 242);
	}
	.home-page .social-links button:nth-child(2) {
		background-color: rgb(59, 89, 152);
	}
	.home-page .social-links button:nth-child(3) {
		background-color: rgb(77, 194, 71);
	}
	.home-page .social-links button:nth-child(4) {
		background-color: rgb(203, 32, 39);
	}
	.home-page .social-links button:nth-child(5) {
		background-color: rgb(0, 136, 204);
	}
	.home-page .social-links button:nth-child(6) {
		background-color: rgb(132, 132, 132);
	}
	.home-page .social-links button:nth-child(7) {
		background-color: rgb(255, 101, 80);
		display: flex;
	}

	.home-page .social-links button:hover {
		transform: translateY(-5px);
	}
	:global(.search-btn) {
		display: inline-flex;
		align-items: center;
		gap: 20px;
		font-size: 24px;
		padding: 15px 30px;
		background-color: #ffe400;
		color: #000000;
		border-radius: 50px;
		transition: transform 100ms ease-in;
	}
	:global(.search-btn svg) {
		width: 20px;
		height: 20px;
	}
	:global(.search-btn:hover) {
		transform: scale(1.1);
		box-shadow: 0 0 20px rgba(255, 228, 0, 0.6) !important;
	}

	@media (min-width: 992px) {
		.search-box button {
			padding-inline: 30px;
		}
	}
</style>
