#!/usr/bin/env node
'use strict';
var meow = require('meow');
var superfood = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ superfood',
		'  carrot',
		'',
		'  $ superfood --all',
		'  cake',
		'  bread',
		'  ...',
		'',
		'Options',
		'  --all   Get all names instead of a random name'
	]
});

console.log(cli.flags.all ? superfood.all.join('\n') : superfood.random());
