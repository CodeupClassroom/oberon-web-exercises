// what is AJAX?
// XML- format (markup language)
// AJAJ - JSON --> format in which responses come back in


// JSON
// what is it?
// Javascript Object Notation - data is stored and formatted that's easy for us humans to read
// JSON structure:
// javascript object:
// let animal = {
//     name: "frog",
//     color: "green",
//     fave: true
// }
// console.log(animal.color) // green


// JSON
// response ===
// {
//     "name": "frog",
//     "color": "green",
//     "favorite": true
// }


// TODO: create a JSON object about your favorite hobby. make sure to include at least one of every data type that can
//  be accepted as values


// Requests
// jQuery .ajax() method
//syntax
// GET request - getting information from somewhere
// console.log($.ajax("https://jsonplaceholder.typicode.com/comments"));

// $.ajax("https://jsonplaceholder.typicode.com/comments", {
//     type: "POST",
//     data: {
//         title: "my trip to antartica",
//         article: "lorem ipsum blah blah blah. antartica is awesome"
//     }
// })
// url - location to go look for something / to go post something

// POST request - adding/sending information to the server adding to it

// DELETE - send info about the thing you want to delete, and then go in and actually delete

// PUT -

//error

// TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.
// TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully
// what's the status number?
//TODO:

// console.log($.ajax("https://dog.ceo/dog-api/documentation/random"), {
//     type: "GET"
// });
//
// console.log($.ajax("https://jsonplaceholder.typicode.com/posts",{
//     type: "POST",
//     data: {
//         id: 18,
//         title: 'my-title',
//         body: 'text text text',
//         userId: 18
//     }
// }));

// .click()
// call function -
// click on the button
// $("#click-me").click(function () {
//     console.log($.ajax("https://jsonplaceholder.typicode.com/posts"), {
//         type: "POST",
//         data: {
//             id: 2,
//             body: "hello hello",
//             title: " whatsaaaaaap"
//         }
//     });
// })

// Responses

// successful
// console.log($.ajax("https://jsonplaceholder.typicode.com/posts"));
// $.ajax("https://jsonplaceholder.typicode.com/posts").done(function (data, status, jqXhr){
//     console.log(data);
//     console.log(status);
//     console.log(jqXhr);
//     alert("your request has been completed successfully");
//     })

// failed
//.fail() --> method that will trigger a function to be executed if the ajax request has failed
// I'm triggering this err with a typo in the endpoint
// $.ajax("https://jsonplaceholder.typicode.com/psts",{
//     type: "POST",
//     data: {
//         title: "hello world",
//         body: "our planet rocks!"
//     }
// }).fail(function (jqHxr, status, error){
//     alert("sorry something went wrong")
// })


// always

// $.ajax("https://jsonplaceholder.typicode.com/psts").always(function(){
//     alert("thank you for being here today!")
// })

// $("#click-me").click(function () {
//     $.ajax("https://jsonplaceholder.typicode.com/posts", {
//         type: "GET",
//         success: function () {
//             alert("this worked!")
//         },
//         error: function () {
//             alert("an err has occurred")
//         }
//     }).done(function () {
//         alert("done method has been fired!")
//     })
// })


// you can chain them all together
$.ajax("https://jsonplaceholder.typicode.com/posts").done(function(data){
    console.log(data);
    let dataId = data[25].id;
    console.log(dataId);
    // make a request to the comments section and look for only the comments that have an id of the one you just got form the posts
    $.ajax(`https://jsonplaceholder.typicode.com/comments?postId=${dataId}`).done(function(commentsData){
        console.log(commentsData);
    })
}).fail(function (){
    alert('hey something went wrong');
}).always(function(){
    console.log("request was made.")
})

// short hand:
$.get("url goes here",{

}).done(function(data){
    // do something with the data that you got back form api
})

$.post("url", {
    title: "my title",
    body: "my body"
})



