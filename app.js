var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', ['$scope', function($scope) {
  var vm = $scope;
  vm.estrutura = [{
              "tipo1":[
                  {'estado':'São Paulo','capital':'São Paulo','sigla':'SP'}],
              "tipo2":[
                  {"bairro":'Capão Redondo',"zona":'Sul', "show":false}]
                  }];
}]);