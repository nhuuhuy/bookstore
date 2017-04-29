var app = angular.module('BookApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

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

    .when('/admin', {
            templateUrl: 'pages/admin.html',
            controller: 'BooksController'
        })
        .when('/item/:itemId', {
            templateUrl: 'pages/item.html',
            controller: 'BooksController'
        })
        .when('/cart', {
            templateUrl: 'pages/cart.html',
            controller: 'cartcontroller'
        })
        .when('/category/:genreId', {
            templateUrl: 'pages/genre.html',
            controller: 'BooksController'
        })

    .otherwise({ redirectTo: '/' });
});









app.directive('itemJs', function() {
    // var injectScript = function(element) {
    //     var scriptTagJquery = angular.element(document.createElement('script'));
    //     scriptTagJquery.attr('charset', 'utf-8');
    //     scriptTagJquery.attr('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js');
    //     element.append(scriptTag);
    //     var scriptTag = angular.element(document.createElement('script'));
    //     scriptTag.attr('charset', 'utf-8');
    //     scriptTag.attr('src', 'js/item.js');
    //     element.append(scriptTag);
    // };

    // return {
    //     link: function(scope, element) {
    //         injectScript(element);
    //     }
    // };
});