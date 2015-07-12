'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {templateUrl: '/views/tpl/welcome.html', controller: 'WelcomeCtrl'})
        .when('/shopping', {templateUrl: 'views/tpl/shopping.html', controller: 'CartController'})
        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]);

app.factory('Items', function() {

	var items = {};
	items.query = function() {
		return [
			{title: 'Paint pots', quantity: 8, price: 3.95},
			{title: 'Pokka dots', quantity: 3, price: 2.14},
			{title: 'Pebbles', quantity: 2, price: 1.45},
			{title: 'Pepper pants', quantity: 4, price: 7.36},
			{title: 'Dancing fance', quantity: 7, price: 4.86}
		];
	};
	return items;
});
