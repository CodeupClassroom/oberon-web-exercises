"use strict";

// var a = 1;
// var b = a++;
// var c = ++a;
// // what is the value of a, b, and c?
//
// var d = "hello";
// var e = false;
//
// d++;
// e++;
//
// var perplexed; // perplexed is undefined (no value is assigned)
// perplexed + 2;
//
// var price = 2.7;
// price.toFixed(2);
//
// var price = "2.7";
// price.toFixed(2);

// console.log(isNaN(0));
//
// isNaN(1);

// isNaN("");
//
// isNaN("string");
//
// isNaN("0");
//
// isNaN("1");
//
// isNaN("3.145");
//
// isNaN(Number.MAX_VALUE);
//
// isNaN(Infinity);
//
// isNaN("true");
//
// isNaN(true);
//
// isNaN("false");
//
// isNaN(false);
//
// // to illustrate why the isNaN() function is needed:
// NaN == NaN;


var sample = "Hello Codeup";

// Uppercase
sample = sample.toUpperCase();

// Add "Students"
sample += " Students";

// Replace "Students" with "Class"
sample = sample.replace(" Students", " Class");
console.log(sample); //OOF not going to work because strings are immutable. Either print out the return of sample.replace() or reassign sample

// Return indicies of the "c" and "C"
console.log(sample.indexOf("c"));
console.log(sample.indexOf("C"));


// Return "Codeup"
console.log(
    sample.substring(
        sample.indexOf("C"), sample.indexOf("P") + 1)
);


var username = 'codeup';
var password = 'notastrongpassword';

var isValidPassword = password.length >= 5 && password !== username && password.charAt(0) !== " ";
var isValidUsername = username.length <= 20 && username.charAt(0) !== " ";

console.log(isValidPassword);
console.log(isValidUsername);

