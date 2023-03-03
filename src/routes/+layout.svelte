<script>
	import '../app.css';
	import SideNav from './SideNav.svelte';
	import SocialLinks from './SocialLinks.svelte';
	import Github from '$lib/images/Github.svelte';
	import LinkedIn from '$lib/images/LinkedIn.svelte';
	import Email from '$lib/images/Email.svelte';
	import Resume from '$lib/images/Resume.svelte';
</script>

<SocialLinks />
<SideNav />
<main class="flex flex-grow flex-col justify-center mx-auto p-1 md:w-2/3 w-11/12">
	<slot />
</main>

<footer class="flex md:hidden flex-col w-full min-h-1/2 items-center m-auto pt-6 pb-3">
	<div class="flex gap-x-5">
		<a href="https://github.com/ShouShou92410/ShouShou92410.github.io">
			<Github cssClass="w-6 h-6 fill-primary" />
		</a>
		<a href="https://www.linkedin.com/in/yuhsiangwen">
			<LinkedIn cssClass="w-6 h-6 fill-primary" />
		</a>
		<a href="mailto:sw92410@hotmail.com">
			<Email cssClass="w-6 h-6 fill-primary" />
		</a>
		<a href="/">
			<Resume cssClass="w-6 h-6 fill-primary" />
		</a>
	</div>
</footer>
