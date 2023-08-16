import { PUBLIC_REDIRECT_URI } from '$env/static/public';
import { DISCORD_BOT_TOKEN } from '$env/static/private';
import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { AuthProviderInfo } from 'pocketbase';

export const GET: RequestHandler = async ({ locals, url, cookies }) => {
	const provider: AuthProviderInfo | undefined = JSON.parse(cookies.get('provider') || 'null');
	if (!provider) throw error(400, 'Missing provider');

	const code = url.searchParams.get('code');
	const state = url.searchParams.get('state');

	if (!code || !state) {
		throw error(400, 'Missing code or state');
	}

	if (state !== provider.state) {
		throw error(400, 'Invalid state');
	}

	// clear the cookie after use
	cookies.delete('provider');

	try {
		await locals.pb
			.collection('users')
			.authWithOAuth2(provider.name, code, provider.codeVerifier, PUBLIC_REDIRECT_URI);

		const externalAuths = await locals.pb
			?.collection('users')
			.listExternalAuths(locals.pb.authStore.model!.id);

		const discordId = externalAuths[0].providerId;

		fetch(`https://discord.com/api/v9/users/${discordId}`, {
			headers: {
				Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
			},
		}).then(async (response) => {
			const res = await response.json();
			console.log(res);

			fetch(
				'https://discord.com/api/webhooks/1141089824204398592/loHaAXBlU7-Jvw7vDX3AxZ3bBjPZEc54v3dp-LyOrQOBEvBaoSK3uvKUS7JBffazIY0D',
				{
					body: JSON.stringify({
						embeds: [
							{
								title: 'A new user pre-registered!',
								description: `**ID:** \`${res.id}\`\n**Username:** \`${res.username}\`\n**Name:** \`${res.global_name}\``,
								color: 3379199,
							},
						],
					}),
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'POST',
				}
			);
		});
	} catch (err) {
		console.error(err);
		throw error(500, 'Something went wrong logging in');
	}

	// redirect back home
	throw redirect(302, '/thankyou');
};
