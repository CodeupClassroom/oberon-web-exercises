// ==========================  addEventListener()
// (function(){
//
//     //get the target
//     let header = document.querySelector("#override-bootstrap");
//
//     //define the listener
//     let listener = function(e){
//         console.log("event fired")
//         header.style.backgroundColor = 'blue';
//         header.querySelector("#main-title").innerText = "DOM DOM DOM DOMMMMMMMM";
//         header.removeEventListener("click", listener);
//     }
//
//     //bind the event, target, listener together
//     header.addEventListener("click", listener);
//
// })()


// ========================= Mouse events ===============================
//

// document.addEventListener('click', function(e){
//     console.log(e.target);
// });


// $(document).hover(function(e){
//     console.log(e.target);
// }, function(e){
//     console.log(e.target);
// })

// ************** Get an element and change style on click ****************

// (function(){
//
//     //get the element
//     let header = $('#override-bootstrap');
//     //define a handler
//     let handlerIn = function(){
//         $(this).css('background-color', 'blue');
//     }
//
//     let handlerOut = function(){
//         $(this).removeAttr('style');
//     }
//     //bind the handler
//     header.hover(handlerIn, handlerOut);
//
//
// })()


// ************** Get elements and change style on click *************

// (function(){
//
//     let tableRows = [...$('tbody > tr')];
//     let handlerBlueBGnd = function(e){
//         //tableRows.css('background-color', '');
//         let index = tableRows.indexOf(e.target);
//         console.log(index);
//         // if (index % 2 !== 0){
//         //     $(this).css('background-color', 'lightblue');
//         // }
//     }
//     //tableRows.click(handlerBlueBGnd);
//
//     for (let i = 0; i <= tableRows.length - 1; i++){
//             let row = tableRows[i];
//             row.addEventListener("click", handlerBlueBGnd);
//     }
//     // loop over the tableRows collection
//     // for each element in the collection, bind a click event
//
// })()


// ************* Change Table Row background colors on hover *********************
// (function(){

//  let jqClassObjs = $('.jqClass');
//
//  let handlerBlueBGnd = function(e){
//      $(this).css({
//          backgroundColor: 'lightblue',
//          transition: 'background .25s'
//      })
//  };
//
//  let handlerNormalBGnd = function(e){
//      $(this).css({
//          backgroundColor: '',
//          transition: 'background .25s'
//      })
//  }
//
// jqClassObjs.hover(handlerBlueBGnd, handlerNormalBGnd);

// })();

// ************ More dynamic background changes on click or hover *****************
// (function () {
//     let jqElements = $('.jqClass');
//     let backgroundBlue = 'lightblue';
//     let backgroundReset = '';
//
//     function addClickEvents(elementsToBind, color1, color2) {
//         let handlerBlueBckGnd = function () {
//             elementsToBind.css('background-color', color1);
//             $(this)
//                 .css('background-color', color2);
//         }
//         elementsToBind.click(handlerBlueBckGnd);
//     }
// //
// //     addClickEvents(jqElements, backgroundReset, backgroundBlue);
// //
//     addClickEvents($(".card"), "", "red");


//make sure the DOM is loaded first
// document.addEventListener("DOMContentLoaded", function() {
//     addListeners();
// });
//
// //parent method for adding all listeners
// function addListeners(){
//     //get the elements to add listener and change image
//     let cardContainers = $(".col-md-3");
//     addEvents(cardContainers, 'assets/jazz-music-rubber-duck.jpg', 'mouseover');
//     addEvents(cardContainers, 'assets/300x300.png', 'mouseout');
// }
//
// //add mouseover/mouseout events to all selected elements
// function addEvents(cardContainers, imgPath, listenerType){
//     cardContainers.click((cc) => {
//         let card = cc;
//         //create listener which will call function change the image
//         let listener = function (event) {
//             let cardImg = card.querySelector(".card .card-img-top");
//             changeImage(cardImg, imgPath);
//         };
//         cc.addEventListener(listenerType, listener);
//     });
// }
//
// //actual function to swap images
// function changeImage(card, imgPath){
//     card.setAttribute('src', imgPath);
// }


// =========================== FUN TIME! ================================
//
//     addListeners();
//
//     //parent method for adding all listeners
//     function addListeners() {
//         //get the elements to add listener and change image
//         let cardContainers = $(".col-md-3");
//         addEvents(cardContainers, 'assets/jazz-music-rubber-duck.jpg', 'assets/question.png');
//     }

//add mouseover/mouseout events to all selected elements
// function addEvents(cardContainers, imgPath1, imgPath2) {
//
//     let handler1 = function (event) {
//         let attrValue = $(this)
//             .attr("data-attribute");
//         $(this)
//             .append(`<p id="attr-value">${attrValue}</p>`);
//         $(this)
//             .find(".card-img-top")
//             .attr('src', imgPath1);
//     };
//
//     let handler2 = function (event) {
//         $(this)
//             .find('#attr-value')
//             .remove();
//         $(this)
//             .find(".card-img-top")
//             .attr('src', imgPath2)
//     };
//
//     cardContainers.hover(handler1, handler2);
// }


// ========================= Keyboard events


// // ************************* keyup *************************


// Array.from(document.getElementsByTagName('input'))
//     .forEach((i) => {
//         i.addEventListener('keyup', function(e){
//             console.log(this.value);
//             if (this.value === 'casey'){
//                 alert("GOT IT!");
//             }
//     });
// })

// $(document).keyup(function(e){
//     console.log(e.key);
// })

//     let keyupHandler = function (e) {
//         console.log(this.value);
//         if (this.value === 'casey') {
//             alert("That's my name, don't wear it out!");
//         }
//     }
//     $('input')
//         .keyup(keyupHandler);
//
// })();

// // ************************* keypress *************************
//
// (function(){
//
//
//     Array.from(document.getElementsByTagName('input'))
//         .forEach((i) => {
//             i.addEventListener('keypress', function(e){
//                 console.log(this.value);
//                 if (this.value === 'casey'){
//                     alert("GOT IT!");
//                 }
//         });
//     })
//
//
//    $('input').keypress(function(e){
//        console.log(this.value);
//        if (this.value === 'casey'){
//            alert("That's my name, don't wear it out!");
//        }
//    });
//
// })()

// // ************************* keydown *************************

// (function(){
//
//
//     Array.from(document.getElementsByTagName('input'))
//         .forEach((i) => {
//             i.addEventListener('keydown', function(e){
//                 console.log(this.value);
//                 if (this.value === 'casey'){
//                     alert("GOT IT!");
//                 }
//             });
//         })
//
//
//     $('input').keydown(function(e){
//         console.log(this.value);
//         if (this.value === 'casey'){
//             alert("That's my name, don't wear it out!");
//         }
//     });
//
// })()

// ============================ Remove Event Listener
//
// (function(){
//         //get the target
//         let submitBtn = document.querySelector('#submitBtn');
//         console.log(submitBtn);
//
//
//         let logger = function(){
//             console.log("BAD NO BOOOOOO");
//         }
//
//         let alertTheUser = function(){
//             alert("You Did a Thing!");
//             submitBtn.removeEventListener("click", logger);
//         }
//
//         submitBtn.addEventListener("click", alertTheUser);
//
// })()


// ******************** FUN TIME! ******************************
// When I click on a card, the image should change to Zod or Superman
// Only one card should be superman and he should only show up once
// (function(){
//
//     //set the stage
//     let cards = $('.card');
//     let randomNumber = Math.floor(Math.random() * cards.length);
//     let decremented = cards.length - 1;
//
//     //sanity check #1
//     console.log("Random: " + randomNumber);
//
//     //do a thing to each card
//     cards.each(function(){
//
//         //sanity check #2
//         console.log("Decremented: " + decremented);
//
//         //make a new image path variable for each loop item
//         let imgPath;
//
//         if (randomNumber === decremented){
//             imgPath = 'img/superman.jpg';
//         }else{
//             imgPath = 'img/General_Zod_(circa_2018).png';
//         }
//
//         let card = $(this);
//         card.click(function(e){
//             console.log("key pressed");
//             card
//                 .find('.card-img-top')
//                 .attr('src', imgPath);
//         });
//
//         decremented--;
//     })
// })()

// ============================ Input Exercise

// TODO: Augment the event listener you placed on #submitBtn previously
//  -> Now, grab the values from #first, #last, and #handlefield
//  -> After making sure each is not null or empty, create a new <tr> and append a <td> for each input value + 1 for the "number"
//      -> See the design and current html for guidance
//  -> Add any classes that you see are in table row elements on the static HTML
//  -> Append the new <tr> with all <td> elements to the DOM and check your results

// let submitListener = function () {
//     let firstName = $("#first").val();
//     let lastName = $("#last").val();
//     let handle = $("#handleField").val();
//
//     if (firstName === null || firstName === ""){
//         alert("Please fill in first name and resubmit");
//         return;
//     }
//
//     if (lastName === null || lastName === ""){
//         alert("Please fill in last name and resubmit");
//         return;
//     }
//
//     if (handle === null || handle === ""){
//         alert("Please fill in handle and resubmit");
//         return;
//     }
//
//     let tableRow = $("<tr></tr>");
//     let tableData = $()
// }
//
// $("#submitBtn").click(submitListener);


// TODO: Add a data-attribute to each card container (.col-md-3)
//  -> Give that data-attribute a value of 1-4 (moving top to bottom in the html)
//  -> Now, when a user hovers over one of the .col-md-3 containers, you should replace the text inside #card-title with the data-attribute value
//  -> When the user hovers out, the data-attribute value should be replaced with the original text ("Card")

// let hoverIn = function () {
//     $(this)
//         .find(".card-title")
//         .text($(this)
//             .attr("data-attribute"));
// }
//
// let hoverOut = function () {
//     $(this)
//         .find(".card-title")
//         .text("Card");
// }
//
// $(".col-md-3")
//     .hover(hoverIn, hoverOut);


// TODO: When an li with the .list-group-item class is clicked, replace the text with the same text, but uppercased
//  -> ALSO, change the background of the li to a new color
//  -> When the li is clicked again, reset the li background color to its original color
//      -> Don't worry about changing the text back

// TODO: Change up the submit button event
//  -> Add a new input with an id of #redirect-url
//  -> Remove the old click events from #submitBtn
//  -> When the user clicks #submitBtn, redirect the page to the value of #redirect-url
//  -> HINT: You can either add a new input or change the id of an existing input element to #redirect-url to save time

$("#submitBtn").click(function(){

    let url = $("#redirect-url").val();

    if (!url.includes('https')){
       url = 'https://' + url
    }
    location.href = url;
})

// TODO: After a 2 second delay (BOM), when the user loads the page, change #main-title to a value of your choosing (change text, background color, what have you)!





































