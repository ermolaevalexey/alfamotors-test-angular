'use strict';

(function(w) {
	
	angular.module('app')

	.controller('formController', ['$scope', 'fetch',
		function($scope, fetch) {
			$scope.user = {
				phone: ''
			};
			$scope.errors = {};
			$scope.showErrors = false;

			$scope.passTheData = function() {
				var pattern = /(?=.*?[A-Z]{1,})(?=.*?[0-9]{1,})/g;
				if ($scope.user.username.length < 6) {
					$scope.errors['username'] = { 
							errTitle: 'to_short', 
							errDescr: 'You must provide at least 6 characters in your user name'
					};
				}
				if (!$scope.user.password.match(pattern)) {
					$scope.errors['password'] = { 
							errTitle: 'missing_symbols', 
							errDescr: 'the password must contain at least 1 digit and 1 capital letter'
					};
				}
				if (!isEmpty($scope.errors)){
					console.log($scope.errors);
				} else {
					fetch($scope.user).then(
    					function(success){ console.log(success);},
    					function(errors){ console.log(errors); }
					);
				}
			};

			function isEmpty(obj){
				for(var i in obj) if(obj.hasOwnProperty(i)){
					return false;
				}
				return true;
			}

		}
	]);

})(window);