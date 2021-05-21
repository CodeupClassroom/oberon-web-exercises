(function () {
    "use strict";

    //region TODO: IF/ELSE

    // As we talked about previously,
    // programming, electrical engineering, and most basic human decisions revolve around
    // deciding to do one thing or another based on some input

    // var hasCar = true;
    //
    // if (hasCar){
    //     console.log("Let's get in and go!");
    // } else{
    //     console.log("We need to call a rideshare!");
    // }

    // expanding on this idea, let's recall boolean expressions

    // var age = 22;
    // var isLicensed = age >= 16;
    // var isInsured = true;
    // var isLegalDriver = isLicensed && isInsured;
    //
    // if (isLegalDriver && hasCar){
    //     console.log("Let's get in and go!");
    // } else{
    //     console.log("We need to call a rideshare!");
    // }

    // Let's bring back in functions!
    // I see some variables in this function that can be extracted
    // This will make our function reusable!


    // function getToDestination(age, isInsured, hasCar){
    //     var isLicensed = age >= 16;
    //     var isLegalDriver = isLicensed && isInsured;
    //
    //     if (isLegalDriver && hasCar){
    //         console.log("Let's get in and go!");
    //     } else{
    //         console.log("We need to call a rideshare!");
    //     }
    //
    // }
    //
    // getToDestination(22, true, true);
    //endregion

    // We just painted a beautiful little function right there

    //region TODO: IF / ELSE IF / ELSE


    // Sometimes we have more than just two scenarios that need to be evaluated

    // Let's say there are no rideshares nearby. Let's find another mode of transportation

    // function getToDestination(age, isInsured, hasCar, canGetRideshare){
    //     var isLicensed = age >= 16;
    //     var isLegalDriver = isLicensed && isInsured;
    //
    //     if (isLegalDriver && hasCar){
    //         console.log("Let's get in and go!");
    //     } else if(!isLegalDriver && canGetRideshare){
    //         console.log("Let's call a rideshare!");
    //     } else{
    //         console.log("I think my friend can give us a lift!");
    //     }
    // }
    //
    // getToDestination(22, true, false, true);

    //endregion

    // TODO: TO NOTE: You do not need an else statement for the conditional expression to be valid
    //  -> However, *be sure* that you have some sort of fallback logic to handle unforeseen conditions

    //region TODO: MINI EXERCISE -> IF / ELSE IF / ELSE
    // TODO: MINI EXERCISE -> IF / ELSE IF / ELSE
    //  -> Let's augment our getToDestination() function
    //  -> Create a function called canGetRideshare() which will *RETURN* a boolean
    //      -> It will determine if there are drivers nearby and the person has enough money for the ride
    //  -> Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
    //  -> Call canGetRideshare() in the else if *after* !isLegalDriver &&...
    //  -> Be sure to log to the user if they can or cannot get a rideshare
    // TODO: BONUS -> This exercise will probably get the mind wondering "How can I make this more?.."
    //  -> Consider this: What if mileage determined:
    //      -> If the rider has enough funds?
    //      -> If there is a driver close enough to service the rider?

    // function canGetRideshare(){
    //
    //     var funds = 10.00;
    //     var driversNearby = true;
    //     var getRideshare = false;
    //
    //     if (driversNearby && funds >= 6.97){
    //         console.log("You have the funds for a rideshare and a driver is nearby!");
    //         getRideshare = true;
    //     }else{
    //         console.log("I'm sorry, you may not get a rideshare at this time.");
    //     }
    //
    //     return getRideshare;
    // }
    //endregion

    //region TODO: TERNARY STATEMENTS

    // TODO: TO NOTE: Ternary Statements should be used carefully and purposefully
    //  -> Best Practice is to use them in order to RETURN a value to something else
    //  -> Another best practice: If you have more than one condition, don't use it
    //      -> Anything more will make the code difficult to read

    // TODO: Without Ternary
    // function showFatType(){
    //     var fatType = "margarine";
    //     var isButter = fatType.toLowerCase() === "butter";
    //
    //     var loggingStatement;
    //     if (isButter){
    //         loggingStatement = "'Mo' butta, mo' betta!' \n\t-Paula Deen";
    //     }else{
    //         loggingStatement = "'I Can't Believe It's Not Butter!' \n\t-Fangirls of Favio";
    //     }
    //
    //     console.log(loggingStatement);
    // }

    // TODO: With Ternary
    // function showFatType(){
    //     var fatType = "margarine";
    //     var isButter = fatType.toLowerCase() === "butter";
    //
    //     var loggingStatement = isButter
    //         ? "'Mo' butta, mo' betta!' \n\t-Paula Deen"
    //         : "'I Can't Believe It's Not Butter!' \n\t-Fangirls of Favio";
    //
    //     console.log(loggingStatement);
    // }

    // TODO: Bad Ternary
    // function showFatType(){
    //
    //     var fatType = "margarine";
    //     var isButter = fatType.toLowerCase() === "butter";
    //
    //     var loggingStatement = fatType.toLowerCase() === "butter"
    //         ? "'Mo' butta, mo' betta!' \n\t-Paula Deen"
    //         : fatType.toLowerCase() === "margarine"
    //             ? "'I Can't Believe It's Not Butter!' \n\t-Fangirls of Favio"
    //             : fatType.toLowerCase() === "oil"
    //                 ? "A little oil in the pan, I'm a big fan"
    //                 : "Not sure what kind of fat this is...";
    //
    //     console.log(loggingStatement);
    // }

    // DEEP DIVE: https://stackoverflow.com/questions/10526739/a-somewhat-painful-triple-nested-ternary-operator

    //endregion

    //region TODO: SWITCH STATEMENTS

    // Sometimes, we have one variable that could have multiple values
    // Each different value could trigger a different response or return
    // In this case, a SWITCH STATEMENT could be the tool to use!

    // Let's say we need to know someone's age in order to determine
    // their ideal heart rate range

    // If we wrote an if/if else, we would have numerous ifs!
    // age >= 18 && age < 25, age >= 25 && age < 35, etc, etc

    // Instead, this is a great case for a switch statement!


    function getHeartRateRange(){
        var age = 26;
        var heartRange;
        var inRange = true;
        switch (inRange){
            case (age >= 20) && (age < 30):
                heartRange = "100-170";
                break;
            case (age >= 30) && (age < 35):
                heartRange = "95-162";
                break;
            case (age >= 35) && (age < 40):
                heartRange = "93-157";
                break;
            case (age >= 40) && (age < 45):
                heartRange = "90-153";
                break;
            case (age >= 45) && (age < 50):
                heartRange = "88-149";
                break;
            case (age >= 50) && (age < 55):
                heartRange = "83-140";
                break;
            case (age >= 55) && (age < 60):
                heartRange = "80-136";
                break;
            case (age >= 60) && (age < 65):
                heartRange = "78-132";
                break;
            case (age >= 65) && (age < 70):
                heartRange = "75-128";
                break;
            default:
                heartRange = "Age outside of range. Cannot determine ideal heart rate";
                break;
        }
        return heartRange;
    }


    function showHeartRateRange(heartRange){
        console.log("Your ideal heart rate range (in bpm) is: " + heartRange);
    }

    showHeartRateRange(getHeartRateRange());
    //endregion

    //region TODO: MINI EXERCISE -> SWITCH STATEMENTS

    // TODO: Let's make an application which helps a user input *validated* specs on a vehicle they are trying to sell:
    //  -> This will involve multiple switch statements
    //      -> Orchestrate the statements in a central function that is responsible for calling and checking for errors
    //      -> each switch statement should be wrapped in a function which accepts the user's input as a string parameter and return that same string if it is validated
    //      -> ie: function getBodyStyle(input){return input}
    //  -> The user should be able to enter their
    //      -> Body style (2D, 4D, etc)
    //      -> Vehicle type (sports car, sedan, compact, truck, etc)
    //      -> Vehicle color
    //  -> Each switch statement should confirm the user's choice in a logging statement
    //  -> The point of this is to validate what the user enters. If they do not enter an acceptable input, the DEFAULT statement will handle this as an error
    //      -> ie: default: "error: " + vehicleType + " not recognized";
    //      -> If this occurs, call the related function again (see: recursion) until the user enters a correct choice
    //      -> HINT: a way you can check for errors is to see if the string contains the word "error"
    //  -> After all switch statement functions successfully return the user's input, concatenate them all into a nicely-formatted string and return all data to the user
    //endregion

})()




