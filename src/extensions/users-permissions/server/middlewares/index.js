'use-strict';
// URL: https://github.com/strapi/strapi/tree/develop/packages/plugins/users-permissions/server/middlewares

const server = require('@strapi/plugin-users-permissions/strapi-server');

module.exports = {
    ...server().middlewares
};