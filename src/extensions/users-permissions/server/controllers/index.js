'use strict';
// URL: https://github.com/strapi/strapi/tree/develop/packages/plugins/users-permissions/server/controllers

const server = require('@strapi/plugin-users-permissions/strapi-server');
const user = require('./user');

module.exports = {
    ...server().controllers,
    user
};