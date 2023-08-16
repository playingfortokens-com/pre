<script lang="ts">
	import '../../app.postcss';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<div class="min-h-full">
	<nav class="navbar bg-base-100 border-b">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl text-white">
				<img
					src="https://cdn.discordapp.com/attachments/1140730228637966528/1141354742673584149/LogoSite.png"
					alt="logo"
					style="height: 2em"
				/></a
			>
		</div>
		<div class="flex-none">
			<div class="dropdown dropdown-end">
				<a href="https://discord.gg/5ZZqHuRgKp" class="btn btn-accent text-white">Discord server</a>
			</div>
		</div>
	</nav>
	<div class="py-10">
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<slot />
			<div class="flex flex-col items-center h-full w-full">
				<div class="w-full max-w-md pt-2">
					<img src="https://i.imgur.com/8XDpisk.png" alt="Fortnite skin holding up a coin" />
				</div>
			</div>
		</div>
	</div>
</div>
