(function(w) {
  
  var dirs = angular.module('app-directives', []);
  
	dirs.directive('myForm', function () {
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
	});

	dirs.directive('myInput', function () {
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
	});

})(window);