'user strict';
// URL: https://github.com/strapi/strapi/tree/develop/packages/plugins/users-permissions/server/routes

const server = require('@strapi/plugin-users-permissions/strapi-server');
const customRoutes = require('./custom');

module.exports = {
    ...server().routes,
    'content-api': {
        type: 'content-api',
        routes: [
            ...server().routes['content-api'].routes,
            ...customRoutes
        ]
    }
};