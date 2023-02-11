<script>
	import '../app.css';
	import SideNav from './SideNav.svelte';
	import SocialLinks from './SocialLinks.svelte';
</script>

<SocialLinks />
<SideNav />
<main class="flex flex-grow flex-col p-1">
	<slot />
</main>
