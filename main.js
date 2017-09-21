var player;

$(document).ready(function() {
  $("#screen-log-in").show();
  $(".game").hide();
  $("#startGame").click(function() {
    $("#fullName").text($("#name").val());
    $("#pseudo").text($("#username").val());
    $("#screen-log-in").hide();
    $(".game").show();
  });

  var clock = $(".your-clock").FlipClock(180, {
    countdown: true,
    clockFace: "MinuteCounter",
    autoStart: false,
    callbacks: {
      stop: function() {
        $(".game").hide();
        $(".leaderboard").show();
      }
      //interval: doStuff
    }
  });

  var inter1 = setInterval(function() {
    if (currentIndex > nokia.length) {
      clearInterval(inter1);
    }
    drawNextStep();
    updateUn();
  }, 2000);

  $(".indic").hide();
  $(".indic2").hide();

  player = new Player();
  $(".cash span").text(" " + player.cash + " €");

  $(".buy").click(function() {
    if (!player.started) {
      clock.start();
    }
    player.started = true;
    player.buy();
    player.position = "long";
    player.stockBuyingValue = data[data.length - 1][2];
    player.buyingPortfolioValue =
      data[data.length - 1][2] * player.numberOfStockInPortfolio;
    $(".buy").hide();
    $(".short").hide();
    $(".cash").hide();
    $(".sell").toggle();
    $(".indic").show();
    $(".indic2").show();
    $(".position span").text("LONG");
    $(".stockBuyingValue span").text(" " + player.stockBuyingValue + " €");
    $(".numberOfStockInPortfolio span").text(
      " " + Math.floor(player.numberOfStockInPortfolio)
    );
    setInterval(updateValues, 2000);
  });

  $(".sell").click(function() {
    player.sell();
    player.position = "";
    player.stockBuyingValue = 0;
    player.portfolioProfit = 0;
    player.portfolioValue = 0;
    player.stockSellingValue = data[data.length - 1][2];
    $(".buy").show();
    $(".short").show();
    $(".cash").show();
    $(".sell").toggle();
    $(".cash span").text(" " + player.cash.toFixed(2) + " €");
    $(".indic").hide();
  });

  $(".short").click(function() {
    if (!player.started) {
      clock.start();
    }
    player.started = true;
    player.buy();
    player.position = "short";
    player.stockBuyingValue = data[data.length - 1][2];
    player.buyingPortfolioValue =
      data[data.length - 1][2] * player.numberOfStockInPortfolio;
    $(".buy").hide();
    $(".short").hide();
    $(".cash").hide();
    $(".indic").show();
    $(".indic2").show();
    $(".cover").toggle();
    $(".cash span").text(" " + player.cash + " €");
    $(".position span").text("SHORT");
    $(".stockBuyingValue span").text(" " + player.stockBuyingValue + " €");
    $(".numberOfStockInPortfolio span").text(
      " " + Math.floor(player.numberOfStockInPortfolio)
    );
    setInterval(updateValues, 2000);
  });

  $(".cover").click(function() {
    player.sell();
    player.position = "";
    player.stockBuyingValue = 0;
    player.portfolioProfit = 0;
    player.portfolioValue = 0;
    player.stockSellingValue = data[data.length - 1][2];
    $(".buy").show();
    $(".short").show();
    $(".cash").show();
    $(".cover").toggle();
    $(".cash span").text(" " + player.cash.toFixed(2) + " €");
    $(".indic").hide();
  });
});

function updateValues() {
  player.getPositionValue();
  player.getPortfolioValue();
  player.getPortfolioProfit();
  player.getPercentProfit();
  $(".portfolioValue span").text(player.portfolioValue.toFixed(2) + " €");
  $(".positionValue span").text(player.positionValue.toFixed(2) + " €");
  $(".portfolioProfit span").text(player.portfolioProfit.toFixed(2) + " €");
  $(".percentProfit").text(player.percentProfit.toFixed(2) + " %");
}

function updateUn() {
  $("#un").text(data[data.length - 1][2] + " €");
  if (data[data.length - 1][2] > data[data.length - 2][2]) {
    $("#un").css("color", "#4CAF50");
  } else if (data[data.length - 1][2] < data[data.length - 2][2]) {
    $("#un").css("color", "#ff0000");
  } else {
    $("#un").css("color", "grey");
  }
}

//Upload picture
function uploadPic() {
  var file = $("#pic")[0].files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    $("#profile-pic").attr("src", e.target.result);
  };
  reader.readAsDataURL(file);
}
