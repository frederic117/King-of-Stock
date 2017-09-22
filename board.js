var timer = 2000;
var currentIndex = 30;
var data;
function changeStock() {
  data = player.stock.slice(0, currentIndex);
  console.log("data", data);
  /*var random= Math.floor(Math.random())* rowData.length/2;
  var rowDataSample= rowData.slice(random, random + 75);
  console.log(rowDataSample);*/

  google.charts.load("current", { packages: ["corechart"] });
  // google.charts.setOnLoadCallback(drawChart);
  // function drawChart() {
  //   var interval = setInterval(function() {
  //     //drawNextStep();
  //   }, timer);
  // }
}

function drawNextStep() {
  var headerData = data.shift();
  data.shift();
  data.unshift(headerData);
  //(data[currentIndex-(currentIndex-1)]);
  data.push(player.stock[currentIndex]);
  currentIndex++;
  // if (currentIndex > player.stock.length) {
  //   clearInterval(interval);
  // }

  var chartObjectData = google.visualization.arrayToDataTable(data);

  var options = {
    legend: {
      position: "top",
      textStyle: { color: "#192b41", fontSize: 18 }
    },
    series: {
      0: { type: "candlesticks" },
      1: { type: "line" },
      2: { type: "line" }
    },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
      risingColor: {
        strokeWidth: 0,
        fill: "#0f9d58",
        stroke: "#0f9d58",
        strock: "green"
      } // green
    }
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("chart_div")
  );
  chart.draw(chartObjectData, options);
}
