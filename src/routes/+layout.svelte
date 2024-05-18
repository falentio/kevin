<script>
	import "@fontsource-variable/nunito";
	import "@fontsource/iosevka/700.css";
	import "../app.css";
</script>

<div class="flex min-h-svh w-screen flex-col bg-neutral-900 font-sans text-neutral-100">
	<div class="flex flex-col gap-4 p-4">
		<slot />
	</div>
	<span class="flex-auto" />
	<div class="sticky bottom-0 p-2 px-4">
		<nav class="h-12 rounded border bg-neutral-950 px-4 py-2">
			<a href="/" class="flex gap-2 text-2xl font-bold"> falentio </a>
		</nav>
	</div>
</div>
