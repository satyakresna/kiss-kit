# KISS Kit

Keep It Simple Stupid starter kit based on Single Page Application.

## Features

1. Track URL with Google Analytics in defer mode. :)
2. Explicit redirects to fix Single Page Application issue in **netlify.toml**.
3. Bundle ES module using Rollup, locate and bundle third party dependencies in node_modules with Rollup plugin node-resolve and minify with Rollup plugin terser. ;)

> **Note:** To set up track URL via Google Analytics, you should set variable with name `GA_TRACKER_ID` in your site Netlify dashboard. Go to **Settings > Build & deploy > Environment > Environment variables**. Check also `inject:analytics` in [**analytics.js**](/analytics.js) to see what's going on.

## How to use this kit

> **Note:** This starter kit has lite version. Lite version is a version without Rollup and Single Page Application. If you want to use this version then run `degit satyakresna/kiss-kit#lite your-project-name`.

1. Install [Degit](https://github.com/Rich-Harris/degit).
2. Run `degit satyakresna/kiss-kit your-project-name`.
3. Install dependencies with `npm install`.
4. Run with `npm run dev`.

## Notes

Component is a user interface and how user interface should act. Page is build by one or more components. Then, you should put **components** inside page folder. Example, you make a users page then you make a folder with name **users** inside **js** directory. Then, create **index.js** inside **users** folder. After that, create **components** folder inside **users** folder.

## Tools to build this kit

- [Light-server](https://github.com/txchen/light-server)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostCSS - CLI](https://github.com/postcss/postcss-cli)
- [Page.js](https://github.com/visionmedia/page.js)
- [Rollup](https://rollupjs.org/guide/en/)
- [Rollup plugin node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve)
- [Rollup plugin terser](https://github.com/TrySound/rollup-plugin-terser)
