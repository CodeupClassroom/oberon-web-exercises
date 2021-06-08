const textOutput = document.getElementById("text-output");

// Textual input events can allow us to do something with what the user enters into our forms

// Setting up the event and listener looks much like any other event (boilerplate)
addInputEventListener();

function addInputEventListener() {

    document.getElementById("user-input")
            .addEventListener("input", getInputListener);
    //I've come to like using the input event because it logs on any change without requiring a form submission or preventing default behavior
    //see also: less work..

}

function removeChildren() {
    document.getElementById("blog-container")
            .replaceChildren();
}

function getInputListener() {

    // console.log(this.value); // Let's talk about 'this'

    //let's make this more useful by taking our text and adding it to a different element on the page!
    textOutput.textContent = this.value;
}

addButtonEvent();


function addButtonEvent() {
    document.getElementById("submitBtn")
            .addEventListener("click", addPost);
}

function addPost() {
    let container = document.getElementById("blog-container");
    let blogParagraph = document.createElement("p");
    blogParagraph.textContent = document.getElementById("user-input").value;
    console.log(blogParagraph.textContent);
    container.appendChild(blogParagraph);
}

// In JavaScript, 'this' refers to the highest level object within the scope of where 'this' is used

// For now, we will use 'this' inside of an event listener function
// In that function 'this' refers to the event target (the node where the listener is attached)

// To make it verbose:
// this.value -> event.target.value -> #user-input.value

// TODO: Make a blog page!
//  -> Create a new html file (name it dom-blog.html) and link it to the original dom-events-basics:
//      -> Pick one of the navbar links and make one of the hrefs point to the html file
//      -> Copy and paste dom-events-basics content into the new file
//      -> Be sure to add a link to dom-events-basics.html to your new file's navbar so you can get back to home!
//  -> Use forms, dom events, and bootstrap to allow a user to add blog posts with information of your choosing!