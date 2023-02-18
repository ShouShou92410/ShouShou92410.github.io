<script>
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import email from '$lib/images/email.svg';
	import resume from '$lib/images/resume.svg';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
</script>

<div class="fixed hidden md:flex flex-col top-1/3 lg:left-10 left-3 gap-10">
	<SocialIcon href="https://github.com/ShouShou92410" src={github} label="GitHub" />
	<SocialIcon href="https://www.linkedin.com/in/yuhsiangwen" src={linkedin} label="LinkedIn" />
	<SocialIcon href="mailto:sw92410@hotmail.com" src={email} label="Email" />
	<SocialIcon href={resume} src={resume} label="Resume" />
</div>
