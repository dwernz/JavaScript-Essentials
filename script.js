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

function calculateMPG() {
    var miles = parseFloat(document.getElementById('miles').value);
    var gallons = parseFloat(document.getElementById('gallons').value);
    var mpg = parseInt(miles/gallons);

    document.getElementById('mpg').innerHTML = "MPG = " + mpg;
}

function averageTestScores() {
    var entry;
    var average;
    var total = 0;

    // get 3 scores from user and add them together
    entry = prompt("Enter test score");
    entry = parseInt(entry);
    var score1 = entry;
    total = total + score1;

    entry = prompt("Enter test score");
    entry = parseInt(entry);
    var score2 = entry;
    total = total + score2;

    entry = prompt("Enter test score");
    entry = parseInt(entry);
    var score3 = entry;
    total = total + score3;

    // calculate the average 
    average = parseInt(total / 3);

    document.getElementById('average-test-scores').innerHTML = 
        "<h4>The Test Scores App</h4>" +
        "<p>Score 1 = " + score1 + "<br>" +
        "Score 2 = " + score2 + "<br>" +
        "Score 3 = " + score3 + "<br><br>" +
        "Average score = " + average + "<br><br>" +
        "Thank you for using the Test Scores Application</p>";
        
}

function futureValues() {
    var futureValue;

    // get user entries
    var investment = prompt("Enter investment amount as xxxxx.xx", 10000);
    investment = parseFloat(investment);
    var rate = prompt("Enter interest rate as xx.x", 7.5);
    rate = parseFloat(rate);
    var years = prompt("Enter number of years", 10);
    years = parseInt(years);

    // calculate future value
    futureValue = investment;
    for (var i = 1; i <= years; i++) {
        futureValue = futureValue + (futureValue * rate / 100);
    }
    futureValue = parseInt(futureValue);

    document.getElementById('futureValues').innerHTML =
        "<h4>Future Values Application</h4>" +
        "<p>Investment Amount = $" + investment + "<br>" +
        "Interest Rate = " + rate + "%<br>" +
        "Years = " + years + "<br><br>" +
        "Future Value is $" + futureValue + "</p>";
}

function dayWrite() {
    var today = new Date();
    var day = today.getDay();
    var dayOfWeek = "";
    if(day == 0) {
        dayOfWeek = "Sunday";
    }
    else if (day == 1) {
        dayOfWeek = "Monday";
    }
    else if (day == 2) {
        dayOfWeek = "Tuesday"
    }
    else if (day == 3) {
        dayOfWeek = "Wednesday";
    }
    else if (day == 4) {
        dayOfWeek = "Thursday";
    }
    else if (day == 5) {
        dayOfWeek = "Friday";
    }
    else if (day == 6) {
        dayOfWeek = "Saturday";
    }
    else {
        dayOfWeek = "Error!!!"
    }
    
    document.getElementById('dayWriteExample').innerHTML = 
    "<h3>Welcome to our site!</h3>" +
    "Today is " +
    today.toDateString() +
    ".<br><br>" +
    "Welcome to your site! " +
    "Today is " + dayOfWeek +
    "<pre>Welcome to our site! " +
    "Today is " + dayOfWeek + ".</pre>";                        
}

function counter1() {
    var i = 1;
    var text = "";

    while (i < 10) {
        text += ".<br>The number is " + i;
        i++;

    }

    document.getElementById('counter-demo').innerHTML = text;
}

function cars() {
    var cars = ["BMW", "Volvo", "Saab", "Porsche"];
    var i = 0;
    var text = "";

    while (cars[i]) {
        text += cars[i] + "<br>";
        i++;

    }

    document.getElementById('counter-demo').innerHTML = text;
}