import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigsSerialized = [
  {
    pageId: "/src/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/src/pages/index/" },
    loadConfigValuesAll: () => import("./entries/src_pages_index.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  }
];
const pageConfigGlobalSerialized = {
  configValuesImported: []
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isGeneratedFile,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "\u0000virtual:vike:pageConfigValuesAll:client:/src/pages/index.css": {
    "file": "assets/static/index.6b1f4f0f.css",
    "src": "\u0000virtual:vike:pageConfigValuesAll:client:/src/pages/index.css"
  },
  ".yarn/__virtual__/vike-virtual-d1e0d8d55e/4/.yarn/berry/cache/vike-npm-0.4.165-697bb8b9f1-10c0.zip/node_modules/vike/dist/esm/client/server-routing-runtime/entry.js": {
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/src/pages/index"
    ],
    "file": "assets/entries/entry-server-routing.af506b33.js",
    "imports": [
      "_chunk-cf010ec4.js"
    ],
    "isEntry": true,
    "src": ".yarn/__virtual__/vike-virtual-d1e0d8d55e/4/.yarn/berry/cache/vike-npm-0.4.165-697bb8b9f1-10c0.zip/node_modules/vike/dist/esm/client/server-routing-runtime/entry.js"
  },
  "_chunk-cf010ec4.js": {
    "file": "assets/chunks/chunk-cf010ec4.js"
  },
  "compiled-lang/en.json": {
    "file": "assets/chunks/chunk-b886d270.js",
    "isDynamicEntry": true,
    "src": "compiled-lang/en.json"
  },
  "compiled-lang/pl.json": {
    "file": "assets/chunks/chunk-84dc927d.js",
    "isDynamicEntry": true,
    "src": "compiled-lang/pl.json"
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/index": {
    "css": [
      "assets/static/index.6b1f4f0f.css"
    ],
    "dynamicImports": [
      "compiled-lang/en.json",
      "compiled-lang/pl.json"
    ],
    "file": "assets/entries/src_pages_index.e7133cae.js",
    "imports": [
      "_chunk-cf010ec4.js"
    ],
    "isDynamicEntry": true,
    "isEntry": true,
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/index"
  }
};
  const pluginManifest = {
    "version": "0.4.165",
    "usesClientRouter": false,
    "baseServer": "/",
    "baseAssets": "/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
