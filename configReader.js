'use strict';

module.exports = function ($, config) {
    $.utils.checkMandatory(config, ['sources.angularModules']);
    return config;
};