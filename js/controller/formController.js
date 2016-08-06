'use strict';

(function(w) {
	
	angular.module('app')

	.controller('formController', ['$scope', 'fetch',
		function($scope, fetch) {
			$scope.user = {};
			$scope.passTheData = function() {
				fetch($scope.user).then(
    			function(success){ console.log(success);},
    			function(errors){ console.log(errors); }
				);
			};
		}
	]);

})(window);