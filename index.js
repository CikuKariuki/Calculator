// business logic

var add = function(number1, number2){
    return number1 + number2;
};
var subtract = function(number1,number2){
    return number1 - number2;
};
var multiply = function(number1, number2){
    return number1 * number2;
};
var divide = function(number1, number2){
    return number1 / number2;
};

// user logic

$(document).ready(function(){
$("form#add").submit(function(event) {
event.preventDefault(); 
var number1 = parseFloat($("#add1").val());
var number2 = parseFloat($("#add2").val());
$("button#subtraction").click(function(){
    var result = subtract(number1, number2)
    $("#output").text(result);
});
$("button#addition").click(function(){
    var result = add(number1, number2)
    $("#output").text(result);
});
$("button#multiplication").click(function(){
    var result = multiply(number1, number2)
    $("#output").text(result);
});
$("button#division").click(function(){
    var result = divide(number1, number2)
    $("#output").text(result);
});

});
});
