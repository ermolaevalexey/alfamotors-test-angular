'use strict';

(function(w) {

	angular.module('app')

	.directive('myInput', function() {
		return {
			require: ['^myForm', 'ngModel'],
			restrict: 'E',
			transclude: true,
			scope: true,
			link: function (scope, el, attrs, ctrl) {
				var input = el.find('input');
				console.log(el);
				if (attrs.required !== undefined) {
					input.attr('required', true);
				}
				scope.name = attrs.name;
				scope.type = attrs.type;
				scope.label = attrs.label;
				scope.ngModel = attrs.ngModel;
				scope.required = attrs.required !== undefined ? 'required' : '';
				scope.uiMask = attrs.uiMask !== undefined ? attrs.uiMask : '';
				scope.uiMaskPlaceholder = attrs.uiMaskPlaceholder !== undefined ? 'ui-mask-placeholder' : '';
				scope.uiMaskPlaceholderChar = attrs.uiMaskPlaceholderChar !== undefined ? attrs.uiMaskPlaceholderChar : '';
				scope.modelViewValue = attrs.modelViewValue !== undefined ? true : '';
			},
			templateUrl: '/js/partials/my-input.html'
		}
	});

})(window);