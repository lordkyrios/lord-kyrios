// next.config.js
const path = require("path");

module.exports = {
  typescript: {
    ignoreBuildErrors: true, // ✅ disables crashing on TS type errors
  },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};
