app.controller('CategoryController', ['bookservice', 'genresservice', function(bookservice, genresservice) {
    var self = this;
    bookservice.getBook.then(function(response) {
        self.books = response.data
        self.viewby = 10;
        self.bigTotalItems = self.books.length;
        self.currentPage = 4;
        self.itemsPerPage = self.viewby;
        self.maxSize = 10;

    });
    genresservice.getGenres.then(function(response) {
        self.genres = response.data;
    })

    self.view = "block";
    self.setView = function(e) {
        self.view = e;
    };
    self.isSelectedView = function(checkview) {
        return self.view === checkview
    };
}])