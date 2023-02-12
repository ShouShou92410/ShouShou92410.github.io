<script lang="ts">
	export let id: string;
</script>

<section {id} class="flex flex-col w-2/3 min-h-screen justify-center m-auto">
	<slot />
</section>
