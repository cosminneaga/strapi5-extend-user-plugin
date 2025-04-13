'use strict';
// URL: https://github.com/strapi/strapi/tree/develop/packages/plugins/users-permissions/server
// package.json: https://github.com/strapi/strapi/blob/develop/packages/plugins/users-permissions/package.json

module.exports = (plugin) => {
    plugin.register = require('./server/register');
    // plugin.bootstrap = require('./server/bootstrap');
    plugin.config = require('./server/config');
    plugin.routes = require('./server/routes');
    plugin.controllers = require('./server/controllers');
    plugin.contentTypes = require('./server/content-types');
    plugin.middlewares = require('./server/middlewares');
    plugin.services = require('./server/services');

    return plugin;
};