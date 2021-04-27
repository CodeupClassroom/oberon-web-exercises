(function(){
    "use strict";

    // This one will be a crash course in many (but not all!) methods
    // we can use to manipulate an array / elements in the array

    // TODO: Remember what we previously covered:
    //  -> .length -> SUPER IMPORTANT!
    //  -> .forEach() -> ALSO IMPORTANT!
    //  -> FOR LOOP -> STILL IMPORTANT!

    //var days = ["Monday", "Tuesday", "Wednesday"]

    //region ARRAYS - .push(valueToAdd)

    // Adds an element to the END of the array

    // days.push("Thursday");
    //
    // console.log(days);

    // TODO: Add the remaining days of the week
    //  -> Create an array with the remaining days
    //  -> Call .forEach() on that new array
    //  -> Inside the inline function you pass to .forEach():
    //      -> add the remainingDay of the week to the new array
    //  -> When the loop completes, console.log() the completed days of the week array
    //endregion, .unshift(valueToAdd),, .unshift(valueToAdd)

    //region ARRAYS - .pop(valueToRemove), .unshift(valueToAdd),

    // Removes the LAST element in an array and RETURNS it

    //days.pop(); // well this is cool if you don't want the element

    // var day = days.pop();
    //
    // console.log(day);

    // There is no way to customize how pop removes an element
    // It ALWAYS removes the last item


    // ARRAYS - .unshift(valueToAdd)

    // Adds an element to the beginning of an array
    // It is called 'unshift' because by adding to the front of the array, we UN-SHIFT all elements from their current index
    // Start // 0, 1, 2, 3, ...
    // Shift //    0, 1, 2, 3, ...
    // w/ New// 0, 1, 2, 3, 4, ...


    // var numArray = [1, 2, 3 ,4, 5];
    //numArray.unshift(6); // OOF! This adds to the BEGINNING

    // To add to the end, we should use push()
    // numArray.push(6);
    // console.log(numArray);

    // TODO - MINI EXERCISE
    //  -> Let's reverse engineer our days of the week array
    //  -> Make sure to console.log in order to see your code's behavior!
    //  -> Write a function which takes in your complete days of the week array
    //      -> It will eventually return your reverse-engineered array
    //  -> Using a FOR LOOP (not .forEach())
    //      -> pop() each item off the days array
    //      -> use the returned value from pop() to unshift the element
    //      -> on to the new array
    //  -> HINT: You may find that the loop doesn't behave as expected
    //      -> console.log EVERY possible thing which could change as your loop runs
    //          -> consider how the methods you are using change state of the array

    var completedDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    function getReverseEngArray(oldArray){
        var reverseEngArr = [];
        var arrLength = oldArray.length;

        for (let i = 0; i < oldArray.length; i++){
            console.log("***************************************")
            var elementToAdd = oldArray.pop();
            console.log(`Adding ${elementToAdd} to new array`);
            reverseEngArr.unshift(elementToAdd);
            console.log(`Current old array: \n\t${oldArray}`);
            console.log(`Current new array: \n\t${reverseEngArr}`);
        }

        console.log("\n -----LOOP COMPLETED-----\n");
        console.log("***************************************")
        return reverseEngArr;
    }
    console.log(getReverseEngArray(completedDays));
    //endregion

    //region ARRAYS - .shift(valueToRemove)

    // Removes the FIRST element in an array
    //      var daysInMonth = [...Array(32).keys()] // I'm lazy, ok
    // //     console.log(daysInMonth);
    //     daysInMonth.shift();
    //     console.log(daysInMonth);
    //endregion

    //region ARRAYS - .indexOf(valueToFind) / .lastIndexOf(valueToFind)

    // Finds the FIRST occurrence of the VALUE you seek, and returns its INDEX as a NUMBER

    // console.log(daysInMonth.indexOf(1)); // Find the index of the element with a value of 1
    //
    // daysInMonth.unshift(1);
    //
    // console.log("First occurrence: " + daysInMonth.indexOf(1));
    // console.log("Last occurrence: " + daysInMonth.lastIndexOf(1));
    // ARRAYS - .slice(startIndex, upToIndex)

    // Starts at the index provided and, without an up-to end index, returns all as a COPY of those elements in a new array
    // console.log("Sliced: " + daysInMonth.slice(15));
    // console.log("Original Array: " + daysInMonth);
    //endregion

    //region ARRAYS - .sort(optionalSortingScheme)
    // ARRAYS - .sort(optionalSortingScheme)

    // function sortMyNums(num1, num2, num3){
    //     var numArray = [num1, num2, num3];
    //     console.log(numArray);
    //     numArray.sort();
    //     console.log(numArray);
    //     return numArray;
    // }

    // var sortedArr = sortMyNums(53, 17, 103);
    //
    // console.log(sortedArr);

    // Obviously, this isn't sorting ascending. How would we accomplish that?
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description


    // TODO: MINI-EXERCISE
    //  -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
    //  -> Use knowledge found in the MDN link above to alter our sort mechanism
    //  -> Instead of letting .sort() use it's default algorithm, create one that will actually sort the values from low to high
    //  -> HINT: You will probably pass an inline function to .sort() (*it's in the docs*)

    // function sortMyNums(num1, num2, num3){
    //     var numArray = [num1, num2, num3];
    //     console.log(numArray);
    //     numArray.sort(function(a, b){ // Add an inline function!
    //         return a - b;
    //     });
    //     console.log(numArray);
    //     return numArray;
    // }
    //endregion

    //region ARRAYS - .reverse(), .split(), .join()


    // TODO: MINI-EXERCISE
    //  -> Copy the below string
    //  -> Use split(), reverse(), and join() to do Missy some justice
    //  -> Also, get rid of that pesky comma somehow

    giveMissyJustice("i put my string down, flip it and reverse it");

    function giveMissyJustice(notASuspectString){

        var musicalGenius = notASuspectString.split('');

        console.log(musicalGenius);

        // Now, reverse will alter the original array AND return a copy
        // So, why not just take the original and save a little memory?
        // var suineglacisum = musicalGenius.reverse().join('');

        musicalGenius.reverse();

        var reversedString = musicalGenius.join('');

        console.log(reversedString);
    }




    // Now we know how she did it..
    //endregion





})()