'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope',function($scope) {
	$scope.employees = [
		{firstName: 'Roy',lastName:'Mendees',location:'New Delhi'},
		{firstName: 'Hari',lastName:'John',location:'Chennai'},
		{firstName: 'Rahul',lastName:'Kurup',location:'Bangalore'},
		{firstName: 'Samson',lastName:'Davis',location:'Mumbai'},
		{firstName: 'Shilpa',lastName:'Agarwal',location:'Noida'}
	];
}]);