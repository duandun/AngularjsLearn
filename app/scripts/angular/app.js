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

app.directive('draggable', function ($document) {
	var startX=0, startY=0, x = 0, y = 0;
    return function(scope, element, attr) {
      element.css({
       position: 'relative',
       border: '1px solid red',
       backgroundColor: 'lightgrey',
       cursor: 'pointer'
      });
      element.bind('mousedown', function(event) {
        startX = event.screenX - x;
        startY = event.screenY - y;
        $document.bind('mousemove', mousemove);
        $document.bind('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.screenY - startY;
        x = event.screenX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.unbind('mousemove', mousemove);
        $document.unbind('mouseup', mouseup);
      }
    };
});
