'use strict';
var path = require('path');

/**
 * Recipe for distribution files reving
 *
 * @config rev.replaceInExtensions
 */
module.exports = function ($, config, sources) {
    var _ = $.lodash;

    /* Used hooks
     *************/

    var angularPipe = sources.angularModules
        .pipe($.utils.sortFiles)
        .pipe($.angularFilesort);

    var processAngular = $.lazypipe()
        .pipe($.sourcemaps.init)
        .pipe($.ngAnnotate)
        .pipe($.sourcemaps.write);

    var order = config.order.angular;
    if(_.isUndefined(order)) {
        order = 'angular;'
    }

    return {
        pipes: {
            devAssetAngular: angularPipe,
            assetAngular: angularPipe.pipe(processAngular)
        }
    };
};
