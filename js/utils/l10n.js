'use strict';

(function (w) {
	
	angular.module('app')
	.service('translationService', function($resource) {  
		//getting and returning translation files
		this.getTranslation = function($scope, language) {
			var languageFilePath = '/js/utils/translation_' + language + '.json';
			$resource(languageFilePath).get(function (data) {
				$scope.translation = data;
			});
		};

	});

})(window);