'use strict';

module.exports = function ($, config) {
    var _ = $.lodash;

    config = _.merge({
        angular: {
            modulesFilter: '*.js'
        },
        order: {
            angularSort: 110,
            angularAnnotate: 55
        }
    }, config);
    config.sources = undefined;
    return config;
};