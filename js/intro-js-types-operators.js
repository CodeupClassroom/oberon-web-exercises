"use strict"; // This is to keep our code on the rails while we learn JavaScript

// With "use strict," we are able to prevent undeclared variables from sneaking into our code and being a surprise later

// Also, you are not allowed to use the "delete" keyword on a variable, method, or otherwise object (basically erasing it from memory)

// Cannot write to a read-only property (more on that later)

// "this" is treated differently as well (more on that later, as well)

// It MUST be at the top of the file

// Deep Dive - "use strict;":
// https://www.w3schools.com/js/js_strict.asp#:~:text=The%20%22use%20strict%22%20directive%20was,for%20example%2C%20use%20undeclared%20variables



// =========== TYPES ===========


// MDN JavaScript data types and data structures
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// In all modern programming, all quantifiable things stored in memory
// essentially boil down to what are called "types"

// Types can come in many forms. Some represent very close relations to binary (1 or 0).
// Everything else is build on some sort of contrivance of that binary


// In JavaScript, we keep those types fairly simple and easy to remember --->


// ******** BOOLEAN (true or false -> 1 or 0 on the machine's level)

// See Also: https://en.wikipedia.org/wiki/George_Boole

// console.log(true);
// console.log(false);


// ******* BOOLEAN EXPRESSIONS AND CONDITIONALS ********

// Let's discuss booleans more
// At its base, any decision can be boiled down to a boolean

// If I am hungry, then I try to find food
// If I find food, then I eat

// These very human, logical decisions were described by George Boole as such:
// "No general method for the solution of questions in the theory of probabilities can be
// established which does not explicitly recognise, not only the special numerical bases of the science,
// but also those universal laws of thought which are the basis of all reasoning, and which,
// whatever they may be as to their essence, are at least mathematical as to their form"

// In other words, every mathematical decision is human in nature, but MORE importantly
// every human decision is logical in its nature. Whether it is rational, well....

// And THIS is how we use booleans.
// Our program makes a decision based on if a CONDITION is TRUE or FALSE


// var iAmHungry = true;
//
// if (iAmHungry){ // and I am ALWAYS hungry
//     console.log("Let's find some fooooooood fam!");
// }


// This is how we decide so many paths a program will choose

// IF (Our condition is true){
//  Take a certain action (or don't, whatever)
//}


// We could also determine true/false by comparison!

var hoursSinceMeal = 5;

if (hoursSinceMeal > 4){
    console.log("I'm getting a little hungry");
}

// Probably should talk about numbers, eh?



// ******** NUMBER (any number at all, with or without decimals - no scientific notation)
// console.log(10);
// console.log(1984726);
// console.log(-1928);
// console.log(14.2);

// Just using a number on its own is not a great use case, so what about math?

// Yay! Arithmetic operators!

// console.log(1 + 5);

// console.log(2 - 8);

// console.log(4 * 5);

// console.log(100 / 4);

// console.log(12 % 3); // ooweee get a remainder!


// Just like in normal math, Order of Operations are followed -> PEMDAS -> Parenthesis-Exponents-Multiply/Divide-Add/Subtract

console.log( (2 * 5) / (5 + 2) - (2 ** 2)); // instead of **, we could use Math.pow() --> look it up!


// Mini Exercise - Numbers and Math
// TODO: console.log() five equations using each arithmetic operator (+,-,*,/,%) which EACH will equal 4

// ******* STRING (think letters, but now with words and things!)
// console.log("See? Still not hello world");
// console.log("This is demonstrating escape characters 'not hello world at all'.");


// ******* STRING WITH OPERATORS (+)

// console.log("Casey" + " " + "Edwards"); // Casey Edwards

// ******* STRING -> Single Quotes
// We can use single quotes as well, but there are special rules to go along
// console.log('This isn't a double quote string'); // oof, doesn't work


// ******* STRING -> Template Literals
// This will be fun later!
// A way to pass other data into a string using backticks: `myString`
// Look into it!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined

// We have to add an escape character! (backslash -> \ )
// You will see these escape characters often within many languages


// MINI EXERCISE - Concat Strings
// TODO: console.log() each member's full name in your breakout room


// ******** UNDEFINED (Definitely know about this one!)
// undefined (a variable/object which is written but never assigned)
// var name; //<- this will be undefined if used somewhere else
// console.log(name);

// In many other languages, this situation would produce a null result.
// Javascript has a distinction of unassigned pointers vs assigned, valueless pointers

// More Reading:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined


// ******** NULL -> More on this later!
// null (a place in memory where a value is expected but none is provided)
// often causes an error if in a place where null is not "handled"


// ******** OBJECT -> Not of high importance right now
// object (a prototype which represents a complex arrangement of developer-defined "properties" or "elements"
// among those special types are "function" (an encapsulated set of instructions that provide a specific outcome)
// also, "array" (a collection of various "elements" which could be of almost any type - think a list of numbers)



// ******** TYPEOF *********

// typeof is a way we can easily declare the type of an operator
console.log(typeof(31));

// MINI EXERCISE
// TODO: console.log() the type of each of the following
// 156
// "156"
// 1 / 0
// 4 * "5"
// "Trolllollolol"
// 4 > 3







