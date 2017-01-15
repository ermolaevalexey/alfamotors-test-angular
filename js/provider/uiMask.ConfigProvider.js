'use strict';

(function(w) {
		
		angular.module('app')
			.config(['uiMask.ConfigProvider', function(uiMaskConfigProvider) {
				uiMaskConfigProvider.clearOnBlur(false);
				uiMaskConfigProvider.eventsToHandle(['input', 'keyup', 'click']);
			}
		]);

})(window);