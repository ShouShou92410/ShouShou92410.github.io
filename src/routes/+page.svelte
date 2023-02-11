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
<section>
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
<section id="education">
	<p>University of Calgary</p>
	<p>B.S.in Computer Science</p>
	<p>September 2015 - May 2021</p>
	<p>Completed a 14 months long internship program.</p>
</section>
<section id="experience">
	<p>Detechtion Technologies — Associate Software Developer</p>
	<p>September 2021 - Present</p>
	<p>Detechtion Technologies — Software Intern (Part time)</p>
	<p>September 2020 - September 2021</p>
	<p>Detechtion Technologies — Software Intern</p>
	<p>June 2019 - August 2020</p>
</section>
<section id="project">
	<p>ShouShou92410.github.io</p>
	<p>All Chat</p>
	<p>ImHere</p>
	<p>Character Changer</p>
</section>
<section id="skill">
	<p>JLPT N4</p>
</section>
<section id="contact">
	<p>Email</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		min-height: 100vh;
	}
</style>
