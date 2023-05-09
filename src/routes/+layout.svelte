<script>
	import '../app.css';
	import Footer from '../component/Footer.svelte';
	import Header from '../component/header/Header.svelte';
	import { page } from '$app/stores';
	import Headerhome from '../component/header/Headerhome.svelte';
	let currentPage;
	$: currentPage = $page.route.id;
</script>

<svelte:head>
	<title>Movie Info || RM</title>
</svelte:head>
{#if currentPage === '/'}
	<Headerhome />
{:else}
	<Header />
{/if}
<main>
	<slot />
</main>
<Footer />
