<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { user } = data;
</script>

<div class="flex flex-col items-center h-full w-full">
	<h2 class="mt-2 text-center text-3xl font-bold text-white tracking-tight text-base-content">
		Thank you for pre-registering!
	</h2>
	<div class="w-full max-w-md pt-2">
		You will have immediate access to PlayingForTokens when it releases! The Discord account you
		have pre-registered with is:
	</div>
	<div class="w-full max-w-md pt-2 text-center">@{user.username}</div>
	<div class="w-full max-w-md pt-2">
		<form action="/logout" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
			<button type="submit" class="btn btn-accent text-white w-full"
				>Want to pre-register with another Discord account?</button
			>
		</form>
	</div>
</div>
