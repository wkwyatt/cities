var myApp = angular.module('myApp', [cities]);
myApp.controller("myController", function($scope, cities) {
	// $scope.buttons = []
	$scope.myCities = cities;

});