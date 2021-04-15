"use strict";

// EQUALITY OPERATORS

// We need ways of knowing if something does or does not equal something else

// LOOSE EQUALITY

var num1 = 5;
var maybeNum2 = "5";

// Loose equality comparison is useful if you don't actually know the data type of one of the values
// Here, we assume 'maybeNum2' could be a number OR a string. We can do either with (==)
// if (num1 == maybeNum2){
//     console.log("These numbers are equal");
// }

// But it's not the safest way to do comparison
// What if 'maybeNum2' can't be coerced into a number?

// maybeNum2 = "OOPS";
//
// if (num1 == maybeNum2){
//     console.log("These numbers are equal");
// }else{
//     console.log("These numbers are NOT equal");
// }

// There's a way we can assert the equality of type AND values

// STRICT EQUALITY

// By using the strict equality operator, we can be more safe by requiring knowledge of the type of data in addition to the value

if (num1 === maybeNum2){
    console.log("These numbers are equal");
}else{
    console.log("These numbers are NOT equal");
}

// PRO TIP: For now, make your life a little easier and use (===) when making equality comparisons


