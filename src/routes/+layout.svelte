<script>
	import '../app.css';
	import Header from './Header.svelte';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import email from '$lib/images/email.svg';
	import resume from '$lib/images/resume.svg';
</script>

<!-- <Header /> -->

<div class="fixed top-1/2 left-5 right-auto">
	<img src={github} alt="GitHub" class="w-10" />
	<img src={linkedin} alt="LinkedIn" class="w-10" />
	<img src={email} alt="email" class="w-10" />
	<img src={resume} alt="resume" class="w-10" />
</div>
<nav class="flex flex-col fixed top-1/2 left-auto right-5">
	<a href="#about">About</a>
	<a href="#education">Education</a>
	<a href="#experience">Experience</a>
	<a href="#project">Project</a>
	<a href="#skill">Skill</a>
	<a href="#contact">Contact</a>
</nav>

<main class="flex flex-grow flex-col p-1">
	<slot />
</main>

<!-- <footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer> -->
