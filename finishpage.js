//breakfast
var scrambledeggs = {
    name: "Scrambled Eggs",
    calories: "210",
    protein: "15 g",
    carbs: "5 g",
    fats: "7 g",
    isVegan: false,
    isVeggie: true,
    isNoGluten: false,
    serving: "2 Eggs"
};

var bacon = {
    name: "Bacon",
    calories: "80",
    protein: "7 g",
    carbs: "5 g",
    fats: "11 g",
    isVegan: false,
    isVeggie: false,
    isNoGluten: true,
    serving: "1 Strip"
};

var porksausage = {
    name: "Pork Sausage",
    calories: "90",
    protein: "8 g",
    carbs: "5 g",
    fats: "6 g",
    isVegan: false,
    isVeggie: false,
    isNoGluten: false,
    serving: "1 Link"
};

var sweetpotatoes = {
    name: "Sweet Potatoes",
    calories: "110",
    protein: "2 g",
    carbs: "5 g",
    fats: "3 g",
    isVegan: true,
    isVeggie: true,
    isNoGluten: true,
    serving: "130 grams"
};

var oats = {
    name: "Oats",
    calories: "180",
    protein: "2 g",
    carbs: "20g",
    fats: "1 g",
    isVegan: true,
    isVeggie: true,
    isNoGluten: true,
    serving: "40 grams"
};

//lunch

var grilledchicken = {
    name: "Grilled Chicken",
    calories: "170",
    protein: "24 g",
    carbs: "5 g",
    fats: "4 g",
    isVegan: false,
    isVeggie: false,
    isNoGluten: true,
    serving: "1 Breast"
};

var porkloin = {
    name: "Pork Loin",
    calories: "200",
    protein: "22 g",
    carbs: "4 g",
    fats: "8 g",
    isVegan: false,
    isVeggie: false,
    isNoGluten: true,
    serving: "1 Loin"
};

var rice = {
    name: "Rice",
    calories: "130",
    protein: "1 g",
    carbs: "10 g",
    fats: "2 g",
    isVegan: true,
    isVeggie: true,
    isNoGluten: true,
    serving: "130 grams"
};

var corn = {
    name: "Corn",
    calories: "170",
    protein: "2 g",
    carbs: "18 g",
    fats: "3 g",
    isVegan: true,
    isVeggie: true,
    isNoGluten: true,
    serving: "91 grams"
};

var zucchini = {
    name: "Zucchini",
    calories: "40",
    protein: "0 g",
    carbs: "5 g",
    fats: "0 g",
    isVegan: true,
    isVeggie: true,
    isNoGluten: true,
    serving: "1 Zucchini, chopped"
};

//dinner

var salmon = {
    name: "Salmon",
    calories: "320",
    protein: "23 g",
    carbs: "8 g",
    fats: "7 g",
    isVegan: false,
    isVeggie: false,
    isNoGluten: false,
    serving: "1 Filet"
};

var alfredo = {
    name: "Alfredo",
    calories: "250",
    protein: "6 g",
    carbs: "32 g",
    fats: "5 g",
    isVegan: false,
    isVeggie: true,
    isNoGluten: true,
    serving: "200 grams"
};

var broccoli = {
    name: "Broccoli",
    calories: "40",
    protein: "1 g",
    carbs: "4 g",
    fats: "0 g",
    isVegan: true,
    isVeggie: true,
    isNoGluten: true,
    serving: "80 grams"
};

var pizza = {
    name: "Pizza",
    calories: "320",
    protein: "11 g",
    carbs: "23 g",
    fats: "17 g",
    isVegan: false,
    isVeggie: true,
    isNoGluten: false,
    serving: "1 Slice"
};

var greenbeans = {
    name: "Green Beans",
    calories: "20",
    protein: "1 g",
    carbs: "3 g",
    fats: "1 g",
    isVegan: true,
    isVeggie: true,
    isNoGluten: true,
    serving: "110 grams"
};

// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawBarChart);

// Variables
yourmenu = JSON.parse(sessionStorage.getItem("menu"));
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

// var test = document.getElementById("test");
// var testDiv = document.createElement('div');
// var title = `<div>${yourcalories}</div>`

$("#test").text(yourcalories);
// testDiv.innerHTML = title;
// console.log(testDiv);
// test.appendChild(testDiv);


// Draw the chart and set the chart values
function drawPieChart() {
  // yourcalories = parseInt(sessionStorage.getItem("calories"));
  var data = google.visualization.arrayToDataTable([
    ['Nutritient', 'Amount'],
    ['', 0]
  ]);


  data.addColumn({type: 'string', role: 'tooltip'})
  var proteinFoods = 'Protein: ' + yourprotein + 'g' + '\n';
  for (var i = 0; i < yourmenu.length; i++)
  {
    proteinFoods += '\n' + eval(yourmenu[i]).name + ':' + ' ' + eval(yourmenu[i]).protein;
  }
  data.addRow(['Protein', yourprotein, proteinFoods]);

  var carbFoods = 'Carbs: ' + yourcarbs + 'g'  + '\n';
  for (var i = 0; i < yourmenu.length; i++)
  {
    carbFoods += '\n' + eval(yourmenu[i]).name + ':' + ' ' + eval(yourmenu[i]).carbs;
  }
  data.addRow(['Carbs', yourcarbs, carbFoods]);

  var fatFoods = 'Fats: ' + yourfats + 'g'  + '\n';
  for (var i = 0; i < yourmenu.length; i++)
  {
    fatFoods += '\n' + eval(yourmenu[i]).name + ':' + ' ' + eval(yourmenu[i]).fats;
  }
  data.addRow(['Fats', yourfats, fatFoods]);


  // Optional; add a title and set the width and height of the chart
  var options = {
    'width':500,
    'height':400,
    'fontSize': 15,
    colors: ['#ce93d8', '#b39ddb', '#9575cd', '#ab47bc', '#7e57c2'],
    chartArea:{left:195,top:20, width:'100%', height:'100%'},
    legend: {postion: 'top', alignment:'center'},
    focusTarget: 'category'
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
    titleTextStyle: {color: "#4B0082", fontSize: "20"},
    // titlePosition: 'none',
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

window.onload = function() {
  document.getElementById("calresult").innerHTML = "Calories: " + yourcalories + ' calories  ';
  document.getElementById("proresult").innerHTML = "Protein: " + yourprotein + ' g';
  document.getElementById("carbresult").innerHTML = "Carbohydrates: " + yourcarbs + ' g';
  document.getElementById("fatresult").innerHTML = "Fats: " + yourfats + ' g';
/*  document.getElementById("results").innerHTML = "Calories: " + yourcalories + ' calories ' +
                                                 "             Protein: " + yourprotein + ' g ' +
                                                 "Carbohydrates: " + yourcalories + ' g ' +
                                                 "Fats: " + yourfats + ' g';*/
}
