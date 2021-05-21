"use strict";

// BASIC FUNCTIONS

// returns the result of adding num1 and num2 together
function add(num1, num2, num3){ // <- parameters here
    return num1 + num2 + num3;
}

console.log("The result of add() is: " + add(10, 10, 10)); // <- arguments here

var myNum = 12;
var myNum2 = 21;

console.log("The result of add() is: " + add(myNum, myNum, myNum2));

// Returns the difference of subtracting num2 from num1
function subtract(num1, num2){
    return num1 - num2;
}

console.log("The result of subtract() is: " + subtract(10, 2));

// MINI EXERCISE
// TODO: Create functions which will return the product (*) of two numbers and the dividend (/) of two numbers, respectively

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function addWithDefaults(num1, num2 = 0){
    return num1 + num2;
}

console.log(addWithDefaults(2, 2));

// LOCAL, FUNCTION, AND GLOBAL SCOPING

{
    {
        let number = 2;
        {
            console.log(number);
        }
    }
}

var number2 = 10;

function scopingFun(){
    var number = 2;

    console.log(number + number2);
}

scopingFun();
















