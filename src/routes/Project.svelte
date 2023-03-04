<script>
	import Github from '$lib/images/Github.svelte';
	import Link from '$lib/images/Link.svelte';
	import Download from '$lib/images/Download.svelte';
</script>

<section id="project" class="flex flex-col w-full min-h-1/2 justify-center m-auto md:py-12 py-3">
	<div class="flex justify-end items-center">
		<hr class="grow" />
		<h3 class="pl-3">Project</h3>
	</div>
	<div class="flex flex-col gap-y-5 md:pt-6 pt-3">
		<div
			class="flex lg:flex-row flex-col rounded-2xl bg-purple-800 md:px-10 md:py-8 px-5 py-4 gap-5"
		>
			<img src="og.png" alt="og" class="lg:w-1/3 rounded-xl" />
			<div class="flex flex-col lg:w-2/3 justify-between gap-y-10">
				<div class="flex flex-col md:gap-y-3 gap-y-1">
					<p class="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg h-max">
						shoushou92410.github.io
					</p>
					<p>My personal website.</p>
				</div>
				<div class="flex md:flex-row flex-col flex-wrap justify-between gap-5">
					<div class="flex flex-wrap items-center gap-3">
						<p class="italic lg:text-base md:text-sm text-xs bg-purple-600 rounded-lg p-1">
							SvelteKit
						</p>
						<p class="italic lg:text-base md:text-sm text-xs bg-purple-600 rounded-lg p-1">
							Tailwind
						</p>
					</div>
					<div class="flex flex-wrap items-center gap-3">
						<a href="https://github.com/ShouShou92410/ShouShou92410.github.io">
							<Github cssClass="w-7 h-7 fill-purple-200" />
						</a>
						<a href="https://shoushou92410.github.io/">
							<Link cssClass="w-7 h-7 fill-purple-200" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div
			class="flex lg:flex-row flex-col rounded-2xl bg-purple-800 md:px-10 md:py-8 px-5 py-4 gap-5"
		>
			<img src="AllChatPreview.png" alt="AllChatPreview" class="lg:w-1/3 rounded-xl" />
			<div class="flex flex-col lg:w-2/3 justify-between gap-y-10">
				<div class="flex flex-col md:gap-y-3 gap-y-1">
					<p class="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg h-max">
						All Chat
					</p>
					<p>
						A simple web chat for everyone to chat anonymously.
						<br />
						<br />
						While working on this, I gained experience with Websocket and Tailwind. Additionally, I was
						able to utilize my understanding of CICD and cloud services that I had learned from my work.
					</p>
				</div>
				<div class="flex md:flex-row flex-col flex-wrap justify-between gap-5">
					<div class="flex flex-wrap items-center gap-3">
						<p class="italic lg:text-base md:text-sm text-xs bg-purple-600 rounded-lg p-1">
							WebSocket
						</p>
						<p class="italic lg:text-base md:text-sm text-xs bg-purple-600 rounded-lg p-1">
							Next.js
						</p>
						<p class="italic lg:text-base md:text-sm text-xs bg-purple-600 rounded-lg p-1">
							Tailwind
						</p>
						<p class="italic lg:text-base md:text-sm text-xs bg-purple-600 rounded-lg p-1">
							Express
						</p>
						<p class="italic lg:text-base md:text-sm text-xs bg-purple-600 rounded-lg p-1">Azure</p>
						<p class="italic lg:text-base md:text-sm text-xs bg-purple-600 rounded-lg p-1">Deta</p>
					</div>
					<div class="flex flex-wrap items-center gap-3">
						<a href="https://github.com/ShouShou92410/AllChat">
							<Github cssClass="w-7 h-7 fill-purple-200" />
						</a>
						<a href="https://allchat.azurewebsites.net/">
							<Link cssClass="w-7 h-7 fill-purple-200" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div
			class="flex lg:flex-row flex-col rounded-2xl bg-purple-800 md:px-10 md:py-8 px-5 py-4 gap-5"
		>
			<img
				src="CharacterReplacerPreview.png"
				alt="CharacterReplacerPreview"
				class="lg:w-1/3 rounded-xl"
			/>
			<div class="flex flex-col lg:w-2/3 justify-between gap-y-10">
				<div class="flex flex-col md:gap-y-3 gap-y-1">
					<p class="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg h-max">
						Character Changer
					</p>
					<p>
						A Java application that replaces characters in a given text file with other similar
						looking characters.
						<br />
						<br />
						This was my first time developing something with a user interface.
					</p>
				</div>
				<div class="flex md:flex-row flex-col flex-wrap justify-between gap-5">
					<div class="flex flex-wrap items-center gap-3">
						<p class="italic lg:text-base md:text-sm text-xs bg-purple-600 rounded-lg p-1">Java</p>
					</div>
					<div class="flex flex-wrap items-center gap-3">
						<a href="https://github.com/ShouShou92410/CharacterChanger">
							<Github cssClass="w-7 h-7 fill-purple-200" />
						</a>
						<a href="https://www.dropbox.com/s/bm84xctg204yl30/Character%20Replacer.jar?dl=0">
							<Download cssClass="w-7 h-7 fill-purple-200" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
