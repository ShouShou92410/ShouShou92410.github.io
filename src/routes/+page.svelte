<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Sean Wen</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- <section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section> -->
<section id="greet">
	<p>Hello, my name is</p>
	<h1>Sean Wen</h1>
	<p>
		I'm a software developer based in Calgary, Alberta, Canada. <br />
		I specialized in developing web applications using cutting-edge technologies. <br />
		Currently working as an Associate Software Developer in
		<a href="https://www.detechtion.com">Detechtion Technologies</a>
	</p>
</section>
<section id="about">About</section>
<section id="education">Education</section>
<section id="experience">Experience</section>
<section id="project">Project</section>
<section id="skill">Skill</section>
<section id="contact">Contact</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
