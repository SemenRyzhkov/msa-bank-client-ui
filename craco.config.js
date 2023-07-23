const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const allDeps = require('./package.json').dependencies;
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.path.json',
      },
    },
    {
      plugin: ModuleFederationPlugin,
      options: {
        shared: {
          ...allDeps,
          'styled-components': {
            singleton: true,
          },
        },
      },
    },
  ],
};
