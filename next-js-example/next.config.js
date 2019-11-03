const path = require('path');

module.exports = {
  webpack(config, options) {
    config.resolve.alias.api = path.join(__dirname, 'src/api');
    config.resolve.alias.app = path.join(__dirname, 'src/app');
    config.resolve.alias.context = path.join(__dirname, 'src/context');
    config.resolve.alias.core = path.join(__dirname, 'src/core');
    config.resolve.alias.hooks = path.join(__dirname, 'src/hooks');
    config.resolve.alias.theme = path.join(__dirname, 'src/theme');
    config.resolve.alias.ui = path.join(__dirname, 'src/ui');
    config.resolve.alias.utils = path.join(__dirname, 'src/utils');
    config.resolve.alias.auth = path.join(__dirname, 'src/auth');
    config.resolve.alias.hocs = path.join(__dirname, 'src/hocs');

    return config;
  },
};
