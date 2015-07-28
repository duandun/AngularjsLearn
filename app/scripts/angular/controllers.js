'use strict';

function WelcomeCtrl($scope){
    $scope.username = 'Conan_Z';
}

function CartController($scope, Items) {
	// $scope.items = [
	// 	{title: 'Paint pots', quantity: 8, price: 3.95},
	// 	{title: 'Pokka dots', quantity: 3, price: 2.14},
	// 	{title: 'Pebbles', quantity: 2, price: 1.45},
	// 	{title: 'Pepper pants', quantity: 4, price: 7.36},
	// 	{title: 'Dancing fance', quantity: 7, price: 4.86}
	// ];
	// $scope.$filter('greet', function() {
	// 	return function(name) {
	// 		return 'Hellow' + name;
	// 	};
	// });
	$scope.items = Items.query();

	$scope.remove = function(index) {
		$scope.items.splice(index, 1);
	}

	$scope.startingEstimate = 0;

	$scope.computeNeeded = function() {
		$scope.needed = $scope.startingEstimate * 10;
	};

	$scope.requestFunding = function() {
		alert("Sorry, please get more customers first.");
	};

	$scope.reset = function() {
		$scope.startingEstimate = 0;
		$scope.needed = 0;
	};

	$scope.$watch('startingEstimate', $scope.computeNeeded);

	$scope.bill = {};
	$scope.totalCart = function() {
		var total = 0;
		for (var i = 0, len = $scope.items.length; i<len; i++) {
			total = total + $scope.items[i].price * $scope.items[i].quantity;
		}

		return total;
	};

	$scope.subtotal = function() {
		return $scope.totalCart() - $scope.bill.discount;
	};

	function calculateDiscount(newValue, oldValue, scope) {
		$scope.bill.discount = newValue > 100 ? 10 : 0;
	}
	$scope.$watch($scope.totalCart, calculateDiscount);
}