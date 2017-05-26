app.controller("BooksController", ['$scope', 'bookservice', '$http', '$routeParams', '$location', 'uibDateParser', 'taOptions', '$cookieStore', '$filter', function($scope, bookservice, $http, $routeParams, $location, uibDateParser, taOptions, $cookieStore, $filter) {
    var root = 'https://green-web-bookstore.herokuapp.com/';
    var config = {
        headers: {
            'Accept': 'application/json;odata=verbose',
            "x-access-token": $scope.token
        }
    }
    $scope.loaded = false;
    $scope.paging = function(obj) {

        $scope.totalItems = obj.length;
        $scope.currentPage = 1;
        $scope.itemsPerPage = 4;
        $scope.maxSize = 5;
        $scope.sortby = "title";
        $scope.$watch('sortby', function(val) {
            obj = $filter('orderBy')(obj, val);

        });



        $scope.changePage = function() {
            var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                end = begin + $scope.itemsPerPage;



            $scope.$watch('sortby', function(val) {
                $scope.filteredBooks = $filter('orderBy')($scope.filteredBooks, val);
                $scope.filteredBooks = obj.slice(begin, end);
            });
        };



        $scope.changePage();
        /*---sort--*/


    }

    $scope.getBook = function() {

        $http.get(root + 'api/books/').success(function(response) {
            $scope.books = response;
            $scope.paging($scope.books);

        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });


    };
    $scope.getInit = function() {

        $http.get(root + 'api/genres/').success(function(response) {
            $scope.genres = response;
            for (var i = 0; i < $scope.genres.length; i++) {
                if ($scope.genres[i]._id === $routeParams.genreId) {

                    $scope.text = $scope.genres[i].name;

                }
            }

            $scope.loaded = true;

        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });;
        $scope.user = $cookieStore.get('user');
        $scope.editProfile = $cookieStore.get('user');
        $scope.token = $cookieStore.get('token');
        bookservice.cart = $cookieStore.get('cart');
        $scope.cart = bookservice.cart;
        bookservice.item = $cookieStore.get('order');
        if ($scope.order !== undefined && $scope.cart !== undefined) {
            $scope.sum();
        } else {
            bookservice.cart = [];

            bookservice.item = [];
            $scope.cart = bookservice.cart;
            $scope.all.totalQty = 0;
        };


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

            $scope.myInterval = 3000;

            $scope.activeSlide = 0;


        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });
    }



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
                var rateLength = 0;
                for (var i = 0; i < $scope.book.comments.length; i++) {
                    if ($scope.book.comments[i].hasOwnProperty('rate')) {
                        rateTotal += $scope.book.comments[i].rate
                        rateLength += 1
                    }

                }

                if (rateTotal == 0) {
                    $scope.rateAvr = 4
                } else {
                    $scope.rateAvr = rateTotal / rateLength;
                }
                $scope.save = Math.round((($scope.book.previousPrice - $scope.book.sellingPrice) / $scope.book.previousPrice) * 100);

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
                $scope.paging($scope.books);
                for (var i = 0; i < $scope.genres.length; i++) {
                    if ($scope.genres[i]._id === $routeParams.genreId) {

                        $scope.text = $scope.genres[i].name;

                    }
                }



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


    /*-----Search---*/
    $scope.textSearch = $routeParams.text;
    $scope.searchBy = 'search'
    $scope.search = function() {
        $http.get(root + 'api/books/' + $scope.searchBy + '/' + $scope.textSearch).success(function(response) {

            $scope.books = response;
            $scope.paging($scope.books);
            if ($scope.books.length > 0) {
                $scope.found = true;
            } else {
                $scope.found = false
                $scope.result = "Không tìm thấy sách"
            }


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
    $scope.comment = {};
    $scope.addComment = function(post) {
            $scope.comment.createdDate = Date.now();
            $scope.comment.userId = $scope.user._id;
            $scope.comment.bookId = post._id;

            var req = {
                method: 'POST',
                url: root + 'api/books/comment',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: $scope.comment
            }
            $http(req).success(function() {
                    console.log('success');


                    $scope.comment.commentBody = "";

                    $scope.getBookId();
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
    $scope.all = bookservice.total;

    $scope.sum = function() {
        bookservice.total.totalQty = 0;
        bookservice.total.totalPrice = 0;
        for (var i = 0; i < $scope.cart.length; i++) {

            bookservice.total.totalPrice += $scope.cart[i].price * $scope.cart[i].quantity;
            bookservice.total.totalQty += $scope.cart[i].quantity;
        }





    }



    $scope.addCart = function(item) {
        if ($scope.qty > 0) {

            if (bookservice.cart.length > 0) {
                for (var i = 0; i < bookservice.cart.length; i++) {
                    if (bookservice.cart[i]._book === item._id) {
                        $scope.addedItem = true;
                        bookservice.cart[i].quantity += $scope.qty;
                        bookservice.item.quantity = bookservice.cart.quantity;
                        $cookieStore.put('cart', bookservice.cart);
                        $cookieStore.put('order', bookservice.item);
                        $scope.cart = bookservice.cart;
                    }


                }
                if ($scope.addedItem) {
                    $scope.addedItem = false;

                } else {
                    bookservice.cart.push({ _book: item._id, title: item.title, price: item.sellingPrice, image: item.images.main, quantity: $scope.qty });
                    bookservice.item.push({ _book: item._id, price: item.sellingPrice, quantity: $scope.qty });
                    console.log(item._id)
                    $cookieStore.put('order', bookservice.item);
                    $cookieStore.put('cart', bookservice.cart);
                    $scope.cart = bookservice.cart;

                }
            } else {
                bookservice.cart.push({ _book: item._id, title: item.title, price: item.sellingPrice, image: item.images.main, quantity: $scope.qty });
                bookservice.item.push({ _book: item._id, price: item.sellingPrice, quantity: $scope.qty });
                $cookieStore.put('order', bookservice.item);
                $cookieStore.put('cart', bookservice.cart);
                $scope.cart = bookservice.cart;

            }

        }
        $scope.sum();

    }






    /*------------order--------------*/
    $scope.order = {};
    $scope.order.books = [];

    $scope.checkout = function() {
        if ($scope.cart.length > 0 && $scope.all.totalPrice > 0) {

            $scope.order._user = $scope.user._id;
            $scope.order.books = bookservice.item;
            $scope.order.total = $scope.all.totalPrice;

            console.log($scope.order)

            $http.post(root + 'api/orders', $scope.order).success(function(response) {
                console.log('success');
                $cookieStore.remove('cart');
                $cookieStore.remove('order');
                bookservice.item = [];
                bookservice.cart.splice(0, bookservice.cart.length);
                $scope.all.totalPrice = 0;
                $scope.all.totalQty = 0;
                $location.url("/")
            }).error(function(data, status, headers, config) {
                console.log(data, status, headers, config);
            });



        }
    }

    $scope.changeQty = function(index) {
        bookservice.item.quantity = bookservice.cart.quantity;
        $scope.sum();
        $cookieStore.put('cart', bookservice.cart);
        $cookieStore.put('order', bookservice.item);
    }
    $scope.bills = bookservice.bills;

    $scope.removeCart = function(item) {
            console.log()

            $scope.cart.splice(item, 1);
            bookservice.item.splice(item, 1);
            $scope.all.totalPrice = 0;
            $scope.sum();
            $cookieStore.put('order', bookservice.item);
            $cookieStore.put('cart', bookservice.cart);

        }
        /*-----like------*/
    $scope.likeBook = bookservice.like;
    $scope.like = function(item) {
        var liked = true;
        if (bookservice.like.length > 0) {
            for (var i = 0; i < bookservice.like.length; i++) {

                if (bookservice.like[i]._id === item._id) {


                    bookservice.like.splice(i, 1);


                    liked = false;
                }
            }
            if (liked) {
                bookservice.like.push(item);
                bookservice.liked = true;

            }

        } else {
            bookservice.like.push(item);
            liked = true;


        }


    }


    $scope.checkLike = function(item) {
            if (bookservice.like.length > 0) {
                for (var i = 0; i < bookservice.like.length; i++) {
                    if (bookservice.like[i].sku === item.sku) {
                        return true;
                    }
                }
            }

        }
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
        $http.post(root + 'api/users/signup', $scope.signUpUser).success(function(response) {
            var isSuccess = response.success;
            if (isSuccess) {
                $cookieStore.put('token', response.token);
                $cookieStore.put('user', response.user);
                $scope.user = $cookieStore.get('user');
                $scope.token = $cookieStore.get('token');
                $scope.editProfile = $cookieStore.get('user');
                //Redirect here
                $location.url("/")
            } else {
                //Raise Error
                alert(response.message);
                $scope.errorSignup = "";
                if (response.message === "That email is already taken") {
                    $scope.errorSignup = "Email này đã được đăng ký";
                } else {
                    $scope.error = "Vui lòng kiểm tra lại form đăng ký";
                }
            }
        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });
    }
    $scope.summitLogin = function() {
        $http.post(root + 'api/users/auth', $scope.loginUser).success(function(response) {
            var isSuccess = response.success;
            if (isSuccess) {
                $cookieStore.put('token', response.token);
                $cookieStore.put('user', response.user);
                $scope.user = $cookieStore.get('user');

                $scope.token = $cookieStore.get('token');

                $scope.loginUser = {};
                $scope.error = "";
            } else {

                $scope.error = "";
                if (response.message === "Authentication failed. User not found.") {
                    $scope.error = "Không tìm thấy người dùng";
                } else if (response.message === "Authentication failed. Wrong password.") {
                    $scope.error = "Sai password vui lòng nhập lại";
                } else {
                    $scope.error = "Vui lòng kiểm tra lại tên hoặc password";
                }

            }
        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });
    }
    $scope.isLogged = function() {
        return $cookieStore.get('token') != undefined;
    }


    $scope.updateUser = function() {
        console.log($scope.editProfile)
        $http.put(root + 'api/users', $scope.editProfile).success(function(response) {

            console.log(response);
            $scope.editProfile = response.user;
            $scope.user = $scope.editProfile;

            $cookieStore.put('user', $scope.editProfile);
            $scope.user = $cookieStore.get('user');
            window.location.href = '/';
        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });
    }

    $scope.getOrder = function() {
        $http.get(root + 'api/orders').success(function(response) {
            $scope.orders = response;

        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });

    }
    $scope.getUserOder = function() {

        $http.get(root + 'api/orders/user/' + $scope.user._id).success(function(response) {
            $scope.orders = response;


        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });
    }

}])