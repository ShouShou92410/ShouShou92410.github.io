<script>
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import email from '$lib/images/email.svg';
	import resume from '$lib/images/resume.svg';
</script>

<div class="fixed flex flex-col top-1/3 left-10 gap-3">
	<a href="https://github.com/ShouShou92410" class="flex items-center">
		<img src={github} alt="GitHub" class="w-8 duration-300" />
		<span class="font-semibold text-lg overflow-hidden pl-3 duration-300 w-0">GitHub</span>
	</a>
	<a href="https://www.linkedin.com/in/yuhsiangwen/" class="flex items-center">
		<img src={linkedin} alt="LinkedIn" class="w-8 duration-300" />
		<span class="font-semibold text-lg overflow-hidden pl-3 duration-300 w-0">LinkedIn</span>
	</a>
	<a href="mailto:sw92410@hotmail.com" class="flex items-center">
		<img src={email} alt="email" class="w-8 duration-300" />
		<span class="font-semibold text-lg overflow-hidden pl-3 duration-300 w-0">Email</span>
	</a>
	<a href={resume} class="flex items-center">
		<img src={resume} alt="resume" class="w-8 duration-300" />
		<span class="font-semibold text-lg overflow-hidden pl-3 duration-300 w-0">Resume</span>
	</a>
</div>

<style>
	a:hover > img {
		@apply scale-125;
	}
	a:hover > span {
		@apply delay-75 duration-500 w-full;
	}
</style>
