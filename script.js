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
