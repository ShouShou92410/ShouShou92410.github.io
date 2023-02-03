<script>
	import '../app.css';
	import Header from './Header.svelte';
	import './styles.css';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
</script>

<div class="flex flex-col min-h-screen bg-purple-900 text-slate-300">
	<!-- <Header /> -->

	<div class="fixed top-1/2 left-5 right-auto">
		<img src={github} alt="GitHub" class="w-10" />
		<img src={linkedin} alt="GitHub" class="w-10" />

		social links
	</div>
	<nav class="fixed top-1/2 left-auto right-5">side nav</nav>

	<main class="flex flex-grow flex-col p-1">
		<slot />
	</main>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>
