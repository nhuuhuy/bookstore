app.controller("BooksController", ['$scope', 'bookservice', '$http', '$routeParams', function($scope, bookservice, $http, $routeParams) {

    $scope.getBook = function() {
        $http.get(bookservice.getBook).success(function(response) {
            $scope.books = response;
            $scope.viewby = 10;
            $scope.bigTotalItems = $scope.books.length;
            $scope.currentPage = 4;
            $scope.itemsPerPage = $scope.viewby;
            $scope.maxSize = 10;

        })
    };
    $scope.getGenres = function() {
        $http.get(bookservice.getGenres).success(function(response) {
            $scope.genres = response
        })
    };
    $scope.slides = [{
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
    $scope.myInterval = 3000;

    $scope.activeSlide = 0;


    $scope.view = "block";
    $scope.setView = function(e) {
        $scope.view = e;
    };
    $scope.isSelectedView = function(checkview) {
        return $scope.view === checkview
    };
    $scope.getBookId = function() {
        $http.get(bookservice.getBook + $routeParams.itemId).success(function(response) {
            $scope.book = response;
        })
    }
    $scope.rate = 0;
    $scope.max = 5;
    $scope.isReadonly = false;
    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
    };
    $scope.ratingStates = [
        { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' }
    ];
    $scope.getGerneId = function() {
        $http.get(bookservice.getBook + 'genre/' +
            $routeParams.genreId).success(function(response) {
            $scope.genreBook = response;
            $scope.bigTotalItems = $scope.genreBook.length;
        })
    }
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.options = {
        customClass: getDayClass,
        minDate: null,
        showWeeks: true
    };
    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date(tomorrow);
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [{
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }
    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };
    $scope.popup1 = {
        opened: false
    };


    // $scope.addCart = function(item) {
    //     if (bookservice.cart.length > 0) {
    //         for (var i = 0; i < bookservice.cart.length; i++) {
    //             if (bookservice.cart[i].sku === item.sku) {
    //                 $scope.addedItem = true;
    //                 bookservice.cart[i].qty++;
    //             }
    //         }
    //         if ($scope.addedItem) {
    //             console.log(bookservice.cart);
    //         } else {
    //             bookservice.cart.push({ id: item.sku, title: item.title, cover: item.images.main, price: item.sellingPrice, qty: 1 });
    //         }
    //     } else {
    //         bookservice.cart.push({ id: item.sku, title: item.title, cover: item.images.main, price: item.sellingPrice, qty: 1 });
    //     }
    //     $scope.total = 0;
    //     for (var i = 0; i < bookservice.cart.length; i++) {
    //         $scope.total += parseFloat(bookservice.cart[i].price) * parseFloat(bookservice.cart[i].qty);
    //         console.log($scope.total)
    //     }

    // }
    // $scope.cart = bookservice.cart;
    // $scope.removeCart = function(item) {
    //     bookservice.cart.splice(item, 1);
    // }
}])