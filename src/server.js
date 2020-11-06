import { serve } from 'https://deno.land/std/http/server.ts';

import { mapStory } from './stories.js';

export default url => {
	const server = serve({ port: 8000 });
	console.log('Server is listening on port 8000');

	(async () => {
		for await (const req of server) {
			const result = await fetch(url).then(result => result.json());

			const stories = result.hits.map(mapStory);

			req.respond({
				body: JSON.stringify(stories)
			});
		}
	})();
};
