'use strict';

(function(w) {
  var body = w.document.body;
  angular.module('app', []);
  angular.element(body).ready(function () {
    angular.bootstrap(body, ['app']);
  });
})(window);
