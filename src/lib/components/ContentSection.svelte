<script lang="ts">
	export let id: string;
</script>

<section {id} class="flex flex-col min-h-screen justify-center items-center">
	<slot />
</section>
