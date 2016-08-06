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
				if (attrs.name === 'phone') {
					input.attr('ui-mask', '+7 (999) 999-9999');
					input.attr('ui-options', 'addDefaultPlaceholder(true)');
				}
			},
			templateUrl: '/js/partials/my-input.html'
		}
	});

})(window);