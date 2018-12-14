// Defined Function added to Global Window Object
function show() {

    console.log('show function called');
}

var app = {};

// Creating Java Script Object with Literal syntax

// Using Function Expression - app.show refers
// to the annonymous function 

app.show = function() {

    console.log('app object show function called');
}