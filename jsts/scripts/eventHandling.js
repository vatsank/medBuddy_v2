var app2 = {}

app2.init = function() {

    var button = document.getElementById('showHead');

    var subHead = document.getElementById('showSubHead');


    // Function takes two arguments, second one is 
    // annonymous function also known as callBack function 
    button.addEventListener('click', function() {

        // getElementById is a Method called with ()
        var headElement = document.getElementById('majHeading');
        // innerHTML is a property  no ()
        headElement.innerHTML = 'Java Script Exercises';


    });

    // console.log(app2.showSubHeading());
    subHead.addEventListener('click', app2.showSubHeading('VDSI ,Hyderabad'));
}

app2.showSubHeading = function(info) {

    return function() {

        var headElement = document.getElementById('subHeading');

        headElement.innerHTML = info;
    };

}
app2.init();