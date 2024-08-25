// const path = require("path");

// const CopyPlugin = require("copy-webpack-plugin");

/** @type {import('next').NextConfig} */

// import createNextIntlPlugin from "next-intl/plugin";

const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin("./src/localization/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["http://tile.stamen.com"],
  },
};

module.exports = withNextIntl(nextConfig);
