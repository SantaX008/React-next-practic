const ESLintPlugin = require('eslint-webpack-plugin');

const moduleExports = {
  images: {
    domains: [process.env.NEXT_PUBLIC_HOSTNAME],
    minimumCacheTTL: 86400,
    deviceSizes: [640, 750, 1400, 2560]
  },

  strictMode: true,
  trailingSlash: true,

  webpack(config) {
    config.resolve.modules.push(__dirname);
    config.plugins.push(
      new ESLintPlugin({
        extensions: ['js', 'jsx'],
        exclude: ['.next', 'node_modules']
      })
    );
    config.module.rules.push({
      test: /\.svg$/,
      use: ['svg-sprite-loader', 'svgo-loader']
    });
    return config;
  }
};

module.exports = moduleExports;
