// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawBarChart);

// Variables
yourprotein = parseInt(sessionStorage.getItem("protein"));
yourfats = parseInt(sessionStorage.getItem("fats"));
yourcarbs = parseInt(sessionStorage.getItem("carbs"));
yourcalories = parseInt(sessionStorage.getItem("calories"));
// how many calories each exercise burns per minute
walkcalories = 230/60;
swimcalories = 500/60;
jogcalories = 400/60;
cyclecalories = 450/60;
// how many minutes of each exercise must be done
walktime = yourcalories/walkcalories;
swimtime = yourcalories/swimcalories;
jogtime = yourcalories/jogcalories;
cycletime = yourcalories/cyclecalories;



// Draw the chart and set the chart values
function drawPieChart() {
  // yourcalories = parseInt(sessionStorage.getItem("calories"));
  var data = google.visualization.arrayToDataTable([
  ['Nutritient', 'Amount'],
  ['Protein', yourprotein],
  ['Fats', yourfats],
  ['Carbs', yourcarbs]
]);
  // Optional; add a title and set the width and height of the chart
  var options = {
    'width':400,
    'height':300,
    colors: ['#ce93d8', '#b39ddb', '#9575cd', '#ab47bc', '#7e57c2'],
    chartArea:{left:195,top:20, width:'100%', height:'100%'}
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

function drawBarChart() {
  // Create the data table for Anthony's pizza.
  var data = google.visualization.arrayToDataTable([
  ['Exercise', 'Minutes', { role: 'style' }],
  ['Walking', walktime, 'color: #ce93d8'],
  ['Swimming', swimtime, 'color: #b39ddb'],
  ['Jogging', jogtime, 'color: #9575cd'],
  ['Cycling', cycletime, 'color: #ab47bc']
  ]);
  // Set options for Anthony's pie chart.
  var options = {
    title:'How to Burn ' + yourcalories + ' calories',
    titleTextStyle: {color: "#ab47bc"},
    width:800,
    height:300,
    legend: 'none',
    hAxis: {title: 'Minutes', titleTextStyle: { italic: false}},
    animation: {
          duration: 1000,
          easing: 'In',
          startup: true

      }
  };

  // Instantiate and draw the chart for Anthony's pizza.
  var chart = new google.visualization.BarChart(document.getElementById('barchart'));
  chart.draw(data, options);
}
