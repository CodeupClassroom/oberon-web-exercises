"use strict";
// console.log(new Date());

// Intro to jQuery

// setup jQuery
// jquery - download
// jquery - cdn

// syntax
// let document = {
//     getElementById: function(){
//         console.log("find element with id of X")
//     },
//
// }
// document.getElementById()

// tapping into objects
// let school = {
//     students: 36,
//     name: "high school one",
//     teachers: ["Casey", "Tristan"],
//     getLunchMoney: function(){
//         console.log("you have X dollars left");
//     }
// }
// school.getLunchMoney();

// dollar sign - tapping into jQuery library
// selector - the element that you're selecting from the dom (html element)
// $("selector").methods(any arguments required);

// syntax - select by tag Name
// $("h1") //... --> select by tagName
// $("p").hide();

// syntax - selecting by id
// $("#change-text") //
// $("#change-text").hide();


//syntax - selecting by class
// $(".lead")
// console.log("-- before hiding purple")
// $(".purple").hide();
// console.log(" -- after hiding purple")
// // .show()
//
// console.log("--before showing purple")
// $(".purple").show();
// console.log("--after showing purple")
//
// // let myAge = 30;
// // console.log(`I can't believe I am ${myAge} years old!!`)
//
// // selecting children/parent/sibling elements
// console.log($("ul").children());

// console.log("add border class");
// $("#second").addClass("border");
// console.log("remove border class");
// $("#second").removeClass("border");
//
// // $(".purple-par").setAttribute(class, "border")
//
// let purPara = $(".purple-par");
// purPara.attribute("class", "border");

// $("div").addClass("red");

// select all children of any element that has a classname of border
// change the font-color
// 1. $("") select our main element
// $(".border").children().css({
//     "color": "blue",
//     "font-size": "24px"
// });
// // 2. select children of element that was selected
// // 3. css()  to chagne the css of the element(s) selected
// // 4. font-color to something new
//
//
// $(".row").css({
//     "display": "flex",
//     "justify-content": "flex-end",
//     "background-color": "blue"
// })


// mini exercise:

// window.onload
// javascript
// do something when the window is done loading
// ** it's going to wait for images
// window.onload = function (){
//     console.log(new Date());
//     console.log("hey window is done loading");
// }
//
// // document.ready
// // jquery
// // do something when the DOM is finished loading
// // won't wait for images
// // document won't need quotes
// //
//
// $(document).ready(function(){
//     console.log(new Date());
//     console.log("hey the DOM is finsihed loading")
// })

// function tellTime(){
//     console.log(new Date());
// }
//
// $(document).ready(tellTime());
//
// console.log($("h1"));

//

// $("#blue").css({"color":"blue"});


// any time you want to select multiple elements from the dom using jquery, all selectors must
// be within one quotation and separated by commas. It's very similar to how selectors work in css

// interpolator: ${} inside of template literal is not the same as the dollar sign in jQuery
let myName = "Laura"
let myTemplateLiteral = `Hello, my name is ${myName}. Nice to meet you`

// selecting multiple elements
// $("p , div").css({
//     "font-size": "20px",
//     "color": "red"
// })
//
// $("#blue, .pink").css("font-family", "Arial");
//
// $("div p").css("font-family", "cursive");

// .css("color","pink")

// .css({
//     "color":"orange",
//     "font-family":"Montserrat"
// })

// let firstPar = $("#blue");
//
// firstPar.css("color", "pink");
//
// firstPar.hide();

// all the elements inside all my divs
$("div *").css("font-size", "3px");

// all divs inside all elements
$("* div").css("font-size","50px");

$("ul *").css("color","red");

console.log($("#blue"));

// let allMyDiv = $("* div");

// //

// quick overview:
// select elements in the dom using jquery
// $("") ==> hey go look for the element I tell ya to in the document / selecting elements
$("p")
$(".red") //by class name
$("#orange") //

// jquery has a library of methods
// methods ==> manipulate elements on the dom
// .show() / .hide() / .hover() /
$("p").hide();

// event listeners --> it's a kind of method that gets chained onto an element that iwll be
// listening for an even to take place which will trigger something completely different to happen

// 1.which element is listening
// for the event
// //2. what is going to happen once the event takes place (function passed into the event listener)
// within that "triggered function" you might need to select more elements

// task: on the click of a btn, we want the background color of the header to change

