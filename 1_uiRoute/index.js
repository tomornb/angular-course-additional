angular.module("uiRouterExample", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/home');
})

.controller("ListCtrl", function($scope) {
    $scope.books = [
      {name: 'AngularJS for starter'},
      {name: 'AngularJS from novice to ninja'},
      {name: 'ReactJS vs AngularJS'}
    ];

    $scope.selectItem = function(selectedItem) {
        $scope.selectedItem = selectedItem;
    };

    $scope.isSelectedItem = function(item) {
      return $scope.selectedItem == item;
    }
});
