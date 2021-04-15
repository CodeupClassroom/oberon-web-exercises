"use strict";

// LOGICAL BOOLEAN OPERATORS

// Logical operators are our way of being able to combine booleans or boolean expressions together
// The result is a boolean that represents whether the conditions in that larger expression were met


// Consider the following: I want a routine which determines if a dog is my dog.
// To determine that, it must have fur, bark, and be a canine!
// var hasFur = true;
// var hasWhiskers = true;
// var nameIsCoda = true;
//
// var isMyDog;

// if (hasFur){
//     isMyDog = true;
// }
//
// if (hasWhiskers){
//     isMyDog = true;
// }
//
// if (nameIsCoda){
//     isMyDog = true;
//     console.log("oops thaaaaat's an ocelot. Danger zone!");
// }


// First off, this is logically incorrect.
// The animal could have fur but not be a canine. Yet it would still be my dog in the end.
// That could be an interesting living situation with a wild ocelot that I call 'my dog'

// Let's make it logically correct

// if (hasFur){
//
//     if (hasWhiskers){ // only gets here if it has four legs
//
//         if (nameIsCoda){ // and only here if the previous two are true
//
//             console.log("Who's a good boi! *bork bork*");
//
//         }
//
//     }
//
// }

// The above works but look at how many times we repeat ourselves.
// Imagine if it were a more complex set of conditions. These nested if statements could get out of hand and super confusing!

// Let's bring in boolean expressions!

// if (hasFur && hasWhiskers && nameIsCoda){ // Here, we used logical AND (&&). All three booleans must be true in order for the entire EXPRESSION to be true.
//
//     console.log("Who's a good boi! *bork bork*");
//
// }

// Let's talk about the logical OR operator (||)

// Imagine needing a loan to buy something big (think a house or car)
// There are two ways you can get it: have great credit or enough cash/collateral to put down

var creditScore = 720;
var cashOnHand = 5000;

if ((creditScore > 680) || (cashOnHand > 3000)){
    console.log("Congrats! You (the bank lol) own a new car ");
}

// Here, we were able to show that either the score must be higher than 680 OR they have more than $3000 on-hand

// Moreso, the larger expression's boolean value
// (high credit score) OR (cash on hand)
// is derived from two smaller expressions

// Well, if that's the case, does that expression NEED to be in the if-statement?

var hasRequiredScoreOrCash = (creditScore > 680) || (cashOnHand > 3000); // a boolean made of booleans made of booleans

// if (hasRequiredScoreOrCash){
//     console.log("Congrats! You get a.. err.. thing! Woo!");
// }

// There's more to getting a big loan than cash on hand and a score.
// We also need to know if they have been employed for at least 6 months

var lengthOfEmployment = 6;
var adequateLengthOfEmployment = lengthOfEmployment >= 6; // OoOoO we are using 'greater than or equal to' to show that it is at LEAST 6 months, but can be exactly 6.

var meetsTheLoanRequirements = adequateLengthOfEmployment && hasRequiredScoreOrCash;

// if (meetsTheLoanRequirements){
//     console.log("Ok, for real. Congrats. Enjoy the car!");
// }


// There is one more logical operator in JavaScript: NOT (!)
// We won't do an indepth example of ! because later on,
// There will be concepts that make the use of it more relative to our code

// For now, just know that it inverts whatever boolean it is placed in front of

console.log("The inverted value is: " + !true); // Will return false

console.log("This is weird though: " + !1); // change from 0 to 1 or any number except 0











