'use strict';

var assert = require('assert'),
	parser = require(__dirname+'/../index.js');

describe('parser()', function(){
	it('parses cookies', function(){
		var cookies = 'foo=bar; baz=bosh;';
		cookies = parser(cookies);
		assert.equal(cookies.foo, 'bar');
		assert.equal(cookies.baz, 'bosh');
	});
});

describe('parser()', function(){
	it('parses cookies', function(){
		var cookies = 'foo=ba%20r; baz=bosh;';
		cookies = parser(cookies);
		assert.equal(cookies.foo, 'ba r');
		assert.equal(cookies.baz, 'bosh');
	});
});

describe('parser()', function(){
	it('parses cookies', function(){
		var cookies = 'foo=ba%20r; baz="bo"sh;';
		cookies = parser(cookies);
		assert.equal(cookies.foo, 'ba r');
		assert.equal(cookies.baz, 'bo"sh');
	});
});
