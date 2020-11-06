import { serve } from 'https://deno.land/std/http/server.ts';
import format from 'https://deno.land/x/date_fns/format/index.js';

export default url => {
	const server = serve({ port: 8000 });
	console.log('Server is listening on port 8000');

	(async () => {
		for await (const req of server) {
			const result = await fetch(url).then((result) => result.json());

			const stories = result.hits.map((hit) => ({
				title: hit.title,
				url: hit.url,
				createdAt: format(
					new Date(hit.created_at_i * 1000),
					'yyyy-MM-dd'
				)
			}));

			req.respond({
				body: JSON.stringify(stories)
			});
		}
	})();
};
