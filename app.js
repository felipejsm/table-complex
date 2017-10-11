var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', ['$scope', function($scope) {
  var vm = $scope;
  vm.showMe = false;
  vm.listarComRegras = listarComRegras;
  vm.lista = [];
  vm.lista.push({num:0,impar:'impar'});
  vm.lista.push({num:0,par:'par'});
  vm.lista.push({num:0,impar:'impar'});
  vm.lista.push({num:0,par:'par'});
  vm.lista.push({num:0,impar:'impar'});
  vm.lista.push({num:0,par:'par'});
  vm.lista.push({num:0,impar:'impar'});
  vm.lista.push({num:0,par:'par'});

  vm.estrutura = [{'estado':'São Paulo','capital':'São Paulo','sigla':'SP'}];
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
  vm.listarComRegras();
  function listarComRegras() {
    for(var index = 0; index < vm.lista.length;index++) {
      if(vm.lista[index].par !== undefined) {
        vm.lista[index].num++;
      }
      console.log(vm.lista[index]);
    }
  }
}]);