<script lang="ts">
	export let href: string;
	export let src: string;
	export let label: string;
</script>

<a {href} class="hidden md:flex items-center">
	<img {src} alt={label} class="w-8 duration-300" />
	<span class="font-semibold text-lg overflow-hidden pl-3 duration-300 w-0">{label}</span>
</a>

<style lang="postcss">
	a:hover > img {
		@apply scale-125;
	}
	a:hover > span {
		@apply delay-75 duration-500 w-full;
	}
</style>
