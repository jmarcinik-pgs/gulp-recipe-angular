# [gulp-recipe](https://github.com/PGS-dev/gulp-recipe-loader)-angular [![Dependency Status][depstat-image]][depstat-url]
[![NPM][npm-image]][npm-url]

Recipe for sorting and preprocessing angular module files.
A mixture of gulp-ng-annotate and gulp-angular-filesort hooked into right place.

## Configuration
### Recipe specific
### Order
#### config.order.angular
> default: 'angular'

Order for pipes.devAssetAngular in queue.

## Api
### Used Hooks
#### pipes.devAssetAngular

Add angular modules into dev assets.

#### pipes.assetAngular

Add angular modules into dist assets.

[npm-url]: https://npmjs.org/package/gulp-recipe-angular
[npm-image]: https://nodei.co/npm/gulp-recipe-angular.png?downloads=true
[depstat-url]: https://david-dm.org/PGS-dev/gulp-recipe-angular
[depstat-image]: https://img.shields.io/david/PGS-dev/gulp-recipe-angular.svg?style=flat