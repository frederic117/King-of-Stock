var player;

$(document).ready(function() {
    $(".indic").hide();
    $(".indic2").hide();
    var inter1 = setInterval(function() {
    if (currentIndex > nokia.length) {
      clearInterval(inter1);
    }
    $("#un").text(data[data.length - 1][2]+ " €");
    if (data[data.length - 1][2]>data[data.length - 2][2]){
    $("#un").css('color','#4CAF50');
  }else if(data[data.length - 1][2]<data[data.length - 2][2]){
    $("#un").css('color','#ff0000');
  }else{
    $("#un").css('color','grey');
  }
  }, 2000);

  player = new Player();
  $(".cash span").text(" "+player.cash + " €");

  $(".buy").click(function() {
    player.buy();
    player.position= "long";
    player.stockBuyingValue = data[data.length - 1][2];
    player.buyingPortfolioValue = data[data.length - 1][2]*player.numberOfStockInPortfolio;
    $(".buy").hide();
    $(".short").hide();
    $(".cash").hide();
    $(".sell").toggle();
    $(".indic").show();
    $(".indic2").show();
    $(".position span").text("long");
    $(".stockBuyingValue span").text(" "+player.stockBuyingValue + " €");
    $(".numberOfStockInPortfolio span").text(" "+Math.floor(player.numberOfStockInPortfolio));
    setInterval(updateValues, 2000);
  });

  $(".sell").click(function() {
    player.sell();
    player.position= "";
    player.stockBuyingValue =0;
    player.portfolioProfit=0;
    player.portfolioValue=0;
    player.stockSellingValue = data[data.length - 1][2];
    $(".buy").show();
    $(".short").show();
    $(".cash").show();
    $(".sell").toggle();
    $(".cash span").text(" "+player.cash.toFixed(2)+ " €");
    $(".indic").hide();
    $(".indic2").hide();
});

  $(".short").click(function() {
    player.buy();
    player.position= "short";
    player.stockBuyingValue = data[data.length - 1][2];
    player.buyingPortfolioValue = data[data.length - 1][2]*player.numberOfStockInPortfolio;
    $(".buy").hide();
    $(".short").hide();
    $(".cash").hide();
    $(".indic").show();
    $(".indic2").show();
    $(".cover").toggle();
    $(".cash span").text(" "+player.cash+ " €");
    $(".position span").text("short");
    $(".stockBuyingValue span").text(" "+player.stockBuyingValue + " €");
    $(".numberOfStockInPortfolio span").text(" "+Math.floor(player.numberOfStockInPortfolio));
    setInterval(updateValues, 2000);
  });

  $(".cover").click(function() {
    player.sell();
    player.position= "";
    player.stockBuyingValue =0;
    player.portfolioProfit=0;
    player.portfolioValue=0;
    player.stockSellingValue = data[data.length - 1][2];
    $(".buy").show();
    $(".short").show();
    $(".cash").show();
    $(".cover").toggle();
    $(".cash span").text(" "+player.cash.toFixed(2)+ " €");
    $(".indic").hide();
    $(".indic2").hide();
  });


  function updateValues() {
    player.getPositionValue();
    player.getPortfolioValue();
    player.getPortfolioProfit();
    player.getPercentProfit();
    $(".portfolioValue span").text(player.portfolioValue.toFixed(2) + " €");
    $(".positionValue span").text(player.positionValue.toFixed(2) + " €");
    $(".portfolioProfit span").text(player.portfolioProfit.toFixed(2) + " €");
    $(".percentProfit").text(player.percentProfit.toFixed(2)+ " %");
}

});
