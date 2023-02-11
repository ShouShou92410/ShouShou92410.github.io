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

<div class="fixed flex flex-col top-1/3 left-10 gap-3">
	<a href="https://github.com/ShouShou92410" class="flex items-center animated-icon">
		<img src={github} alt="GitHub" class="w-8 duration-300" />
		<span class="font-semibold text-lg overflow-hidden pl-3 duration-300 w-0">GitHub</span>
	</a>
	<a href="https://www.linkedin.com/in/yuhsiangwen/" class="flex items-center animated-icon">
		<img src={linkedin} alt="LinkedIn" class="w-8 duration-300" />
		<span class="font-semibold text-lg overflow-hidden pl-3 duration-300 w-0">LinkedIn</span>
	</a>
	<a href="mailto:sw92410@hotmail.com" class="flex items-center animated-icon">
		<img src={email} alt="email" class="w-8 duration-300" />
		<span class="font-semibold text-lg overflow-hidden pl-3 duration-300 w-0">Email</span>
	</a>
	<a href={resume} class="flex items-center animated-icon">
		<img src={resume} alt="resume" class="w-8 duration-300" />
		<span class="font-semibold text-lg overflow-hidden pl-3 duration-300 w-0">Resume</span>
	</a>
</div>
<nav class="flex flex-col items-end fixed top-1/3 right-10">
	<a href="/">Home</a>
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
<style>
	/* TODO: Move this to a components */
	.animated-icon:hover > img {
		@apply scale-125;
	}
	.animated-icon:hover > span {
		@apply delay-75 duration-500 w-full;
	}
</style>
