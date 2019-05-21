// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  // yourcalories = parseInt(sessionStorage.getItem("calories"));
  yourprotein = parseInt(sessionStorage.getItem("protein"));
  yourfats = parseInt(sessionStorage.getItem("fats"));
  yourcarbs = parseInt(sessionStorage.getItem("carbs"));
  console.log(yourcarbs);

  var data = google.visualization.arrayToDataTable([
  ['Poom', 'Isthebest'],
  // ['Calories', yourcalories],
  ['Protein', yourprotein],
  ['Fats', yourfats],
  ['Carbs', yourcarbs]
]);
  // Optional; add a title and set the width and height of the chart
  var options = {
    'width':800,
    'height':900,
    colors: ['#ce93d8', '#b39ddb', '#9575cd', '#ab47bc', '#7e57c2'],
    chartArea:{left:"60%",top:10,width:"50%",height:"50%"}
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
