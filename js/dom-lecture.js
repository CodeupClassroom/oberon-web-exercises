// DOM
let school = {
    teacher: "Casey",
    students: 38,
    // objects can also hold functions
    // methods
    getNumStudents: function (){
        console.log(`num of students is: ${this.students}`);
    }
}

// // print teacher's name
// console.log(school.teacher);
// console.log(school.students);
// console.log(school.getNumStudents());



// retrieving elements

// by id

let lightGreenElement = document.getElementById("light-green");
// console.log(lightGreenElement);

// what's returned?
// the entire element --> node element



// by className
// // print out all elements with class of red
let red = document.getElementsByClassName("red");
// console.log(red);

// what's returned?
// HTML Collection --> array of all the elements with that class name
// (even if there's only 1 element with that class name
// use loop to access items inside of array *******



// get by Tag Name
let par = document.getElementsByTagName("p");
// console.log(typeof par);
// get ALL elements

// what's returned?
// HTML Collection --> array

// MINI EXERCISE
// 1.
let redBrd = document.getElementById("red-border");
// console.log(redBrd);

//2. print an arr of elements whose text is dark green
let drkGrn = document.getElementsByClassName("drk-grn")
// console.log(drkGrn);

// 3. print an array of ALL paragraphs
let allPars = document.getElementsByTagName("p");
// console.log(allPars);

// ADDING ELEMENTS

// MANIPULATING ATTRIBUTES USING DOM
let firstBlue = document.getElementsByClassName("blue-bkg")[0];
console.log(firstBlue);

firstBlue.removeAttribute("class");
firstBlue.setAttribute("class", "col-3");


// STYLE ELEMENTS

let yellowDiv = document.getElementById("yellow-border");
console.log(yellowDiv);

yellowDiv.style.border = "6px solid #f8f8f8";
yellowDiv.style.color = "blue";

console.log(yellowDiv.childNodes[0]);

// // change inner contents
let yellowPar = document.getElementById("change-txt");
console.log(yellowPar.innerText);
yellowPar.innerText = "hello world";


// console.log(document.getElementsByClassName("innerHTML")[0].innerHTML);
//
//
// let newEl = document.createElement((p))
document.getElementsByClassName("innerHTML")[0].innerHTML = "new text"