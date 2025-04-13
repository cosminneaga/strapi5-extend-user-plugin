'use-strict';
// URL: https://github.com/strapi/strapi/blob/develop/packages/plugins/users-permissions/server/bootstrap/index.js

const server = require('@strapi/plugin-users-permissions/strapi-server');

module.exports = async ({ strapi }) => {
    server().bootstrap
};