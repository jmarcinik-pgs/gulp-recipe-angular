'use strict';

module.exports = function ($, config) {
    var _ = $.lodash;

    return _.merge({
        angular: {
            modulesFilter: '*.js'
        },
        order: {
            angularSort: 110,
            angularAnnotate: 55
        }
    }, config);
};