<script>
	import '../app.css';
	import SideNav from './SideNav.svelte';
	import SocialLinks from './SocialLinks.svelte';
</script>

<SocialLinks />
<SideNav />
<main class="flex flex-grow flex-col justify-center mx-auto p-1 md:w-2/3 w-11/12">
	<slot />
</main>
