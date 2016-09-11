'use strict';

(function(w) {

	angular.module('app')

	.directive('myInput', function() {
		return {
			require: ['^myForm', '?ngModel'],
			restrict: 'E',
			transclude: true,
			scope: {
				name: '@name',
				type: '@type',
				label: '@label',
				uiMask: '@uiMask',
				minlength: '@minLength',
				ngMinlength: '@ngMinlength',
				ngPattern: '@ngPattern'
			},
			link: function (scope, el, attrs, ctrl) {
				var input = el.find('input');
				//adding required attribute to input
				if (attrs.required !== undefined) {
					input.attr('required', true);
				}
			},
			templateUrl: '/js/partials/my-input.html'
		}
	});

})(window);