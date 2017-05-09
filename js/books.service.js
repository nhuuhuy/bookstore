app.service('bookservice', function() {

    this.getBook = 'https://green-web-bookstore.herokuapp.com/api/books/'
    this.getGenres = 'https://green-web-bookstore.herokuapp.com/api/genres/'
    this.cart = [];
    this.user = {

        'userName': 'Nguyen Huu Huy',
        'userAvatarUrl': 'https://avatars0.githubusercontent.com/u/26504396?v=3&s=460',
        'like': []
    }

})