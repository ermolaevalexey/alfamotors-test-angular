'use strict';

(function(w) {
	
	angular.module('app')
		.directive('myErrors', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/js/partials/my-errors.html'
			}
		});

})(window);