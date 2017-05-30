var module = angular.module("quotebook");

module.service("servBook", function(){

  //returns a quote object
  //has 2 properties
  //text: "string"
  //author: "string"
  this.getRandomQuote = function(){
    var num = math.floor(math.Random() * quotes.length);
    return quotes[num];
  };

  //returns the full quote array
  this.getQuotes = function(){
    return quotes;
  }

  //needs to be given as an object
  //with properties of
  //text: "string"
  //author: "string"
  this.addData = function(quote){
    quotes.push(quote);
    return true;
  };


  //takes in a quote, and removes the quotes with the text
  //input string must be exact.
  this.removeData = function(str){
    for(var k = 0; k < quotes.length; ++k){
      if(quotes[k].text === str){
        quotes.splice(k, 1);
      }
    }
  }









  var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];
});
