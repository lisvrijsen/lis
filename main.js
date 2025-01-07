// Axios - Promise based HTTP client for the browser and node.js (Read more at https://axios-http.com/docs/intro).
import axios from 'axios';
// Cheerio - The fast, flexible & elegant library for parsing and manipulating HTML and XML (Read more at https://cheerio.js.org/).
import * as cheerio from 'cheerio';
// Apify SDK - toolkit for building Apify Actors (Read more at https://docs.apify.com/sdk/js/).
import { Actor } from 'apify';
// this is ESM project, and as such, it requires you to specify extensions in your relative imports
// read more about this here: https://nodejs.org/docs/latest-v18.x/api/esm.html#mandatory-file-extensions
// import { router } from './routes.js';

// The init() call configures the Actor for its environment. It's recommended to start every Actor with an init().
await Actor.init();

// Structure of input is defined in input_schema.json
const input = await Actor.getInput();
const { url } = input;


// Save headings to Dataset - a table-like storage.
await Actor.pushData({
    status: 'success',
    succeeded: 'true'
});

// Gracefully exit the Actor process. It's recommended to quit all Actors with an exit().
await Actor.exit();