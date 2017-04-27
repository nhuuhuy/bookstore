app.controller('cartcontroller', ['bookservice', function(bookservice) {
    var self = this;

    self.cart = bookservice.cart;
    self.removeCart = function(item) {
        bookservice.cart.splice(item, 1);
    };


}])