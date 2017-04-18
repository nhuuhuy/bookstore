var app = angular.module('BookApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'BooksController'
        })

    .when('/category', {
        templateUrl: 'pages/category.html',
        controller: 'CategoryController'
    })

    .when('/admin', {
            templateUrl: 'pages/admin.html',
            controller: 'AdminController'
        })
        .when('/item/:itemId', {
            templateUrl: 'pages/item.html',
            controller: 'ItemController',
            controllerAs: 'itemctrl'

        })
        .when('/cart', {
            templateUrl: 'pages/cart.html',
            controller: 'cartcontroller'
        })
        .when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'LoginController'
        })
        .otherwise({ redirectTo: '/' });
});



app.service('bookservice', function() {

    this.category = [
        { id: 1, name: "Children Books" },
        { id: 2, name: "Detective Story" },
        { id: 3, name: "Romance" },
        { id: 4, name: "Horror" },
        { id: 5, name: "Mystery" },
        { id: 6, name: "Science fiction" }
    ]

    this.books = [{
            id: 0,
            category: "Romance",
            author: "Kate Williams ",
            title: "Sayings of the Century ",
            price: 8.95,
            rate: 4,
            cover: "images/1.jpg",
            bigCover: "images/1big.jpg",

            description: "In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
        },
        {
            id: 1,
            category: "Detective Story",
            author: "Nigel Rees",
            title: "Sayings of the Century",
            price: 8.95,
            rate: 4,
            cover: "images/2.jpg",
            bigCover: "images/2big.jpg",
            description: "In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
        },
        {
            id: 2,
            category: "Horror",
            author: "Nigel Rees",
            title: "Sayings of the Century",
            price: 8.95,
            rate: 4,
            cover: "images/3.jpg",
            bigCover: "images/3big.jpg",
            description: "In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
        },
        {
            id: 3,
            category: "Romance",
            author: "Nigel Rees",
            title: "Sayings of the Century",
            price: 8.95,
            rate: 4,
            cover: "images/4.jpg",
            bigCover: "images/4big.jpg",
            description: "In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
        },
        {
            id: 4,
            category: "Romance",
            author: "Kate Williams ",
            title: "Sayings of the Century ",
            price: 8.95,
            rate: 4,
            cover: "images/1.jpg",
            bigCover: "images/1big.jpg",
            description: "In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
        },
        {
            id: 5,
            category: "Detective Story",
            author: "Nigel Rees",
            title: "Sayings of the Century",
            price: 8.95,
            rate: 4,
            cover: "images/2.jpg",
            bigCover: "images/2big.jpg",
            description: "In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
        },
        {
            id: 6,
            category: "Horror",
            author: "Nigel Rees",
            title: "Sayings of the Century",
            price: 8.95,
            rate: 4,
            cover: "images/3.jpg",
            bigCover: "images/3big.jpg",
            description: "In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
        },
        {
            id: 7,
            category: "Romance",
            author: "Nigel Rees",
            title: "Sayings of the Century",
            price: 9,
            rate: 4,
            cover: "images/4.jpg",
            bigCover: "images/4big.jpg",
            description: "In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
        }, {
            id: 8,
            category: "Romance",
            author: "Kate Williams ",
            title: "Sayings of the Century ",
            price: 8.95,
            rate: 4,
            cover: "images/1.jpg",
            bigCover: "images/1big.jpg",
            description: "In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
        },
        {
            id: 9,
            category: "Detective Story",
            author: "Nigel Rees",
            title: "Sayings of the Century",
            price: 8.95,
            rate: 4,
            cover: "images/2.jpg",
            bigCover: "images/2big.jpg",
            description: "In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
        },
        {
            id: 10,
            category: "Horror",
            author: "Nigel Rees",
            title: "Sayings of the Century",
            price: 8.95,
            rate: 4,
            cover: "images/3.jpg",
            bigCover: "images/3big.jpg",
            description: "In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
        },
        {
            id: 11,
            category: "Romance",
            author: "Nigel Rees",
            title: "Sayings of the Century",
            price: 9,
            rate: 4,
            cover: "images/4.jpg",
            bigCover: "images/4big.jpg",
            description: "In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
        }
    ]

})
app.controller("BooksController", ['bookservice', function(bookservice) {

    var self = this;
    self.books = bookservice.books;
    self.category = bookservice.category;
    self.author = [
            { id: 1, name: "Kate Williams", image: "images/8.jpg" },
            { id: 2, name: "Nigel Rees", image: "images/8.jpg" },
            { id: 3, name: "Christian Louboutin", image: "images/8.jpg" },
            { id: 4, name: "Hennie Aucamp", image: "images/8.jpg" },
            { id: 5, name: "Jean Aue", image: "images/8.jpg" },
        ]
        // self.tab ='home';
        // self.selectTab = function(setTab){
        //  self.tab = setTab;

    // };
    // self.isSelectedTab = function(checkTab){
    //  return self.tab === checkTab
    // };

}])
app.controller("carousel", function() {
    this.slides = [{
            id: 0,
            image: "images/5.jpg",
            caption: "Sale off 50%"
        },
        {
            id: 1,
            image: "images/6.jpg",
            caption: "Free Ship"
        },
        {
            id: 2,
            image: "images/7.jpg",
            caption: "New Books"
        }
    ];
    this.myInterval = 3000;

    this.activeSlide = 0;

})
app.controller("MultiCarousel", ['bookservice', function(bookservice) {
    this.slides = bookservice.books;
    this.myInterval = 4000;
    this.activeSlide = 1;
}])
app.controller('CategoryController', ['bookservice', function(bookservice) {
    var self = this;
    self.books = bookservice.books;
    self.category = bookservice.category;
    self.viewby = 10;
    self.bigTotalItems = self.books.length;
    self.currentPage = 4;
    self.itemsPerPage = self.viewby;
    self.maxSize = 10
}])
app.controller('AdminController', ['bookservice', function(bookservice) {
    var self = this;
    self.books = bookservice.books;
    self.category = bookservice.category;
}])
app.controller('ItemController', ['bookservice', '$routeParams', function(bookservice, $routeParams) {
    var self = this;
    self.books = bookservice.books;
    self.category = bookservice.category;
    self.whichItem = $routeParams.itemId;
    self.rate = 0;
    self.max = 5;
    self.isReadonly = false;
    self.hoveringOver = function(value) {
        self.overStar = value;
    };
    self.ratingStates = [
        { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' }
    ]
}])
app.controller('cartcontroller', ['bookservice', function(bookservice) {

}])
app.controller('LoginController', function() {})