<script>
	import Github from '$lib/images/Github.svelte';
	import LinkedIn from '$lib/images/LinkedIn.svelte';
	import Email from '$lib/images/Email.svelte';
	import Resume from '$lib/images/Resume.svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
</script>

<div class="fixed hidden md:flex flex-col top-1/3 lg:left-10 left-3 gap-10">
	<SocialIcon href="https://github.com/ShouShou92410" label="GitHub">
		<Github cssClass="w-8 h-8 fill-primary" />
	</SocialIcon>
	<SocialIcon href="https://www.linkedin.com/in/yuhsiangwen" label="LinkedIn">
		<LinkedIn cssClass="w-8 h-8 fill-primary" />
	</SocialIcon>
	<SocialIcon href="mailto:sw92410@hotmail.com" label="Email">
		<Email cssClass="w-8 h-8 fill-primary" />
	</SocialIcon>
	<SocialIcon href="/" label="Resume">
		<Resume cssClass="w-8 h-8 fill-primary" />
	</SocialIcon>
</div>
