function changingHTML() {
    if (document.getElementById('demo').innerHTML == "Hello JavaScript!") {
        document.getElementById('demo').innerHTML = 'JavaScript can change HTML content.';
    }
    else {
        document.getElementById('demo').innerHTML = 'Hello JavaScript!';
    }
    
}

function changingStyle() {
    if (document.getElementById('demo').style.fontSize == "25px") {
        document.getElementById('demo').style.fontSize = '16px';
        document.getElementById('demo').style.color = "black";
    }
    else {
        document.getElementById('demo').style.fontSize = '25px';
        document.getElementById('demo').style.color = "red";
    }
}

function myFunction() {
    var a = 1;
    var b = 2;
    alert (a + b);
}

function validateData1() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById('numb').value;

    // If x is not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    }
    else {
        text = "Input OK";
    }
    document.getElementById('validateDemo').innerHTML = text;
}