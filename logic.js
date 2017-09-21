function Player() {
  this.cash = 10000;
  this.position = ""; //short or long
  this.buyingPortfolioValue = 0;
  this.portfolioValue = 0;
  this.stockBuyingValue = 0;
  this.numberOfStockInPortfolio = 0;
  this.positionValue = 0;
  this.percentProfit = 0;
  this.portfolioProfit = 0;
  this.stockSellingValue = 0;
  this.started = false;
}

Player.prototype.buy = function() {
  this.stockBuyingValue = data[data.length - 1][2];
  this.numberOfStockInPortfolio = this.cash / this.stockBuyingValue;
  this.cash = 0;
};

Player.prototype.sell = function() {
  this.stockSellingValue = data[data.length - 1][2];
  this.cash = this.portfolioValue;
  this.stockBuyingValue = "";
  this.numberOfStockInPortfolio = "";
};

Player.prototype.getNumberOfStockInPortfolio = function() {
  if (this.position === "short" || this.position === "long") {
    this.numberOfStockInPortfolio = this.cash / this.stockBuyingValue;
    return this.numberOfStockInPortfolio;
  } else {
    this.numberOfStockInPortfolio = 0;
  }
};

Player.prototype.getPositionValue = function() {
  if (this.position === "short" || this.position === "long") {
    this.positionValue =
      data[data.length - 1][2] * this.numberOfStockInPortfolio;
    return this.positionValue;
  } else {
    this.positionValue = 0;
  }
};

Player.prototype.getPortfolioValue = function() {
  if (this.position === "long") {
    this.portfolioValue = this.positionValue;
    return this.portfolioValue;
  } else if (this.position === "short") {
    this.portfolioValue =
      2 * this.stockBuyingValue * this.numberOfStockInPortfolio -
      this.positionValue;
    return this.portfolioValue;
  } else {
    return this.portfolioValue;
  }
};

Player.prototype.getPercentProfit = function() {
  this.percentProfit = this.portfolioValue * 100 / this.buyingPortfolioValue;
  return this.percentProfit;
};

Player.prototype.getPortfolioProfit = function() {
  this.portfolioProfit =
    this.portfolioValue - this.stockBuyingValue * this.numberOfStockInPortfolio;
  return this.portfolioProfit;
};

Player.prototype.gameOver = function() {};
