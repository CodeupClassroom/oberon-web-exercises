"use strict";

// TODO: Let's help a user find their pooches!

playTheGreatEscape();

function playTheGreatEscape(){

    console.log(getDogName());

    alertTheDogGotOut();

    if (canHelpLookForDog()){
        searchForDog();
    }
    else {
        console.log("If I whistle they'll come back!");
    }
}

function getDogName(){
    // TODO: Why are we using return here?
    return prompt("What is your dog's name??");

}

function alertTheDogGotOut(){
    // TODO: Why not use return here?
    alert("Oh no! The your dog got out!");

}

function canHelpLookForDog(){
    // TODO: Why use return HERE?
    return confirm("Can I help look for them?");

}

function searchForDog(){
    console.log("Let's get our butts out there and find that fricking dog!");
}