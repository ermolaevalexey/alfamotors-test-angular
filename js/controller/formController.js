'use strict';

(function(w) {
	
	angular.module('app')

	.controller('formController', ['$scope', 'fetch',
		function($scope, fetch) {
			$scope.user = {};
			$scope.errors = {};
			$scope.showErrors = false;
			
			$scope.checkField = function(name) {
				var input = document.getElementsByName(name);
				var patternPass = /(?=.*?[A-Z]{1,})(?=.*?[0-9]{1,})/g;
				var patternEmail =  /(.*)@(.*)\.[a-z]{2,3}/;
				switch (name) {
					case 'username':
						if (input[1].value.length < 6) {
							$scope.errors['username'] = [
								'to_short',
								'you must provide at least 6 characters in your user name'
							];
						}	else {
							delete $scope.errors['username'];
						}
						break;
					case 'password':
						if (!input[1].value.match(patternPass)) {
							$scope.errors['password'] = [
								'missing_characters',
								'you must provide at least 1 digit and 1 capital letter'
							];
						} else {
							delete $scope.errors['password'];
						}
						break;
					case 'email': 
						if (input[1].value.length && !input[1].value.match(patternEmail)) {
							$scope.errors['email'] = [
								'wrong_email_format',
								'please provide correct email address'
							];
						} else {
							delete $scope.errors['email'];
						}
						break;
				}
				console.log($scope.errors);
				$scope.showErrors = true;
				return $scope.errors;
			};

			$scope.passTheData = function() {
				if (!isEmpty($scope.errors)){
					$scope.showErrors = true;
				} else {
					fetch($scope.user).then(
    					function(success){ console.log(success);},
    					function(errors){ $scope.errors.serverErrors = errors; console.log(errors); }
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