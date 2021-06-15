// JS Promises

// what is a promise in js

// what is async vs sync
// async - everything happens at once
// sync - sequentially

// three states of a promise
// pending
// resolved (successfully)
// rejected (handle failed request)


// console.log("above my fetch request");
// Fetch


// $.ajax('https://jsonplaceholder.typicode.com/posts/1')
//
//     .then(response => {
//         console.log(response);
//         return response;
//     })
//
//     .then(data => console.log(data));

// // basic fetch syntax

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         console.log(posts);
//         $("div").append(`<h5>${posts.title}</h5>`);
//     })
//     .catch(err => {
//         console.log('error: ' + err);
//         alert("sorry an error occurred please try again later")
//     });
//
// console.log("below my fetch request");

// let's break down what .then() method does

// .then(response => console.log(response));
//
// .then(function(response){
//     console.log(response);
// })



// fetch syntax with .catch() method


// let's break down what .catch() method does

// .catch(function(err){
//     console.log(err)
// })




// fetch syntax for post request

// let myRequest = fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: "POST",
//     headers: {},
//     body:{title: "cupcakes yum!", body: "cupcakes are delicious sometimes as long as they don't have any chocolate in them"}
// })
//     .then(response => console.log(response))
//     .catch(err => {
//         console.log('error: ' + err);
//     });
//
// console.log(myRequest);


// mini exercise
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json()) // turns into json
    .then(data => {
        console.log(data);
        console.log(data.message);
        $("#random-dog-image").attr("src", data.message);
    })
    .catch(error => {
        console.log(error);
        console.error(error);
    });





