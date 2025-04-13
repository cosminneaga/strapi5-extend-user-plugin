const server = require('@strapi/plugin-users-permissions/strapi-server');

module.exports = {
    ...server().controllers.user,
    async createFull(ctx) {
        console.log('reached');
        return ctx;
    },
};