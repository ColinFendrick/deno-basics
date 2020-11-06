import { config } from 'https://deno.land/x/dotenv/mod.ts';

const envPath = Deno.env.get('ENV_PATH');

const { URL } = config({ path: `./config/${envPath}` });

import server from './server.js';

server(URL);
