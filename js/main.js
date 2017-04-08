var app = angular.module('BookApp',['ui.bootstrap']);
app.service('bookservice',function(){
	
	this.category=[
		{id:1,name:"Children Books"},
		{id:2,name:"Detective Story"},
		{id:3,name:"Romance"},
		{id:4,name:"Horror"},
		{id:5,name:"Mystery"},
		{id:6,name:"Science fiction"}
	]
	this.books =[{
		id: 1,	
		category: "Romance",
        author: "Kate Williams ",
        title: "Sayings of the Century ",
        price: 8.95,
        cover: "images/1.jpg",
        description:"In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
		},
		{id: 2,	
		category: "Detective Story",
        author: "Nigel Rees",
        title: "Sayings of the Century",
        price: 8.95,
        cover: "images/2.jpg",
        description:"In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
		},
		{id: 3,	
		category: "Horror",
        author: "Nigel Rees",
        title: "Sayings of the Century",
        price: 8.95,
        cover: "images/3.jpg",
        description:"In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
		},
		{id: 4,	
		category: "Romance",
        author: "Nigel Rees",
        title: "Sayings of the Century",
        price: 8.95,
        cover: "images/4.jpg",
         description:"In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
		},
		{
		id: 5,	
		category: "Romance",
        author: "Kate Williams ",
        title: "Sayings of the Century ",
        price: 8.95,
        cover: "images/1.jpg",
        description:"In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
		},
		{id: 6,	
		category: "Detective Story",
        author: "Nigel Rees",
        title: "Sayings of the Century",
        price: 8.95,
        cover: "images/2.jpg",
        description:"In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
		},
		{id: 7,	
		category: "Horror",
        author: "Nigel Rees",
        title: "Sayings of the Century",
        price: 8.95,
        cover: "images/3.jpg",
        description:"In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
		},
		{id: 8,	
		category: "Romance",
        author: "Nigel Rees",
        title: "Sayings of the Century",
        price: 9,
        cover: "images/4.jpg",
         description:"In 1819, a girl was born to the fourth son of King George III. No one could have expected such an unassuming, overprotected girl to be an effective ruler—yet Queen Victoria would become one of the most powerful monarchs in history."
		}]
		
})
app.controller("BooksController",['bookservice',function(bookservice){

	var self = this;
	self.books = bookservice.books;
	self.category = bookservice.category;
	self.tab ='home';
	self.selectTab = function(setTab){
		self.tab = setTab;

	};
	self.isSelectedTab = function(checkTab){
		return self.tab === checkTab
	};

}])
app.controller("carousel",function(){
	this.slides=[
		{ id : 0,
		image: "images/5.jpg",
		caption: "Sale off 50%"	
		},
		{ id: 1,
		image: "images/6.jpg",
		caption: "Free Ship"	
		},
		{ id:2,
		image: "images/7.jpg",
		caption: "New Books"	
		}];
  	this.myInterval = 3000;
  	
  	this.activeSlide = 0;
  			
})

