var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', ['$scope','$filter', function($scope,$filter) {
  var vm = $scope;
  vm.showMe = false;
  vm.estrutura = [{
              "tipo1":[
                  {'estado':'São Paulo','capital':'São Paulo','sigla':'SP',"show":true}],
              "tipo2":[
                  {"bairro":'Capão Redondo',"zona":'Sul', "show":false}]
                  }];
  /*              
  vm.estrutura = [{'estado':'São Paulo','capital':'São Paulo','sigla':'SP',"show":true},
                    "tipo2":subestrutura                      
                  ];  
                  */              
  vm.subestrutura = {"bairro":'Capão Redondo',"zona":'Sul', "show":false};
  vm.showLine = showLine;

  function showLine (isShow) {
    //vm.estrutura[0].tipo2[0].show = isShow;
    vm.showMe = isShow;
  }
}]);