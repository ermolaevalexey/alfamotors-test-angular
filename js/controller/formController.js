'use strict';

(function(w) {
	
	angular.module('app')

	.controller('formController', ['$scope', 'fetch',
		function($scope, fetch) {
			$scope.user = {};
			$scope.passTheData = function() {
				console.log($scope);
				console.log($scope.user);
			};
		}
	]);

})(window);