'use strict';

angular.module('myApp.Beers.Service', [])
.service('BeersService', BeersService);

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

BeersService.$inject = ['$http'];
