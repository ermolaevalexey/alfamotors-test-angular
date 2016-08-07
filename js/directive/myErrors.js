'use strict';

(function(w) {
	
	angular.module('app')
		.directive('myErrors', function() {
			return {
				restrict: 'EA',
				scope: {
					error: '@error'
				},
				templateUrl: '/js/partials/my-errors.html',
				link: function(scope, el, attrs, ctrl) {
					console.log(scope);
				/*console.log(attrs);
					console.log(scope.$parent);
					if (el[0].previousElementSibling) {
						scope.definition = el[0].previousElementSibling.attributes.name.textContent;
					}
					return;*/
				}
			}
		});

})(window);