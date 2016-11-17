'use strict';
module.exports = function (str) {
	return String(str || '').toLowerCase().replace(/(?:^|\s|-)\S/g, function (m) {
		return m.toUpperCase();
	});
};
