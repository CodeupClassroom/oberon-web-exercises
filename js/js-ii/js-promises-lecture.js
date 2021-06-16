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

// fetch('https://dog.ceo/api/breeds/image/random Fetch!')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         $("div").append(`<h5>${data.title}</h5>`);
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
// TODO: make a request to the provided url and display an image of a random dog to the dom using jquery
fetch('https://dog.ceo/api/breeds/image/random') // make a request - GET
    .then(response => response.json()) // turns into json
    .then(data => {
        // console.log(data); //
        // console.log(data.message); // message displays the url of the picture
        $("#random-dog-image").attr("src", data.message);  // jquery : select the image element, change the src attribute to equal the value of data.message
    }) // we have the data in json format, now we can manipulate it
    .catch(error => {
        console.log(error);
        console.error(error);
    });

// TODO: create a second GET request to return the blog post with an id of 11 and display that blog post on the dom.
fetch('https://jsonplaceholder.typicode.com/posts') // make a request - GET
    .then(response => response.json())
    .then(data =>{
        // console.log(data); //
        // console.log(data[10].id); // 11
        return data[10].id; //11
    })
    .then(dataId => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${dataId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.forEach(comment => {
                    console.log(comment);
                    $("#comments").append(`<h4>${comment.name}</h4><hr><p>${comment.body}</p>`);
                });
            });
    })
    .catch(error => {
        alert(err);
        console.error(error);
    });



// DELETE REQUEST
// fetch('https://jsonplaceholder.typicode.com/posts/2',{
//     method: "DELETE",
// })
//     .then(response => console.log(response))
//     .catch(err => {
//         console.log('error: ' + err);
//     });

// // PUT REQUEST // edit information on a specific item
// fetch('https://jsonplaceholder.typicode.com/posts/2',{
//     method: "PUT",
//     headers: {},
//     body:{title: "cupcakes yum!", body: "cupcakes are delicious sometimes as long as they don't have any chocolate in them"}
// })
//     .then(response => console.log(response))
//     .catch(err => {
//         console.log('error: ' + err);
//     });
//
// console.log(myRequest);


// creating promises

// let myFirstPromise = new Promise(function(resolve, reject) {
//     console.log((Promise));
//     // your code to be executed
//     console.log("has been resolved");
// });


// const myPromise = new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });
//
// myPromise.then(result => console.log('woohoo we made it! ' + result));
// let y = Math.random()
// const myOtherPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (y > 0.5) {
//             console.log(y);
//             resolve();
//         } else {
//             console.log(y);
//             reject();
//         }
//     }, 1500);
// });
//
// console.log(myOtherPromise); // a pending promise
//
// myOtherPromise.then(() => console.log('resolved!'));
// myOtherPromise.catch(() => console.log('rejected!'));






