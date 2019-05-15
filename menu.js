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
}

var corn = {
    name: "Corn",
    calories: "170",
    protein: "2 g",
    carbs: "18 g",
    fats: "3 g",
    isVegan: true,
    isVeggie: true,
    isNoGluten: true,
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
}

var broccoli = {
    name: "Broccoli",
    calories: "40",
    protein: "1 g",
    carbs: "4 g",
    fats: "0 g",
    isVegan: true,
    isVeggie: true,
    isNoGluten: true,
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
};

var calories = 0;
var protein = 0;
var fats = 0;
var carbs = 0;

// meal times
var breakfast = [scrambledeggs, bacon, porksausage, sweetpotatoes, oats];

var lunch = [grilledchicken, porkloin, rice, corn, zucchini];

var dinner = [salmon, alfredo, broccoli, pizza, greenbeans];

$(document).ready(function () {

    breakfast.forEach(function (element) {
        var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
        $("#selection").append(menu);
    });

    $("#breakfast_btn").change(function () {
        $("#selection .food_option").remove();
        console.log("breakfast pressed");

        if ($(this).is(':checked')) {
            breakfast.forEach(function (element) {
                var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
                $("#selection").append(menu);
            });
        }
    })

    $("#lunch_btn").change(function () {
        $("#selection .food_option").remove();
        console.log("lunch pressed");

        if ($(this).is(':checked')) {
            lunch.forEach(function (element) {
                var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
                $("#selection").append(menu);
            });
        }

    })

    $("#dinner_btn").change(function () {
        $("#selection .food_option").remove();
        console.log("dinner pressed");

        if ($(this).is(':checked')) {
            dinner.forEach(function (element) {
                var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
                $("#selection").append(menu);
            });
        }
    })

    $("#vegan_btn").click(function () {
        $("#selection .food_option").remove();

        if ($("#breakfast_btn").is(':checked')) {
            breakfast.forEach(function (element) {
                if (element.isVegan) {
                    var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
                    $("#selection").append(menu);
                }
            });
        } else if ($("#lunch_btn").is(':checked')) {
            lunch.forEach(function (element) {
                if (element.isVegan) {
                    var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
                    $("#selection").append(menu);
                }
            });
        } else if ($("#dinner_btn").is(':checked')) {
            dinner.forEach(function (element) {
                if (element.isVegan) {
                    var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
                    $("#selection").append(menu);
                }
            });
        }
    })

    $("#veggie_btn").click(function () {
        $("#selection .food_option").remove();

        if ($("#breakfast_btn").is(':checked')) {
            breakfast.forEach(function (element) {
                if (element.isVeggie) {
                    var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
                    $("#selection").append(menu);
                }
            });
        } else if ($("#lunch_btn").is(':checked')) {
            lunch.forEach(function (element) {
                if (element.isVeggie) {
                    var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
                    $("#selection").append(menu);
                }
            });
        } else if ($("#dinner_btn").is(':checked')) {
            dinner.forEach(function (element) {
                if (element.isVeggie) {
                    var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
                    $("#selection").append(menu);
                }
            });
        }
    })

    $("#gluten_btn").click(function () {
        $("#selection .food_option").remove();

        if ($("#breakfast_btn").is(':checked')) {
            breakfast.forEach(function (element) {
                if (element.isNoGluten) {
                    var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
                    $("#selection").append(menu);
                }
            });
        } else if ($("#lunch_btn").is(':checked')) {
            lunch.forEach(function (element) {
                if (element.isNoGluten) {
                    var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
                    $("#selection").append(menu);
                }
            });
        } else if ($("#dinner_btn").is(':checked')) {
            dinner.forEach(function (element) {
                if (element.isNoGluten) {
                    var menu = `<option class="food_option" data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
                    $("#selection").append(menu);
                }
            });
        }
    })



    $("#selection").click(function () {
        // console.log($("#selection option:selected").text())
        $("#foodName").text($("#selection option:selected").text());
        foodName = $("#selection option:selected").text();
        //remove space and make lower case
        foodName_small = foodName.replace(/ +/g, "").toLowerCase();
        var selected_food = eval(foodName_small);
        $(foodCalories).html("Calories: " + selected_food.calories);
        $(foodProtein).html("Protein: " + selected_food.protein);
        $(foodCarbs).html("Carbs: " + selected_food.carbs);
        $(foodFats).html("Fats: " + selected_food.fats);

    })


    $("#add-item").click(function () {
        var servingSize = document.getElementById('stufftoadd').value;
        foodName = $("#selection option:selected").text();
        //remove space and make lower case
        foodName_small = foodName.replace(/ +/g, "").toLowerCase();
        var selected_food = eval(foodName_small);

        calories = calories + parseInt(selected_food.calories);
        protein = protein + parseInt(selected_food.protein);
        fats = fats + parseInt(selected_food.fats);
        carbs = carbs + parseInt(selected_food.carbs);

        $("#calories").html("Calories: " + calories * servingSize + " cal");
        $("#protein").html("Protein: " + protein * servingSize + " g");
        $("#fats").html("Fats: " + fats * servingSize + " g");
        $("#carbs").html("Carbohydrate: " + carbs * servingSize + " g");


        var food = "<li><span><i class='fa fa-trash '></i></span>" + $("#selection option:selected").text() + ' (' + servingSize + ')</li>';

        $("#food-list").append(food);
    });

    //remove item from list


    $("ul").on("click", "span", function (event) {
        $(this).parent().fadeOut(500, function () {
            foodName = $(this).text();
            foodName_small = foodName.replace(/ +/g, "").toLowerCase();
            remove_number = foodName_small.split("(")[0];
            serving_size_rough = foodName_small.split("(")[1];
            servingSize = serving_size_rough.substr(0, serving_size_rough.length - 1);
            console.log(remove_number);
            console.log(servingSize);
            var selected_food = eval(remove_number);


            calories = calories - parseInt(selected_food.calories);
            protein = protein - parseInt(selected_food.protein);
            fats = fats - parseInt(selected_food.fats);
            carbs = carbs - parseInt(selected_food.carbs);

            //get serving size

            $("#calories").html("Calories: " + calories * servingSize + " cal");
            $("#protein").html("Protein: " + protein * servingSize + " g");
            $("#fats").html("Fats: " + fats * servingSize + " g");
            $("#carbs").html("Carbohydrate: " + carbs * servingSize + " g");


            $(this).remove();


        });
        event.stopPropagation();
    });



});
