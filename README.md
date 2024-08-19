# Protomaps on Cloudflare

This is a sample project to demonstrate how to host Protomaps on Cloudflare.

## How it works 

This project is made up of 3 parts:

1. A Cloudflare Worker that serves the PMTiles files using the x/y/z format. 
2. A Cloudflare R2 bucket to store the PMTiles
3. A React application that fetches the map information in x/y/z format served by the Cloudflare Worker and displays them.

## A brief explainer

Serving maps is a complex problem, and traditionally requires hosting large amounts of files and serving them which comes with its set of challenges.

PMTiles is a new method of storing and serving files, which requires only a single-file. Then, a server can use Http Range Requests to fetch only the relevant tile data that is requested by the map. 

It is possible to use a static PMTiles file as the source for the map and have them served from a server that supports Http Range Requests (such as an Express.js server). However, most static site hosts (such as Cloudflare Pages) have file size limitations and do not support Http Range Requests. (See more on the [deployment options in the Protomaps docs](https://docs.protomaps.com/deploy/#deployment-comparison-chart)).

Therefore, to host on Cloudflare, we'll use the [Cloudflare Workers project that is provided by the Protomaps organization](https://github.com/protomaps/PMTiles/tree/main/serverless/cloudflare). This project is a Cloudflare Worker that serves the PMTiles files using the x/y/z format. Doing so is also performant and cost efficient (see the explanation in the [Protomaps docs](https://docs.protomaps.com/deploy/)).

## How the Cloudflare Worker works:

The Cloudflare Worker code in this repository is copied from the original [PMTiles repository](https://github.com/protomaps/PMTiles/tree/main/serverless/cloudflare). It parses the request in x/y/z format, fetches the required information from R2, caches the response, and returns it to the client.

## How the React application works:

The React application uses [React Map GL](https://visgl.github.io/react-map-gl/) and [MapLibre GL JS](https://maplibre.org/maplibre-gl-js-docs/api/) to display the PMTiles files. It makes requests in x/y/z format to the Cloudflare Worker.

### Curious about an exploration of hosting Protomaps statically?

Check out this [exploratory project](https://github.com/thomasgauvin/static-protomaps-on-cloudflare).
