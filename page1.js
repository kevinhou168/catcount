//breakfast

var scrambledeggs = {
    name: "Scrambled Eggs",
    protein: "10 g",
    carbs: "5 g",

};

var bacon = {
    name: "Bacon",
    protein: "10 g",
    carbs: "5 g",

};

var porksausage = {
    name: "Pork Sausage",
    protein: "10 g",
    carbs: "5 g",
};

var sweetpotatoes = {
    name: "Sweet Potatoes",
    protein: "10 g",
    carbs: "5 g",
};


//lunch

var grilledchicken = {
    name: "Grilled Chicken",
    protein: "10 g",
    carbs: "5 g",
};


//dinner




var breakfast = [scrambledeggs,
    bacon,
    porksausage,
    sweetpotatoes];





$(document).ready(function () {


    breakfast.forEach(function (element) {
        var menu = `<option data-toggle="modal" data-target="#foodModal">${element.name}</option>`;
        $("#selection").append(menu);
    });







    $("#selection").click(function () {
        // console.log($("#selection option:selected").text())
        $("#foodName").text($("#selection option:selected").text());

        foodName = $("#selection option:selected").text();

        //remove space and make lower case
        foodName_small = foodName.replace(/ +/g, "").toLowerCase();

        var selected_food = eval(foodName_small);

        $(foodInfo).html("Protein: " + selected_food.protein);
    })

    $("#add-item").click(function () {
        var food = '<li>' + $("#selection option:selected").text() + '</li>';
        $("#food-list").append(food);
    })






});
