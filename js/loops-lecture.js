//* LOOPS *//

// // WHAT ARE LOOPS:

// // ITERATION?
// // -  Iteration is the repetition of a process in order to generate an outcome. The sequence will approach some end point or end value. Each repetition of the process is a single iteration, and the outcome of each iteration is then the starting point of the next iteration.

// // INFINITE LOOPS
// // ... avoid them at all costs!
// // if the condition is set to true or the condition won't ever meet false, then you might encounter an infinite loop

// "tomato"

// // WHILE LOOPS

// // a while loop will continue to run code until the condition is FALSE
// // be careful with while loops, make sure that the condition WILL meet false
// // checks condition before running code

// // SYNTAX:
// // while: js keyword that says "hey, let's start a while loop
// // (the condition you are checking against will go inside of these parentheses)
// // { the code to be executed WHILE (as long as) the condition is true, will live inside your curly brackets}

// while (/*condition*/) {
//     // body
// //    code to be executed as long as the condition continues to be true;
// }

// numOfSteps = 0;
// while (numOfSteps <= 30){
//     console.log(`starting iteration at: ${numOfSteps}`); // template literals
//     console.log("keep walking, you're currently at: " + numOfSteps + " steps");
//     numOfSteps = numOfSteps + 10; //10 //20 //30 //40
//     console.log(`ending iteration at: ${numOfSteps}`);
//     console.log(`-----------------------`)
// }



// // examples: 8- until we reach 10
// // start at 25 until we reach 50, and it's going to add 30 at each iteration // iterating by 30s
// var num = 25; // starting point
//
// while(num <= 50){ // stopping point
//     // code to be executed at each iteration
//     console.log('num: ' + num);
//     num += 5; // iterator
//     console.log(`num plus one: ${num}`);
// // // or x += 10
// // // or x++
// }

// // let's go backwards, start at 25 end at 1;
// var backwards = 25;
// while(backwards <= -10){ // false <-- 25 is not <= 10 so it won't run not even once;
//     console.log(`starting iteration at: ${backwards}`);
//     backwards = backwards - 5;
//     console.log(`ending iteration at: ${backwards}`);
// }
//
// console.log(`outside of loop`);

// // let's go backwards, start at 25 end at 1;

// // DON'T RUN THIS!! INFIINTE LOOP
// var backwards = -25;
// while(backwards <= -10){ // true // true  // true
//     console.log(`starting iteration at: ${backwrds}`); // -25 // -30
//     backwards = backwards - 5; // -25 -> -30 // -30 -> -35
//     console.log(`ending iteration at: ${backwards}`); // -30 // -35 //
// }
//
// console.log(`--------`);

// // IT RUNS BACKWARDS
var backwards = 25;
while(backwards >= -10){  // true // is 20 >= -10 : TRUE  // ... --15 --> FALSE
    console.log(`starting iteration at: ${backwards}`); // 25 //20
    backwards = backwards - 5;  // 25 -> 20 // 20 -> 15
    console.log(`ending iteration at: ${backwards}`); // 20 // 15
}

console.log(`--------`);

//
// // // QUESTION: why do we need to add 1 to the num variable?
//
// // // let's iterate by 5s as long as our variable doesn't pass 45
//
// // // starting point
// let fives = 0;
//
// // // condition
// while(fives <= 45){
//
//     // // statement
//     console.log(`starting while loop at: ${fives}`);
//
//     // // iterator
//     fives = fives + 5;
//     console.log(`finishing while loop with: ${fives}`);
// }





// // TODO: MINI EXERCISES
// // TODO: print all even numbers between 0 and 25;

// var counter = 0; // starting point
//
// while(counter <= 25){
//     console.log(`starting num: ${counter}`);
//     if(counter % 2 === 0){
//         console.log(counter);
//     }
//     counter +=1;
// }

// // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// // correct password is given.

// hint: start by defining the correct password and don't forget to link your html file


// var pin = "itsasecret";
//
// var input = prompt("Welcome please enter your password:");
//
// while (input != pin)
// {
//     alert("WRONG PASSWORD, TRY AGAIN");
//     input = prompt("Enter your password");
// }
//
// alert("Pin accepted");

// var pin = "itsasecret";
//
// // var input = prompt("Welcome please enter your password:");
//
// while (input != pin){
//     var input = prompt("Welcome please enter your password:");
//     alert("WRONG PASSWORD, TRY AGAIN");
//     input = prompt("Enter your password");
// }
//
// alert("Pin accepted");
//
// var myName = "laura" // assignment




// // DO WHILE LOOPS
// //similar to while loop, but executes the code once before checking the conditional
// // after running the code once, it will continue to execute code if condition is true or exit if it's false, just
// like the while loop

// // SYNTAX:

// // do: js keyword that says 'hey we're about to start a do while loop
// // {code to be executed once and then again only if condition is true}
// // while: js keyword that says 'hey, here's that condition that we should check if it's true, if it's true go
// // ahead and keep running that code, if it's false then just exit outta here!'

// do {
//     // execute code
// } while (condition);



// // EXAMPLES:

// // print "we have ___ amount of desks left"
// // variable that holds amount of students; --> our starting point (start at 0)
// // define amount of desks available --> inside the while condition
// // start our do loop
// // increment amount of students
// // execute code: log the sentence inside do {}
// //

var numStudents = 0; // variable holding amt of students starting at 0
do { // execute once and then again ONLY IF the condition in the while parenthesis is true
    var desksAvailable = 20 - numStudents;  // 20 // 20 - 1 = 19 //
    console.log(`we have ${desksAvailable} amount of desks left`); //20 //19
    numStudents++; // 1 // 2
} while(numStudents <= 20)

console.log("sorry, class is full!");




// // classroom with only 20 desks:
// let numStudents = 0;
//
// do {
//     // console.log(`first console in do-while: ${numStudents}`);
//     numStudents++;
//     console.log(`second console in do-while: ${numStudents}`);
// } while (numStudents < 20);
//
// console.log(numStudents)

// //
// example: sing happy bday every year and when they reach 16 say "i got you a car"
//// challenge: accommodate for starting age at 0 or having different logs at different ages
var age = 1; // = age starting point
do {
    // sing a song
    console.log("`happy bday! you're now " + age + " years old!");
    age++;
} while(age < 16) // ==>  output from loop is going to be your starting point at the following iteration

// log too old no more celebrations
console.log(`sorry you're too old for songs, got you a car instead, happy ${age}th birthday`);

// template literals `hey, he said: "happy" +
//     " birthday" to
//      me but she didn't say anything even though I turned ${age} years old today. `
//    increment
var sentence = `this is a sentence ${age}`;


// let age = 5;
// do{
//     console.log("happy birthday!")
//     age++;
//     if(age <=15){
//         console.log(`I need a ride I'm only ${age}`);
//     } else {
//         console.log(`I'll drive! I'm already ${age} years old`)
//         }
// } while(age < 16 )


// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.

// // HINT: think of a countdown, remember if statements can be used inside of your statements

var spacesAvailable = 30; // empty parking garage
do{
    console.log(`there are  ${spacesAvailable} parking spaces available in this parking lot`);
    spacesAvailable = spacesAvailable -2;
    if(spacesAvailable === 0){
        console.log(`This parking lot is now full`);
    }

} while(spacesAvailable >= 1);

var numOfCars = 2;


/* FRIDAY, APRIL 23, 2021 */
// // FOR LOOPS
// // - https://media.giphy.com/media/3oKHWtYezLmdjusZhe/giphy.gif


// // SYNTAX:
// // for: js keyword that says: "hi js, I'm about to start a for loop, please treat it as such"
// // (starting point; stopping point; how to iterate;)
// // {code to be executed AT EACH ITERATION}

// for(let i = 0; i <= 10; i += 5){
// //    code to be executed
//     console.log('hello world ' + i);
// }

//
// for(let i = 10; i >= 0; i--){
//   // 10 // 9 // ... // 0
//     console.log(`hello world ${i}`)
// }


// for(let x = 10; x <= 25; x++){
//     console.log(x * 2);
// }


// for(let i = 0; i <= 10; i++){
//     console.log(`on iteration #: ${i}`);
// }

// // EXAMPLES:
// // egg cartons. How many egg cartons can you fill? start at zero eggs and iterate by 1. 72 eggs
// // we filled X amount of egg cartons

// // if statement inside a for loops
// // initialize cartons
// // for with eggs as the iterating variable
// counter cartons

// var carton = 0;
// for(let eggs = 1; eggs <= 72; eggs++ ){
//     // console.log('eggs: ' + eggs);
//     if(eggs % 12 == 0){
//         carton ++;
//         console.log(`We've filled ${carton} amount of egg cartons with ${eggs} number of eggs`);
//     }
// }

// for(let i = 0; i <=10; i++){
//     console.log(i);
// }

// // EXTRA: NESTED FOR LOOPS
// write a (nested) for loop that counts from 1 to 5 and then from 5 to 1

// // loop to count from 1 to 5;
// // starting point
// // return a value
// // increment
// // variable that will hold count;
// // logging the current count
// // conditional - stopping point

for(let counter = 1; counter <= 5; counter++ ){
    console.log(counter);

    // nested loop: another for loop
    // // count from 5 to 1
    // // log those numbers

    if(counter === 5){
        for(let counterTwo = 5; counterTwo > 0;  counterTwo--){
            // console.log(`inner counter: ${counter}`);
            console.log(counterTwo);
        }
    }

}

console.log('-------------')
// // * wrap inner loop in a function
// function innerLoop(){
//     for(let counterTwo = 5; counterTwo > 0;  counterTwo--){
//         // console.log(`inner counter: ${counter}`);
//         // console.log(counterTwo);
//         return counterTwo;
//     }
// };
//
// function outerLoop(){
//     for(let counter = 1; counter <= 5; counter++ ){
//         console.log(counter);
//
//         if(counter === 5){
//             innerLoop();
//         }
//     }
// }

console.log(outerLoop());







// // write a function that outputs
//
// // 99 bottles song ...
// // 99 bottles of water on the wall,
// 99 bottles of water,
// Take one down, pass it around,
// 98 bottles of water on the wall!
// 98 bottles of water on the wall,
// 98 bottles of water,
// Take one down, pass it around,
// 97 bottles of water on the wall!
// // --
// // what do we need to take into account?
// // - if bottle is 1 say bottle not bottles
// //

// TODO: Loop through a set of numbers (0-30), if the number you're currently at is even, add 2 to it. If it's an
//  odd number, print "odd"
// // HINT: remember the remainder operator (modulo)



// // TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  If it's neither print "I'm not playing"
//  Print "marco polo" if it's divisible by 3 and 5.



// // TODO: BONUS! wrap each of your for loops within functions



// // BREAK AND CONTINUE

//// we've seen break in switch statements
// // break: helps avoid infinite loops
// // break: leaves the switch statement if it meets a certain condition

// // continue: js keyword


// var dozens = 0;
// for(let i = 0; i <= 36; i++){
//     if(i % 12 === 0){
//         console.log(`starting with: ${dozens} dozen eggs`);
//         dozens++;
//         console.log(dozens)
//         break; // exits out of the loop
//         console.log(`we now have ${dozens} dozen eggs`);
//     }
// }

// for(let i =0; i <= 10; i++){
//
//     console.log(`first: ${i}`); // 0 // 1
//     // continue; // --> continues to the next iteration; exit current iteration and move onto the next iteration
//     i = i*2; // 0 // 2
//     console.log(`second ${i}`); // 0 //2
//     break;
// }

// // use case: conditionally


// 0




//
// var dozens = 0;
// for(let i = 0; i <= 36; i++){
//     if(i % 12 === 0){
//         console.log(`starting with: ${dozens} dozen eggs`);
//         dozens++;
//         continue; // continues on to the next iteration
//         console.log(`we now have ${dozens} dozen eggs`);
//     }
// }


