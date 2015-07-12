'use strict';

var key = require('keymaster');
var $ = require('jquery');
var blocks = require('./vendor/sir-trevor');

var dendrite = function(options) {
    var element = $('body');

    function up() {
        element.append('<p>Up</p>');
    }
    function down() {
        element.append('<p>Down</p>');
    }
    function left() {
        element.append('<p>Left</p>');
    }
    function right() {
        element.append('<p>Right</p>');
    }

    key('k', up);
    key('j', down);
    key('h', left);
    key('l', right);
};

module.exports = dendrite;
