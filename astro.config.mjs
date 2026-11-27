import { defineConfig } from 'astro/config';

// BASE_PATH: set to "/<repo-name>" while the site lives at <user>.github.io/<repo-name>.
// Leave it empty once a custom domain is connected.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  base: process.env.BASE_PATH || '/',
});
