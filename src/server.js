import { serve } from 'https://deno.land/std/http/server.ts';

export default () => {
	const server = serve({
		port: 8000
	});
	console.log('Server is listening on port 8000');

	(async () => {
		for await (const req of server) {
			req.respond({ body: 'Hello Deno' });
		}
	})();
};
