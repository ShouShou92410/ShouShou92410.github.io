<script>
	import Home from './Home.svelte';
	import About from './About.svelte';
	import Education from './Education.svelte';
	import Experience from './Experience.svelte';
	import Project from './Project.svelte';
	import Skill from './Skill.svelte';
</script>

<svelte:head>
	<title>Sean Wen</title>
	<meta name="description" content="Sean Wen's personal website." />
	<meta property="og:title" content="Sean Wen" />
	<meta property="og:site_name" content="" />
	<meta property="og:url" content="shoushou92410.github.io" />
	<meta
		property="og:description"
		content="Sean Wen is a software developer based in Calgary, Alberta, Canada, who specialized in developing web applications using cutting-edge technologies."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://shoushou92410.github.io/og.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Home />
<About />
<Education />
<Experience />
<Project />
<Skill />
