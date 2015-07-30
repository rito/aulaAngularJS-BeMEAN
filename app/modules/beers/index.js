'use strict';

angular.module('myApp.Beers', ['ngRoute'])


.config(['$routeProvider', beersConfig])
.controller('BeerListController', BeerListController);


function beersConfig($routeProvider) {
  $routeProvider.when('/beers', {
    templateUrl: 'modules/beers/list.html',
    controller: 'BeerListController'
  });
}

beersConfig['$inject'] = ['$routeProvider'];


// Controllers
function BeerListController($scope, $http) {
  var httpRequest = {
      url: 'http://localhost:3000/api/beers'
    , method: 'GET'
  }
  ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.beers = data;
    $scope.msg = "Listagem feita com sucesso";
  })
  .error(function(err){
    console.log('ERRO : ', err);
    $scope.msg = "Erro ao carregar listagem";
  });

};

BeerListController.$inject = ['$scope', '$http'];
