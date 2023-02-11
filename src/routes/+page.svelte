<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Home from './Home.svelte';
	import About from './About.svelte';
	import Education from './Education.svelte';
	import Experience from './Experience.svelte';
	import Project from './Project.svelte';
	import Skill from './Skill.svelte';
	import Contact from './Contact.svelte';
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
<Home />
<About />
<Education />
<Experience />
<Project />
<Skill />
<Contact />
