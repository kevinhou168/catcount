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

var totalcal = 0;
var totalprotein = 0;
var totalfats = 0;
var totalcarbs = 0;

// meal times
var breakfast = [scrambledeggs, bacon, porksausage, sweetpotatoes, oats];

var lunch = [grilledchicken, porkloin, rice, corn, zucchini];

var dinner = [salmon, alfredo, broccoli, pizza, greenbeans];

$(document).ready(function () {




    for (var i = 0; i < breakfast.length; i++) {
        var menu = `<option class="food_option" value="${i}" data-toggle="modal" data-target="#foodModal">${
      breakfast[i].name
    }</option>`;
        $("#selection").append(menu);
    }

    $("#breakfast").change(function () {
        $("#selection .food_option").remove();
        console.log("breakfast pressed");

        if ($(this).is(":checked")) {
            for (var i = 0; i < breakfast.length; i++) {
                var menu = `<option class="food_option" value="${i}" data-toggle="modal" data-target="#foodModal">${
          breakfast[i].name
        }</option>`;
                $("#selection").append(menu);
            }
        }
    });

    $("#lunch").change(function () {
        $("#selection .food_option").remove();
        console.log("lunch pressed");

        if ($(this).is(":checked")) {
            for (var i = 0; i < lunch.length; i++) {
                var menu = `<option class="food_option" value="${i}" data-toggle="modal" data-target="#foodModal">${
          lunch[i].name
        }</option>`;
                $("#selection").append(menu);
            }
        }
    });

    $("#dinner").change(function () {
        $("#selection .food_option").remove();
        console.log("dinner pressed");

        if ($(this).is(":checked")) {
            for (var i = 0; i < dinner.length; i++) {
                var menu = `<option class="food_option" value="${i}" data-toggle="modal" data-target="#foodModal">${
          dinner[i].name
        }</option>`;
                $("#selection").append(menu);
            }
        }
    });


    //search box
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#selection option").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


    $("#selection").click(function () {
        var selected_menu = parseInt($("#selection option:selected").val());
        var selected_meal = eval($("input[name=options]:checked").attr("id"));


        $("#foodName").html(selected_meal[selected_menu].name);
        $(servingText).html(
            "Serving Size: " + selected_meal[selected_menu].serving
        );

        $(foodCalories).html("Calories: " + selected_meal[selected_menu].calories);
        $(foodProtein).html("Protein: " + selected_meal[selected_menu].protein);
        $(foodCarbs).html("Carbs: " + selected_meal[selected_menu].carbs);
        $(foodFats).html("Fats: " + selected_meal[selected_menu].fats);
    });


    $("#add-item").click(function () {

        var servingSize = document.getElementById("stufftoadd").value;

        var selected_menu = parseInt($("#selection option:selected").val());
        var selected_meal = eval($("input[name=options]:checked").attr("id"));

        totalcal = totalcal + parseInt(selected_meal[selected_menu].calories) * servingSize;
        sessionStorage.setItem("calories", JSON.stringify(totalcal));

        totalprotein = totalprotein + parseInt(selected_meal[selected_menu].protein) * servingSize;
        sessionStorage.setItem("protein", JSON.stringify(totalprotein));

        totalfats = totalfats + parseInt(selected_meal[selected_menu].fats) * servingSize;
        sessionStorage.setItem("fats", JSON.stringify(totalfats));

        totalcarbs = totalcarbs + parseInt(selected_meal[selected_menu].carbs) * servingSize;
        sessionStorage.setItem("carbs", JSON.stringify(totalcarbs));


        $("#calories").html("Calories: " + totalcal + " cal");
        $("#protein").html("Protein: " + totalprotein + " g");
        $("#fats").html("Fats: " + totalfats + " g");
        $("#carbs").html("Carbohydrate: " + totalcarbs + " g");

        var food =
            "<li><span><i class='fa fa-trash '></i></span>" +
            $("#selection option:selected").text() +
            " (" +
            servingSize +
            ")</li>";

        $("#food-list").append(food);
        // defaults back to 1
        document.getElementById("stufftoadd").value = 1;
    });

    $("#close-item").click(function () {
        document.getElementById("stufftoadd").value = 1;
    });

    //remove item from list
    $("ul").on("click", "span", function (event) {
        $(this)
            .parent()
            .fadeOut(500, function () {
                foodName = $(this).text();
                foodName_small = foodName.replace(/ +/g, "").toLowerCase();
                remove_number = foodName_small.split("(")[0];
                serving_size_rough = foodName_small.split("(")[1];
                servingSize = serving_size_rough.substr(
                    0,
                    serving_size_rough.length - 1
                );
                console.log(remove_number);
                console.log(servingSize);
                var selected_food = eval(remove_number);

                totalcal = totalcal - parseInt(selected_food.calories) * servingSize;
                totalprotein =
                    totalprotein - parseInt(selected_food.protein) * servingSize;
                totalfats = totalfats - parseInt(selected_food.fats) * servingSize;
                totalcarbs = totalcarbs - parseInt(selected_food.carbs) * servingSize;

                //get serving size

                $("#calories").html("Calories: " + totalcal + " cal");
                $("#protein").html("Protein: " + totalprotein + " g");
                $("#fats").html("Fats: " + totalfats + " g");
                $("#carbs").html("Carbohydrate: " + totalcarbs + " g");

                $(this).remove();
            });
        event.stopPropagation();
    });
});
