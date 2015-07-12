'use strict';

function WelcomeCtrl($scope){
    $scope.username = 'Conan_Z';
}

function CartController($scope) {
	$scope.items = [
		{title: 'Paint pots', quantity: 8, price: 3.95},
		{title: 'Pokka dots', quantity: 3, price: 2.14},
		{title: 'Pebbles', quantity: 2, price: 1.45},
		{title: 'Pepper pants', quantity: 4, price: 7.36},
		{title: 'Dancing fance', quantity: 7, price: 4.86},
	];

	$scope.remove = function(index) {
		$scope.items.splice(index, 1);
	}
}