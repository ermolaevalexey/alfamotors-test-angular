'use strict';

(function (w) {
	
	angular.module('app')
	.service('translationService', function($resource) {  

        this.getTranslation = function($scope, language) {
            var languageFilePath = '/js/utils/translation_' + language + '.json';
            
            console.log(languageFilePath);
            $resource(languageFilePath).get(function (data) {
                $scope.translation = data;
            });
        };

  });

})(window);