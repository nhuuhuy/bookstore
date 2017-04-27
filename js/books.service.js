app.service('bookservice', ['$http', function($http) {

    this.getBook = $http.get("https://green-web-bookstore.herokuapp.com/api/books")

    this.cart = [];


}])