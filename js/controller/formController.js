'use strict';

(function(w) {
	
	angular.module('app')

	//injected translation service
	.controller('formController', ['$scope', 'translationService', 'fetch',
		function($scope, translationService, fetch) {
			//object will receive the data
			$scope.user = {};

			//errors object
			$scope.errors = {};
			$scope.patternPass = /(?=.*?[A-Z]{1,})(?=.*?[0-9]{1,})/g;
			$scope.successMessage = '';
			$scope.showErrors = false;
			$scope.selectedLanguage = 'ru';
			$scope.translation = translationService.getTranslation($scope, $scope.selectedLanguage);
			
			//validating form fields
			$scope.checkField = function(name) {
				var input = $scope.mainForm[name];
				var patternPass = $scope.patternPass;
				var patternEmail =  /(.*)@(.*)\.[a-z]{2,3}/;
				var patternPhone = /\+7\s\(\d{3}\)\s\d{3}\-\d{4}/;
				switch (name) {
					case 'username':
						if (input.$invalid) {
							$scope.errors['username'] = $scope.translation['username'];
						}	else {
							delete $scope.errors['username'];
						}
						break;
					case 'password':
						if (input.$invalid) {
							$scope.errors['password'] = $scope.translation['password'];							
						} else {
							delete $scope.errors['password'];
						}
						break;
					case 'phone':
						if (input.$viewValue.length && !input.$viewValue.match(patternPhone)) {
								 $scope.errors['phone'] = $scope.translation['phone'];
						} else {
							delete $scope.errors['phone'];
						}
						break;
					case 'email': 
						if (input.$viewValue && !input.$viewValue.match(patternEmail)) {
							$scope.errors['email'] = $scope.translation['email'];
						} else {
							delete $scope.errors['email'];
						}
						break;
						default: 
							return;	
				}

				// // this is for debug
				$scope.showErrors = true;
				return $scope.errors;
			};

			$scope.passTheData = function() {
				if (!isEmpty($scope.errors)){
					$scope.showErrors = true;
				} else {
					fetch($scope.user).then(
    					function(success){ 
    						$scope.showErrors = false;
    						$scope.mainForm.$setPristine();
    						$scope.successMessage = $scope.translation['successMessage'];
    					},
    					function(errors){ 
    						$scope.showErrors = true;
    						for (var error in errors) {
    							errors[error] = $scope.translation.serverErrors[error];
    						}
    						$scope.errors.serverErrors = errors; 
    				 }
					);
				}
			};

			//check is object empty copied-pasted from fetch.js
			function isEmpty(obj){
				for(var i in obj) if(obj.hasOwnProperty(i)){
					return false;
				}
				return true;
			}

		}
	]);

})(window);