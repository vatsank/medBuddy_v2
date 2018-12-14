var module = (function(name) {

    function show() {
        return "Show Function:= " + name;
    }

    function display() {
        return 'display function:= ' + name;
    }
    return {
        sh: show,
        dis: display
    }

})("ramesh");

// Reveling Module pattern
var ex = module;

console.log(ex.sh());

console.log(ex.dis());