'use strict';

(function(w) {
	
	angular.module('app')

	.controller('formController', ['$scope', 'translationService', 'fetch',
		function($scope, translationService, fetch) {
			$scope.user = {};
			$scope.errors = {};
			$scope.successMessage = '';
			$scope.showErrors = false;
			$scope.selectedLanguage = 'ru';
			$scope.translation = translationService.getTranslation($scope, $scope.selectedLanguage);
			$scope.checkField = function(name) {
				var input = document.getElementsByName(name);
				var patternPass = /(?=.*?[A-Z]{1,})(?=.*?[0-9]{1,})/g;
				var patternEmail =  /(.*)@(.*)\.[a-z]{2,3}/;
				switch (name) {
					case 'username':
						if (input[1].value.length < 6) {
							$scope.errors['username'] = $scope.translation['username'];
							console.log($scope.mainForm[name]);
						}	else {
							delete $scope.errors['username'];
						}
						break;
					case 'password':
						if (!input[1].value.match(patternPass)) {
							$scope.errors['password'] = $scope.translation['password'];							
						} else {
							delete $scope.errors['password'];
						}
						break;
					/*case 'phone':
						if (input[1].value.length && !input[1].value.match(patternPass)) {
							$scope.errors['phone'] = $scope.translation['phone'];
						} else {
							delete $scope.errors['phone'];
						}
						break;	*/
					case 'email': 
						if (input[1].value.length && !input[1].value.match(patternEmail)) {
							$scope.errors['email'] = $scope.translation['email'];
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
    					function(success){ 
    						$scope.showErrors = false;
    						$scope.successMessage = $scope.translation['successMessage'];
    						console.log($scope.successMessage);
    					},
    					function(errors){ 
    						$scope.showErrors = true;
    						for (var error in errors) {
    							errors[error] = $scope.translation.serverErrors[error];
    						}
    						$scope.errors.serverErrors = errors; 
    						console.log($scope.errors.serverErrors); }
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