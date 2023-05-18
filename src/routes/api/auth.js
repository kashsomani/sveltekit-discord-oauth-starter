const DISCORD_ENDPOINT = `https://discord.com/api/oauth2/authorize?client_id=1108203813921370112&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fcallback&response_type=code&scope=identify`;

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
	return {
		headers: { Location: DISCORD_ENDPOINT },
		status: 302
	};
}
