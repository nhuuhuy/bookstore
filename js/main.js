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
    ];
    this.cart = [];
    this.checkout = 0;

})
app.controller("BooksController", ['bookservice', function(bookservice) {

    var self = this;
    self.books = bookservice.books;
    self.category = bookservice.category;

    self.addCart = function(item) {
        if (bookservice.cart.length > 0) {
            for (var i = 0; i < bookservice.cart.length; i++) {
                if (bookservice.cart[i].id === item.id) {
                    self.addedItem = true;
                    bookservice.cart[i].qty++;
                }
            }
            if (self.addedItem) {
                console.log(bookservice.cart);
            } else {
                bookservice.cart.push({ id: item.id, title: item.title, cover: item.cover, price: item.price, qty: 1 });
            }
        } else {
            bookservice.cart.push({ id: item.id, title: item.title, cover: item.cover, price: item.price, qty: 1 });
        }
        self.total = 0;
        for (var i = 0; i < bookservice.cart.length; i++) {
            self.total += parseFloat(bookservice.cart[i].price) * parseFloat(bookservice.cart[i].qty);
            console.log(self.total)
        }
        bookservice.cart.checkout = self.total;
    }
    self.cart = bookservice.cart;
    self.removeCart = function(item) {
        bookservice.cart.splice(item, 1);
    }
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
    self.maxSize = 10;
    self.view = "block";
    self.setView = function(e) {
        self.view = e;
    };
    self.isSelectedView = function(checkview) {
        return self.view === checkview
    };
}])
app.controller('AdminController', ['bookservice', function(bookservice) {
    var self = this;
    self.books = bookservice.books;
    self.category = bookservice.category;
    self.tab = 'addbook';
    self.selectTab = function(setTab) {
        self.tab = setTab;

    };
    self.isSelectedTab = function(checkTab) {
        return self.tab === checkTab
    };

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
    var self = this;
    self.cart = bookservice.cart;
    self.removeCart = function(item) {
        bookservice.cart.splice(item, 1);
    };
    self.sum = bookservice.cart.checkout;

}])
app.controller('LoginController', function() {
    var self = this;
    self.tab = 'login';
    self.selectTab = function(setTab) {
        self.tab = setTab;

    };
    self.isSelectedTab = function(checkTab) {
        return self.tab === checkTab
    };

})
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