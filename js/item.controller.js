app.controller('ItemController', ['bookservice', 'genresservice', '$routeParams', function(bookservice, genresservice, $routeParams) {
    var self = this;
    bookservice.getBook.then(function(response) {
        self.books = response.data;
        self.whichItem = $routeParams.itemId;
    });
    genresservice.getGenres.then(function(response) {
        self.genres = response.data;
    })

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