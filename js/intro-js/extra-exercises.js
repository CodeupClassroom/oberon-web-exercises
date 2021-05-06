(function(){

    // In JavaScript, we need to be able to compare types, while ignoring the quirks of the language

    // We do this through the keyword 'typeof'

    // TODO: This will return to the caller (in our case, console.log) a string which tells us the type of the 'input' parameter
    //  -> What does the typeof operator "return"
    // function findTypeOfInput(input){
    //     return Number(!!input);
    // }
    //
    // console.log(findTypeOfInput(undefined)); //undefined is falsy

    // TODO: This will return a boolean (true or false) because,
    //  after the the return keyword, the statement evaluates to a true or false
    // function compareParameterToNumberType(input){
    //     return typeof input === typeof 5; // <- This asks "does the type of input equal the type of the number 5?"
    // }
    //
    // console.log("Is our input a number type: " + compareParameterToNumberType(false));

    // TODO: This will return a boolean based on if the parameter is of the type 'string'
    // function compareParameterToStringType(input){
    //     return typeof input === typeof "";
    // }
    //
    // console.log("Is our input a string type: " + compareParameterToStringType(5));

    // TODO: Write a function which returns true if the input (parameter) is of type 'boolean'

    // function isBoolean(input){
    //     return typeof input === "boolean"; // what is the return (typeof input === "boolean") called? What does it evaluate to? Why do we use it?
    // }

    //console.log(isBoolean(input)); //Why won't this work?

    // console.log(isBoolean(true));


    // TODO: using the Number() class and typeof operator, return a boolean telling us whether the input is a number
    function isNotANumber(input){
        return isNaN(parseInt(input)); // here, we need to create an additional boolean expression to determine if the type is a string
    }

    console.log(isNotANumber(null));


})()