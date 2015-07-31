'use strict';

angular.module('myApp.Beers.Controllers', [])
.controller('BeerListController', BeerListController)
.controller('BeerGetController', BeerGetController)
.controller('BeerEditController', BeerEditController)
.controller('BeerCreateController', BeerCreateController);


//Service
function BeersService($http){
  var httpRequest = {
      url: 'http://localhost:3000/api/beers'
    , method: 'GET'
  }
  ;

  this.list = function(){
    return $http(httpRequest)
}



//Fim Service




// Controllers
function BeerListController($scope, BeersService) {
  var httpRequest = {
      url: 'http://localhost:3000/api/beers'
    , method: 'GET'
  }
  ;

  //$http(httpRequest)
  BeersService
  .list()
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.beers = data;
    $scope.msg = "Listagem feita com sucesso";
  })
  .error(function(err){
    console.log('ERRO : ', err);
    $scope.msg = "Erro ao carregar listagem";
  });

  $scope.remove = function(beer){
    var httpRequest = {
        url: 'http://localhost:3000/api/beers/' + beer._id
      , method: 'DELETE'
    }
    ;
    if(confirm('Deseja remover a cerveja? ')){
      $http(httpRequest)
      .success(function(data) {
        console.log('SUCESSO: ', data);
        var index = $scope.beers.indexOf(beer);
        $scope.beers.splice(index, 1);
        $scope.msg = "Remoção feita com sucesso";
      })
      .error(function(err){
        console.log('ERRO : ', err);
        $scope.msg = "Erro ao carregar listagem";
      });
    } else {
      alert('BLZ... Segue o jogo....');
    }

  }
};

function BeerGetController($scope, $http, $routeParams) {
  var httpRequest = {
      url: 'http://localhost:3000/api/beers/' + $routeParams.id
    , method: 'GET'
  }
  ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.beer = data;
    $scope.msg = "Listagem feita com sucesso";
  })
  .error(function(err){
    console.log('ERRO : ', err);
    $scope.msg = "Erro ao carregar listagem";
  });

};


function BeerEditController($scope, $http, $routeParams) {
  var httpRequest = {
        url: 'http://localhost:3000/api/beers/' + $routeParams.id
      , method: 'GET'
      }
    ;

  $http(httpRequest)
  .success(function(data) {
    console.log('SUCESSO: ', data);
    $scope.beer = data;
    $scope.msg = 'Consulta feita com sucesso.';
  })
  .error(function(err) {
    console.log('ERRO: ', err);
    $scope.msg = 'Consulta não podde ser feita.';

  });

  $scope.save = function(beer) {
    var httpRequest = {
          url: 'http://localhost:3000/api/beers/' + $routeParams.id
        , method: 'PUT'
        , data: beer
        }
      ;

    $http(httpRequest)
    .success(function(data) {
      console.log('SUCESSO: ', data);
      $scope.msg = 'Alteração feita com sucesso.';
    })
    .error(function(err) {
      console.log('ERRO: ', err);
      $scope.msg = 'Alteração não podde ser feita.';

    });
  }
};


function BeerCreateController($scope, $http) {

  $scope.create = function(beer) {
    var httpRequest = {
          url: 'http://localhost:3000/api/beers'
        , method: 'POST'
        , data: beer
        }
      ;

    $http(httpRequest)
    .success(function(data) {
      console.log('SUCESSO: ', data);
      // $scope.beers = data;
      $scope.msg = 'Cadastro da cerveja feito com sucesso.';
    })
    .error(function(err) {
      console.log('ERRO: ', err);
      $scope.msg = 'Cadastro da cerveja não pode ser feito.';

    });
  }

};

BeerListController.$inject = ['$scope', '$http'];
BeerCreateController.$inject = ['$scope', '$http'];

BeerGetController.$inject = ['$scope', '$http', $routeParams];
BeerEditController.$inject = ['$scope', '$http', $routeParams];
