app.service('genresservice', ['$http', function($http) {
    this.getGenres = $http.get("http://green-web-bookstore.herokuapp.com/api/genres")
}])