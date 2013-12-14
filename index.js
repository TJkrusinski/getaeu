'use strict';

/**
 *	@module.exports
 *	@param {String} cookies
 *	@return {Object}
 */
module.exports = function(cookies) {
	if (!cookies) return {};

	var obj = {};
		
	cookies.split(/[;,] */g).forEach(function(el){
		if (!~el.indexOf('=')) return;
		var cook = el.split('=');
		cook[1] = cook[1].replace(/^\"/g, '');
		obj[cook[0].trim()] = decodeURIComponent(cook[1]).trim();
	});
	
	return obj;
};
