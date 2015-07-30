'use strict';

angular.module('myApp.view1', ['ngRoute'])





.config(['$routeProvider', View1Config])
.controller('View1Ctrl', [function() {}]);


function View1Config($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}

View1Config['$inject'] = ['$routeProvider'];

/* Versao Antiga

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);
*/
