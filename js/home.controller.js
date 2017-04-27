app.controller("BooksController", ['bookservice', 'genresservice', function(bookservice, genresservice) {
    var self = this;
    // var getBook = bookservice.getBook();
    bookservice.getBook.then(function(response) {
        self.books = response.data
    });
    genresservice.getGenres.then(function(response) {
        self.genres = response.data;
    })

    self.addCart = function(item) {
        if (bookservice.cart.length > 0) {
            for (var i = 0; i < bookservice.cart.length; i++) {
                if (bookservice.cart[i].sku === item.sku) {
                    self.addedItem = true;
                    bookservice.cart[i].qty++;
                }
            }
            if (self.addedItem) {
                console.log(bookservice.cart);
            } else {
                bookservice.cart.push({ id: item.sku, title: item.title, cover: item.images.main, price: item.sellingPrice, qty: 1 });
            }
        } else {
            bookservice.cart.push({ id: item.sku, title: item.title, cover: item.images.main, price: item.sellingPrice, qty: 1 });
        }
        self.total = 0;
        for (var i = 0; i < bookservice.cart.length; i++) {
            self.total += parseFloat(bookservice.cart[i].price) * parseFloat(bookservice.cart[i].qty);
            console.log(self.total)
        }

    }
    self.cart = bookservice.cart;
    self.removeCart = function(item) {
        bookservice.cart.splice(item, 1);
    }
}])
app.controller("carousel", function() {
    this.slides = [{
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
    this.myInterval = 3000;

    this.activeSlide = 0;


})