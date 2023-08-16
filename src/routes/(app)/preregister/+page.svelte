<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: ({ providers } = data);
</script>

<div class="flex flex-col items-center h-full w-full">
	<h2 class="mt-2 text-center text-3xl font-bold text-white tracking-tight text-base-content">
		Pre-register for an account now!
	</h2>
	{#each providers.authProviders as provider}
		<div class="w-full max-w-md pt-2">
			<a href="/oauth?provider={provider.name}" class="btn btn-accent text-white w-full"
				>Pre-register with {provider.name}</a
			>
		</div>
	{/each}
</div>
