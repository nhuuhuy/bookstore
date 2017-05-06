app.controller('LoginController', function() {
    var self = this;
    self.tab = 'login';
    self.selectTab = function(setTab) {
        self.tab = setTab;

    };
    self.isSelectedTab = function(checkTab) {
        return self.tab === checkTab
    };

})