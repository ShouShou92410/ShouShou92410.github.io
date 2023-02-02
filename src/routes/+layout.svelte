<script>
	import '../app.css';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="flex flex-col min-h-screen bg-gray-900 text-slate-300">
	<!-- <Header /> -->

	<div class="fixed top-1/2 left-5 right-auto">social links</div>
	<nav class="fixed top-1/2 left-auto right-5">side nav</nav>

	<main class="flex flex-grow flex-col p-1">
		<slot />
	</main>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>
