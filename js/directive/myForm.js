'use strict';

(function(w) {

	angular.module('app')

	.directive('myForm', function() {
		return {
			restrict: 'E',
			scope: {},
			controller: 'formController',
			transclude: true,
			link: function(scope, el, attrs, ctrl, transclude) {
				el.find('form').append(transclude());
			},
			templateUrl: '/js/partials/my-form.html',
		}
	});

})(window);