(function(){
    "use strict";
    function getKindOfDog(){
        return prompt("What kind of dog is it?");
    }

    function getContactInfo(){
        return prompt("How do I contact you when I find the dog?");
    }

<<<<<<< HEAD

=======
>>>>>>> e740ce8eedf7e29ae02a1d3ae816b0506b916424
    function getDogName(){
        return prompt("What is your dog's name?");
    }

<<<<<<< HEAD
    function searchForDog(dogName, dogKind, contactInfo){
            //see a dog!
            alert("I see a dog!");
            var kindOfDogSeen = getKindOfDog();

            //check if the dog matches
            var isTheLostDog = (kindOfDogSeen === dogKind) && confirm("Does dog respond to the name: " + dogName);

            if (isTheLostDog){
                //return dog to the owner!
                alert("Puts leash on " + dogName);
                alert("Time to call the owner!");
                alert("Calling: " + contactInfo);
                alert("Taking the dog to their worried owner!");
            }else{
                alert("That's not the right dog, keep searching!");
                searchForDog(dogName, dogKind, contactInfo);
            }
        }

=======
>>>>>>> e740ce8eedf7e29ae02a1d3ae816b0506b916424
    function playTheGreatEscape(){

        //get all the info
        var dogKind = getKindOfDog();
        var dogName = getDogName();
        var contactInfo = getContactInfo();

        //start searching
        alert("Time to search for this doggo!");

        searchForDog(dogName, dogKind, contactInfo);

    }
<<<<<<< HEAD
    
=======

    function searchForDog(dogName, dogKind, contactInfo){
        //see a dog!
        alert("I see a dog!");
        var kindOfDogSeen = getKindOfDog();

        //check if the dog matches
        var isTheLostDog = (kindOfDogSeen === dogKind) && confirm("Does dog respond to the name: " + dogName);

        if (isTheLostDog){
            //return dog to the owner!
            alert("Puts leash on " + dogName);
            alert("Time to call the owner!");
            alert("Calling: " + contactInfo);
            alert("Taking the dog to their worried owner!");
        }else{
            alert("That's not the right dog, keep searching!");
            searchForDog(dogName, dogKind, contactInfo);
        }
    }
>>>>>>> e740ce8eedf7e29ae02a1d3ae816b0506b916424
    playTheGreatEscape();
}
)()


