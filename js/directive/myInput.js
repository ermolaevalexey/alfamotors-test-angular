'use strict';

(function(w) {

	angular.module('app')

	.directive('myInput', function() {
		return {
			require: '^myForm',
			restrict: 'E',
			transclude: true,
			scope: {
				name: '@name',
				type: '@type',
				label: '@label',
			},
			link: function (scope, el, attrs, ctrl) {
				console.log(scope.$parent.$parent);
				console.log(ctrl.user);
				var input = el.find('input');
				if (attrs.required !== undefined) {
					input.attr('required', true);
				}
			},
			templateUrl: '/js/partials/my-input.html'
		}
	});

})(window);