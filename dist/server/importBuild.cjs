{
  const { setLoaders } = require('../../node_modules/.pnpm/vite-plugin-ssr@0.4.78_vite@4.1.1/node_modules/vite-plugin-ssr/dist/cjs/node/plugin/plugins/importBuild/loadBuild.js');
  setLoaders({
    pageFiles: () => import('./pageFiles.mjs'),
    clientManifest: () => require('../client/manifest.json'),
    pluginManifest: () => require('../client/vite-plugin-ssr.json'),
  });
}
