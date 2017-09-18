$(document).ready(function() {
  stock = new Stock();


function Stock(){
  this.stockBuyingValue=0;
  this.portfolioValue =10000;
  this.positionValue=0;
  this.stockValue=0;
  this.percentProfit=0;
  this.euroProfit=0;
  this.position =''; //short or long

}

Stock.prototype.stockBuyingValue = function () {
      $(".buy").on("click", function() {
      $(".buy").hidden();
      $(".Short").hidden();
      $(".Sell").toggle();
    this.stockBuyingValue = data[currentIndex][2];
  }
);};

  /*
Stock in portfolio = this.portfolio / buying stock Value
%PROFIT = (Stock value of the day / buying Stock value)-1
€profit = this.portfolio * %PROFIT

if long
current protfolio value = buying stock Value + Stock Value of the day

if Short
current portfolio value = Stock Value of the day -  buying stock Value


*/
});
