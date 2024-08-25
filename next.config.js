// const path = require("path");

// const CopyPlugin = require("copy-webpack-plugin");

/** @type {import('next').NextConfig} */

// import createNextIntlPlugin from "next-intl/plugin";

const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin("./src/localization/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withNextIntl(nextConfig);
