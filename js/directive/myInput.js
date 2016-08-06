'use strict';

(function (w) {
	
	angular.module('app')

	.directive('myInput', myInputDirective);

	function myInputDirective() {
		return {
			require: '^myForm',
			restrict: 'E',
			transclude: true,
			scope: {
				name: '@name',
				type: '@type',
				required: '@required',
				label: '@label',
			},
			templateUrl: '/js/partials/my-input.html'
		}
	}

})(window);