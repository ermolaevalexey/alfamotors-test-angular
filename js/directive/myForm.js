'use strict';

(function(w) {
  
  angular.module('app')
  
	.directive('myForm', myFormDirective);

	 function myFormDirective() {
		return {
	  		restrict: 'E',
	  		scope: {},
	  		transclude: true,
	  		link: function(scope, el, attrs, ctrl, transclude) {
	  			console.log(el, attrs, transclude);
	  			console.log(el.find('form'));
	  			el.find('form').append(transclude());
	  		},
	  		templateUrl: '/js/partials/my-form.html',
		}
	}

})(window);