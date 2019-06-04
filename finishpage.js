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
google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawBarChart);

// Variables
yourmenu = JSON.parse(sessionStorage.getItem("menu"));
yourprotein = parseInt(sessionStorage.getItem("protein"));
yourfats = parseInt(sessionStorage.getItem("fats"));
yourcarbs = parseInt(sessionStorage.getItem("carbs"));
yourcalories = parseInt(sessionStorage.getItem("calories"));


//filter yourmenu here
var arrofdicts = [];

//
//loop through all dicts in array
//if dict.name contains that, all to the count


yourmenu.forEach(function (element) {

    var found = false
    arrofdicts.forEach(function (dict) {
        if (element.name == dict['item'].name) {
            dict.count = dict.count + 1;
            found = true;
        }
    });


    if (!found) {
        arrofdicts.push({
            item: element,
            count: 1,
        })
    }


});




// how many calories each exercise burns per minute
walkcalories = 230 / 60;
swimcalories = 500 / 60;
jogcalories = 400 / 60;
cyclecalories = 450 / 60;
// how many minutes of each exercise must be done
walktime = yourcalories / walkcalories;
swimtime = yourcalories / swimcalories;
jogtime = yourcalories / jogcalories;
cycletime = yourcalories / cyclecalories;

// var test = document.getElementById("test");
// var testDiv = document.createElement('div');
// var title = `<div>${yourcalories}</div>`

$("#test").text(yourcalories);
// testDiv.innerHTML = title;
// console.log(testDiv);
// test.appendChild(testDiv);

function displayModal() {
    document.getElementById("menuModal").style.display = "block";
}

// Draw the chart and set the chart values
function drawPieChart() {
    // yourcalories = parseInt(sessionStorage.getItem("calories"));
    var data = google.visualization.arrayToDataTable([
    ['Nutritient', 'Amount'],
    ['', 0]
  ]);


    data.addColumn({
        type: 'string',
        role: 'tooltip'
    })
    var proteinFoods = '<b>Protein: ' + yourprotein + 'g</b>' + '<br>' + '<br>';
    var proteinsum;
    var proteinpercent;

    for (var i = 0; i < arrofdicts.length; i++) {
        proteinsum = parseInt(arrofdicts[i].item.protein) * arrofdicts[i].count
        proteinpercent = ((proteinsum / yourprotein) * 100).toFixed(2);

        proteinFoods += proteinsum + "g from " + arrofdicts[i].item.name + " (" + proteinpercent + "%)" + '<br>';
    }


    data.addRow(['Protein', yourprotein, '']);


    var carbFoods = '<b>Carbs: ' + yourcarbs + 'g</b>' + '<br>' + '<br>';
    var carbsum;
    var carbpercent;

    for (var i = 0; i < arrofdicts.length; i++) {
        carbsum = parseInt(arrofdicts[i].item.carbs) * arrofdicts[i].count
        carbpercent = ((carbsum / yourcarbs) * 100).toFixed(2);


        carbFoods += carbsum + "g from " + arrofdicts[i].item.name + " (" + carbpercent + "%)" + '<br>';
    }


    data.addRow(['Carbs', yourcarbs, '']);

    var fatFoods = '<b>Fats: ' + yourfats + 'g</b>' + '<br>' + '<br>';


    var fatsum;
    var fatpercent;

    for (var i = 0; i < arrofdicts.length; i++) {
        fatsum = parseInt(arrofdicts[i].item.fats) * arrofdicts[i].count
        fatpercent = ((fatsum / yourfats) * 100).toFixed(2);


        fatFoods += fatsum + "g from " + arrofdicts[i].item.name + " (" + fatpercent + "%)" + '<br>';
    }

    data.addRow(['Fats', yourfats, '']);


    // Optional; add a title and set the width and height of the chart
    var options = {

        'width': 500,
        'height': 300,
        'fontSize': 15,
        colors: ['#a5c7eb', '#e08994', '#b55fa7'],
        chartArea: {
            left: 195,
            top: 50,
            width: '100%',
            height: '100%'
        },
        legend: {
            postion: 'top',
            alignment: 'center'
        },
        focusTarget: 'category'
    };


    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    function selectHandler() {
        var selectedItem = chart.getSelection()[0];
        if (selectedItem) {
            var value = data.getValue(selectedItem.row, 0);
            if (value === "Protein") {
                document.getElementById("content").innerHTML = proteinFoods;
            } else if (value === "Carbs") {
                document.getElementById("content").innerHTML = carbFoods;
            } else if (value === "Fats") {
                document.getElementById("content").innerHTML = fatFoods;
            }
            displayModal();
        }
    }
    function uselessHandler2() {
      $('#piechart').css('cursor','pointer')
    }
    function uselessHandler3() {
      $('#piechart').css('cursor','default')
    }

    chart.draw(data, options);

    google.visualization.events.addListener(chart, 'select', selectHandler);
    google.visualization.events.addListener(chart, 'onmouseover', uselessHandler2);
    google.visualization.events.addListener(chart, 'onmouseout', uselessHandler3);

}

// Close the modal when anywhere outside of modal is clicked
window.onclick = function (event) {
    if (event.target == document.getElementById("menuModal")) {
        document.getElementById("menuModal").style.display = "none";
    }
}

function drawBarChart() {
    // Create the data table for Anthony's pizza.
    var data = google.visualization.arrayToDataTable([
  ['Exercise', 'Minutes', {
            role: 'style'
        }],
  ['Walking', walktime, 'color: #a5c7eb'],
  ['Swimming', swimtime, 'color: #e08994'],
  ['Jogging', jogtime, 'color: #b55fa7'],
  ['Cycling', cycletime, 'color: #4d5bbd']
  ]);
    // Set options for Anthony's pie chart.
    var options = {
        title: 'How to Burn ' + yourcalories + ' calories',
        titleTextStyle: {
            color: "#5168ED",
            fontSize: "20"
        },
        // titlePosition: 'none',
        width: 750,
        height: 400,
        legend: 'none',
        hAxis: {
            title: 'Minutes',
            titleTextStyle: {
                italic: false
            }
        },
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

window.onload = function () {
    document.getElementById("calresult").innerHTML = "Calories: " + yourcalories + ' calories  ';
    document.getElementById("proresult").innerHTML = "Protein: " + yourprotein + ' g';
    document.getElementById("carbresult").innerHTML = "Carbohydrates: " + yourcarbs + ' g';
    document.getElementById("fatresult").innerHTML = "Fats: " + yourfats + ' g';
}

function uselessHandler2() {
 $('#chart_div').css('cursor','pointer')
  }
