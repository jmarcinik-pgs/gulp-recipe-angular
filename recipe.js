'use strict';
var path = require('path');

/**
 * Recipe for distribution files reving
 *
 * @config rev.replaceInExtensions
 */
module.exports = function ($, config) {
    /* Used hooks
     *************/
    var filesort = $.lazypipe()
        .pipe(function () {
            // Files may be presorted already. To keep null files in order of arrival, use promise and chain done events.
            var orderPromise = Promise.resolve();
            return $.if(config.angular.modulesFilter,
                $.lazypipe()
                    // read null files
                    .pipe($.through2.obj, function (file, enc, done) {
                        // read null file
                        if(file.isNull()) {
                            // Require only when really needed.
                            // Require calls are memoized anyway.
                            var fs = require('graceful-fs');
                            var stripBom = require('strip-bom');
                            orderPromise.then(function () {
                                return new Promise(function(resolve, reject) {
                                    fs.readFile(file.path, function (err, data) {
                                        if(err) {
                                            reject(err);
                                        }
                                        file.contents = stripBom(data);
                                        done(null, file);
                                        resolve();
                                    });
                                });
                            })
                        }
                        else {
                            orderPromise.then(function () {
                                done(null, file);
                            });
                        }
                    })
                    .pipe($.angularFilesort)()
            )
        });

    return {
        pipes: {
            processJsAngular: [config.order.angularAnnotate, $.ngAnnotate],
            postDevAssetAngular: [config.order.angularSort, filesort],
            postAssetAngular: [config.order.angularSort, filesort]
        }
    };
};
