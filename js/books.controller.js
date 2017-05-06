app.controller("BooksController", ['$scope', 'bookservice', '$http', '$routeParams', '$location', function($scope, bookservice, $http, $routeParams, $location) {

                $scope.getBook = function() {
                    $http.get(bookservice.getBook).success(function(response) {
                        $scope.books = response;
                        $scope.viewby = 5;
                        $scope.totalItems = $scope.books.length;
                        $scope.currentPage = 1;
                        $scope.itemsPerPage = $scope.viewby;
                        $scope.maxSize = 10;
                        $scope.pageCount = function() {
                            return Math.ceil($scope.books.length / $scope.itemsPerPage);
                        };
                        $scope.$watch('currentPage + itemsPerPage', function() {
                            var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                                end = begin + $scope.itemsPerPage;

                            $scope.filteredBooks = $scope.books.slice(begin, end);
                        });

                    })
                };
                $scope.getGenres = function() {
                   
                    $http.get(bookservice.getGenres).success(function(response) {
                        $scope.genres = response;
                        
                    })
                   
                };
                /*-------carousel---------- */
                $scope.getSlide =function(){
                      $http.get("http://green-web-bookstore.herokuapp.com/api/banners/").success(function(response){
                          $scope.slides = response;
                          console.log( $scope.slides );
                         
                      })
                }


                // $scope.slides = [{
                //         id: 0,
                //         image: "images/5.jpg",
                //         caption: "Sale off 50%"
                //     },
                //     {
                //         id: 1,
                //         image: "images/6.jpg",
                //         caption: "Free Ship"
                //     },
                //     {
                //         id: 2,
                //         image: "images/7.jpg",
                //         caption: "New Books"
                //     }
                // ];
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
                        $http.get(bookservice.getBook + $routeParams.itemId).success(function(response) {
                            $scope.book = response;
                            var rateTotal = 0;
                            $scope.book.comments.rate;
                            for (var i = 0; i < $scope.book.comments.length; i++) {
                                rateTotal += $scope.book.comments[i].rate
                            }
                           
                            if(rateTotal==0){
                                 $scope.rateAvr =4
                            }else{
                                 $scope.rateAvr = rateTotal / $scope.book.comments.length;
                            }
                        })
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
                        $http.get(bookservice.getBook + 'genre/' +
                            $routeParams.genreId).success(function(response) {
                            $scope.genreBook = response;
                    
                        })
                    }
                    /*---date----*/
                    // $scope.today = function() {
                    //     $scope.dt = new Date();
                    // };
                    // $scope.today();




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

                /*---validate--*/
                $scope.submitForm = function() {

                    }
                    /*-----Search---*/
                $scope.textSearch = $routeParams.text;
                $scope.searchBy = 'search'
                $scope.search = function() {
                    $http.get(bookservice.getBook + $scope.searchBy + '/' + $scope.textSearch).success(function(response) {
                        $scope.searchBook = response;
                        $scope.bigTotalItems = $scope.searchBook.length;
                    })
                }
                $scope.submitSearch = function() {
                        console.log(bookservice.getBook + $scope.searchBy + '/' + $scope.textSearch)
                        window.location.href = '#/search/' + $scope.textSearch;
                    }
                    /*---------comment----*/
                $scope.user = {

                    'userName': 'Nguyen Huu Huy',
                    'userAvatarUrl': 'https://avatars0.githubusercontent.com/u/26504396?v=3&s=460',
                    'like': []
                }


                $scope.comment = {};
                $scope.addComment = function(post) {
                        $scope.comment.date = Date.now();
                        $scope.comment.userName = $scope.user.userName;
                        $scope.comment.userAvatarUrl = $scope.user.userAvatarUrl;
                        post.comments.push($scope.comment);
                        var req = {
                            method: 'PUT',
                            url: bookservice.getBook + $routeParams.itemId,
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: post
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

                        console.log(post);

                    }
                    /*------------add book -------------*/
                $scope.addBook = function() {
                        console.log($scope.book);
                        var reqBook = {
                            method: 'POST',
                            url: bookservice.getBook,
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: $scope.book
                        }
                        $http(reqBook).then(function() {
                            console.log('success')
                        })

                        // $http.post(root + '/api/books/', $scope.book).success(function(response) {
                        //     window.location.href = '#/books';
                        // });
                    }
                    /*---------update book------*/
                $scope.updateBook = function() {
                        console.log($scope.book);
                        var reqBook = {
                            method: 'PUT',
                            url: bookservice.getBook + $routeParams.itemId,
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: $scope.book
                        }
                        $http(reqBook).then(function() {
                            console.log('success')
                        })

                    }
                    /*---------Remove book--------*/
                $scope.removeBook = function(id) {
                    console.log(bookservice.getBook + id);
                    $http.delete(bookservice.getBook + id).success(function() {
                            console.log('success')
                        })
                }

                        /*--------Cart ---------*/


                        $scope.addCart = function(item) {
                            if (bookservice.cart.length > 0) {
                                for (var i = 0; i < bookservice.cart.length; i++) {
                                    if (bookservice.cart[i].item.sku === item.sku) {
                                        $scope.addedItem = true;
                                        bookservice.cart[i].qty++;

                                    }


                                }
                                if ($scope.addedItem) {
                                    $scope.addedItem = false;

                                } else {
                                    bookservice.cart.push({ item, qty: 1 });
                                }
                            } else {
                                bookservice.cart.push({ item, qty: 1 });
                            }


                        }

                        $scope.cart = bookservice.cart;

                        $scope.removeCart = function(item) {
                            bookservice.cart.splice(item, 1);
                        }
                        $scope.total = function(){
                            for(var i=0; i< $scope.cart.length;i++){

                            }
                        } 
                        /*-----like------*/
                        $scope.like = function(item) {

                            if (bookservice.user.like.length > 0) {
                                for (var i = 0; i < bookservice.user.like.length; i++) {
                                    if (bookservice.user.like[i].sku === item.sku) {
                                            $scope.btnId =0;
                                        bookservice.user.like.splice(bookservice.user.like[i], 1);
                                        console.log(bookservice.user.like);
                                         
                                        bookservice.liked = false;
                                    }
                                }
                                if (bookservice.liked) {
                                    bookservice.user.like.push(item);
                                    bookservice.liked = true;
                                    $scope.btnId =item.sku;
                                }

                            } else {
                                bookservice.user.like.push(item);
                                bookservice.liked = true;
                                console.log(bookservice.user.like)
                                 $scope.btnId =item.sku;
                            }
                     
                            
                                           
                 }
                        $scope.user = bookservice.user;
            // Slide

                          
                    }])