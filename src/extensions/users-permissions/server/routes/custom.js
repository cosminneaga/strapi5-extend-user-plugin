'use strict';

module.exports = [
    {
        method: 'POST',
        path: '/users/create-full',
        handler: 'user.createFull',
        config: {
            prefix: '',
            policies: []
        }
    }
];