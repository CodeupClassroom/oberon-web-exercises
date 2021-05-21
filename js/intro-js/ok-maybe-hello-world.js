"use strict";

// ALERT

// alert() is a Window object method which returns 'void'
// basically, it returns nothing

// alert("I swear I won't make you see 'hello world'");
//
// alert("I hope my dogs don't get out again :/ ");

// MINI EXERCISE
/*
TODO: I demand a haiku! Using alert, write a haiku!
    -> The entire poem consists of just three lines, with 17 syllables in total.
    -> The first line is 5 syllables. -> first alert
    -> The second line is 7 syllables. -> second
    -> The third line is 5 syllables. -> third
*/


// CONFIRM

// confirm() is a Window object method which returns a boolean
// its best use is to take that returned boolean (based on user choice) and use it somewhere in your code

// var userChoice = confirm("Would you like to continue?");
//
// in this case, we are using that boolean to decide what type of message
// we will log to the console
//
// if (userChoice){
//     console.log("Let's continue");
// }else{
//     console.log("Alright, be like that..");
// }

// PROMPT

// prompt() is a Window object method which returns a string based on what
// the user enters to the input box in your browser

// like confirm(), we want to use that returned value (string) to make decisions

// notice I use toUpperCase() - you can chain this method on to a string or
// method which returns a string to manipulate the string
var userInput = prompt("What is your favorite movie?").toUpperCase();

// I decided to put an easter egg in here in case they say their favorite movie is
// The Room
// I used .toUpperCase() in both userInput and "The Room" just in case the user enters something that is capitalized oddly
if (userInput === "The Room".toUpperCase()){
    alert("Oh, hi Mark.");
}else{
    alert("You chose: " + userInput);
}


// LESSON EXERCISE

// TODO: Create an html file on the project root called external_js.html
// TODO: Create a JavaScript file inside of js/ called external.js
// TODO: Link external.js to external_js.html by using <script src="external.js"></script>
//  -> Be sure the script tag is inside the body tag of the html
// TODO: Use the alert() function to show a message that says "Welcome to my Website!"
// TODO: Use prompt() to ask for the user's favorite color.
//  -> Assign the result to a variable and use its value to alert a message that shows the user's favorite color
//  -> ie: "blue" -> "Your favorite color is: blue"
// TODO: Use an if statement to see if that color is also your favorite color
//  -> if it is your favorite as well, then show a special message for the user
//  -> otherwise, show the normal message








