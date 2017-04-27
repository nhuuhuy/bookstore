app.controller("MultiCarousel", ['bookservice', function(bookservice) {
    var self = this;
    bookservice.getBook.then(function(response) {
        self.slides = response.data

    });
    self.myInterval = 4000;
    self.activeSlide = 1;
}])