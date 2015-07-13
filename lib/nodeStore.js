'use strict';

var ee = require('events').EventEmitter;
var util = require('util');

var nodeStore = function() {
    util.inherits(this, ee);
}

module.exports = nodeStore;
