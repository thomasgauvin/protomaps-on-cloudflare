The original code for this Cloudflare Workers project is here: [https://github.com/protomaps/PMTiles/tree/main/serverless/cloudflare](https://github.com/protomaps/PMTiles/tree/main/serverless/cloudflare).

# Protomaps on Cloudflare

See installation and configuration instructions at [Protomaps Docs: Deploy on Cloudflare](https://protomaps.com/docs/cdn/cloudflare)

## Development

### Web Console (basic)

Generate the Workers script using `npm run build` and copy `dist/index.js` to the editor.

### Wrangler (advanced)

The `preview_bucket_name` value in `wrangler.toml` should be changed to your bucket used for development.

Run `npm run start` to serve your Worker at http://localhost:8787. The cache will not be active in development.
