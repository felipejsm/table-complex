var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', ['$scope', function($scope) {
  var vm = $scope;
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

  const subestrutura = [{selecione:'Selecione',Ma:'Ma',Mp:'Mp',FMa:'FMa',FMp:'FMp',m_a:'m(a)',m_p:'m(p)',FC:'FC',
  FD:'FD',CF:'CF',C:'C',Cn:'Cn',FC_linha: 'FC\'',C_linha_F:'C\'F',C_linha:'C\'',FT:'FT',
  TF:'TF',T:'T',FV:'FV',VF:'VF',V:'V',FY:'FY',YF:'YF',Y:'Y',Fr:'Fr',rF:'rF',F:'F'}];
  
  vm.estrutura = [{'estado':'São Paulo','capital':'São Paulo','sigla':'SP','isCollapsed':false},subestrutura];
  
  function listarComRegras() {
    for(var index = 0; index < vm.lista.length;index++) {
      if(vm.lista[index].par !== undefined) {
        vm.lista[index].num++;
      }
      console.log(vm.lista[index]);
    }
  }
  vm.listarComRegras();
}]);