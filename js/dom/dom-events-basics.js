// Before coding up an event, let's get some dissection out of the way

//TODO: Event - the type of trigger that will fire off
//  -> click, dblclick, submit, hover, keyup, keydown, mouseover, mouseout, change, and many more!
//  -> https://developer.mozilla.org/en-US/docs/Web/Events

//TODO: Listener - what will *happen* when the event fires off
//  -> Can be whatever you want/need. For example:
//      -> On click, change the background color
//      -> On hover, a description pops up
//      -> On form submission, disable submit button
//      -> On form submission, display user inputs to the screen in a new element

// TODO: Putting it together
//  -> In order to add an event listener to a node, we follow a boilerplate process:
//      -> Pick your element(s) using your desired document method (getElementById, class, selector, selectorAll)
//      -> chain .addEventListener() on to the selected node(s) -> myNode.addEventListener()
//      -> pass two arguments to .addEventListener():
//          -> the type of event (as a string). "click", "hover", etc
//          -> the listener definition either as an inline function or a passed function definition
//      -> Wrap all of this in a function and call that function (your event won't fire unless it's actually called to be added, right?)

// TODO: Your function will end up looking something like this

/*
    function addEvent(){
        var myNode = document.getElementById("myId");
        myNode.addEventListener("click", getListener);
    }

    function getListener(){
        // make changes here
        // maybe append new element nodes, change style, add/remove text, etc
    }
*/


// We have talked about changing content/styles and adding/removing/altering elements in DOM

// Now, we need to think about WHEN and WHY we should make those changes

// In dom-events-basics.html, we have a Boostrap navbar.

// Perhaps the content in the body (below the navbar) should change when a user clicks a sus link


setSuspectEvent();

//this function will add the event (click) and add our listener to the desired element node (sus-group)
function setSuspectEvent() {
    document.getElementById("sus")
            .addEventListener("click", appendSusNode); // notice we didn't use () at the end of function call?

    //that is because it is not an *INVOCATION* but rather a *CALLBACK*
    //a *CALLBACK* is a function that is passed to another to be called at a later time
    //in this case, the *CALLBACK* is called when the *CLICK* event is triggered
}

//this function is what we will use as our listener
//it will find the .container class and add a new div node to it
function appendSusNode() {
    document.getElementById("sus-group")
            .appendChild(getImageNode()); //call the function that creates our div node with the image

    //call this AFTER the above runs and specifically in this listener so that it is only called when appendSusNode is called by the event firing
    removeImageClickEvent();
}

//this function is tasked with actually building the div node and adding the img node as a child
function getImageNode() {
    //create an img node
    let imageNode = document.createElement("img");
    //set its source to an actual image
    imageNode.setAttribute("src", "assets/sus.gif");
    imageNode.setAttribute("class", "col-12 col-sm-6 col-md-4 px-0");
    imageNode.setAttribute("class", "col-12");

    //add the image to the div
    //set the bootstrap class .card
    //return the div
    console.log("adding image");
    return imageNode;
}

//TODO: Well, this is a problem... We don't want to keep adding one once we have one on the screen.. That's kind of sus
//  -> What could be a way that we prevent our event from firing off once we have one among us?
//  -> We have several options:
//      ->add a new event somewhere that disables the old one,
//      ->remove the original event, or
//      ->change what the original event does
//  -> In this case, we should probably remove the old event

//TODO: We will write a function that will remove the OLD click event and pass that to our above listener
//  -> We add it to the previous listener's definition because we want to immediately remove the event after the image is rendered

function removeImageClickEvent() {
    let sus = document.getElementById("sus");

    sus.classList.add("disabled");
    sus.classList.replace("text-white", "text-black");

    sus.removeEventListener("click", appendSusNode); // notice we pass in the event string and the old listener definition
    // This is because, when using removeEventListener(), we need to accurately identify the exact event we want to remove
    // Imagine there could be many event listeners on this node and we only want to remove a specific one
}


// TODO: comment out the above code and make your own events!
//  -> Document-specific events: https://developer.mozilla.org/en-US/docs/Web/API/Document#events
//  -> You must:
//      -> add at *least* one event and listener
//      -> add at least one element to the page with content and styling
//  -> It will be helpful to use the bootstrap classes for your layout and styling in this case
//      -> Keeps you from getting bogged down on styling/layout
//  -> BONUS: Don't feel stifled by the above lesson examples
//      -> You can add more than one event to an element
//      -> You can add an event to many elements at once
//      -> You can add events to things other than element nodes (window, document, element, form, and more!)
//          -> Events across object models: https://developer.mozilla.org/en-US/docs/Web/Events
//




