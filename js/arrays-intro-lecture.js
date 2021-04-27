(function(){
    "use strict";

    //region ARRAYS - Declaration

    // We have covered the differing data *types* and how to store *values* as those types
    // number - 5
    // string - "code, yeah!"
    // boolean - false
    // null - the absence of
    // undefined - data should exist, but doesn't
    // object - any amalgamation of various data
    // bigint - it's a.. big.. integer


    // Now, just having a plethora of data types and single values doesn't do much good
    // if we can't have a way to group them together.

    // -> Perhaps we need to do the same operation on several values
    // -> Or, we need to take many values and sort/arrange them to give to a UI
    // -> Maybe we need to validate data or trim off excess whitespaces

    // Introducing... Arrays!
    // At its simplest, an array is an "ordered" collection of data


    // [] <-- this is the array construct

    // In the array, data is delimited by commas
    // ["dog", "cat", "fish"] <- each comma-delimited value is called an "element"

    // TODO: POLL -> How many elements are in the above array?

    // An array is a type of object and is recognized as such by JavaScript

    // TODO: Create a simple array with at least 3 elements
    //  -> Assign that array to a variable
    //  -> console.log the type of your array
    //  -> what is the observed type?

    // Let's not dwell on this for too long, but there is an Array class in JavaScript
    // This class has MANY methods (a function which is a member of a class) available to help
    // work with arrays

    // One of those methods is Array.isArray()
    // This method returns a boolean based on whether the argument provided is an array or not

    // TODO: pass in Array.isArray(yourArrayVariable) to a console.log()
    //  -> Does it return true or false?
    //  -> See Also: JS I Assessment question

    // TODO: ***BRAIN BREAKER***
    //  -> So, we could call the Array class and pass in our array variable to a method
    //  -> Instead of calling the Array class directly, we can call its methods/properties ON our array and return the value
    //  -> ****Aside from .isArray(), this is how we work with arrays from here on out****
    //  -> One of these *properties* (not a method) is .length


    var myCharacteristics = ["Casey", "Software Engineer", "31"];

    console.log(myCharacteristics.length) // <- returns a number based on how many elements are in the array

    // Another key characteristic of arrays are how we ask for a specific, ordered (in a sequential list) element

    // We do this using bracket-notation

    console.log(myCharacteristics[0]); // TODO: <- notice [0] returns the first element

    // Arrays are zero-indexed. This means their position in the list is based on 0 being the first number
    // Keep this in mind when accessing elements!

    // TODO: Make a new array which holds elements based on your characteristics
    //  -> In a console.log, output a string which describes yourself based on the elements in the array
    //  -> Keep in mind zero-indexing!

    console.log(`Hello, I am a ${myCharacteristics[1]} named ${myCharacteristics[0]}.`);

    // What happens if I use the bracket-notation to access [3]?

    console.log(myCharacteristics[3]); // <- returns undefined. I tried to get the FOURTH element, zero-indexed

    // What if we need to alter one of the elements?
    // We can actually access the element directly using bracket-notation

    myCharacteristics[0] += " Edwards";

    console.log(myCharacteristics[0]);
    //endregion

    //region ARRAYS - Iteration

    // Looking back to our loops lesson, we already have a way to execute code repeatedly!
    // Now, consider we want to do that on an array

    for (let i = 0; i < 10; i++){

        // do something with one array element

    }

    // The FOR LOOP is only a construct, on it's own
    // If we want to use it with an array, we need to shape it to that array

    var myPets = ["Coda", "Murphy", "Hondo", "Buddy"];

    // A common pattern is to tie our iterator to the array's indices (zero-indexed)
    // This would mean that we set our iterator to 0 if we want to start with the first element

    // for (let i = 0; /* TODO: we need to tell the loop when to stop */; i++){
    //     // do something to an individual element;
    // }

    // Now, let's tie the stopping condition to the indexing of the array's elements
    // TODO: What property (inherent value every array has) could we use to inform the loop of when to stop?

    // for (let i = 0; i < myPets.length; i++){ // <- Be SURE to know your stopping condition (i < myPets.length) will not go outside of the last index
    //
    //     //TODO: Now the real fun!
    //     //  -> remember we could access individual elements with the bracket-notation
    //
    //     console.log(myPets[0]); // <- instead, let's use our ITERATOR!
    //
    //     console.log(myPets[i]); // <- now, our code doesn't care which actual element we are accessing!
    //     // We will just let the code run and not worry with which element index is accessed. Just make sure to format the loop correctly!
    //
    //     // This is part of a concept called "abstraction."
    //     // In this case, we get away from writing in the actual numbers of the element's index. We let another piece of code do that for us
    //     // The result is dynamic code that is adapted for the entire array... an writing a lot less code, to boot.
    //
    //     // Now, our array could have 2 elements or 2000 elements. The code will behave the same, regardless!
    // }

    // TODO: MINI-EXERCISE
    //  -> Create an array with at least 5 elements, describing whatever you'd like!
    //  -> Create a loop which will log each element to the console
    //  -> Wrap that loop in a function which has an array parameter
    //  -> Call the function and pass in your array as the argument
    //  -> DID YOU KNOW: You can add different data types to an array??
    //      -> Try adding strings, numbers, or booleans as elements

    //endregion

    //region ARRAYS - Iteration - .forEach()

    // Another common way of iterating on arrays is to use .forEach()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

    // Just like .length and other array class members, we can call .forEach() directly on our array (through chaining)

    //TODO:  ie: myArray.forEach();

    // What does .forEach() do? Simple.. FOR EACH ELEMENT IN THE ARRAY, WE CAN RUN SOME CODE!

    // Now, this requires some thought:
    // The forEach is a VOID method. Meaning it does not return anything

    // TODO: DO NOT ASSIGN myArray.forEach() TO A VARIABLE
    // TODO: DO NOT "return myArray.forEach()" - ONLY PAIN WILL YOU FIND

    // Rather, it's what you do inside the loop that matters
    // What determines the actions we take in the .forEach() loop? - An inline function

    //TODO: ie: myArray.forEach(function(){}) // <- that function inside forEach will be our running code for each element in the array

    // We talked a little about inline functions (think about your intro-to-testing-js jasmine tests you wrote)
    // Essentially, they are functions defined at the point which they are needed. Usually they are arguments being passed to a method/function

    // The inline function's signature (the arguments it accepts) are sort of determined for us.
    // In our case, we will pass it one argument: the current element in the loop.
    // Make the connection that this argument name is ONE SINGLE ELEMENT in the current iteration of the loop
    myPets.forEach(function(pet){ //TODO:  pet -> as in *one pet* in myPets. Each loop is a new "pet" in the array
        console.log(pet);
    });

    //TODO: MINI-EXERCISE - Fibonacci Sequence
    //  -> Create an array with the numbers 0, 1, 1, 2, 3, 5 (yes 1 is duplicated) and assign it to the variable 'fibonacci'
    //  -> On this array, call .forEach() and create an inline function as its argument.
    //      -> Your callback parameter should be named 'currentNum'
    //      -> As in, function(currentNum){}
    //  -> In that inline function, console.log an output replicating the fibonacci sequence until one sequence after 5
    //      -> https://www.mathsisfun.com/numbers/fibonacci-sequence.html
    //  -> Your output might skip the second '1' in the sequence. We'll get to that later :)

    var fibonacci = [0, 1, 1, 2, 3, 5];
    var previousNum = 0;
    fibonacci.forEach(function(currentNum){
        console.log(previousNum + currentNum);
        previousNum = currentNum;
    });
    //endregion























































})()