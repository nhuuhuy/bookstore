app.controller("BooksController", ['$scope', 'bookservice', '$http', '$routeParams', '$location', 'uibDateParser', 'taOptions', '$cookieStore', function($scope, bookservice, $http, $routeParams, $location, uibDateParser, taOptions, $cookieStore) {
    var root = 'https://green-web-bookstore.herokuapp.com/';
    var config = {
        headers: {
            'Accept': 'application/json;odata=verbose',
            "x-access-token": $scope.token
        }
    }

    $scope.paging = function() {

        $scope.totalItems = $scope.books.length;
        $scope.currentPage = 1;
        $scope.itemsPerPage = 4;
        $scope.maxSize = 5;
        $scope.changePage = function() {
            var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                end = begin + $scope.itemsPerPage;

            $scope.filteredBooks = $scope.books.slice(begin, end);
        };
        $scope.changePage();
    }

    $scope.getBook = function() {
        // var url = $location.path();
        // if (url == "/category/" + $routeParams.genreId) {
        //     $http.get(root + 'api/books/' + 'genre/' +
        //         $routeParams.genreId).success(function(response) {
        //         $scope.books = response;

        //         for (var i = 0; i < $scope.genres.length; i++) {
        //             if ($scope.genres[i]._id === $routeParams.genreId) {

        //                 $scope.text = $scope.genres[i].name;

        //             }
        //         }
        //         $scope.paging();
        //         console.log($location.path())

        //     }).error(function(data, status, headers, config) {
        //         console.log(data, status, headers, config);
        //     });
        // } else {
        $http.get(root + 'api/books/').success(function(response) {
            $scope.books = response;
            $scope.paging();

        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });


    };
    $scope.getInit = function() {

        $http.get(root + 'api/genres/').success(function(response) {
            $scope.genres = response;


        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });;
        $scope.user = $cookieStore.get('user');
        $scope.token = $cookieStore.get('token');
        $scope.loadLogin = function() {
            var token = $cookieStore.get('token');
            if (token !== undefined) {
                $location.url("/")
            }
        }

    };
    /*-------carousel---------- */
    $scope.getSlide = function() {
        $http.get(root + "api/banners/").success(function(response) {
            $scope.slides = response;
            console.log($scope.slides);

        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });
    }


    $scope.myInterval = 3000;

    $scope.activeSlide = 0;

    /*-------Block/list---------- */
    $scope.view = "block";
    $scope.setView = function(e) {
        $scope.view = e;
    };
    $scope.isSelectedView = function(checkview) {
        return $scope.view === checkview
    };
    $scope.getBookId = function() {
            $http.get(root + 'api/books/' + $routeParams.itemId).success(function(response) {
                $scope.book = response;
                $scope.imageSrc = $scope.book.images.main;
                $scope.book.createDate = new Date($scope.book.createDate);
                $scope.book.releaseDate = new Date($scope.book.releaseDate);
                var rateTotal = 0;

                for (var i = 0; i < $scope.book.comments.length; i++) {
                    rateTotal += $scope.book.comments[i].rate
                }

                if (rateTotal == 0) {
                    $scope.rateAvr = 4
                } else {
                    $scope.rateAvr = rateTotal / $scope.book.comments.length;
                }
                $scope.save = Math.ceil($scope.book.previousPrice / $scope.book.sellingPrice) * 10;

            }).error(function(data, status, headers, config) {
                console.log(data, status, headers, config);
            });

        }
        /*-----rate ---*/

    $scope.max = 5;
    $scope.isReadonly = false;
    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
    };
    $scope.ratingStates = [
        { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' }
    ];
    /*-----Gernebook ---*/
    $scope.getGerneId = function() {
            $http.get(root + 'api/books/' + 'genre/' +
                $routeParams.genreId).success(function(response) {
                $scope.books = response;

                for (var i = 0; i < $scope.genres.length; i++) {
                    if ($scope.genres[i]._id === $routeParams.genreId) {

                        $scope.text = $scope.genres[i].name;

                    }
                }
                $scope.paging();
                console.log($location.path())

            }).error(function(data, status, headers, config) {
                console.log(data, status, headers, config);
            });
        }
        /*---date----*/




    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };
    $scope.popup1 = {
        opened: false
    };
    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };
    $scope.popup2 = {
        opened: false
    };

    /*---sort--*/
    $scope.sortby = "title";
    /*-----Search---*/
    $scope.textSearch = $routeParams.text;
    $scope.searchBy = 'search'
    $scope.search = function() {
        $http.get(root + 'api/books/' + $scope.searchBy + '/' + $scope.textSearch).success(function(response) {

            $scope.books = response;
            if ($scope.books.length > 0) {
                $scope.found = true;
            } else {
                $scope.found = false
                $scope.result = "Không tìm thấy sách"
            }
            $scope.paging();

            console.log($scope.books)
        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });
    }
    $scope.submitSearch = function() {
            console.log(root + 'api/books/' + $scope.searchBy + '/' + $scope.textSearch)
            $location.url('/search/' + $scope.textSearch);
        }
        /*---------comment----*/
        // $scope.user = {

    //     'userName': 'Nguyen Huu Huy',
    //     'userAvatarUrl': 'https://avatars0.githubusercontent.com/u/26504396?v=3&s=460',
    //     'like': []
    // }


    $scope.comment = {};
    $scope.addComment = function(post) {
            $scope.comment.createdDate = Date.now();
            $scope.comment.userId = $scope.user._id;
            $scope.comment.bookId = post._id;
            // $scope.comment.userAvatarUrl = $scope.user.avatarUrl;
            post.comments.push($scope.comment);
            var req = {
                method: 'POST',
                url: root + 'api/books/comment',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: $scope.comment
            }
            $http(req).then(function() {
                    console.log('success')
                },

                function() {
                    console.log('error')
                });
            // $http.put(bookservice.getBook + $routeParams.itemId, $scope.post).success(function(response) {
            //     console.log('success')
            // });

            console.log(post.comments);

        }
        /*------------add book -------------*/

    $scope.addBook = function() {
            console.log($scope.book);
            $http.post(root + 'api/books/', $scope.book).success(function(response) {
                console.log("success");
            }).error(function(data, status, headers, config) {
                console.log(data, status, headers, config);
            });
        }
        /*---------update book------*/
    $scope.updateBook = function() {


            $http.put(root + 'api/books/' + $routeParams.itemId, $scope.book).success(function(response) {
                console.log('success')
            }).error(function(data, status, headers, config) {
                console.log(data, status, headers, config);
            });
        }
        /*---------Remove book--------*/
    $scope.removeBook = function(id) {
        $scope.books.splice(id, 1);
        console.log(root + 'api/books/' + id);
        $http.delete(root + 'api/books/' + id).success(function() {
            console.log('success')
        })

    }

    /*--------Cart ---------*/



    $scope.qty = 1;

    $scope.addCart = function(item) {
        if ($scope.qty > 0) {

            if (bookservice.cart.length > 0) {
                for (var i = 0; i < bookservice.cart.length; i++) {
                    if (bookservice.cart[i].item.sku === item.sku) {
                        $scope.addedItem = true;
                        bookservice.cart[i].qty += $scope.qty;
                        bookservice.item[i].qty += $scope.qty;
                    }


                }
                if ($scope.addedItem) {
                    $scope.addedItem = false;

                } else {
                    bookservice.cart.push({ item, qty: 1 });
                    bookservice.item.push({ item, qty: 1 });
                }
            } else {
                bookservice.cart.push({ item, qty: $scope.qty });
                bookservice.item.push({ item, qty: $scope.qty });
            }

        }



    }
    $scope.cart = bookservice.cart;

    /*------------Bill--------------*/
    $scope.total = 0;
    $scope.sum = function() {
        for (var i = 0; i < bookservice.cart.length; i++) {
            $scope.total += bookservice.cart[i].item.sellingPrice * bookservice.cart[i].qty;

        }
    }
    $scope.sum();
    $scope.bill = {};

    $scope.checkout = function() {
        if ($scope.cart.length > 0) {
            $scope.bill.items = bookservice.item;
            $scope.bill.date = Date.now();
            $scope.bill.total = $scope.total;
            bookservice.bills.push($scope.bill);
            console.log(bookservice.bills)
            bookservice.item = [];
            bookservice.cart.splice(0, bookservice.cart.length);
            $scope.total = 0;


        }
    }
    $scope.changeQty = function(index) {
        bookservice.item[index].qty = bookservice.cart[index].qty;
        $scope.total = 0;
        $scope.sum();
    }
    $scope.bills = bookservice.bills;

    $scope.removeCart = function(item) {
            console.log(item.qty)

            bookservice.cart.splice(item, 1);
            bookservice.item.splice(item, 1);
            $scope.total = 0;
            $scope.sum();

        }
        /*-----like------*/

    // $scope.like = function(item) {
    //     bookservice.liked = true;
    //     if (bookservice.user.like.length > 0) {
    //         for (var i = 0; i < bookservice.user.like.length; i++) {

    //             if (bookservice.user.like[i].sku === item.sku) {


    //                 bookservice.user.like.splice(i, 1);

    //                 console.log(bookservice.user.like);
    //                 bookservice.liked = false;
    //             }
    //         }
    //         if (bookservice.liked) {
    //             bookservice.user.like.push(item);
    //             bookservice.liked = true;

    //         }

    //     } else {
    //         bookservice.user.like.push(item);
    //         bookservice.liked = true;
    //         console.log(bookservice.user.like)

    //     }



    // }
    // $scope.user = bookservice.user;
    // $scope.checkLike = function(item) {
    //         if (bookservice.user.like.length > 0) {
    //             for (var i = 0; i < bookservice.user.like.length; i++) {
    //                 if (bookservice.user.like[i].sku === item.sku) {
    //                     return true;


    //                 }
    //             }
    //         }

    //     }
    /*-------WYSIWYG-------------*/
    $scope.disabled = false;
    taOptions.toolbar = [
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote', 'bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear', 'justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent', 'html', 'insertImage', 'insertLink', 'insertVideo']

    ];
    $scope.tab = 'login';
    $scope.selectTab = function(setTab) {
        $scope.tab = setTab;

    };
    $scope.isSelectedTab = function(checkTab) {
        return $scope.tab === checkTab
    };

    /*------User-----------*/

    $scope.logOut = function() {
        $cookieStore.remove('token');
        $cookieStore.remove('user');
        $location.url("/")
    }

    $scope.viewProfile = function() {
        var token = $cookieStore.get('token');
        if (token === undefined) {
            $location.url("/#")
        }
    }
    $scope.summitSignup = function() {
        $http.post(root + 'api/signup/', $scope.signUpUser).success(function(response) {
            var isSuccess = response.success;
            if (isSuccess) {
                $cookieStore.put('token', response.token);
                $cookieStore.put('user', response.user);
                $scope.user = $cookieStore.get('user');
                $scope.token = $cookieStore.get('token');
                //Redirect here
                $location.url("/")
            } else {
                //Raise Error
                alert(response.message);
            }
        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });
    }
    $scope.summitLogin = function() {
        $http.post(root + 'api/auth', $scope.loginUser).success(function(response) {
            var isSuccess = response.success;
            if (isSuccess) {
                $cookieStore.put('token', response.token);
                $cookieStore.put('user', response.user);
                $scope.user = $cookieStore.get('user');

                $scope.token = $cookieStore.get('token');
                //Redirect here
                $location.url("/#")
                $scope.loginUser = {};
                $scope.error = "";
            } else {
                //Raise Error
                // alert(response.message);
                $scope.error = "";
                if (response.message === "Authentication failed. User not found.") {
                    $scope.error = "Không tìm thấy người dùng";
                } else if (response.message === "Authentication failed. Wrong password.") {
                    $scope.error = "Sai password vui lòng nhập lại";
                } else {
                    $scope.error = "";
                }

            }
        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });;
    }
    $scope.isLogged = function() {
        return $cookieStore.get('token') != undefined;
    }
    $scope.viewLogin = function() {
        var token = $cookieStore.get('token');
        if (token !== undefined) {
            $location.url("/")
        }
    }
    console.log($scope.user)
    $scope.show = false;
}])