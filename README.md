# KISS Kit

Keep It Simple Stupid starter kit based on Single Page Application.

## Features

1. Navigation drawer menu.
2. Track URL with Google Analytics in defer mode. :)
3. Explicit redirects to fix Single Page Application issue in **netlify.toml**.
4. Bundle ES module using Rollup, locate and bundle third party dependencies in node_modules with Rollup plugin node-resolve and minify with Rollup plugin terser. ;)

> **Note:** To set up track URL via Google Analytics, you should set variable with name `GA_TRACKER_ID` in your site Netlify dashboard. Go to **Settings > Build & deploy > Environment > Environment variables**. Check also `inject:analytics` gulp task in **gulpfile.js** to see what's going on.

## How to use this kit

1. Install [Degit](https://github.com/Rich-Harris/degit).
2. Run `degit satyakresna/kiss-kit your-project-name`.
3. Install dependencies with `npm install`.

## Tools to build this kit

- [Gulp](https://gulpjs.com/)
- [Tailwind](https://tailwindcss.com/)
- [Page.js](https://github.com/visionmedia/page.js)
- [Rollup](https://rollupjs.org/guide/en/)
- [Rollup plugin node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve)
- [Rollup plugin terser](https://github.com/TrySound/rollup-plugin-terser)
