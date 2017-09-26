'use strict';
var uniqueRandomArray = require('unique-random-array');
var superfood = require('./superfood.json');

exports.all = superfood;
exports.random = uniqueRandomArray(superfood);
