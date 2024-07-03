// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */

const config = getDefaultConfig(__dirname);

["js", "jsx", "json", "ts", "tsx", "cjs", "mjs"].forEach((item) => {
  if (config.resolver.sourceExts?.indexOf(item) === -1) {
    config.resolver.sourceExts.push(item);
  }
});

["glb", "gltf", "png", "jpg"].forEach((item) => {
  if (config.resolver.assetExts?.indexOf(item) === -1) {
    config.resolver.assetExts.push(item);
  }
});

module.exports = config;
