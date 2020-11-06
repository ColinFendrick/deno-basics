import { config } from 'https://deno.land/x/dotenv/mod.ts';

const { HACKERNEWS_URL } = config({ path: './config/dev.env' });

import server from './server.js';

server(HACKERNEWS_URL);
