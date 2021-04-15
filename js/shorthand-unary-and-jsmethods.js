"use strict";

// SHORTHAND ASSIGNMENT OPERATORS

// += and -=

var name = "Casey"; // What if I want my full name?

// We could say:

name = name + "Edwards"; // But this seems a little terse, let's make it shorter

name += "Edwards";

console.log(name);

name -= "Edwards"

console.log(name); // OOF can't use -= with strings!

// We can use -= with NUMBERS instead of saying (var a = a - b;)
// Best to use this operator when the equation is more simple

var daysRemainingInClass = 114;

daysRemainingInClass -= 4;

console.log(daysRemainingInClass);

// MINI EXERCISE
// TODO: Refactor the mini exercise we did earlier on arithmetic operators to use variables and their related shorthand assignment operators, then log out the result
//  ie:
//     var result = 5;
//     console.log(result += 1);


// UNARY OPERATORS

// The curriculum details the plus/negation operators, however we are not going to cover them in detail here

var a = "5";

console.log(typeof(+a)); // +a at the time of execution attempts to coerce the value into a number, otherwise returns NaN (which is also sort of a number)

a = "doggo";

console.log(+a);

// - attempts to negate a number (convert to negative equivalent value), otherwise NaN



// INCREMENT/DECREMENT

// For our purposes we will mainly cover post-increment (a++) for now. More on the others to come!

var num = 10;

console.log(num++); // now, notice when logging that the output is still 10. That is because num is evaluated, output THEN the increment happens

console.log(num);

// JAVASCRIPT BUILT-IN METHODS

// Much like console.log and window.alert(), we also have many, many other methods available in various JS classes which make our programming tasks much easier!


// toString();

// Remember this one! *hint hint*

var num2 = 5 * num;

console.log(num2.toString()); // ok, still looks the same but let's peek at the type now (and/or check it out in Chrome if you want to see the quotation marks)

// toFixed();

var pi = 3.1415926535;

console.log(pi.toFixed(2));

// Number();

var myName = "Casey";

console.log(Number(myName)); // OOF, couldn't convert to a number! (NaN)

var streetNumber = "1354";

console.log(Number(streetNumber)); // run typeof just to confirm it is a number

// isNaN() - checks to ensure the number provided is Not-a-Number

// Remember this one! *hint hint*

myName = Number(myName);

console.log(isNaN(myName));

console.log(isNaN("not a number"));

console.log(isNaN(21));

// parseInt() - tries to parse a string into an integer

// It will also truncate non-numerical characters from a string then convert - so be careful!

console.log(parseInt("1 way to go!")); // trims characters from the end

console.log(parseInt("I am number 1")) // NaN - only trims from after the first occurence of numeric characters

// .length - returns the count of characters in a string (including whitespaces)

// this means you chain it to the end of the variable/method call WITHOUT using ()

console.log("Casey".length) // good

console.log("Casey".length()) // bad!






