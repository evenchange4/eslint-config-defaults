"use strict"

var _ = require('lodash');

module.exports = function(target /*[, object1 ] [, objectN ]*/) {
  var args = Array.prototype.slice.call(arguments);

  // Generate complete list of required plugins since _.merge overwrites Arrays
  var plugins = args.map(function(config) {
    return config.plugins;
  }).reduce(function(memo, plugins) {
    return memo.concat(plugins || []);
  }, []).filter(function (value, index, array) {
    return array.indexOf (value) == index;
  });

  var mergedConfig = _.merge.apply(args);
  mergedConfig.plugins = plugins;

  return mergedConfig
};
