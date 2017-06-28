var app = angular.module('BookApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'textAngular', 'ngCookies', 'zoomPanApp']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'BooksController'
        })
        .when('/category', {
            templateUrl: 'pages/category.html',
            controller: 'BooksController'
        })
        .when('/admin/addbook', {
            templateUrl: 'pages/add.html',
            controller: 'BooksController'
        })
        .when('/admin', {
            templateUrl: 'pages/list.html',
            controller: 'BooksController'
        })
        .when('/admin/listbook', {
            templateUrl: 'pages/list.html',
            controller: 'BooksController'
        })
        .when('/admin/editbook/:itemId', {
            templateUrl: 'pages/edit.html',
            controller: 'BooksController'
        })
        .when('/item/:itemId', {
            templateUrl: 'pages/item.html',
            controller: 'BooksController'
        })
        .when('/cart', {
            templateUrl: 'pages/cart.html',
            controller: 'BooksController'
        })
        .when('/category/:genreId', {
            templateUrl: 'pages/genre.html',
            controller: 'BooksController'
        })
        .when('/search/:text', {
            templateUrl: 'pages/search.html',
            controller: 'BooksController'
        })
        .when('/user', {
            templateUrl: 'pages/user.html',
            controller: 'BooksController'
        })
        .when('/user/bill', {
            templateUrl: 'pages/bill.html',
            controller: 'BooksController'
        })
        .when('/user/like', {
            templateUrl: 'pages/like.html',
            controller: 'BooksController'
        })
        .when('/admin/order', {
            templateUrl: 'pages/order.html',
            controller: 'BooksController'
        })
        .otherwise({ redirectTo: '/' });
});
var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};

app.directive("compareTo", compareTo);