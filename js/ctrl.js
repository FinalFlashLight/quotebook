var module = angular.module('quotebook');

module.controller("mainCtrl", function($scope, servBook){
  $scope.quotes = servBook.getQuotes();
  $scope.deleteMe = function(text){
    servBook.removeData(text);
  }
  $scope.checkFunction = function() {
    console.log("testing")
  }
  $scope.addQuote = function(){
    
    var newQuote = {
      text:$scope.newQuoteText,
      author:$scope.newQuoteAuthor,
    }
    if(servBook.addData(newQuote))
    {
      $scope.newQuoteText='';
      $scope.newQuoteAuthor='';
    }
  };
});
