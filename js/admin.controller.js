app.controller('AdminController', ['bookservice', 'genresservice', function(bookservice, genresservice) {
    var self = this;

    bookservice.getBook.then(function(response) {
        self.books = response.data
    });
    genresservice.getGenres.then(function(response) {
        self.genres = response.data;
    })
    self.tab = 'addbook';
    self.selectTab = function(setTab) {
        self.tab = setTab;

    };
    self.isSelectedTab = function(checkTab) {
        return self.tab === checkTab
    };

}])