/** @format */

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["en", "de", "cs"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
