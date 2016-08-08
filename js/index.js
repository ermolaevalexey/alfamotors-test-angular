'use strict';

(function(w) {
	var body = w.document.body;
	angular.module('app', ['ui.mask', 'ngResource']);
	angular.element(body).ready(function () {
		angular.bootstrap(body, ['app']);
	});
})(window);
