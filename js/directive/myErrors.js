'use strict';

(function(w) {
	
	angular.module('app')
		.directive('myErrors', function() {
			return {
				restrict: 'EA',
				scope: {
					error: '@error',
					success: '@success'
				},
				templateUrl: '/js/partials/my-errors.html',
				link: function(scope, el, attrs, ctrl) {
						// for any purposes
				}
			}
		});

})(window);