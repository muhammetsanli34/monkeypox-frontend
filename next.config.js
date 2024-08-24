const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
    localeDetection: true,
  },
  images: {
    domains: ["http://tile.stamen.com"],
  },
};

module.exports = nextConfig;
